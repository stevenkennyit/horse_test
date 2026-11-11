#!/usr/bin/env node
// Cross-check Sporting Life against Racing Post for one race.
//   node tools/xcheck.js <YYYY-MM-DD> <slRaceId> <rp-output.txt>
// rp-output.txt = the text returned by tools/browser/rp-card.js (save it as-is).
// Prints every disagreement: card (OR, weight, NR, claims) and each run in the RP window
// (position, field size, OR, weight), plus runs one source has and the other lacks.
// Silence = agreement. Use the result to tag claims verified (two sources agree) vs asserted.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const [date, slId, rpFile] = process.argv.slice(2);
if (!rpFile) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 7).join('\n')); process.exit(1); }

const sl = (...a) => execFileSync(process.execPath, [path.join(__dirname, 'sl.js'), ...a], { encoding: 'utf8' });
const norm = (s) => s.toLowerCase().replace(/\s*\((ire|gb|fr|ger|usa|aus|nz)\)/g, '').replace(/[^a-z]/g, '');
const lbs = (w) => { const m = String(w).match(/(\d+)-(\d+)/); return m ? +m[1] * 14 + +m[2] : null; };
const CRS = { MAR: 'MKR', HER: 'HFD', SOU: 'STH', STH: 'STH', FFO: 'FFO', WCN: 'WCN' }; // RP->SL course codes that differ

// --- RP text ---
const rp = fs.readFileSync(rpFile, 'utf8').split('\n');
const rpCard = {}, rpRuns = {};
let cur = null;
for (const line of rp) {
  const c = line.split(' | ');
  if (/^\d+ \| .+\(\d+\) \|/.test(line)) rpCard[norm(c[1].replace(/\(\d+\)/, ''))] = { name: c[1], wt: c[3], claim: c[4], or: c[6], days: c[9], nr: c[14] === 'NR' };
  const h = line.match(/^### (.+?) — /);
  if (h) { cur = norm(h[1]); rpRuns[cur] = []; continue; }
  if (cur && /^\d{4}-\d\d-\d\d \|/.test(line)) rpRuns[cur].push({ date: c[0], crs: c[1], pos: c[7], wt: c[9], or: c[10].replace('OR', ''), comment: c.slice(16).join(' | ') });
}

// --- SL ---
const card = sl('card', date, slId).split('\n');
const issues = [];
const slCard = {};
for (const line of card) {
  const c = line.split(' | ');
  if (!/^\d+ \| .+\(\d+\) \|/.test(line)) continue;
  const id = c[1].match(/\((\d+)\)/)[1];
  slCard[norm(c[1].replace(/\(\d+\)/, ''))] = { name: c[1], id, wt: c[3], or: c[4], days: c[8], status: c[11] };
}
for (const [k, s] of Object.entries(slCard)) {
  const r = rpCard[k];
  if (!r) { issues.push(`CARD ${s.name}: on SL card, not on RP card`); continue; }
  if (String(s.or) !== String(r.or)) issues.push(`CARD ${s.name}: OR SL ${s.or} vs RP ${r.or}`);
  if (lbs(s.wt) !== lbs(r.wt)) issues.push(`CARD ${s.name}: listed weight SL ${s.wt} vs RP ${r.wt}`);
  if (String(s.days) !== String(r.days)) issues.push(`CARD ${s.name}: days since run SL ${s.days} vs RP ${r.days}`);
  if ((s.status !== 'RUNNER') !== r.nr) issues.push(`CARD ${s.name}: status SL ${s.status} vs RP ${r.nr ? 'NR' : 'runner'}`);
  if (r.claim && r.claim !== '-') issues.push(`NOTE ${s.name}: claim ${r.claim} (RP only; SL weight ${s.wt} is before it)`);
}
for (const k of Object.keys(rpCard)) if (!slCard[k]) issues.push(`CARD ${rpCard[k].name}: on RP card, not on SL card`);

for (const [k, s] of Object.entries(slCard)) {
  const rr = rpRuns[k];
  if (!rr || !rr.length) continue;
  const prof = sl('profile', s.id).split('\n').filter((l) => /^\d{4}-\d\d-\d\d \|/.test(l)).map((l) => {
    const c = l.split(' | ');
    const hcp = c[6] === 'Hcp';
    const o = hcp ? 1 : 0;
    return { date: c[0], crs: c[1], pos: c[6 + o], wt: c[8 + o], or: (c[9 + o] || '').replace('OR', '') };
  });
  const oldest = rr[rr.length - 1].date;
  for (const r of rr) {
    const m = prof.find((p) => p.date === r.date);
    if (!m && /^NR\//.test(r.pos)) continue; // RP lists non-runner entries in form; SL does not
    if (!m) { issues.push(`RUN ${s.name} ${r.date} ${r.crs}: on RP, missing from SL profile`); continue; }
    const [rpPos, rpRan] = r.pos.split('/');
    const [slPos, slRan] = m.pos.split('/');
    if (rpPos !== slPos && !(rpPos === 'NR')) issues.push(`RUN ${s.name} ${r.date} ${r.crs}: position RP ${r.pos} vs SL ${m.pos}`);
    else if (rpRan !== slRan) issues.push(`RUN ${s.name} ${r.date} ${r.crs}: field size RP ${rpRan} vs SL ${slRan}`);
    if (r.or && m.or && r.or !== '-' && m.or !== '-' && r.or !== '0' && r.or !== m.or) issues.push(`RUN ${s.name} ${r.date}: OR RP ${r.or} vs SL ${m.or}`);
    const claim = +((r.wt.match(/\((\d+)\)/) || [])[1] || 0);
    const rpListed = lbs(r.wt) + claim, slListed = lbs(m.wt);
    if (rpPos !== 'NR' && rpListed && slListed && rpListed !== slListed) issues.push(`RUN ${s.name} ${r.date}: weight RP ${r.wt} (=${rpListed}lb listed) vs SL ${m.wt}`);
  }
  for (const p of prof.filter((p) => p.date >= oldest)) if (!rr.find((r) => r.date === p.date)) issues.push(`RUN ${s.name} ${p.date} ${p.crs}: on SL profile, missing from RP form`);
}
console.log(`Cross-check SL ${slId} vs RP (${rpFile}) — ${issues.length} item(s)`);
console.log(issues.join('\n') || 'No disagreements in the overlapping window.');
