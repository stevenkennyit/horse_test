#!/usr/bin/env node
// tools/sl-render.js — read a sl-times.js CSV and write an interactive HTML
// page (sortable table, filter chips, speed-bar on the inferred-time cell).
// The HTML is self-contained (no network loads except Google Fonts) so it
// can be published as a Claude Artifact or opened locally.
//
//   node tools/sl-render.js <csv>
//        [--race YYYY-MM-DD:slRaceId]   fetch race header from SL
//        [--title "..."]                override the page title
//        [--out out.html]               defaults to <csv>.html

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const flag = (n) => args.includes('--' + n);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const VALUED = ['--race', '--title', '--out'];
const pos = args.filter((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));

if (!pos.length) {
  console.error('usage: sl-render.js <csv> [--race YYYY-MM-DD:slRaceId] [--title "..."] [--out out.html]');
  process.exit(2);
}
const csvPath = pos[0];
const raceArg = opt('race');
const titleArg = opt('title');
const outPath = opt('out', csvPath.replace(/\.csv$/, '.html'));

// Minimal CSV parser: quoted cells may contain commas and newlines; double
// quotes inside a quoted cell are "". Matches what sl-times.js emits.
function parseCSV(text) {
  const rows = [];
  let row = [], cell = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; continue; }
      if (c === '"') { inQ = false; continue; }
      cell += c;
    } else {
      if (c === '"') { inQ = true; continue; }
      if (c === ',') { row.push(cell); cell = ''; continue; }
      if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; continue; }
      if (c === '\r') continue;
      cell += c;
    }
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.length));
}

async function fetchRaceCtx(dateRaceId) {
  const m = String(dateRaceId).match(/^(\d{4}-\d{2}-\d{2}):(\d+)$/);
  if (!m) throw new Error('--race must be YYYY-MM-DD:slRaceId');
  const [, date, raceId] = m;
  const res = await fetch(`https://www.sportinglife.com/racing/racecards/${date}/x/racecard/${raceId}/x`, {
    headers: { 'User-Agent': 'horse-agent/1.0 (personal race analysis)' },
  });
  if (!res.ok) throw new Error(`SL -> HTTP ${res.status}`);
  const html = await res.text();
  const nd = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  const d = JSON.parse(nd[1]).props.pageProps.race;
  const s = d.race_summary;
  return {
    course: s.course_name,
    time: String(s.time).slice(0, 5),
    date: s.date,
    distance: s.distance,
    going: s.going,
    raceClass: s.race_class,
    raceName: s.name,
    runners: d.rides.filter((x) => x.ride_status === 'RUNNER').length,
    nonRunners: d.rides.filter((x) => x.ride_status !== 'RUNNER').map((x) => x.horse.name),
  };
}

function htmlEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

(async () => {
  const text = fs.readFileSync(csvPath, 'utf8');
  const rows = parseCSV(text);
  const header = rows[0];
  const data = rows.slice(1).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i]])));
  const NUMERIC = ['distance_yards', 'position', 'field_size', 'btn_winner_lengths',
    'winner_time_sec', 'est_horse_time_sec', 'official_rating', 'weight_lb',
    'class', 'race_id'];
  for (const d of data) {
    for (const k of NUMERIC) {
      if (d[k] !== undefined && d[k] !== '') {
        const v = parseFloat(d[k]);
        d[k] = isNaN(v) ? null : v;
      }
    }
  }

  let ctx = null, title = titleArg;
  if (raceArg) {
    try { ctx = await fetchRaceCtx(raceArg); }
    catch (e) { console.error(`race ctx failed: ${e.message}`); }
    if (!title && ctx) title = `${ctx.course} ${ctx.time} — ${ctx.distance}`;
  }
  if (!title) title = path.basename(csvPath, '.csv');

  const html = renderHtml({ title, ctx, data });
  fs.writeFileSync(outPath, html);
  console.log(`wrote ${outPath} (${data.length} rows${ctx ? `, race ctx ${ctx.course} ${ctx.time}` : ''})`);
})().catch((e) => { console.error('ERROR: ' + e.message); process.exit(1); });

function yardsForDistance(distStr) {
  const m = String(distStr || '').match(/(?:(\d+)m)?\s*(?:(\d+)f)?\s*(?:(\d+)y)?/);
  return m ? (+m[1] || 0) * 1760 + (+m[2] || 0) * 220 + (+m[3] || 0) : 0;
}

