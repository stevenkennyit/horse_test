#!/usr/bin/env node
// Sporting Life: pull a horse's profile and, for each past run, show the
// horse's estimated finishing time.
//
//   node tools/sl-times.js <horseId> [horseId ...] [--n N] [--since YYYY-MM-DD]
//                                    [--csv] [--out file.csv]
//                                    [--verify YYYY-MM-DD:slRaceId]
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
//
// --verify <date>:<slRaceId> auto-populates the horse list from SL's
// racecard (RUNNERs only) AND cross-checks the live field count against
// Racing Post for the same race. Use it when the field may have changed
// late (non-runners replaced by reserves): SL's racecard endpoint has
// been seen to lag reserve promotions until after the off, so an SL-only
// view can miss horses. Explicit positional horse IDs still win over the
// auto-populated list; the verify just prints a warning when the two
// sources disagree.

const BASE = 'https://www.sportinglife.com';
const UA = 'horse-agent/1.0 (personal race analysis; plain page fetch)';

const args = process.argv.slice(2);
const flag = (n) => args.includes('--' + n);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const VALUED = ['--n', '--since', '--out', '--verify'];
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

// Column layout. `inferred__time_sec` is placed next to its two inputs
// (winner_time_sec in col P, btn_winner_lengths in col O) and emitted as an
// Excel formula `=P<row>+O<row>/<divisor>`, with the divisor taken from the
// race-type's lengths-per-second (F/B=6, H=5, C=4). That keeps the
// derivation visible in the cell and lets you override the rate per row if
// you want. est_horse_time_sec stays as the precomputed numeric copy.
const CSV_HEADER = [
  'horse_id', 'horse_name', 'date', 'course', 'course_code', 'race_type',
  'distance', 'distance_yards', 'going', 'going_code', 'class', 'handicap',
  'position', 'field_size', 'btn_winner_lengths', 'winner_time_sec',
  'inferred__time_sec', 'est_horse_time_sec', 'winner_time_str',
  'est_horse_time_str', 'official_rating', 'weight_lb', 'weight_st', 'jockey',
  'race_id', 'race_name', 'note',
];

// SL gives weight as an integer in pounds, and weight_in_stone as "11-7".
// Excel reads "9-2" as a date, so emit weight_lb (pounds) for filtering and
// re-format the stone/pound string without the hyphen (e.g. "11st 7").
function stoneStr(s) {
  const m = String(s || '').match(/^(\d+)-(\d+)$/);
  return m ? `${m[1]}st ${m[2]}` : (s || '');
}

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

function toCsvRow(x, rowIdx) {
  const r = x.run;
  // rowIdx is 0-based across data rows; the header is spreadsheet row 1.
  const row = rowIdx + 2;
  const div = LPS[x.ty] || 6;
  const inferredFormula = r.position && x.winnerSec != null
    ? `=P${row}+O${row}/${div}`
    : '';
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
    inferredFormula,
    x.estSec != null ? x.estSec.toFixed(2) : '',
    x.winnerSec != null ? fmtTime(x.winnerSec) : '',
    x.estSec != null ? fmtTime(x.estSec) : '',
    r.or ?? r.bha ?? '',
    r.weight ?? '',
    stoneStr(r.weight_in_stone),
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

// --verify support. SL card shape: /racing/racecards/<date>/x/racecard/<id>/x
// yields d.race.rides with ride_status RUNNER or NONRUNNER and
// race_summary.{course_name, time}. Racing Post's listing page
// /racecards/<date> embeds __NEXT_DATA__.initialState.raceCards.meetings,
// each race carrying numberOfRunners (live count, excluding non-runners).
// We match the SL race to an RP race by course (first word, case-insensitive)
// and off time "HH:MM".
async function slRaceInfo(date, slRaceId) {
  const d = await page(`/racing/racecards/${date}/x/racecard/${slRaceId}/x`);
  const r = d.race;
  const runners = r.rides.filter((x) => x.ride_status === 'RUNNER');
  return {
    course: r.race_summary.course_name,
    time: String(r.race_summary.time).slice(0, 5),
    stage: r.race_summary.race_stage,
    runners: runners.map((x) => ({
      cloth: x.cloth_number,
      name: x.horse.name,
      id: String(x.horse.horse_reference.id),
    })),
    nonRunners: r.rides.filter((x) => x.ride_status !== 'RUNNER').map((x) => x.horse.name),
  };
}

const RP_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Safari/604.1',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-GB,en;q=0.9',
};
async function rpFetch(url) {
  // RP occasionally returns 406/429 transiently; retry a couple of times.
  let res, lastStatus;
  for (let i = 0; i < 3; i++) {
    res = await fetch(url, { headers: RP_HEADERS });
    lastStatus = res.status;
    if (res.ok) break;
    if (![406, 429, 500, 502, 503, 504].includes(res.status)) break;
    await new Promise((r) => setTimeout(r, 400 * (i + 1)));
  }
  if (!res.ok) throw new Error(`${url} -> HTTP ${lastStatus}`);
  const html = await res.text();
  const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error(`${url}: no __NEXT_DATA__`);
  return JSON.parse(m[1]);
}
async function rpRaceCount(date, slCourse, slTime) {
  const data = await rpFetch(`https://www.racingpost.com/racecards/${date}`);
  const meetings = data.props.pageProps.initialState.raceCards.meetings;
  const firstWord = String(slCourse).split(/\s+/)[0].toLowerCase();
  for (const mk of Object.keys(meetings)) {
    const mm = meetings[mk];
    if (!mm.name.toLowerCase().includes(firstWord)) continue;
    for (const r of mm.races) {
      if (r.raceStart === slTime) {
        return {
          rpCount: r.numberOfRunners,
          rpMeeting: mm.name,
          rpRaceId: r.raceId,
          rpRaceUrl: r.raceUrl,
        };
      }
    }
  }
  throw new Error(`no RP race matched for ${slCourse} ${slTime}`);
}
// Second-opinion check when the listing disagrees with SL: RP's own
// per-race page sometimes still has the full field even when the listing
// count lags. Returns live-runner count from racePage.data.runners.
async function rpPerRaceCount(raceUrl) {
  const data = await rpFetch(`https://www.racingpost.com${raceUrl}`);
  const runners = data.props.pageProps.initialState.racePage.data.runners || [];
  return runners.filter((h) => !h.nonRunner).length;
}

