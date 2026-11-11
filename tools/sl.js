#!/usr/bin/env node
// Sporting Life data puller. Plain fetches of public pages; reads the __NEXT_DATA__ JSON
// and prints compact text, so an agent reads ~2-5k tokens instead of a 300k-char page.
//
//   node tools/sl.js meetings <YYYY-MM-DD> [--uk]          courses, going, race IDs for a date
//   node tools/sl.js card <YYYY-MM-DD> <raceId> [--verdict] one race: header + runners + market block
//   node tools/sl.js profile <horseId> [--on YYYY-MM-DD] [--n N]   full career, one line per run (with past SPs)
//   node tools/sl.js pack <YYYY-MM-DD> <raceId> [--out file.md]  card + every runner's full profile
//   node tools/sl.js result <YYYY-MM-DD> <raceId>           finishing order, margins, SP, comments
//   node tools/sl.js going [YYYY-MM-DD]                     going rows by date
//
// Prices are CONTEXT, not the decider (CLAUDE.md, playbook "Prices as context"). card/pack end with
// a market block (SL's current price, market % with the overround removed, each-way terms,
// time read) and profiles show past SPs. --no-prices hides all of it.
// Weights are as Sporting Life lists them: BEFORE jockey claims. Claims must come from Racing Post.

const BASE = 'https://www.sportinglife.com';
const UA = 'horse-agent/1.0 (personal race analysis; plain page fetch)';

const args = process.argv.slice(2);
const flag = (n) => args.includes('--' + n);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const VALUED = ['--on', '--n', '--out'];
const pos = args.filter((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));

const cache = new Map();
async function page(path) {
  if (cache.has(path)) return cache.get(path);
  const res = await fetch(BASE + path, { headers: { 'User-Agent': UA }, redirect: 'manual' });
  if (res.status >= 300 && res.status < 400) throw new Error(`${path} redirected to ${res.headers.get('location')} (wrong date for this ID, or not published yet)`);
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  const html = await res.text();
  const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error(`${path}: no __NEXT_DATA__ (layout changed?)`);
  const d = JSON.parse(m[1]).props.pageProps;
  cache.set(path, d);
  return d;
}

const UKIRE = new Set(['Aintree','Ascot','Ayr','Bangor-on-Dee','Bath','Beverley','Brighton','Carlisle','Cartmel','Catterick','Chelmsford City','Cheltenham','Chepstow','Chester','Doncaster','Epsom','Exeter','Fakenham','Ffos Las','Fontwell','Goodwood','Hamilton','Haydock','Hereford','Hexham','Huntingdon','Kelso','Kempton','Leicester','Lingfield','Ludlow','Market Rasen','Musselburgh','Newbury','Newcastle','Newmarket','Newton Abbot','Nottingham','Perth','Plumpton','Pontefract','Redcar','Ripon','Salisbury','Sandown','Sedgefield','Southwell','Stratford','Taunton','Thirsk','Uttoxeter','Warwick','Wetherby','Wincanton','Windsor','Wolverhampton','Worcester','Yarmouth','York','Ballinrobe','Bellewstown','Clonmel','Cork','Curragh','Down Royal','Downpatrick','Dundalk','Fairyhouse','Galway','Gowran Park','Kilbeggan','Killarney','Laytown','Leopardstown','Limerick','Listowel','Naas','Navan','Punchestown','Roscommon','Sligo','Thurles','Tipperary','Tramore','Wexford']);
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const hg = (a) => (a || []).map((h) => h.symbol + (h.count === 1 ? '1' : '')).join('') || '-';
const clean = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/,?\s*\b\d{1,3}\/\d{1,2}\b(\s*(fav|jf|f)\b)?/gi, '').replace(/\(\s*\)/g, '').replace(/\s+/g, ' ').trim();
const CAS = { PulledUp: 'PU', Fell: 'F', UnseatedRider: 'UR', Refused: 'R', BroughtDown: 'BD', SlippedUp: 'SU', RanOut: 'RO', CarriedOut: 'CO', Disqualified: 'DSQ' };
const cas = (c) => (c && c.reason) ? (CAS[c.reason] || c.reason) : '';
const days = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);

