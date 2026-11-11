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
          "time": "12:41",
          "name": "PricedUp Now With Best Odds 'National Hunt' Maiden Hurdle (GBB Race)",
          "type": "hurdle",
          "distance": "2m 4f 139y",
          "going": "Good to Soft, Good in places",
          "runners": 9,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-12_market-rasen/1241_pricedup-now-with-best-odds-national-hunt-maiden-hurdle.md",
          "updated": "19:45 Wed 11 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Ivor Bear",
              "prob": 0.32,
              "placeProb": 0.70,
              "finish": "-",
              "price": "11/8",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": "medium",
              "reason": "Most advertised bumper form in the field (Listed 4th at Cheltenham; beaten by since-winners); 6L 2nd to Hold The Throw here on hurdle debut, 12L clear of Whin Cover (since about 93-96); likely leader in a weakly-run race on a sharp track that favours handy types; yard won this race last year.",
              "against": "Never tried beyond 2m1f, with 'no extra' late in 3 of 4 runs; novicey jumping on hurdle debut; beaten favourite 3 times."
            },
            {
              "role": "ew",
              "horse": "Supreme Force",
              "prob": 0.18,
              "placeProb": 0.53,
              "finish": "-",
              "price": "4/1",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": "low",
              "reason": "Won three 3m Irish points (one a winners-of-two) with good jumping comments; Longsdon 6/14 in 14 days and Brian Hughes 12/47; a genuine place chance against a weak tail.",
              "against": "Rules and hurdle debut (Longsdon's hurdle Rules debutants 0/2 in the sample); raced near the rear in points, which doesn't suit a weak pace on a sharp track; points form RP-only; each-way about fair, not value."
            },
            {
              "role": "danger",
              "horse": "Eastern Rock",
              "prob": 0.22,
              "placeProb": 0.60,
              "finish": "-",
              "price": "3/1",
              "priceAt": "19:09 Wed 11 Nov",
              "confidence": null,
              "reason": "Top RP card figures (RPR 116, TS 109); proven 3m point stamina; beat Ink Black Heart 10L in a bumper, and that horse has since run to about 105-108 over hurdles.",
              "against": "Keen in both runs under Rules and held up, with a weak pace forecast (playbook rule C keeps him off the Win); 17½L 4th on hurdle debut."
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
        },
        {
          "time": "14:26",
          "name": "NFU Mutual Agriculture Raceday Novices' Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m 4f 139y",
          "going": "Good to Soft, Good in places (hurdles GoingStick 6.0, asserted)",
          "runners": 6,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-12_market-rasen/1426_nfu-mutual-agriculture-raceday-novices-handicap-hurdle.md",
          "updated": "21:20 Wed 11 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "This Sway",
              "prob": 0.30,
              "placeProb": 0.55,
              "finish": "-",
              "price": "5/2",
              "priceAt": "20:45 Wed 11 Nov",
              "confidence": "low",
              "reason": "Completed his last 8 starts with no falls; 2nd in his last two at 2m4f on good (1¼L at Ffos Las, 3L at Southwell giving 12lb to an 8/13 winner); a front-runner on a sharp track, and Teofimo's keenness will meet two other pace horses.",
              "against": "Off 163 days; cheekpieces left off after 4 runs in them; recurring untidy jumps; 1 win in 12."
            },
            {
              "role": "danger",
              "horse": "Teofimo",
              "prob": 0.29,
              "placeProb": 0.51,
              "finish": "-",
              "price": "15/8",
              "priceAt": "20:45 Wed 11 Nov",
              "confidence": null,
              "reason": "Best form in the race: C4 Newcastle 2nd 7 days ago, 1¼L behind the winner and 5L clear of the 3rd, and he drops to C5 off the same mark of 100.",
              "against": "Keen in 9 of 11 comments; that run came from a 22L lead after the 11/8 favourite fell; 12-0 over his furthest trip, a quick reappearance, and faded late in both 2m4f runs."
            }
          ]
        },
        {
          "time": "15:01",
          "name": "PricedUp Boosts And BOG Mares' Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m 7f 16y",
          "going": "Good to Soft, Good in places (hurdles GoingStick 6.0, asserted)",
          "runners": 8,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-12_market-rasen/1501_pricedup-boosts-and-bog-mares-handicap-hurdle.md",
          "updated": "21:30 Wed 11 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Burning Embers",
              "prob": 0.18,
              "placeProb": 0.45,
              "finish": "-",
              "price": "7/2",
              "priceAt": "21:02 Wed 11 Nov",
              "confidence": "low",
              "reason": "Beaten 31-50L in all four 2m hurdles, then stepped up to 3m1f in first-time cheekpieces and ran a 1½L 2nd at Plumpton despite trouble before 2 out; through Stamina Chope about 4lb ahead of Briery Butterfly at today's weights (asserted); lightly raced 5yo, the likeliest improver; completed all 5 hurdle starts.",
              "against": "That is her only form figure, in a 5-runner race, rated about 86-87 and now 2lb higher on 90; keen and jumped left at Kempton and Plumpton; untested on GS at the trip."
            },
            {
              "role": "danger",
              "horse": "Briery Butterfly",
              "prob": 0.14,
              "placeProb": 0.42,
              "finish": "-",
              "price": "11/2",
              "priceAt": "21:02 Wed 11 Nov",
              "confidence": null,
              "reason": "Most repeated proven level in the field: about 92 when 1L 2nd over 3m1f on soft at Huntingdon off today's mark; top-3 in 4 of her last 7; completed 10 of 11 hurdle starts.",
              "against": "0 from 11 over hurdles; usually runs to 85-89 against a mark of 93; faded late at 3m on good in 2 of her last 3; off 186 days."
            }
          ]
        }
      ]
    }
  ]
});