function renderHtml({ title, ctx, data }) {
  const targetYards = ctx ? yardsForDistance(ctx.distance) : null;
  const payload = JSON.stringify({ data, targetYards }).replace(/</g, '\\u003c');
  const metaCtx = ctx ? `
      <span><strong>${htmlEsc(ctx.course)}</strong> · ${htmlEsc(ctx.date)} ${htmlEsc(ctx.time)}</span>
      <span>${htmlEsc(ctx.distance)} · ${htmlEsc(ctx.going)} · Class ${htmlEsc(ctx.raceClass || '-')}</span>
      <span>${ctx.runners} runners${ctx.nonRunners.length ? ` · <span class="nr">NR: ${htmlEsc(ctx.nonRunners.join(', '))}</span>` : ''}</span>
      <span class="race-name">${htmlEsc(ctx.raceName)}</span>` : '';

  return [
    '<title>' + htmlEsc(title) + '</title>',
    '<meta name="claude:viewport-fit-sides" content="cover">',
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap">',
    STYLE,
    '<main>',
    '  <h1>' + htmlEsc(title) + '</h1>',
    '  <div class="meta">' + metaCtx + '<span>' + data.length + ' past runs</span></div>',
    filterBar(ctx),
    '  <div class="tablewrap"><table><thead><tr id="hdr"></tr></thead><tbody id="tbody"></tbody></table></div>',
    '</main>',
    '<script type="application/json" id="payload">' + payload + '</script>',
    '<script>' + CLIENT_JS + '</script>',
  ].join('\n');
}

function filterBar(ctx) {
  const nearChip = ctx
    ? `<span class="chip" data-val="near">Near today ±2f</span>`
    : '';
  return `<div class="filters">
  <input id="q" type="search" placeholder="Search horse, course, jockey, race">
  <span class="chip-group" data-field="race_type">
    <span class="chip-group-label">Code</span>
    <span class="chip on" data-val="">All</span>
    <span class="chip" data-val="F">Flat</span>
    <span class="chip" data-val="H">Hurdle</span>
    <span class="chip" data-val="C">Chase</span>
    <span class="chip" data-val="B">Bumper</span>
  </span>
  <span class="chip-group" data-field="going_band">
    <span class="chip-group-label">Going</span>
    <span class="chip on" data-val="">Any</span>
    <span class="chip" data-val="Fast">Fast</span>
    <span class="chip" data-val="Good">Good</span>
    <span class="chip" data-val="Soft">Soft</span>
    <span class="chip" data-val="Std">Standard</span>
  </span>
  <span class="chip-group" data-field="distance">
    <span class="chip-group-label">Distance</span>
    <span class="chip on" data-val="">Any</span>
    ${nearChip}
    <span class="chip" data-val="0-1210">5f</span>
    <span class="chip" data-val="1211-1430">6f</span>
    <span class="chip" data-val="1431-1650">7f</span>
    <span class="chip" data-val="1651-1980">1m</span>
    <span class="chip" data-val="1981-2420">1m 2f</span>
    <span class="chip" data-val="2421-2860">1m 4f</span>
    <span class="chip" data-val="2861-3960">2m</span>
    <span class="chip" data-val="3961-4840">2m 4f</span>
    <span class="chip" data-val="4841-5720">3m</span>
    <span class="chip" data-val="5721-6600">3m 4f</span>
    <span class="chip" data-val="6601-99999">4m+</span>
  </span>
  <span class="chip-group" data-field="position">
    <span class="chip-group-label">Position</span>
    <span class="chip on" data-val="">Any</span>
    <span class="chip" data-val="won">Won</span>
    <span class="chip" data-val="placed">Placed 1-3</span>
    <span class="chip" data-val="top6">Top 6</span>
    <span class="chip" data-val="dnf">DNF</span>
  </span>
  <span class="count" id="count"></span>
</div>`;
}

