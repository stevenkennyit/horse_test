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
//   picks[].price, .priceAt   LEGACY (11 Nov 2026 only; prices-as-context reverted 13 Nov 2026). Dashboard still reads
//                     them where present in the archive, but new picks don't record them — the agent is price-blind again.
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
    "O": "A handicap debutant from maiden company (unexposed, with a stronger independent figure) ranked below exposed handicappers on our own collateral lines, with a single non-completion used as the tie-break against it",
    "P": "Proven class or in-form horse (top figures, a recent dominant or eased win, or a code-switcher from a top yard) demoted to the Danger slot on a soft doubt — a weight rise, a late ‘no extra’, or a blanket ‘debutants cannot win’ rule — and it won while the shape-based Win pick finished behind it"
  },
  "meetings": [
    {
      "date": "2026-11-13",
      "course": "Cheltenham",
      "country": "UK",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good (Good to Soft in places)",
      "dataErrors": [],
      "races": [
        {
          "time": "13:10",
          "name": "AIS Conditional Jockeys' Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m 5f",
          "going": "Good (Good to Soft in places)",
          "runners": 18,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Class 3 conditional jockeys' handicap hurdle; 20 declared, 2 NR (Diamatiste #8, That's It Paddy #11); strong-gallop forecast with Khafre, Diamatiste (NR), Chutzpal and Norman Fletcher all forward, which suits hold-up types.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-13_cheltenham/1310_ais-conditional-jockeys-handicap-hurdle.md",
          "updated": "11:14 Fri 13 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Keno Black",
              "prob": 0.15,
              "placeProb": 0.38,
              "finish": "-",
              "confidence": "medium",
              "price": "8/1",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Plumpton 2m4f win 11 days ago verified at source (beat OR110 by 6.5L in 7-runner C4); hold-up style suits a strong forecast gallop at a stiff galloping track; +7lb penalty but weight-carried actually drops to 11-3.",
              "against": "2m5f not yet completed (one fall from rear at Wetherby); course and class step up from sharp-track Plumpton; 1st ride for conditional Bradley Harris (no claim listed)."
            },
            {
              "role": "ew",
              "horse": "Step Ahead",
              "prob": 0.09,
              "placeProb": 0.38,
              "finish": "-",
              "confidence": "low",
              "price": "10/1",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "1/1 at Cheltenham at 2m4f on good (Jan 2026 C2 win, RPR121); 10lb claim brings weight carried to 11-0, ~10lb better in than when he won here; last-time 7/15 Chepstow reads as a warm-up.",
              "against": "10lb claim means Aamilah Aswat is very junior in an 18-runner Cheltenham handicap; Chepstow regression could be real rather than needing the run."
            },
            {
              "role": "danger",
              "horse": "Glancing Jack",
              "prob": 0.14,
              "placeProb": 0.42,
              "finish": "-",
              "confidence": "medium",
              "price": "7/4",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Newbury 2nd 3.25L behind OR125 top-weight Storming George in March (RPR123); Dan Skelton new-yard booking; 3lb claim to 11-8; 2m5f range from prior 2m3f form is natural step up."
            }
          ]
        },
        {
          "time": "13:45",
          "name": "Mucking Brilliant Paddy Power Novices' Chase (Listed)",
          "type": "chase",
          "distance": "3m 1f",
          "going": "Good (Good to Soft in places)",
          "runners": 6,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Class 1 Listed novice chase; 7 declared, 1 NR (Derryhassen Paddy #3); level weights 11-4; strong-pace with Bill Joyce, D Art D Art and Follow Your Luck all forward; EW omitted (no runner at value on our place numbers).",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-13_cheltenham/1345_mucking-brilliant-paddy-power-novices-chase.md",
          "updated": "11:14 Fri 13 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Follow Your Luck",
              "prob": 0.27,
              "placeProb": 0.55,
              "finish": "-",
              "confidence": "medium",
              "price": "8/1",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Only runner with a verified 3m1f Cheltenham chase line on today's ground (2/6 behind Butch Cassidy at the C&D 20 days ago, carrying 11-7); clean chase record (3/3 completed); progressive 5yo; -3lb today.",
              "against": "His 2nd was partly 'left clear of the rest' (leader UR last); OR123 lowest in the field; up to Listed at level weights; 'took keen hold' at the C&D and today's pace will be hot."
            },
            {
              "role": "danger",
              "horse": "King's Bucks",
              "prob": 0.22,
              "placeProb": 0.46,
              "finish": "-",
              "confidence": "medium",
              "price": "2/1",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "De Bromhead sends one; Galway 2m2f heavy chase debut 2nd outstayed on soft-slog; +9f on his chase trip today — stamina asserted not proven; Cheltenham Albert Bartlett PU over 2m7f hurdles is the against."
            }
          ]
        },
        {
          "time": "14:55",
          "name": "Jilly Cooper Veterans' Handicap Chase",
          "type": "chase",
          "distance": "2m 4f 44y",
          "going": "Good (Good to Soft in places)",
          "runners": 8,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Class 2 Veterans' Handicap Chase (10yo+); 8 runners, no NRs; very hot pace with 6-of-8 forward (Outlaw Peter, Thunder Rock, Glengouly, Mahons Glory, Time To Bite, Ga Law) — favours hold-up Triple Trade.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-13_cheltenham/1455_jilly-cooper-veterans-handicap-chase.md",
          "updated": "11:31 Fri 13 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Thunder Rock",
              "prob": 0.22,
              "placeProb": 0.50,
              "finish": "-",
              "confidence": "medium",
              "price": "9/2",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Perth 15 Oct reappearance win verified at source (7L off OR128 vs real C3 field, RPR140); today's OR134 sits 12-16lb below his 2023-24 peak chase marks (OR146-150); pace 8 flexible for a hot shape; Sean Bowen regular partner.",
              "against": "Peak RPR was 2-3 seasons back; Cheltenham 2m4f record is one PU + one 3rd + one 6th; stepping back from 2m7f to 2m4f on a stiff galloping track in a hot pace."
            },
            {
              "role": "ew",
              "horse": "Triple Trade",
              "prob": 0.20,
              "placeProb": 0.52,
              "finish": "-",
              "confidence": "medium",
              "price": "4/1",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Only dedicated hold-up (ATR pace 2) in a 6-of-8 front-running field; Market Rasen vets' win 25 Oct from off the pace in the same shape; direct H2H beat Glengouly 4¾L at Cheltenham Nov 25 and is now 5lb better off; two Cheltenham wins verified (though at 2m, not 2m4f).",
              "against": "Both verified Cheltenham wins at 1m7f199y, not today's 2m4f44y; CHL 2m4f form is only a dead-heat 3rd beaten 10L; hold-up tactics up the stiff Cheltenham hill can leave too much to do."
            },
            {
              "role": "danger",
              "horse": "Outlaw Peter",
              "prob": 0.17,
              "placeProb": 0.40,
              "finish": "-",
              "confidence": "medium",
              "price": "3/1",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Peak RPR 145 (HAY Grade 2 vets Series Final win Apr 26); market fav. But 212-day layoff, Cheltenham course debut, first ride for Sam Twiston-Davies (Cobden rode in April) and up 5lb on his winning mark — four live negatives."
            }
          ]
        },
        {
          "time": "14:20",
          "name": "Shloer Chase (Grade 2)",
          "type": "chase",
          "distance": "1m 7f 199y",
          "going": "Good (Good to Soft in places)",
          "runners": 4,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Grade 2 open chase; 4 runners, win-only market; strong pace likely with Gidleigh Park and Mighty Bandit both front-runners.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-13_cheltenham/1420_shloer-chase.md",
          "updated": "11:12 Fri 13 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Jonbon",
              "prob": 0.45,
              "placeProb": 0.80,
              "finish": "-",
              "confidence": "high",
              "price": "10/11",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Dual Shloer winner at this exact C&D (verified 2023 won 9½L, 2024 won 1½L, 2025 2nd 15L); 28 top-2 from 28 starts; proven Gd/Sft/Hvy; direct 17-Jan-26 Ascot G1 line = beat Gidleigh Park who PU'd at level weights.",
              "against": "246 days off (beaten 15L on a near-identical 202-day return in last year's Shloer); age 10; first ride for Harry Cobden (reason for N De Boinville swap not verified at source)."
            },
            {
              "role": "danger",
              "horse": "Gidleigh Park",
              "prob": 0.22,
              "placeProb": 0.50,
              "finish": "-",
              "confidence": "medium",
              "price": "3/1",
              "priceAt": "10:42 Fri 13 Nov",
              "reason": "Highest RPR behind Jonbon (172 for Manifesto 2nd); receives 6lb; won Windsor 2m G2 fresh — but 2 PU in 11 starts, both jumping-caused, including on last Ascot G1 return behind today's favourite; 'evidently fragile'."
            }
          ]
        }
      ]
    }
  ]
}
);
