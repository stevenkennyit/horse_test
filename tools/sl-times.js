#!/usr/bin/env node
// Sporting Life: pull a horse's profile and, for each past run, show the
// horse's estimated finishing time.
//
//   node tools/sl-times.js <horseId> [--n N] [--since YYYY-MM-DD]
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

const BASE = 'https://www.sportinglife.com';
const UA = 'horse-agent/1.0 (personal race analysis; plain page fetch)';

const args = process.argv.slice(2);
const flag = (n) => args.includes('--' + n);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const VALUED = ['--n', '--since'];
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

const LPS = { H: 5.0, C: 4.0, B: 6.0, F: 6.0 }; // lengths per second
function code(t) {
  t = String(t || '').toUpperCase();
  if (t.startsWith('C')) return 'C';
  if (t.startsWith('H')) return 'H';
  if (/^(B|N|F)/.test(t)) return 'B'; // Bumper / NH Flat
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

async function run() {
  const horseId = pos[0];
  if (!horseId) {
    console.error('usage: sl-times.js <horseId> [--n N] [--since YYYY-MM-DD]');
    process.exit(2);
  }
  const n = +opt('n', 0);
  const since = opt('since');

  const prof = await page(`/racing/profiles/horse/${horseId}`);
  const p = prof.profile;
  const all = (p.previous_results || []).filter((r) => r.date);
  const picked = all.filter((r) => !since || r.date >= since).slice(0, n || all.length);

  const stamp = `[Sporting Life, fetched ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })} UK time]`;
  console.log(stamp);
  console.log(`${p.name} (SL ${horseId}) — ${p.age}yo by ${p.sire && p.sire.name} out of ${p.dam && p.dam.name}; trainer ${p.trainer && p.trainer.name}; ${all.length} runs${picked.length < all.length ? `, showing ${picked.length}` : ''}`);
  console.log('Finishing times are estimates: winner_time + (lengths behind winner / L-per-s for the code). L/s = Flat 6, Hurdle 5, Chase 4. Only the winner has an official time.');
  console.log('date | crs | type | dist | going | pos/field | btn-winner | winner-time | est-horse-time | race');

  for (const r of picked) {
    const ty = code(r.run_type_shortcode || r.run_type);
    const lps = LPS[ty] || 6.0;
    let winnerSec = null, btnWinner = 0, estSec = null, note = '';

    if (!r.position) {
      note = r.casualty && r.casualty.reason ? ' — ' + r.casualty.reason : ' — did not finish';
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
          // Cumulative lengths behind winner for each placed horse.
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
        note = ' — result fetch failed: ' + e.message;
      }
    }

    const posStr = r.position ? `${r.position}/${r.runner_count}` : `${(r.casualty && r.casualty.reason) || 'NC'}/${r.runner_count}`;
    console.log([
      r.date,
      r.course_shortcode,
      ty,
      r.distance,
      r.going_shortcode || r.going || '-',
      posStr,
      r.position ? btnWinner.toFixed(2) + 'L' : '-',
      fmtTime(winnerSec),
      fmtTime(estSec),
      `r${r.race_id}${note}`,
    ].join(' | '));
  }
}

run().catch((e) => { console.error('ERROR: ' + e.message); process.exit(1); });