async function meetings(date) {
  const g = await page('/racing/going');
  const list = (g.races && g.races[date]) || [];
  if (!list.length) throw new Error(`no meetings for ${date} on the going page (dates: ${Object.keys(g.races || {}).join(', ')})`);
  const out = [];
  for (const m of list) {
    const name = m.course.name;
    if (flag('uk') && !UKIRE.has(name)) continue;
    let races = [];
    try {
      const fc = await page(`/racing/fast-cards/${m.meeting_reference.id}/${date}/${slug(name)}`);
      races = fc.meeting.races.map((r) => `${r.race_summary.time.slice(0, 5)} ${r.race_summary.race_summary_reference.id} ${r.race_summary.distance} C${r.race_summary.race_class || '-'} ${r.race_summary.name} [${(r.runners || r.rides || []).length || '?'}]`);
    } catch (e) { races = [`(fast-cards failed: ${e.message})`]; }
    out.push(`## ${name} — going: ${m.going || '?'}${m.weather ? ' — ' + m.weather : ''} (meeting ${m.meeting_reference.id})`, ...races.map((r) => '  ' + r));
  }
  return out.join('\n');
}

function raceHeader(r) {
  const s = r.race_summary;
  return `${s.date} ${s.time} ${s.course_name} — ${s.name}\n${s.distance}, Class ${s.race_class || '-'}, ${s.age}, ${s.has_handicap ? 'handicap' : 'non-handicap'}, going: ${s.going || '(see meeting)'}, declared ${s.ride_count}, stage ${s.race_stage}` +
    (s.winning_time ? `, time ${s.winning_time}` : '');
}

async function card(date, id) {
  const d = await page(`/racing/racecards/${date}/x/racecard/${id}/x`);
  const r = d.race;
  const going = d.meeting && d.meeting[0] && d.meeting[0].meeting_summary.going;
  const lines = [raceHeader(r) + (going ? `\nMeeting going: ${going}` : ''), '',
    'No | Horse (SL id) | Age/Sex | Wt (pre-claim) | OR | Hg | Jockey | Trainer | Days | Form | Career R-W-P | Status'];
  for (const x of r.rides) {
    const h = x.horse, ls = (x.horse_lifetime_stats || [])[0] || {};
    lines.push([x.cloth_number, `${h.name} (${h.horse_reference.id})`, `${h.age}yo ${h.sex && h.sex.type || ''}`, x.handicap, x.official_rating ?? '-', hg(x.headgear),
      x.jockey ? x.jockey.name : '-', x.trainer ? x.trainer.name : '-', h.last_ran_days ?? '-', h.formsummary ? h.formsummary.display_text : '-',
      `${ls.run_count ?? '?'}-${ls.win_count ?? '?'}-${ls.place_count ?? '?'}`, x.ride_status].join(' | '));
  }
  lines.push('', 'Card comments (SL/Timeform pen-pictures, not evidence):');
  for (const x of r.rides) lines.push(`- ${x.horse.name}: ${clean(x.commentary)}`);
  if (flag('verdict') && r.race_summary.verdict_text) lines.push('', 'Verdict: ' + clean(r.race_summary.verdict_text));
  if (r.last_years_winners && r.last_years_winners.length) lines.push('', 'Last year: ' + r.last_years_winners.map((w) => `${w.horse.name} ${w.weight}`).join('; '));
  if (!flag('no-prices')) lines.push('', market(r));
  return { text: lines.join('\n'), race: r };
}

