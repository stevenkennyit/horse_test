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
    "L": "Exposed, modest 'proven' hurdle form ranked above unexposed newcomers or point-winners from powerful yards in a season-opening novice/maiden hurdle or bumper"
  },
  "meetings": [
    {
      "date": "2026-11-06",
      "course": "Aintree",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good to Soft (Good in places) - Sporting Life going page / Racing Post card, checked ~12:00 GMT 6 Nov; autumn fixture run on the Mildmay chase course + hurdle course (NOT the Grand National/Grand Sefton course); no raceday GoingStick published yet. NOTE: analysed with the gap-fill pass skipped at the user's request (single pass per race).",
      "races": [
        {
          "time": "13:15",
          "name": "Download The BetMGM App Novices' Limited Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "3m210y",
          "going": "Good to Soft (Good in places)",
          "runners": 5,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "writeup": "jumps/analyses/2026-11-06_aintree/1315_betmgm-novices-limited-handicap-chase.md",
          "updated": "12:10 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "Off The Jury", "prob": 0.40, "placeProb": 0.62, "finish": "-", "confidence": "medium", "reason": "Only one in the field to have won twice over fences (sound, fluent jumper), a prominent racer suiting the galloping Mildmay course; progressive novice up just 4-5lb for two wins. Fence experience is the key at this staying trip.", "against": "Never won beyond 2m5f; 3m record is one hurdle 3rd plus a PU and a run-out, so 3m210y stamina is unproven; top weight and 142 days off." },
            { "role": "ew", "horse": "Dixie Mafia", "prob": 0.25, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Best each-way value on our numbers: proven stays 3m on soft at this exact course (2nd Aintree 3m149y), won his only chase start comfortably, 2lb well-in and receives 15lb from top; Christian Williams staying yard.", "against": "Only one completed chase start (fencing barely tested), lowest-rated, 196 days off, and two 80/1 hurdle flops on record." },
            { "role": "danger", "horse": "Below The Radar", "prob": 0.15, "placeProb": 0.42, "finish": "-", "confidence": "medium", "reason": "Nicholls/S Twiston-Davies, stays 3m (3rd Newbury 3m on Heavy), gets 7lb and a consistent placer; chief threat if the first two fail. But fell on his only chase start, no win since Mar 2024 and 205 days off." }
          ]
        },
        {
          "time": "13:50",
          "name": "Read Meg Nicholls' Blog At betmgm.co.uk Handicap Hurdle",
          "type": "handicap hurdle",
          "distance": "2m209y",
          "going": "Good to Soft (Good in places)",
          "runners": 7,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "writeup": "jumps/analyses/2026-11-06_aintree/1350_betmgm-handicap-hurdle.md",
          "updated": "12:22 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "All In You", "prob": 0.28, "placeProb": 0.54, "finish": "-", "confidence": "medium", "reason": "Best-treated runner and certain to be fit: won a Cl3 off OR122, runs off 127 after a summer of Flat improvement, ~9lb better off with top-rated Dedicated Hero than when 'badly hampered 2 out' behind him at Ayr; hold-up style suits a race with two front-runners; Sean Bowen booked.", "against": "Modest hurdle CV (one Cl3 win, a G1 PU, a hampered 4th); a closer who needs the race to fall right, and the Flat-to-hurdles fitness read is an inference." },
            { "role": "ew", "horse": "King Ulanda", "prob": 0.08, "placeProb": 0.36, "finish": "-", "confidence": "low", "reason": "Best place-at-a-price: lightest in off 113, in form (beaten a head for 4th in a Cl3 last time), hold-up type who benefits if the front pair duel; likely the biggest price with a real place chance.", "against": "Exposed Cl4-level horse stepping into Cl3; his own card note says the handicapper 'has him about right'; places far more than he wins." },
            { "role": "danger", "horse": "Lyssenko", "prob": 0.19, "placeProb": 0.42, "finish": "-", "confidence": "medium", "reason": "Unbeaten in France (2 Pau wins), Skelton/Harry Skelton, could be ahead of his first British mark of 125. Not staked: 294 days off and untested on good-to-soft vs UK handicap class." }
          ]
        },
        {
          "time": "14:25",
          "name": "BetMGM 'Future Stars' Silver Bowl 'Chasing Excellence' Novices' Chase (GBB Race)",
          "type": "novices' chase",
          "distance": "3m210y",
          "going": "Good to Soft (Good in places)",
          "runners": 3,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "writeup": "jumps/analyses/2026-11-06_aintree/1425_future-stars-novices-chase.md",
          "updated": "12:22 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "Royal Infantry", "prob": 0.42, "placeProb": 0.72, "finish": "-", "confidence": "medium", "reason": "Lone confirmed front-runner stepping up to 3m (likely his optimal trip) on a galloping track; made all to win his latest chase 17 days ago, was outpaced (not out-stayed) at 2m4f, strong stamina sire, top yard/Harry Skelton - can dictate a stamina test two hold-up rivals must answer.", "against": "Never run beyond 2m7f (3m unproven for him too); a hurdle 'nearly-horse' whose chase wins came only in weak 3-runner fields; a jumping error from the front would hand it over." },
            { "role": "danger", "horse": "Klimt Madrik", "prob": 0.38, "placeProb": 0.70, "finish": "-", "confidence": "medium", "reason": "Best on form (OR 143, G1 Challow 2nd, G1 Turners 8th btn 1.75L of 21) and 5lb well-in; if he stays 3m the likeliest winner. Kept out of the Win by a specific doubt: never beyond 2m5f and a hold-up type who must close with fences to jump in a race likely run honestly from the front. 3rd pick Intosomethinggood 0.20 (lowest-rated, PU'd the one time tried at 3m)." }
          ]
        }
      ]
    }
  ]
});