const STYLE = `<style>
  /* Paper-ground + racing green. Light/dark via :root tokens. */
  :root {
    --bg: #F7F4EC;
    --fg: #1C2321;
    --fg-muted: #5F685F;
    --line: #E1DBCC;
    --surface: #FFFFFF;
    --surface-alt: #F1ECDE;
    --accent: #1E5631;
    --accent-soft: #D6E4D9;
    --fast: #A8C6AE;
    --gold: #C8A95C;
    --silver: #B8B7B1;
    --bronze: #B3824E;
    --warn: #B23A48;
    padding-left: max(16px, env(safe-area-inset-left, 0px));
    padding-right: max(16px, env(safe-area-inset-right, 0px));
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #10130E;
      --fg: #EDE7D4;
      --fg-muted: #90938A;
      --line: #262A1F;
      --surface: #171A14;
      --surface-alt: #1E221A;
      --accent: #7BC18D;
      --accent-soft: #223126;
      --fast: #2E4530;
      --gold: #DDBB6D;
      --silver: #BFBEB7;
      --bronze: #C58D58;
      --warn: #E07784;
      color-scheme: dark;
    }
  }
  :root[data-theme="dark"] {
    --bg: #10130E;
    --fg: #EDE7D4;
    --fg-muted: #90938A;
    --line: #262A1F;
    --surface: #171A14;
    --surface-alt: #1E221A;
    --accent: #7BC18D;
    --accent-soft: #223126;
    --fast: #2E4530;
    --gold: #DDBB6D;
    --silver: #BFBEB7;
    --bronze: #C58D58;
    --warn: #E07784;
    color-scheme: dark;
  }
  body {
    background: var(--bg); color: var(--fg); margin: 0;
    font: 14px/1.5 Inter, system-ui, -apple-system, sans-serif;
  }
  main { padding-block: 24px; max-width: 1400px; margin: 0 auto; }
  h1 {
    font: 600 26px/1.15 "Space Grotesk", Inter, system-ui, sans-serif;
    letter-spacing: -0.015em;
    margin: 0 0 6px;
  }
  .meta {
    color: var(--fg-muted); font-size: 13px;
    display: flex; gap: 16px; flex-wrap: wrap; align-items: baseline;
    margin-bottom: 18px; padding-bottom: 14px;
    border-bottom: 1px solid var(--line);
  }
  .meta strong { color: var(--fg); font-weight: 600; }
  .meta .race-name { font-style: italic; }
  .meta .nr { color: var(--warn); }
  .filters {
    display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
    margin-bottom: 14px;
  }
  .filters input[type="search"] {
    padding: 7px 12px; min-width: 220px;
    border: 1px solid var(--line); border-radius: 6px;
    background: var(--surface); color: var(--fg);
    font: inherit;
  }
  .filters input[type="search"]:focus {
    outline: 2px solid var(--accent); outline-offset: -1px;
    border-color: var(--accent);
  }
  .chip-group { display: inline-flex; gap: 4px; align-items: center; }
  .chip-group-label { font-size: 11px; color: var(--fg-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-right: 4px; }
  .chip {
    padding: 5px 11px; font-size: 12px; font-weight: 500;
    border: 1px solid var(--line); border-radius: 999px;
    background: var(--surface); color: var(--fg-muted);
    cursor: pointer; user-select: none;
    transition: background 120ms, color 120ms, border-color 120ms;
  }
  .chip:hover { color: var(--fg); }
  .chip.on {
    background: var(--accent); color: #FFFFFF; border-color: var(--accent);
  }
  .count { font-size: 12px; color: var(--fg-muted); margin-left: auto; }
  .tablewrap {
    overflow-x: auto;
    border: 1px solid var(--line); border-radius: 10px;
    background: var(--surface);
  }
  table {
    width: 100%; border-collapse: separate; border-spacing: 0;
    font-variant-numeric: tabular-nums;
  }
  th, td {
    padding: 7px 11px; font-size: 13px;
    border-bottom: 1px solid var(--line);
    white-space: nowrap; text-align: left;
  }
  thead th {
    background: var(--surface); position: sticky; top: 0;
    font-weight: 500; color: var(--fg-muted); cursor: pointer;
    user-select: none;
    border-bottom: 2px solid var(--line);
  }
  thead th:hover { color: var(--fg); }
  thead th.sorted { color: var(--fg); }
  thead th.sorted::after { content: " ↓"; font-weight: 400; opacity: 0.6; }
  thead th.sorted.asc::after { content: " ↑"; font-weight: 400; opacity: 0.6; }
  tbody tr:nth-child(even) { background: var(--surface-alt); }
  td.num { text-align: right; }
  td.pos-1 { background: color-mix(in srgb, var(--gold) 30%, transparent); font-weight: 600; }
  td.pos-2 { background: color-mix(in srgb, var(--silver) 30%, transparent); font-weight: 500; }
  td.pos-3 { background: color-mix(in srgb, var(--bronze) 25%, transparent); font-weight: 500; }
  td.inferred { position: relative; }
  td.inferred .bar {
    position: absolute; inset: 0 auto 0 0;
    background: color-mix(in srgb, var(--fast) 55%, transparent);
    z-index: 0;
  }
  td.inferred span { position: relative; z-index: 1; }
  .horse { font-weight: 600; color: var(--fg); }
  @media (max-width: 640px) {
    h1 { font-size: 22px; }
    .meta { font-size: 12px; gap: 10px; }
    .chip-group-label { display: none; }
  }
</style>`;

