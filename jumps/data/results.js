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
        },
        {
          "time": "12:45",
          "name": "Gerry Comerford Drilling Beginners Chase",
          "type": "chase",
          "distance": "2m4f",
          "going": "Good",
          "runners": 10,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1245_gerry-comerford-drilling-beginners-chase.md",
          "updated": "09:48 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Princess Aveen",
              "prob": 0.28,
              "placeProb": 0.55,
              "finish": "-",
              "confidence": "medium",
              "reason": "Won LTO at today's exact trip and ground (Fairyhouse 2m4f Good, stayed on to lead last stride); point-to-point schooling gives the best jumping grounding of eight chase debutants; carries least weight (mare's allowance + 5lb claim).",
              "against": "Both rules wins came from the rear and Gowran favours prominent racers; chase jumping formally unproven and the points form is asserted, not read at source."
            },
            {
              "role": "ew",
              "horse": "Market Ready",
              "prob": 0.11,
              "placeProb": 0.46,
              "finish": "-",
              "confidence": "low",
              "reason": "Most proven stayer at the trip (3rd Clonmel 2m4f 16 days ago, 2nd over 2m5f), course form at Gowran, joint-top OR 105, sound jumper and freshest — the best place-at-a-price.",
              "against": "0 wins from 10 and repeatedly one-paced, so the win leg is weak; chase debut adds jumping risk — a place play, not a likely winner."
            },
            {
              "role": "danger",
              "horse": "Build A Bridge",
              "prob": 0.22,
              "placeProb": 0.50,
              "finish": "-",
              "confidence": "medium",
              "reason": "Best recent hurdle form (won Punchestown going away 13 Oct, 2nd Limerick off OR 90), flawless 11/11 hurdle completions, prominent style suits Gowran, Danny Mullins up.",
              "against": "Chase debut with no point-schooling noted, and a step up to 2m4f from his recent 2m."
            }
          ]
        },
        {
          "time": "13:20",
          "name": "Noreside Catering Handicap Chase",
          "type": "chase",
          "distance": "2m",
          "going": "Good",
          "runners": 7,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1320_noreside-catering-handicap-chase.md",
          "updated": "09:46 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Break My Soul",
              "prob": 0.40,
              "placeProb": 0.58,
              "finish": "-",
              "confidence": "medium",
              "reason": "Clear class drop — 3rd in the Cheltenham Grand Annual (Cls1, 20 ran) off 136 beaten 3/4L, and a course-and-distance winner here (Gowran 2m chase); sound jumper (5/6 complete, no falls) with a good fresh record.",
              "against": "182-day layoff off top weight 11-12, and a hold-up type on a prominent-racing track."
            },
            {
              "role": "ew",
              "horse": "Leave In Secret",
              "prob": 0.10,
              "placeProb": 0.30,
              "finish": "-",
              "confidence": "low",
              "reason": "Carries just 9-7 effective (7lb claim) and is consistently close-up (3rd of 20, 2nd, beaten 1.5L last time); prominent style fits Gowran — the best longer-priced place call.",
              "against": "0/9 over fences, and with only two places paying his habit of minor placings will often miss out."
            },
            {
              "role": "danger",
              "horse": "Golden Joy",
              "prob": 0.18,
              "placeProb": 0.33,
              "finish": "-",
              "confidence": "medium",
              "reason": "Second-best on class (staying-on 2nd in a Cls1 2m1f Leopardstown handicap off 130), now with a new yard.",
              "against": "Fell (tired) last time and PU'd with a bad mistake the run before — real completion risk — and runs from off the pace into a stiff finish."
            }
          ]
        },
        {
          "time": "13:50",
          "name": "PRL Group Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m20y",
          "going": "Good to Yielding",
          "runners": 12,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1350_prl-group-maiden-hurdle.md",
          "updated": "09:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Brady Hartsfield",
              "prob": 0.25,
              "placeProb": 0.50,
              "finish": "-",
              "confidence": "low",
              "reason": "Best form in the race — 2nd in a Listed bumper (Limerick) and 2nd in a Punchestown graduation; top-rated, and Good to Yielding suits better than the heavy he disliked.",
              "against": "Two unknowns at once — hurdle debut (jumping unproven) and a 203-day seasonal reappearance."
            },
            {
              "role": "ew",
              "horse": "Rocky Alfonso",
              "prob": 0.10,
              "placeProb": 0.32,
              "finish": "-",
              "confidence": "low",
              "reason": "His one good bumper run came when he dictated (3rd of 8 Galway); a confirmed front-runner into Gowran's strongly prominent-biased track, with a 5lb claim (effective 11-2).",
              "against": "Hurdle debut (jumping unproven) and only modest bumper form."
            },
            {
              "role": "danger",
              "horse": "Baila Conmigo",
              "prob": 0.22,
              "placeProb": 0.55,
              "finish": "-",
              "confidence": "medium",
              "reason": "Only proven, sound-jumping hurdler in the field (4/4 completions, frame every time, 3rd of 20 Galway on Yielding), race-fit, prominent, 5lb claim.",
              "against": "Failed to win any of four maiden hurdles, finding 'no extra' each time — an exposed frame-hitter — plus a one-day Flat back-up."
            }
          ]
        },
        {
          "time": "14:20",
          "name": "Proficient Engineering Irish EBF Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m20y",
          "going": "Good to Yielding",
          "runners": 7,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1420_proficient-engineering-irish-ebf-maiden-hurdle.md",
          "updated": "09:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Got The Honours",
              "prob": 0.37,
              "placeProb": 0.60,
              "finish": "-",
              "confidence": "medium",
              "reason": "Point winner from a powerful yard (G P Cromwell / Keith Donoghue) on hurdling debut against exposed, winless, long-absent rivals — the classic weak-maiden angle.",
              "against": "Never jumped a hurdle in public, off ~196 days with a first-time tongue-tie; Reckless holds the only solid hurdle form."
            },
            {
              "role": "ew",
              "horse": "Reckless",
              "prob": 0.30,
              "placeProb": 0.56,
              "finish": "-",
              "confidence": "medium",
              "reason": "Only solid hurdle form in the race (2nd of 18 at Fairyhouse 2m4f, 5th of 24 over 2m); prominent style suits Gowran's uphill finish, 3lb claim (effective 11-9).",
              "against": "245 days off and nothing shown since — a 'needs the run' risk; last seen tailed off in a heavy bumper."
            },
            {
              "role": "danger",
              "horse": "Lyrical Park",
              "prob": 0.09,
              "placeProb": 0.26,
              "finish": "-",
              "confidence": "low",
              "reason": "Most recent racing (21d), completes, prominent (track-suited), drops to a sharper 2m with first-time cheekpieces.",
              "against": "Well beaten in all three starts — coverage only."
            }
          ]
        }
      ]
    }
  ]
});
