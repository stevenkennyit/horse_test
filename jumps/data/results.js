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
//   picks[].price, .priceAt   price seen at analysis (fractional, e.g. "7/2") and when ("08:40 Thu 12 Nov"); context only, since 11 Nov 2026
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
    "P": "Proven class or in-form horse (top figures, a recent dominant or eased win, or a code-switcher from a top yard) demoted to the Danger slot on a soft doubt \u2014 a weight rise, a late \u2018no extra\u2019, or a blanket \u2018debutants cannot win\u2019 rule \u2014 and it won while the shape-based Win pick finished behind it"
  },
  "meetings": [
    {
      "date": "2026-11-12",
      "course": "Market Rasen",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good to Soft, Good in places; checked 18:53 Wed 11 Nov (Sporting Life going page; course page GoingStick 6.0 at 07:30 10 Nov)",
      "dataErrors": [
        "ATR Smart Stats blocked by a bot check at 18:56 Wed 11 Nov; trainer/jockey course and current-form stats not found",
        "Ballydine Boy's two Irish points (BCL 8 Mar 2026, BLD 30 Nov 2025) on Racing Post only; no second source",
        "Northern Olympian's German Flat form: one win (Hamburg 5 Jul 2025) and two runs confirmed by a second source; RP's 'three-time winner' only partly verified",
        "ATR says Yafaarr's tongue-tie is first time; RP and SL show it worn since 2026 (ATR wrong, or means first time over hurdles)",
        "ATR says Treshnish Point has had a wind op; RP shows no flag (unresolved, immaterial)",
        "Market Rasen course character asserted from course guides; no quantified pace bias",
        "Non-runners and going checked 18:53-18:55 the evening before; to re-check on the day"
      ],
      "races": [
        {
          "time": "12:06",
          "name": "PricedUp Bet Maiden Hurdle (GBB Race)",
          "type": "hurdle",
          "distance": "2m 125y",
          "going": "Good to Soft, Good in places",
          "runners": 10,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-12_market-rasen/1206_pricedup-bet-maiden-hurdle.md",
          "updated": "19:03 Wed 11 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Ballydine Boy",
              "prob": 0.43,
              "placeProb": 0.75,
              "finish": "-",
              "price": "4/5",
              "priceAt": "18:53 Wed 11 Nov",
              "confidence": "medium",
              "reason": "Bumper RPR 110 twice, the best single-run figure in the field; made all at Worcester and is the likely leader (ATR pace bar 90%) in a race forecast as weakly run, on a sharp track; stays further (3m point win) and handles soft.",
              "against": "Hurdling debut; the Worcester bumper (6 ran, C5) is unfranked and he had a 3lb claim; RP's card RPR rates Northern Olympian top (117); his point form is RP-only."
            },
            {
              "role": "ew",
              "horse": "Yafaarr",
              "prob": 0.08,
              "placeProb": 0.34,
              "finish": "-",
              "price": "10/1",
              "priceAt": "18:53 Wed 11 Nov",
              "confidence": "low",
              "reason": "In-form Flat OR 74 4yo (4 wins from 25 runs); the yard's similar ex-Flat 4yo Military Cross went to hurdles OR105 and was beaten only ½L at this C&D on 25 Oct under the same jockey.",
              "against": "Has never jumped in public; 2m is a stamina question for a 1m-1m2f winner; held up and often starts slowly; cheekpieces off today."
            },
            {
              "role": "danger",
              "horse": "Northern Olympian",
              "prob": 0.25,
              "placeProb": 0.65,
              "finish": "-",
              "price": "3/1",
              "priceAt": "18:53 Wed 11 Nov",
              "confidence": null,
              "reason": "Best-franked hurdle form: on debut he was ½L behind Cowboy Casanova (who has won since) and 7½L behind Spanish Darling (since beaten 3½L in a Cheltenham Grade 2), with Murphy's 5/6 favourite 1½L behind him.",
              "against": "Keen in all 4 of his RP runs with a comment ('ran too free' at Worcester), held up, and the pace forecast is weak; he also has a Wetherby entry on Sat 14 Nov."
            }
          ]
        },
        {
          "time": "13:16",
          "name": "PricedUp Boosted Prices Daily Novices' Handicap Chase (GBB Race)",
          "type": "chase",
          "distance": "2m 7f 191y",
          "going": "Good to Soft, Good in places",
          "runners": 6,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-12_market-rasen/1316_pricedup-boosted-prices-daily-novices-handicap-chase.md",
          "updated": "19:20 Wed 11 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Tell The Tale",
              "prob": 0.30,
              "placeProb": 0.52,
              "finish": "-",
              "price": "9/4",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": "medium",
              "reason": "One of two runners proven over fences at the trip (won 2m7f177y chase on good to soft at Ffos Las on debut); fittest in the field (29 days); races prominently on a sharp track; bottom weight 11-2.",
              "against": "Ffos Las form is weak: Wannabe was in touch when unseating at the last, the runner-up is rated 88; on beaten lengths he ran to about 100 and is now rated 101 (+6lb); pecked at the last."
            },
            {
              "role": "ew",
              "horse": "Catwalk Girl",
              "prob": 0.20,
              "placeProb": 0.41,
              "finish": "-",
              "price": "9/2",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": "low",
              "reason": "The other chase winner at the trip (12L at Huntingdon 2m7f129y); likeliest leader (ATR pace bar 90%); 3lb claim takes her to 11-8 off 110; right-handed completions all in the first three.",
              "against": "Off 184 days; Huntingdon was a weak 4-runner race in which the 10/11 favourite fell; one hurdle fall while leading; best form on good; each-way only about break-even on our numbers (2 places at 1/4)."
            },
            {
              "role": "danger",
              "horse": "Chemoulin",
              "prob": 0.18,
              "placeProb": 0.35,
              "finish": "-",
              "price": "3/1",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": null,
              "reason": "Best-looking hurdle form in the race: beat Ballyeaston (OR115, since a winner) 2L at Haydock, with the third since rated 121; in-form Longsdon yard (6/14 in 14 days).",
              "against": "Haydock flattered (the leader fell 2 out); chase debut after 226 days; never run beyond 2m6f and weakened late there; errors in three of four hurdle runs."
            }
          ]
        },
        {
          "time": "13:51",
          "name": "Lincolnshire Rural Support Network Handicap Chase",
          "type": "chase",
          "distance": "2m 5f 89y",
          "going": "Good to Soft, Good in places (chase GoingStick 5.8, asserted)",
          "runners": 7,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-12_market-rasen/1351_lincolnshire-rural-support-network-handicap-chase.md",
          "updated": "19:24 Wed 11 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Noble Recall",
              "prob": 0.31,
              "placeProb": 0.55,
              "finish": "-",
              "price": "9/4",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": "medium",
              "reason": "Placed in all three recent C5 chases (3rd, won, 2nd); chase RPRs 83 and 83 against an effective mark of 76 after Isabelle Ryder's 5lb claim, the widest margin in the field; 2nd over 2m3f here on GS off the same mark; no fall or unseat in 17 runs.",
              "against": "Lines through rivals put him only around his mark; 2m5f89y is about 1f beyond his proven trip; up 8lb since 12 Oct."
            },
            {
              "role": "danger",
              "horse": "Crac De Megaudais",
              "prob": 0.22,
              "placeProb": 0.42,
              "finish": "-",
              "price": "3/1",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": null,
              "reason": "Best stamina in the field (won 2m6f125y last time, rallying), which a strongly-run 2m5f suits; up only 4lb; Gretton 2/6 and O'Farrell 8/30 in current form.",
              "against": "Erratic (top-3 in 2 of last 6); poor over fences on good to soft (PU, and beaten 65L when he bled)."
            }
          ]
        }
      ]
    }
  ]
});