// Market block: context only. Market % = 1/(decimal) normalised over runners, so it sums to 100%.
const dec = (f) => { if (!f) return null; if (/^ev/i.test(f)) return 2; const m = String(f).match(/(\d+)\/(\d+)/); return m ? 1 + m[1] / m[2] : null; };
function market(r) {
  const run = r.rides.filter((x) => x.ride_status === 'RUNNER');
  const rows = run.map((x) => {
    const books = (x.bookmakerOdds || []).filter((b) => b.decimalOdds);
    return { x, cur: x.betting && x.betting.current_odds, d: dec(x.betting && x.betting.current_odds), ew: books.find((b) => b.eachWayAvailable) };
  });
  const book = rows.reduce((a, o) => a + (o.d ? 1 / o.d : 0), 0);
  const ew = rows.map((o) => o.ew).find(Boolean);
  const read = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' });
  return [`Market — CONTEXT ONLY, read ${read} UK (rank from the form first; see "Prices as context"). Book ${(book * 100).toFixed(0)}%` +
    (ew ? `; each-way ${ew.numberOfPlaces} places at ${ew.placeFractionNumerator}/${ew.placeFractionDenominator} odds (${ew.bookmakerName})` : ''),
    'Horse | SL price | market % (overround removed)',
    ...rows.sort((a, b) => (a.d || 999) - (b.d || 999)).map((o) => [o.x.horse.name, o.cur || '-',
      o.d && book ? (100 / o.d / book).toFixed(1) + '%' : '-'].join(' | '))].join('\n');
}

function runLine(p, sp) {
  const posn = p.position ? `${p.position}/${p.runner_count}` : `${cas(p.casualty) || 'NC'}/${p.runner_count}`;
  const tack = typeof p.ride_tackle_shortcode === 'string' ? p.ride_tackle_shortcode : '-';
  return [p.date, p.course_shortcode, (p.run_type_shortcode || p.run_type || '').slice(0, 2), p.distance, p.going_shortcode || p.going, `C${p.race_class || '-'}`,
    p.handicap_race ? 'Hcp' : '', posn, p.result_between_distance || (p.position === 1 ? 'won' : '-'), p.weight_in_stone || p.weight, `OR${p.or ?? p.bha ?? '-'}`,
    tack, p.jockey_name, sp ? `SP ${p.odds}` : '', `r${p.race_id}`, '— ' + clean(p.ride_description)].filter((v) => v !== '').join(' | ');
}

// Standard racecard symbols, computed rather than trusted (ATR's card pills do NOT follow this
// convention: maidens carry "C"). C = won at this course, D = won at this distance (within 110y)
// under the same code, CD = both in one race, BF = beaten favourite on last start.
const yards = (s) => { const m = String(s).match(/(?:(\d+)m)?\s*(?:(\d+)f)?\s*(?:(\d+)y)?/); return m ? (+m[1] || 0) * 1760 + (+m[2] || 0) * 220 + (+m[3] || 0) : 0; };
const code = (t) => { t = String(t).toUpperCase(); return t.startsWith('C') ? 'C' : t.startsWith('H') ? 'H' : /^(B|N|F)/.test(t) ? 'B' : t; };
function flags(runs, ctx) {
  const wins = runs.filter((r) => r.position === 1);
  const atC = (r) => r.course_name === ctx.course, atD = (r) => code(r.run_type) === ctx.code && Math.abs(yards(r.distance) - ctx.yards) <= 110;
  const f = [];
  if (wins.some((r) => atC(r) && atD(r))) f.push('CD');
  else { if (wins.some(atC)) f.push('C'); if (wins.some(atD)) f.push('D'); }
  const last = runs[0];
  if (last && last.favourite_flag && last.position !== 1) f.push('BF');
  const cRuns = runs.filter(atC);
  return (f.join(' ') || 'none') + ` | wins ${wins.length}/${runs.length}; at ${ctx.course}: ${cRuns.map((r) => (r.position || cas(r.casualty) || '?') + '/' + r.runner_count).join(', ') || 'never run'}`;
}

