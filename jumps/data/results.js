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
      "date": "2026-11-09",
      "course": "Punchestown",
      "country": "IRE",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good to Yielding, Good in places (Sporting Life meeting summary, checked 07:05 GMT 9 Nov). Right-handed galloping track, stiff uphill finish.",
      "races": [
        {
          "time": "12:30",
          "name": "Matchbook Betting Exchange Rated Novice Chase",
          "type": "chase",
          "distance": "2m136y",
          "going": "Good to Yielding, Good in places",
          "runners": 8,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-09_punchestown/1230_matchbook-betting-exchange-rated-novice-chase.md",
          "updated": "07:12 Mon 9 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Rattledelatch",
              "prob": 0.28,
              "placeProb": 0.6,
              "finish": "-",
              "confidence": "low",
              "reason": "Top chase mark (118) and best chase form: 2.5L 2nd to Will Do (128) at Listowel at level weights, then won at Tramore 8 Oct; 3/3 chase completions with clean jumping since August; fit (32 days).",
              "against": "All chase form at 2m4f-2m6f from off the pace, so 2m fences at this level untested; 4lb penalty leaves him 2-6lb worse off on marks; Tramore race modest; small yard."
            },
            {
              "role": "ew",
              "horse": "Butter Fingers",
              "prob": 0.17,
              "placeProb": 0.45,
              "finish": "-",
              "confidence": "low",
              "reason": "Only runner with a ~2m chase win (Wexford, GY); 1.75L 2nd at Kilbeggan off 109 ahead of 122-132 horses; 7lb claim makes him 2lb better off than Rattledelatch on marks; prominent; completed last 6.",
              "against": "An unseat and minor errors in 4 of 7 chases; exposed (3 wins from 23 runs); yard 1 winner from 49 runners in the last month."
            },
            {
              "role": "danger",
              "horse": "Torpille Dagrostis",
              "prob": 0.14,
              "placeProb": 0.38,
              "finish": "-",
              "confidence": "low",
              "reason": "Best hurdle mark among the chase debutants (118), Elliott/Kennedy; placed twice at Punchestown behind good Mullins mares.",
              "against": "Chase debutant off 208 days; all form at 2m3f+ on soft/heavy, her one good-ground run was her worst, and no mares' allowance today."
            }
          ],
          "errors": [],
          "notes": ""
        },
        {
          "time": "13:00",
          "name": "Irish Stallion Farms EBF Fillies Academy Hurdle",
          "type": "hurdle",
          "distance": "2m2f132y",
          "going": "Good to Yielding, Good in places",
          "runners": 9,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-09_punchestown/1300_irish-stallion-farms-ebf-fillies-academy-hurdle.md",
          "updated": "07:25 Mon 9 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Silk's Legacy",
              "prob": 0.19,
              "placeProb": 0.48,
              "finish": "-",
              "confidence": "low",
              "reason": "Unraced Elliott filly out of Fred Winter winner Silk Affair; Elliott won this race in 2025 with a debutant and has the only Academy-series winner among today's trainers (1/6).",
              "against": "Unraced, so jumping unknown; Elliott's other Academy runners PU/UR/F/14th; can't be separated on hard evidence from the two Mullins newcomers."
            },
            {
              "role": "ew",
              "horse": "Destinedforhistory",
              "prob": 0.12,
              "placeProb": 0.36,
              "finish": "-",
              "confidence": "low",
              "reason": "Only filly with recorded front-running form; was 3rd ahead of Why Wait when falling 2 out at Cork, and likely to get a soft lead among six debutants.",
              "against": "Raced freely, headed after 3 out with no impression before falling; about 1f further today on a stiff finish, and has never completed."
            },
            {
              "role": "danger",
              "horse": "Smokin Aces",
              "prob": 0.14,
              "placeProb": 0.42,
              "finish": "-",
              "confidence": "low",
              "reason": "Unraced Mullins filly, yard 7/24 in 14 days; Brian Hayes booking the tie-break over stablemate Glenageary.",
              "against": "Unraced; level with Glenageary (0.14) on evidence."
            }
          ],
          "errors": [],
          "notes": ""
        }
      ]
    }
  ]
});