async function run() {
  const verifyArg = opt('verify');
  let verifyInfo = null;
  if (verifyArg) {
    const m = String(verifyArg).match(/^(\d{4}-\d{2}-\d{2}):(\d+)$/);
    if (!m) { console.error('--verify value must be YYYY-MM-DD:slRaceId'); process.exit(2); }
    const [, vDate, vRaceId] = m;
    try {
      const sl = await slRaceInfo(vDate, vRaceId);
      let rp = null, rpErr = null;
      try { rp = await rpRaceCount(vDate, sl.course, sl.time); }
      catch (e) { rpErr = e.message; }
      verifyInfo = { date: vDate, raceId: vRaceId, sl, rp, rpErr };
      // Auto-populate horse IDs from SL card if user didn't pass any.
      if (!pos.length) pos.push(...sl.runners.map((x) => x.id));
      // Print verify banner on stderr so CSV on stdout stays clean.
      const slN = sl.runners.length, rpN = rp && rp.rpCount;
      let agree = rpN != null && rpN === slN;
      // Listing-level disagreement → check RP's per-race page as a tiebreaker
      // (RP's listing numberOfRunners sometimes lags its own per-race data).
      let perRaceN = null, perRaceErr = null;
      if (rp && rp.rpRaceUrl && !agree) {
        try { perRaceN = await rpPerRaceCount(rp.rpRaceUrl); }
        catch (e) { perRaceErr = e.message; }
      }
      const banner = [
        `[verify] ${sl.course} ${sl.time} (SL race ${vRaceId}, stage ${sl.stage})`,
        `[verify]   SL runners: ${slN}${sl.nonRunners.length ? ` (NR: ${sl.nonRunners.join(', ')})` : ''}`,
        rp
          ? `[verify]   RP listing: ${rpN} runners (${rp.rpMeeting}, rpId ${rp.rpRaceId})`
          : `[verify]   RP lookup failed: ${rpErr}`,
      ];
      if (!rp) {
        banner.push(`[verify]   proceeding on SL data only.`);
      } else if (agree) {
        banner.push(`[verify]   MATCH — SL and RP agree on ${slN} live runners.`);
      } else if (perRaceN != null) {
        banner.push(`[verify]   RP per-race page: ${perRaceN} live runners (tiebreaker)`);
        if (perRaceN === slN) {
          banner.push(`[verify]   MATCH — SL and RP per-race agree on ${slN} runners (RP listing is stale).`);
          agree = true;
        } else {
          banner.push(`[verify]   *** MISMATCH *** SL=${slN} vs RP per-race=${perRaceN}. Cross-check the field before trusting the CSV.`);
        }
      } else {
        banner.push(`[verify]   RP per-race lookup failed${perRaceErr ? ': ' + perRaceErr : ''}`);
        banner.push(`[verify]   *** MISMATCH *** SL=${slN} vs RP listing=${rpN}. Cross-check the field before trusting the CSV.`);
      }
      for (const line of banner) console.error(line);
    } catch (e) {
      console.error(`[verify] failed: ${e.message}`);
      if (!pos.length) process.exit(2);
    }
  }

  if (!pos.length) {
    console.error('usage: sl-times.js <horseId> [horseId ...] [--n N] [--since YYYY-MM-DD] [--csv] [--out file.csv] [--verify YYYY-MM-DD:slRaceId]');
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

  // Collect everything first, then (for CSV) sort by inferred time ascending
  // before writing — the inferred__time_sec cell is a formula referencing its
  // own row number (`=P<row>+O<row>/...`), so the row index must be computed
  // against the final sorted position.
  const csvItems = []; // { x, sortKey } for CSV; sortKey = inferred seconds or +Infinity
  const errorRows = []; // profile-fetch-failed rows go at the bottom of the CSV
  for (const horseId of pos) {
    let bundle;
    try { bundle = await runsFor(horseId, since, n); }
    catch (e) {
      if (csv) {
        const blanks = new Array(CSV_HEADER.length - 2).fill('');
        errorRows.push(csvRow([horseId, ...blanks, 'profile fetch failed: ' + e.message]));
      } else lines.push('', `### ${horseId}: profile failed (${e.message})`);
      continue;
    }
    let headerPrinted = false;
    for (const x of bundle.rows) {
      x.profile = bundle.profile;
      if (csv) {
        const sortKey = (x.run.position && x.estSec != null) ? x.estSec : Infinity;
        csvItems.push({ x, sortKey });
      } else {
        if (!headerPrinted) lines.push('');
        lines.push(...toTextLines(x, headerPrinted));
        headerPrinted = true;
      }
    }
  }
  if (csv) {
    csvItems.sort((a, b) => a.sortKey - b.sortKey || a.x.horse_name.localeCompare(b.x.horse_name));
    for (let i = 0; i < csvItems.length; i++) {
      lines.push(toCsvRow(csvItems[i].x, i));
    }
    for (const row of errorRows) lines.push(row);
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
