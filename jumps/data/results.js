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
    "N": "A horse dropping sharply in class and/or fitted with first-time headgear left under-ranked on its beaten form at the higher level, below exposed, modest or long-absent rivals",
    "O": "A handicap debutant from maiden company (unexposed, with a stronger independent figure) ranked below exposed handicappers on our own collateral lines, with a single non-completion used as the tie-break against it"
  },
  "meetings": [
    {
      "date": "2026-11-10",
      "course": "Fairyhouse",
      "country": "IRE",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdles good to yielding; chase good to good-to-yielding in places (Sporting Life, 08:06)",
      "dataErrors": [
        "At The Races Smart Stats, weather and rail not found at 08:06",
        "Racing Post cards/results return 406/404 in this session; claims taken from Sporting Life JSON only"
      ],
      "races": [
        {
          "time": "12:30",
          "name": "Irish Stallion Farms EBF Academy Hurdle",
          "type": "hurdle",
          "distance": "2m110y",
          "going": "Good to Yielding",
          "runners": 14,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1230_irish-stallion-farms-ebf-academy-hurdle.md",
          "updated": "08:45 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Quatre Saison",
              "prob": 0.21,
              "placeProb": 0.50,
              "finish": "-",
              "confidence": "low",
              "reason": "Elliott/Kennedy newcomer from a French jumping family, with only two weak raced rivals; win chance capped as an unraced horse.",
              "against": "Unraced, no weight edge; an Elliott runner was pulled up in yesterday's Punchestown Academy fillies' hurdle and last year's edition had 5 non-completers from 14."
            },
            {
              "role": "ew",
              "horse": "Irish Fusilier",
              "prob": 0.11,
              "placeProb": 0.32,
              "finish": "-",
              "confidence": "low",
              "reason": "Filly receiving 7lb from the colts (10-7 v 11-0); Latrobe breeding.",
              "against": "Unraced, Cooper's juvenile-hurdle debut record not found; the allowance is standard."
            },
            {
              "role": "danger",
              "horse": "Garrison Gold",
              "prob": 0.12,
              "placeProb": 0.35,
              "finish": "-",
              "confidence": "low",
              "reason": "Stamina-bred (Yeats, dam a 2m4f hurdle winner) from the Mullins family yard with D Mullins up.",
              "against": "Unraced; may lack gears over 2m."
            }
          ]
        },
        {
          "time": "16:00",
          "name": "Fairyhouse Christmas Party December 12th Point-To-Point Flat Race",
          "type": "bumper",
          "distance": "2m",
          "going": "Good to Yielding",
          "runners": 7,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1600_point-to-point-flat-race.md",
          "updated": "08:40 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Bellahill",
              "prob": 0.30,
              "placeProb": 0.58,
              "finish": "-",
              "confidence": "low-medium",
              "reason": "Only runner with a good Rules run: 2nd by a neck of 11 in a 2m Kilbeggan bumper on good to yielding (verified), closed from 9th at halfway.",
              "against": "81 days off, small yard, one Rules run; unraced Elliott/Cromwell point winners may simply be better."
            },
            {
              "role": "ew",
              "horse": "Unfastened",
              "prob": 0.08,
              "placeProb": 0.27,
              "finish": "-",
              "confidence": "low",
              "reason": "Mare getting 7lb from the geldings, won her point 9 days ago, dam a bumper/hurdle winner.",
              "against": "Unraced under Rules; level of her point form not found."
            },
            {
              "role": "danger",
              "horse": "Chanson Du Jury",
              "prob": 0.26,
              "placeProb": 0.52,
              "finish": "-",
              "confidence": "low",
              "reason": "Elliott point winner; Elliott's Unflinching won last year's renewal.",
              "against": "Unraced under Rules, 212 days off."
            }
          ]
        }
      ]
    }
  ]
});