async function profile(id, on, sp, n, ctx) {
  const d = await page(`/racing/profiles/horse/${id}`);
  const p = d.profile;
  const runs = (p.previous_results || []).filter((r) => r.date);
  const last = runs[0];
  const head = `${p.name} (SL ${id}) — ${p.age}yo ${p.colour || ''}${p.sex ? p.sex.type : ''} by ${p.sire && p.sire.name} out of ${p.dam && p.dam.name} (${p.damsire && p.damsire.name}); trainer ${p.trainer && p.trainer.name}; ${runs.length} runs` +
    (last && on ? `; last run ${last.date} = ${days(last.date, on)} days before ${on}` : '');
  const fut = (p.future_entries || []).map((f) => `entry: ${f.date} ${f.time.slice(0, 5)} ${f.course_name} race ${f.race_id} ${f.weight_in_stone}`);
  if (ctx) fut.push('computed flags (from SL career, verified): ' + flags(runs, ctx));
  return [head, ...fut, 'date | crs | type | dist | going | class | hcp | pos | btn | wt | OR | tack | jockey | race | in-running',
    ...runs.slice(0, n || runs.length).map((r) => runLine(r, sp))].join('\n');
}

async function result(date, id) {
  const d = await page(`/racing/results/${date}/x/${id}/x`);
  const r = d.race;
  const rows = [...r.rides].sort((a, b) => (a.finish_position || 99) - (b.finish_position || 99)).map((x) =>
    [x.finish_position || cas(x.casualty) || x.ride_status, x.horse.name, x.finish_distance || '', x.handicap, `OR${x.official_rating ?? '-'}`, hg(x.headgear),
      x.jockey && x.jockey.name, x.trainer && x.trainer.name, `SP ${x.betting && x.betting.current_odds || '-'}${x.betting && x.betting.favourite && x.betting.favourite.type ? ' ' + x.betting.favourite.type : ''}`, '— ' + clean(x.ride_description)].join(' | '));
  return [raceHeader(r), 'Weights are pre-claim. Margins: check key ones against Racing Post.', 'pos | horse | btn | wt | OR | hg | jockey | trainer | SP | comment', ...rows,
    r.deductions && r.deductions.length ? 'Deductions: ' + JSON.stringify(r.deductions) : '', r.stewards && r.stewards !== 'NONE' ? 'Stewards: ' + r.stewards : ''].filter(Boolean).join('\n');
}

async function going(date) {
  const g = await page('/racing/going');
  return Object.entries(g.races || {}).filter(([k]) => !date || k === date)
    .map(([k, ms]) => `## ${k}\n` + ms.map((m) => `  ${m.course.name}: ${m.going || '?'} (${m.surface_summary || ''}${m.weather ? ', ' + m.weather : ''})`).join('\n')).join('\n');
}

(async () => {
  const [cmd, a, b] = pos;
  const stamp = `[Sporting Life, fetched ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })} UK time]`;
  let out;
  switch (cmd) {
    case 'meetings': out = await meetings(a); break;
    case 'card': out = (await card(a, b)).text; break;
    case 'profile': out = await profile(a, opt('on'), !flag('no-prices'), +opt('n', 0)); break;
    case 'result': out = await result(a, b); break;
    case 'going': out = await going(a); break;
    case 'pack': {
      const c = await card(a, b);
      const parts = [c.text];
      const rs = c.race.race_summary;
      const ctx = { course: rs.course_name, yards: yards(rs.distance), code: /chase/i.test(rs.name) ? 'C' : /hurdle/i.test(rs.name) ? 'H' : /flat race|bumper|nh flat/i.test(rs.name) ? 'B' : 'F' };
      for (const x of c.race.rides) {
        try { parts.push('', '### ' + x.cloth_number + ' ' + x.horse.name, await profile(x.horse.horse_reference.id, a, !flag('no-prices'), 0, ctx)); }
        catch (e) { parts.push('', `### ${x.horse.name}: profile failed (${e.message})`); }
      }
      out = parts.join('\n');
      const file = opt('out');
      if (file) { require('fs').writeFileSync(file, stamp + '\n\n' + out); out = `wrote ${file} (${out.length} chars, ${c.race.rides.length} runners)`; }
      break;
    }
    default: out = require('fs').readFileSync(__filename, 'utf8').split('\n').slice(1, 17).join('\n');
  }
  console.log(stamp + '\n' + out);
})().catch((e) => { console.error('ERROR: ' + e.message); process.exit(1); });
