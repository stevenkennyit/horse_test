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
    "J": "A well-handicapped, well-backed horse left unranked (or downgraded) purely on a run of recent non-completions (PU/F) treated as proof it 'won't complete'"
  },
  "meetings": [
    {
      "date": "2026-11-05",
      "course": "Newbury",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdle course good to soft (provisional, overnight Racing Post card, checked 21:50 Wed 4 Nov; no chases today; official GoingStick reading due the morning of 5 Nov)",
      "dataErrors": [],
      "races": [
        {
          "time": "15:33",
          "name": "British Horse Society Open National Hunt Flat Race (Category 1 Elimination) (GBB Race) (Div I)",
          "type": "NH flat (bumper)",
          "distance": "2m69y",
          "going": "Good to soft (provisional)",
          "runners": 11,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "New-season bumper of newcomers: only 3 of 11 have any race form (single points), the rest unraced under Rules. Provisional overnight going; re-check going + non-runners AM 5 Nov.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-05_newbury/1533_bhs-open-nh-flat-div1.md",
          "updated": "22:10 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Wordfromhome", "prob": 0.28, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Only confirmed race-winner in the field (won 4yo geldings maiden point, Monksgrange 29 Mar 2026); now Nicholls/S Twiston-Davies, EUR65k Derby Sale; galloping stayers' track suits a point winner.", "against": "Point-to-bumper translation unproven, 221 days off and a Rules debut, against well-bred fresh newcomers from Henderson, Fry, Skelton and Greatrex." },
            { "role": "ew", "horse": "He's Happy", "prob": 0.08, "placeProb": 0.30, "finish": "-", "confidence": "low", "reason": "The only other raced runner (2nd in a point) and the field's only 5yo, so most mature; a placed pointer is a sounder each-way basis at a long price than the unraced newcomers.", "against": "Small yard (Syd Hosie), a single placed point with venue/margin not found, ~271-day absence and a bumper debut." },
            { "role": "danger", "horse": "Block Flight", "prob": 0.14, "placeProb": 0.38, "finish": "-", "confidence": "medium", "reason": "Henderson/de Boinville elite newcomer combo on a track that suits the type; chief threat but UNRACED, so capped per Step 14 (not Win, not above 30%)." }
          ]
        }
      ]
    }
  ]
});
