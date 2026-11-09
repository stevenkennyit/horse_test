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
          "time": "12:00",
          "name": "Matchbook Betting Exchange Handicap Chase (0-100)",
          "type": "chase",
          "distance": "3m70y",
          "going": "Good to Yielding, Good in places",
          "runners": 12,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-09_punchestown/1200_matchbook-betting-exchange-handicap-chase-0-100.md",
          "updated": "07:12 Mon 9 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Mini Getaway",
              "prob": 0.22,
              "placeProb": 0.52,
              "finish": "-",
              "confidence": "medium",
              "reason": "Completed and placed in all 4 chases (1-2-3-3) with no recorded errors; won at Sligo over 3m1f on Good, beating Western Model 16.2L, and meets him on the same 14lb terms; confirmed the new mark of 83 with a 2nd off it last time.",
              "against": "Beaten 13L last time by Schiehallion, whom Western Model beat 16L (that line favours WM); 7lb above her winning mark; never run at Punchestown; small yard with no runners in 30 days."
            },
            {
              "role": "ew",
              "horse": "Il Silenzio",
              "prob": 0.13,
              "placeProb": 0.4,
              "finish": "-",
              "confidence": "low",
              "reason": "Sound chaser (5/6 completions, top-3 in 4); two 3m1f chase wins on Yielding/Soft and 4th over course and distance; the 7lb claimer from his 2026 win rides again (effective 11-7); beat Western Model 13.25L at level weights in 2025 and gets 5lb from him.",
              "against": "Held up, so can be left with too much to do; beaten 20L at Ballinrobe off a similar mark; 5lb above his last winning effective weight; trainer 0/3 in the last month."
            },
            {
              "role": "danger",
              "horse": "Moorish Castle",
              "prob": 0.12,
              "placeProb": 0.32,
              "finish": "-",
              "confidence": "low",
              "reason": "Strongest recent form in the field (\u00bdL Sligo 3m1f hurdle win receiving 14lb from a 113 horse); may be well treated off 99 over fences.",
              "against": "Chase debutant with shaky hurdle jumping (fell 2 out, jumped left, not fluent twice) and top weight 12-0."
            }
          ],
          "errors": [],
          "notes": ""
        },
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
        },
        {
          "time": "13:30",
          "name": "Matchbook 50/50 Series 3-Y-O Maiden Hurdle",
          "type": "hurdle",
          "distance": "1m7f187y",
          "going": "Good to Yielding, Good in places",
          "runners": 10,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-09_punchestown/1330_matchbook-50-50-series-3-y-o-maiden-hurdle.md",
          "updated": "07:12 Mon 9 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Blissful Bonita",
              "prob": 0.25,
              "placeProb": 0.58,
              "finish": "-",
              "confidence": "low",
              "reason": "Only runner proven over 2m on the Flat (won at Thurles 8 Oct, Yielding to Soft) for a stiff uphill finish; 3.25L behind stablemate Espritroyale at level weights, who won the Fairyhouse 3yo maiden hurdle 6 days ago by 8.75L from Mahzuz; 7lb fillies' allowance.",
              "against": "Never jumped a hurdle in public; modest Flat level (OR 64-67); Coexist's Flat form probably 5-10lb better."
            },
            {
              "role": "ew",
              "horse": "Borora Aura",
              "prob": 0.22,
              "placeProb": 0.55,
              "finish": "-",
              "confidence": "low",
              "reason": "Best proven hurdle form in the field: 3rd on her debut at Galway, 9.5L behind Sharkeyboy and \u00bdL behind Fits Perfect, 30L clear of 4th; gets 14lb from the geldings with her claim; likely lone leader.",
              "against": "Weakened at 1m4f on the Flat and was headed on the Galway run-in (uphill finish a question); jumped left 3 out; Flat mark only 47-52; yard 1 winner from its last 50 runners."
            },
            {
              "role": "danger",
              "horse": "Coexist",
              "prob": 0.22,
              "placeProb": 0.55,
              "finish": "-",
              "confidence": "low",
              "reason": "Best Flat form in the field (~72-80 on collateral, asserted); de Bromhead's 3yo hurdle debutants won 2 of 4 this season.",
              "against": "Gives 7-14lb to the fillies; only 2 completions (PU on debut, cause not found); held up."
            }
          ],
          "errors": [],
          "notes": ""
        },
        {
          "time": "14:03",
          "name": "Matchbook 50/50 Series Maiden Hurdle",
          "type": "hurdle",
          "distance": "1m7f187y",
          "going": "Good to Yielding, Good in places",
          "runners": 11,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-09_punchestown/1403_matchbook-50-50-series-maiden-hurdle.md",
          "updated": "07:12 Mon 9 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "It's Only A Game",
              "prob": 0.32,
              "placeProb": 0.62,
              "finish": "-",
              "confidence": "medium",
              "reason": "Best bumper standard in the field on three agreeing lines: beat Boycetown (later OR 128) 3.5L here, and in a G2 at level weights was 1L behind Charismatic Kid (127) and 3.5L behind With Nolimit (129); course winner, won fresh before; Mark Walsh rides.",
              "against": "Hurdle debut; off 243 days; tame 15th in the Cheltenham G1 last time; Brassil 0/14 since 4 Aug; first-time hood."
            },
            {
              "role": "ew",
              "horse": "Leonard Vallis",
              "prob": 0.16,
              "placeProb": 0.47,
              "finish": "-",
              "confidence": "low",
              "reason": "Only runner with placed hurdle form (1.5L 2nd of 19 at Gowran, clean round); bumper win over Thinkitdontjinxit, since an 11L maiden hurdle winner; 4/4 completions, races handily.",
              "against": "All runs on soft or yielding-to-soft; collateral puts him ~15lb+ below the Win; off 217 days; yard 5/93 this season."
            },
            {
              "role": "danger",
              "horse": "Werner",
              "prob": 0.22,
              "placeProb": 0.5,
              "finish": "-",
              "confidence": "low",
              "reason": "Elliott/Gigginstown recruit with Jack Kennedy; won his only Flat start in Germany (~1m6f, Hoppegarten).",
              "against": "Value of the German maiden unknown; never jumped in public; off 477 days."
            }
          ],
          "errors": [],
          "notes": ""
        },
        {
          "time": "15:13",
          "name": "Matchbook 50/50 Series Mares Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m4f164y",
          "going": "Good to Yielding, Good in places",
          "runners": 11,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-09_punchestown/1513_matchbook-50-50-series-mares-maiden-hurdle.md",
          "updated": "07:12 Mon 9 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Brickfield Belle",
              "prob": 0.42,
              "placeProb": 0.76,
              "finish": "-",
              "confidence": "medium",
              "reason": "Clearly the best hurdle form: 2.25L 2nd to Kimi De Mai (OR 114) at Limerick at level weights, 8L clear of an OR 98 mare; RPR 121 vs next best 85; form 1-2-3 incl. a 15L mares' bumper win; prominent style suits the stiff track.",
              "against": "Jumping errors in both hurdle runs (jumped left, slipped, headed late at 4/7 at Limerick); never run beyond 2m1f."
            },
            {
              "role": "ew",
              "horse": "Sapphire Jewel",
              "prob": 0.09,
              "placeProb": 0.33,
              "finish": "-",
              "confidence": "low",
              "reason": "Best rules stamina evidence among those who have hurdled (3rd over 2m3f soft, keeping on); clean hurdle completion; second-best RPR (85); first-time tongue strap; 3lb claim.",
              "against": "Modest and erratic: beaten 34.75L at Gowran and 58L (keen) in a G3 bumper; yard 0/6 since 1 Oct."
            },
            {
              "role": "danger",
              "horse": "Viva Laa Vida",
              "prob": 0.12,
              "placeProb": 0.4,
              "finish": "-",
              "confidence": "low",
              "reason": "Best bumper form among the hurdle debutants: beaten 4.3L by a mare who beat Hee Hiles 24.5L; same in-form yard.",
              "against": "Found no extra at 2m, so 2m4f+ is a doubt; hurdle debut."
            }
          ],
          "errors": [],
          "notes": ""
        }
      ]
    }
  ]
});
