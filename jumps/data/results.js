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
    "I": "Win probability and confidence over-concentrated on a pick carrying its own recorded jumping or riding (amateur claim) doubts"
  },
  "meetings": [
    {
      "date": "2026-11-03",
      "course": "Lingfield",
      "country": "England",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdle Good (Good to Soft in places); Chase Good; 13:02 bumper on Polytrack (Standard/Slow). Checked ~09:55 GMT.",
      "dataErrors": [],
      "races": [
        {
          "time": "13:02",
          "name": "Free Race Replays On attheraces.com Open Maiden NH Flat Race (GBB Race)",
          "type": "NH Flat (bumper, on Polytrack)",
          "distance": "2m",
          "going": "Standard / Slow (Polytrack)",
          "runners": 8,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Newcomers' bumper on the all-weather (no obstacles): 6 of 8 unraced, the 2 with form both tailed off. Confidence low throughout. O Murphy yard in form (2 wins + 4 placed from 7 recent bumper runs, verified). NRs: Jack Dandy, Unbroken Spirit.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-03_lingfield/1302_open-maiden-nh-flat-race.md",
          "updated": "10:25 Tue 3 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Burk Flight",
              "prob": 0.28,
              "placeProb": 0.52,
              "finish": "-",
              "confidence": "low",
              "reason": "Only debutant with evidence beyond a name: NH-bred sire for a bumper, 5lb claim to effective 10-11, in-form O Murphy yard, and the two exposed rivals both ran badly.",
              "against": "Completely unraced; case leans on stable + pedigree (what the market prices hardest) with a 5lb claimer up; any of six newcomers can win."
            },
            {
              "role": "ew",
              "horse": "Moves Like Gold",
              "prob": 0.15,
              "placeProb": 0.42,
              "finish": "-",
              "confidence": "low",
              "reason": "Classy stamina pedigree (Golden Horn x Galileo), joint-lightest at 10-9 after a 7lb claim - genuine place value at a longer price.",
              "against": "Unraced with a 7lb amateur aboard; a top Flat stamina pedigree need not translate to a debut Polytrack bumper."
            },
            {
              "role": "danger",
              "horse": "Powerful Act",
              "prob": 0.14,
              "placeProb": 0.40,
              "finish": "-",
              "confidence": "low",
              "reason": "Smart Kingman/New Approach pedigree with cruising speed, but top weight 11-2 and a miler-ish stamina profile are real 2m debut queries."
            }
          ]
        }
      ]
    }
  ]
});
