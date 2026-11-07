// AI agent picks and results: JUMPS. One object per meeting.
// Loaded by ../../dashboard.html alongside flat/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Add a new meeting object to `meetings` after each race day; set `status: "pending"` until the result is in.
// The agent ranks picks only; it does not recommend bets or check prices. The user decides how to bet.
//
// Field notes
//   picks[].role      "win" | "ew" (each-way) | "danger" - the selection's job (current format, since 27 Oct 2026).
//                     Win = most likely winner (scored as a win bet); EW = best each-way proposition on our own
//                     numbers (scored as an each-way bet); Danger = chief threat, not staked (coverage only).
//   picks[].prob      agent's stated WIN probability (0-1) at analysis time (fair price = 1/prob, shown by the dashboard)
//   picks[].placeProb agent's stated chance (0-1) the horse finishes within the each-way places for the field size
//   picks[].finish    official finishing position, or "F", "PU", "UR", "BD", "R"; "-" while pending
//   picks[].sp        starting price (fractional, e.g. "5/2", "Evens"), added at review from the result page
//   picks[].confidence, .reason, .against   "low"|"medium"|"high"; one-line case for and against (shown on upcoming.html)
//   picks[].rank      LEGACY ordering (1,2,3) used by meetings before 27 Oct 2026; .danger true marked the danger.
//                     The dashboard maps legacy rows: rank 1 -> Win, rank 2 -> Each-Way, danger -> Danger.
//   writeup, updated  race write-up path; when the picks were last checked (e.g. "17:50 Sun 25 Oct")
//   winner.agentProb  probability the agent stated for the eventual winner; null if the winner was not rated
//   grade             "held" | "mixed" | "failed" | "pending" - judged on the reasoning, not the result
//   errors            judgement-error codes from `errorTypes`
//   source            "full" = full agent analysis; "verified" = user-supplied picks checked by the agent
//
// Legacy fields (25 Oct 2026 Galway only; no longer recorded): picks[].price = best price seen at analysis time;
//   bets[] = paper bets from the old recommended bet slip (stake/returned in points). The dashboard ignores both.

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
    "A": "Early-career ground runs held against an improved horse",
    "B": "Recorded jumping doubt overridden by price",
    "C": "Keen-goer made top pick in a weak pace",
    "D": "Forecasts in a 10+ runner handicap (retired: bets no longer recommended)",
    "E": "Unraced newcomer rated above raced rivals on price, pedigree or booking",
    "F": "A standout figure or low mark ranked above the pick's own stated current-form, layoff or stable-form warning",
    "G": "A jumping debutant (unproven at the code) ranked above a proven, reliable completer at that code",
    "H": "Non-fatal jumping-fluency comments ('not fluent'/'mistake') over-weighted to write off a horse with a clean completion record",
    "I": "Win probability and confidence over-concentrated on a pick carrying its own recorded jumping or riding (amateur claim) doubts",
    "J": "A well-handicapped, well-backed horse left unranked (or downgraded) purely on a run of recent non-completions (PU/F) treated as proof it 'won't complete'",
    "K": "An Each-Way forced onto a market-pariah/no-genuine-chance outsider with an inflated place probability, instead of omitting the Each-Way in a race with no sound place proposition",
    "L": "Exposed, modest 'proven' hurdle form ranked above unexposed newcomers or point-winners from powerful yards in a season-opening novice/maiden hurdle or bumper",
    "M": "A lone confirmed front-runner in a small or steadily-run field left unselected or opposed despite a flagged uncontested-lead / pace advantage (the pace read was right but not acted on)",
    "N": "A horse dropping sharply in class and/or fitted with first-time headgear left under-ranked on its beaten form at the higher level, below exposed, modest or long-absent rivals"
  },
  "meetings": [
    {
      "date": "2026-11-07",
      "course": "Gowran Park",
      "country": "IRE",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Chase course Good; hurdle course Good to Yielding (SL card header, checked 09:36 GMT 7 Nov; dry). Right-handed galloping track, uphill run-in — prominent bias.",
      "races": [
        {
          "time": "12:10",
          "name": "Irish Stallion Farms EBF Mares Beginners Chase",
          "type": "chase",
          "distance": "2m",
          "going": "Good",
          "runners": 4,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1210_irish-stallion-farms-ebf-mares-beginners-chase.md",
          "updated": "09:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Sixandahalf",
              "prob": 0.47,
              "placeProb": 0.72,
              "finish": "-",
              "confidence": "medium",
              "reason": "Clear class edge — Grade 1-placed hurdler (~16lb best in race on hurdle ratings), stays 2m well, completed her one chase start making the running; prominent style suits the stiff uphill Gowran finish.",
              "against": "Beaten at 2/9 on her only chase start (2-runner match) and weakened late; jumping/battle under pressure unproven on one run, and she concedes 7lb to the two claimers."
            },
            {
              "role": "danger",
              "horse": "Miss Fourie",
              "prob": 0.28,
              "placeProb": 0.58,
              "finish": "-",
              "confidence": "medium",
              "reason": "True OR-122 hurdler who led and looked the winner on her last chase start before a bad blunder at the last (3rd of 4); clearly able if she jumps.",
              "against": "Recurring jumping errors over fences and a held-up style that works against the prominent-bias track."
            }
          ]
        }
      ]
    }
  ]
});
