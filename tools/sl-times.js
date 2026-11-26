#!/usr/bin/env node
// Sporting Life: pull a horse's profile and, for each past run, show the
// horse's estimated finishing time.
//
//   node tools/sl-times.js <horseId> [horseId ...] [--n N] [--since YYYY-MM-DD]
//                                    [--csv] [--out file.csv]
//
// SL stores no per-horse times. It stores the race's winning_time and each
// ride's beaten distance between the horse in front. We walk the profile's
// previous_results, fetch each race result, sum lengths behind the winner,
// convert to seconds, and add to the winner's time.
//
// Lengths-per-second conversion follows the industry standard used by the
// BHA for race times: Flat 6.0 L/s (0.167 s/L), Hurdle 5.0 L/s (0.200 s/L),
// Chase 4.0 L/s (0.250 s/L). Bumpers use the Flat rate. Numbers are
// estimates; the real time depends on how each horse ran out the finish,
// and officially no horse but the winner has a recorded time.
//
// --csv prints one header row plus one row per run across every horse;
// --out writes the CSV to a file instead of stdout.

const BASE = 'https://www.sportinglife.com';
const UA = 'horse-agent/1.0 (personal race analysis; plain page fetch)';

const args = process.argv.slice(2);
const flag = (n) => args.includes('--' + n);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const VALUED = ['--n', '--since', '--out'];
const pos = args.filter((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));

async function page(path) {
  const res = await fetch(BASE + path, { headers: { 'User-Agent': UA }, redirect: 'manual' });
  if (res.status >= 300 && res.status < 400) throw new Error(`${path} redirected to ${res.headers.get('location')}`);
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  const html = await res.text();
  const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error(`${path}: no __NEXT_DATA__`);
  return JSON.parse(m[1]).props.pageProps;
}

// "3m 55.70s" / "1m 38.2s" / "58.40s" -> seconds
function parseTime(s) {
  if (!s) return null;
  const m = String(s).match(/(?:(\d+)m)?\s*([\d.]+)s?/);
  if (!m) return null;
  return (+m[1] || 0) * 60 + +m[2];
}
function fmtTime(sec) {
  if (sec == null) return '-';
  const m = Math.floor(sec / 60), s = (sec - m * 60);
  return (m ? `${m}m ` : '') + s.toFixed(2) + 's';
}

// Beaten distance string -> lengths. Racing terms: nse=nose 0.05, sh=short
// head 0.1, hd=head 0.2, nk=neck 0.3, dht=dead heat 0, dist=distance ~30,
// and fractions like "2 ¼" or "1½" are lengths.
const FR = { '¼': 0.25, '½': 0.5, '¾': 0.75 };
function lengths(str) {
  if (!str) return 0;
  const t = String(str).trim().toLowerCase();
  if (t === 'dht' || t === 'd-ht' || t === 'dead-heat' || t === '') return 0;
  if (t === 'nse' || t === 'nose') return 0.05;
  if (t === 'sh' || t === 'shd' || t === 'sh-hd' || t === 'short head') return 0.1;
  if (t === 'hd' || t === 'head') return 0.2;
  if (t === 'nk' || t === 'neck') return 0.3;
  if (t === 'dist' || t === 'distance') return 30;
  let n = 0;
  const m = t.match(/^(\d+)?\s*([¼½¾])?\s*(?:length|l)?s?$/);
  if (m) {
    if (m[1]) n += +m[1];
    if (m[2]) n += FR[m[2]];
    return n;
  }
  const p = parseFloat(t);
  return isNaN(p) ? 0 : p;
}

// "1m 2f 125y" / "7f" / "5f 160y" -> yards
function distanceYards(s) {
  const m = String(s || '').match(/(?:(\d+)m)?\s*(?:(\d+)f)?\s*(?:(\d+)y)?/);
  return m ? (+m[1] || 0) * 1760 + (+m[2] || 0) * 220 + (+m[3] || 0) : 0;
}

