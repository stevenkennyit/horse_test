// AI agent picks and results: FLAT. One object per meeting.
// Loaded by ../../dashboard.html alongside jumps/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Same schema as jumps/data/results.js (see the field notes there): picks with prob, finish and sp; no bets. Add a meeting object to `meetings`
// after each race day; set `status: "pending"` until the result is in.
// Error codes share one list with jumps: reuse an existing code if it fits, otherwise add a new letter here.

//
// FILE SPLIT (token economy, added 3 Nov 2026): this live file holds only meetings that still have a
//   race with status "pending" (plus the errorTypes definitions). Fully-settled meetings are moved to
//   results-archive.js by /review once all their races are settled. The dashboard loads both files;
//   upcoming.html loads only this one. /analyse appends new pending meetings here and reads only this file.

(function (data) {
  const D = (window.AGENT_DATA = window.AGENT_DATA || { errorTypes: {}, meetings: [] });
  Object.assign(D.errorTypes, data.errorTypes || {});
  D.meetings.push(...data.meetings);
})({
  "errorTypes": {
    "G": "Older horse (4yo+) returning after 200+ days kept as a Win or Each-Way pick at a normal probability, with the long absence recorded as a doubt but not priced",
    "H": "Win kept despite its own recorded recurring in-race fault (slow starts, no finishing kick, headed late) seen in 3+ recent runs; the fault recurred in the race (Step 13)",
    "I": "Horse that ran the previous day (double declaration) made a selection without a race-morning declaration check; it was withdrawn",
    "J": "Second run after a long layoff rated on the comeback run rather than on its pre-layoff form",
    "F": "Live outsider (recent winner, franked figure or favourable mark/yard move) left at a near-zero probability despite its own outsider-check case",
    "K": "Consistent placer (winless in its last 5+ and/or a beaten favourite) kept as the Win despite its own recorded placer-profile doubt; the profile recurred and it ran unplaced while a stronger-credentialled rival won"
  },
  "meetings": []
});