const FILTER_BAR = `<div class="filters">
  <input id="q" type="search" placeholder="Search horse, course, jockey, race">
  <span class="chip-group" data-field="race_type">
    <span class="chip-group-label">Code</span>
    <span class="chip on" data-val="">All</span>
    <span class="chip" data-val="F">Flat</span>
    <span class="chip" data-val="H">Hurdle</span>
    <span class="chip" data-val="C">Chase</span>
    <span class="chip" data-val="B">Bumper</span>
  </span>
  <span class="chip-group" data-field="going_band">
    <span class="chip-group-label">Going</span>
    <span class="chip on" data-val="">Any</span>
    <span class="chip" data-val="Fast">Fast</span>
    <span class="chip" data-val="Good">Good</span>
    <span class="chip" data-val="Soft">Soft</span>
    <span class="chip" data-val="Std">Standard</span>
  </span>
  <span class="count" id="count"></span>
</div>`;

// Client-side script. Kept in one string with regular concatenation so no
// backtick escaping is needed when embedded inside the page template.
const CLIENT_JS = [
  "(function(){",
  "  var payload = JSON.parse(document.getElementById('payload').textContent);",
  "  var data = payload.data;",
  "  var targetYards = payload.targetYards;",
  "  var GOING_BAND = {",
  "    GF:'Fast', Firm:'Fast', 'Good to Firm':'Fast',",
  "    Gd:'Good', Good:'Good', GS:'Good', 'Good to Soft':'Good',",
  "    Sft:'Soft', Soft:'Soft', Hvy:'Soft', Heavy:'Soft',",
  "    Std:'Std', Standard:'Std', 'Std/Slow':'Std', Slow:'Std'",
  "  };",
  "  data.forEach(function(r){",
  "    r.going_band = GOING_BAND[r.going_code] || GOING_BAND[r.going] || '';",
  "  });",
  "  function esc(s){ return String(s==null?'':s).replace(/[&<>\"']/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c];}); }",
  "  function num(v, d){ return (v==null || isNaN(v)) ? '' : (d==null ? v : Number(v).toFixed(d)); }",
  "  var cols = [",
  "    { k:'horse_name', label:'Horse', fmt:function(v){return '<span class=\"horse\">'+esc(v)+'</span>';} },",
  "    { k:'date', label:'Date' },",
  "    { k:'course_code', label:'Crs' },",
  "    { k:'race_type', label:'Type' },",
  "    { k:'distance', label:'Dist' },",
  "    { k:'distance_yards', label:'Yds', num:true },",
  "    { k:'going_code', label:'Going' },",
  "    { k:'class', label:'Cl', num:true },",
  "    { k:'handicap', label:'Hcp' },",
  "    { k:'position', label:'Pos', num:true, fmt:function(v,r){ if(!v) return ''; return v + '/' + (r.field_size||''); }, cellClass:function(r){ return r.position===1?'pos-1':r.position===2?'pos-2':r.position===3?'pos-3':''; } },",
  "    { k:'btn_winner_lengths', label:'Btn L', num:true, fmt:function(v){return num(v,2);} },",
  "    { k:'winner_time_sec', label:'Winner s', num:true, fmt:function(v){return num(v,2);} },",
  "    { k:'est_horse_time_sec', label:'Inferred s', num:true, inferred:true, fmt:function(v){return num(v,2);} },",
  "    { k:'est_horse_time_str', label:'Inferred' },",
  "    { k:'weight_lb', label:'Wt lb', num:true },",
  "    { k:'official_rating', label:'OR', num:true },",
  "    { k:'jockey', label:'Jockey' }",
  "  ];",
  "  var sortKey = 'est_horse_time_sec', sortDir = 1;",
  "  var q = '', race_type = '', going_band = '', distance = '', position = '';",
  "  var hdr = document.getElementById('hdr');",
  "  cols.forEach(function(c){",
  "    var th = document.createElement('th');",
  "    th.textContent = c.label;",
  "    if (c.num) th.className = 'num';",
  "    th.dataset.key = c.k;",
  "    hdr.appendChild(th);",
  "  });",
  "  function cmp(a,b){",
  "    var va = a[sortKey], vb = b[sortKey];",
  "    var ea = (va==null||va===''), eb = (vb==null||vb==='');",
  "    if (ea && eb) return 0;",
  "    if (ea) return 1;",
  "    if (eb) return -1;",
  "    if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * sortDir;",
  "    return String(va).localeCompare(String(vb)) * sortDir;",
  "  }",
  "  function inDistance(r){",
  "    if (!distance) return true;",
  "    var y = r.distance_yards;",
  "    if (typeof y !== 'number' || isNaN(y)) return false;",
  "    if (distance === 'near') {",
  "      if (targetYards == null) return true;",
  "      return Math.abs(y - targetYards) <= 440;",   // 2f = 440 yards
  "    }",
  "    var parts = distance.split('-');",
  "    var lo = parseFloat(parts[0]), hi = parseFloat(parts[1]);",
  "    return y >= lo && y <= hi;",
  "  }",
  "  function inPosition(r){",
  "    if (!position) return true;",
  "    var p = r.position, hasP = (typeof p === 'number' && !isNaN(p) && p > 0);",
  "    if (position === 'dnf') return !hasP;",
  "    if (!hasP) return false;",
  "    if (position === 'won') return p === 1;",
  "    if (position === 'placed') return p <= 3;",
  "    if (position === 'top6') return p <= 6;",
  "    return true;",
  "  }",
  "  function filtered(){",
  "    var ql = q.toLowerCase();",
  "    return data.filter(function(r){",
  "      if (race_type && r.race_type !== race_type) return false;",
  "      if (going_band && r.going_band !== going_band) return false;",
  "      if (!inDistance(r)) return false;",
  "      if (!inPosition(r)) return false;",
  "      if (!ql) return true;",
  "      return [r.horse_name, r.course, r.jockey, r.race_name].some(function(v){ return String(v||'').toLowerCase().indexOf(ql) >= 0; });",
  "    });",
  "  }",
  "  function render(){",
  "    var rows = filtered().slice().sort(cmp);",
  "    var times = [];",
  "    rows.forEach(function(r){ var v = r.est_horse_time_sec; if (typeof v === 'number' && !isNaN(v)) times.push(v); });",
  "    var tmin = Math.min.apply(null, times), tmax = Math.max.apply(null, times);",
  "    var span = Math.max(0.0001, tmax - tmin);",
  "    var html = rows.map(function(r){",
  "      return '<tr>' + cols.map(function(c){",
  "        var v = r[c.k];",
  "        var inner = c.fmt ? c.fmt(v, r) : esc(v);",
  "        var cls = c.num ? 'num' : '';",
  "        if (c.cellClass) { var extra = c.cellClass(r); if (extra) cls += (cls?' ':'') + extra; }",
  "        if (c.inferred && typeof v === 'number' && !isNaN(v) && times.length > 1) {",
  "          var pct = 1 - (v - tmin) / span;",
  "          var w = (pct * 100).toFixed(1) + '%';",
  "          return '<td class=\"' + cls + ' inferred\"><div class=\"bar\" style=\"width:' + w + '\"></div><span>' + inner + '</span></td>';",
  "        }",
  "        return '<td class=\"' + cls + '\">' + inner + '</td>';",
  "      }).join('') + '</tr>';",
  "    }).join('');",
  "    document.getElementById('tbody').innerHTML = html;",
  "    document.getElementById('count').textContent = rows.length + ' of ' + data.length + ' runs';",
  "    Array.prototype.forEach.call(hdr.querySelectorAll('th'), function(th){",
  "      var on = (th.dataset.key === sortKey);",
  "      th.className = (th.classList.contains('num') ? 'num' : '') + (on ? ' sorted' + (sortDir === 1 ? ' asc' : '') : '');",
  "    });",
  "  }",
  "  hdr.addEventListener('click', function(e){",
  "    var th = e.target.closest('th'); if (!th) return;",
  "    var k = th.dataset.key;",
  "    if (sortKey === k) sortDir = -sortDir; else { sortKey = k; sortDir = 1; }",
  "    render();",
  "  });",
  "  document.getElementById('q').addEventListener('input', function(e){ q = e.target.value; render(); });",
  "  Array.prototype.forEach.call(document.querySelectorAll('.chip-group'), function(group){",
  "    group.addEventListener('click', function(e){",
  "      var chip = e.target.closest('.chip'); if (!chip) return;",
  "      Array.prototype.forEach.call(group.querySelectorAll('.chip'), function(c){ c.classList.remove('on'); });",
  "      chip.classList.add('on');",
  "      var field = group.dataset.field, val = chip.dataset.val;",
  "      if (field === 'race_type') race_type = val;",
  "      if (field === 'going_band') going_band = val;",
  "      if (field === 'distance') distance = val;",
  "      if (field === 'position') position = val;",
  "      render();",
  "    });",
  "  });",
  "  render();",
  "})();",
].join('\n');
