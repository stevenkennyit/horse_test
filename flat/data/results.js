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
  "meetings": [
    {
      "date": "2026-11-13",
      "course": "Dundalk",
      "country": "IE",
      "code": "flat",
      "playbook": "flat/AGENTS-flat-v2.md",
      "going": "Standard (Polytrack)",
      "dataErrors": [],
      "races": [
        {
          "time": "17:30",
          "name": "Irish Stallion Farms EBF Race",
          "type": "conditions",
          "distance": "6f",
          "going": "Standard",
          "runners": 11,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "",
          "winner": null,
          "writeup": "flat/analyses/2026-11-13_dundalk/1730_6f-ebf-race.md",
          "updated": "16:45 Fri 13 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Crayons In The Sky",
              "prob": 0.28,
              "placeProb": 0.60,
              "finish": "-",
              "confidence": "medium",
              "price": "3/1",
              "priceAt": "16:26 Fri 13 Nov",
              "reason": "Only recent course-and-distance winner in the race (1/13 Dundalk 6f 28 Oct in 1m 14.00s) off a 1lb-lower weight; 5 runs, 5 top-4 finishes, 3-from-3 top-4 at Dundalk.",
              "against": "5lb weight swing to Normanton on the head-to-head line (worth ~2L) all but erases the 1½L margin — any extra improvement from Normanton overturns her at level weights."
            },
            {
              "role": "ew",
              "horse": "Normanton",
              "prob": 0.22,
              "placeProb": 0.60,
              "finish": "-",
              "confidence": "medium",
              "price": "4/1",
              "priceAt": "16:26 Fri 13 Nov",
              "reason": "Textbook weight reversal — 5lb better off with Crayons for a 1½L C&D defeat on 28 Oct (swing worth ~2L over 6f), lightly raced improver (2 runs, both top-4), and Marnane-trained last year's renewal.",
              "against": "Only 2 career runs — no evidence of what his ceiling looks like; Crayons had a bit in hand that day, so her own improvement could eat the swing."
            },
            {
              "role": "danger",
              "horse": "Supreme Lord",
              "prob": 0.15,
              "placeProb": 0.42,
              "finish": "-",
              "confidence": "medium",
              "price": "9/2",
              "priceAt": "16:26 Fri 13 Nov",
              "reason": "Highest official rating in the field (OR 88) and his in-contention TS 55 for the Navan nursery win off 9-12 is the strongest earned-in-victory time figure; now gelded back to winning 6f trip."
            }
          ]
        }
      ]
    }
  ]
});