const LPS = { H: 5.0, C: 4.0, B: 6.0, F: 6.0 }; // lengths per second
// SL run_type_shortcode values: F Flat, H Hurdle, C Chase, B Bumper.
// Irish bumpers show up under names like "NH Flat Race" / "INH Flat Race";
// fall back to the long name for those.
function code(shortcode, longName) {
  const sc = String(shortcode || '').toUpperCase();
  if (sc === 'C' || sc === 'H' || sc === 'B' || sc === 'F') return sc;
  const n = String(longName || '').toLowerCase();
  if (/chase/.test(n)) return 'C';
  if (/hurdle/.test(n)) return 'H';
  if (/bumper|nh flat|flat race/.test(n)) return 'B';
  if (/flat/.test(n)) return 'F';
  return 'F';
}

const resultCache = new Map();
async function resultFor(date, raceId) {
  const k = `${date}:${raceId}`;
  if (resultCache.has(k)) return resultCache.get(k);
  const d = await page(`/racing/results/${date}/x/${raceId}/x`);
  resultCache.set(k, d);
  return d;
}

// Minimal RFC-4180-ish CSV cell quoting: quote if the value has a comma,
// quote, newline, or leading/trailing whitespace; double any inner quotes.
function csvCell(v) {
  if (v == null) return '';
  const s = String(v);
  return /[",\n\r]|^\s|\s$/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
const csvRow = (cols) => cols.map(csvCell).join(',');

const CSV_HEADER = [
  'horse_id', 'horse_name', 'date', 'course', 'course_code', 'race_type',
  'distance', 'distance_yards', 'going', 'going_code', 'class', 'handicap',
  'position', 'field_size', 'btn_winner_lengths', 'winner_time_sec',
  'est_horse_time_sec', 'winner_time_str', 'est_horse_time_str',
  'official_rating', 'weight_stone', 'jockey', 'race_id', 'race_name', 'note',
];

async function runsFor(horseId, since, n) {
  const prof = await page(`/racing/profiles/horse/${horseId}`);
  const p = prof.profile;
  const all = (p.previous_results || []).filter((r) => r.date);
  const picked = all.filter((r) => !since || r.date >= since).slice(0, n || all.length);
  const rows = [];
  for (const r of picked) {
    const ty = code(r.run_type_shortcode, r.run_type);
    const lps = LPS[ty] || 6.0;
    let winnerSec = null, btnWinner = 0, estSec = null, note = '';
    if (!r.position) {
      note = (r.casualty && r.casualty.reason) ? r.casualty.reason : 'did not finish';
    } else {
      try {
        const res = await resultFor(r.date, r.race_id);
        winnerSec = parseTime(res.race.race_summary.winning_time);
        if (r.position === 1) {
          estSec = winnerSec;
          btnWinner = 0;
        } else {
          const rides = [...res.race.rides]
            .filter((x) => x.finish_position)
            .sort((a, b) => a.finish_position - b.finish_position);
          let acc = 0;
          for (const x of rides) {
            if (x.finish_position > 1) acc += lengths(x.finish_distance);
            if (x.horse && String(x.horse.horse_reference && x.horse.horse_reference.id) === String(horseId)) {
              btnWinner = acc;
              break;
            }
          }
          if (winnerSec != null) estSec = winnerSec + btnWinner / lps;
        }
      } catch (e) {
        note = 'result fetch failed: ' + e.message;
      }
    }
    rows.push({
      horse_id: horseId,
      horse_name: p.name,
      run: r,
      ty,
      winnerSec,
      btnWinner,
      estSec,
      note,
      runs_total: all.length,
      runs_shown: picked.length,
    });
  }
  return { profile: p, all, picked, rows };
}

function toCsvRow(x) {
  const r = x.run;
  return csvRow([
    x.horse_id,
    x.horse_name,
    r.date,
    r.course_name || '',
    r.course_shortcode || r.course_name || '',
    x.ty,
    r.distance,
    distanceYards(r.distance),
    r.going || '',
    r.going_shortcode || '',
    r.race_class || '',
    r.handicap_race ? 'Hcp' : '',
    r.position || '',
    r.runner_count || '',
    r.position ? x.btnWinner.toFixed(2) : '',
    x.winnerSec != null ? x.winnerSec.toFixed(2) : '',
    x.estSec != null ? x.estSec.toFixed(2) : '',
    x.winnerSec != null ? fmtTime(x.winnerSec) : '',
    x.estSec != null ? fmtTime(x.estSec) : '',
    r.or ?? r.bha ?? '',
    r.weight_in_stone || '',
    r.jockey_name || '',
    r.race_id,
    r.race_name || '',
    x.note,
  ]);
}

function toTextLines(x, horseHeaderPrinted) {
  const out = [];
  const r = x.run;
  if (!horseHeaderPrinted) {
    const p = x.profile || {};
    out.push(`${x.horse_name} (SL ${x.horse_id}) — ${p.age || '?'}yo${p.sire && p.sire.name ? ' by ' + p.sire.name : ''}${p.dam && p.dam.name ? ' out of ' + p.dam.name : ''}; trainer ${(p.trainer && p.trainer.name) || '?'}; ${x.runs_total} runs${x.runs_shown < x.runs_total ? `, showing ${x.runs_shown}` : ''}`);
    out.push('date | crs | type | dist | going | pos/field | btn-winner | winner-time | est-horse-time | race');
  }
  const posStr = r.position ? `${r.position}/${r.runner_count}` : `${(r.casualty && r.casualty.reason) || 'NC'}/${r.runner_count}`;
  out.push([
    r.date,
    r.course_shortcode || r.course_name || '-',
    x.ty,
    r.distance,
    r.going_shortcode || r.going || '-',
    posStr,
    r.position ? x.btnWinner.toFixed(2) + 'L' : '-',
    fmtTime(x.winnerSec),
    fmtTime(x.estSec),
    `r${r.race_id}${x.note ? ' — ' + x.note : ''}`,
  ].join(' | '));
  return out;
}

async function run() {
  if (!pos.length) {
    console.error('usage: sl-times.js <horseId> [horseId ...] [--n N] [--since YYYY-MM-DD] [--csv] [--out file.csv]');
    process.exit(2);
  }
  const n = +opt('n', 0);
  const since = opt('since');
  const csv = flag('csv') || !!opt('out');
  const outFile = opt('out');

  const stamp = `[Sporting Life, fetched ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })} UK time]`;
  const lines = [];
  if (csv) lines.push(csvRow(CSV_HEADER));
  else lines.push(stamp, 'Finishing times are estimates: winner_time + (lengths behind winner / L-per-s for the code). L/s = Flat 6, Hurdle 5, Chase 4. Only the winner has an official time.');

  for (const horseId of pos) {
    let bundle;
    try { bundle = await runsFor(horseId, since, n); }
    catch (e) {
      if (csv) lines.push(csvRow([horseId, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'profile fetch failed: ' + e.message]));
      else lines.push('', `### ${horseId}: profile failed (${e.message})`);
      continue;
    }
    let headerPrinted = false;
    for (const x of bundle.rows) {
      x.profile = bundle.profile;
      if (csv) lines.push(toCsvRow(x));
      else {
        if (!headerPrinted) lines.push('');
        lines.push(...toTextLines(x, headerPrinted));
        headerPrinted = true;
      }
    }
  }

  const output = lines.join('\n') + '\n';
  if (outFile) {
    require('fs').writeFileSync(outFile, output);
    console.log(`${stamp}\nwrote ${outFile} (${pos.length} horse${pos.length === 1 ? '' : 's'}, ${lines.length - 1} row${lines.length === 2 ? '' : 's'})`);
  } else {
    process.stdout.write(output);
  }
}

run().catch((e) => { console.error('ERROR: ' + e.message); process.exit(1); });
