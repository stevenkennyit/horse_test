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
        "Racing Post cards/results return 406/404 in this session; claims taken from Sporting Life JSON only",
        "13:00 first pass reported no beaten distances; Sporting Life result rides carry finish_distance (gap to the horse in front), which sums to the distance behind the winner. Corrected in the 08:36 review."
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
          "updated": "08:36 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Quatre Saison",
              "prob": 0.21,
              "placeProb": 0.5,
              "finish": "-",
              "confidence": "low",
              "reason": "Elliott/Kennedy newcomer from a French jumping family; all three Academy hurdles read this season were won by debutants and the two raced rivals are weak.",
              "against": "Unraced with no weight edge; case rests on yard, booking and pedigree only; an Elliott newcomer was pulled up in yesterday's Academy fillies' hurdle."
            },
            {
              "role": "ew",
              "horse": "Hilarion",
              "prob": 0.11,
              "placeProb": 0.33,
              "finish": "-",
              "confidence": "low",
              "reason": "Carries 10-7 after Healy's 7lb claim, 7lb less than the main colts; Ciaran Murphy's two Academy debutants this season finished 3rd and 2nd (Choir Girl, beaten 1 1/4L yesterday under the same claimer).",
              "against": "Unraced, Flat-bred (Frankel) so jumping unknown; two-runner yard sample; non-runner at Wexford for a reason not found."
            },
            {
              "role": "danger",
              "horse": "Garrison Gold",
              "prob": 0.12,
              "placeProb": 0.35,
              "finish": "-",
              "confidence": "low",
              "reason": "Stamina-bred (Yeats, dam a hurdle winner) from the Mullins family yard, whose Academy debutant was 3rd yesterday; D Mullins up.",
              "against": "Unraced; may lack gears over 2m."
            }
          ]
        },
        {
          "time": "13:00",
          "name": "Sign Up To GavinLynchRacing.com Mares Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m4f",
          "going": "Good to Yielding",
          "runners": 10,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1300_mares-maiden-hurdle.md",
          "updated": "08:36 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Rebel Reba",
              "prob": 0.4,
              "placeProb": 0.72,
              "finish": "-",
              "confidence": "low-medium",
              "reason": "Beaten only 7.75L in a 12-runner open maiden over 2m5f100y 16 days ago, improving from 19.9L on debut; no other runner has been within 14L at 2m4f or further; clean jumper, point winner, Mullins.",
              "against": "Still never in the first five; both runs described as 'no impression'; modest form in absolute terms."
            },
            {
              "role": "ew",
              "horse": "Gratitudeforgrace",
              "prob": 0.09,
              "placeProb": 0.3,
              "finish": "-",
              "confidence": "low",
              "reason": "Completed all 3 hurdle starts including 2m4f (beaten 21L), Elliott yard in form; little else in the field has a better record for the minor places.",
              "against": "Beaten 21-28L each time with mistakes in 2 of 3; no place in 5 runs; weak each-way race."
            },
            {
              "role": "danger",
              "horse": "Western Shores",
              "prob": 0.18,
              "placeProb": 0.48,
              "finish": "-",
              "confidence": "low",
              "reason": "Six clean completions, best of the rest on beaten distances (13-17L in maidens); Kennedy up for Elliott.",
              "against": "Never placed; beyond 2m3f beaten 14.8L, 50L and 46L (tailed off last time)."
            }
          ]
        },
        {
          "time": "13:30",
          "name": "William Hill Challenge Series Handicap Hurdle",
          "type": "hurdle",
          "distance": "3m110y",
          "going": "Good to Yielding",
          "runners": 13,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1330_william-hill-challenge-series-handicap-hurdle.md",
          "updated": "08:36 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Fuusland",
              "prob": 0.22,
              "placeProb": 0.5,
              "finish": "-",
              "confidence": "low-medium",
              "reason": "Handicap debut off 101: beaten a nose over 3m1f164y at Sligo with Union Station (hurdle OR 120, 123-131 chaser) 8L behind at level weights, and carries 9lb less today; also 2nd on good at 2m5f180y; races prominently; Elliott yard in form.",
              "against": "No win in 5; first handicap; Union Station may have needed the run after 174 days; 18 days since a hard race; no course form."
            },
            {
              "role": "ew",
              "horse": "Pilgrims Walk",
              "prob": 0.08,
              "placeProb": 0.32,
              "finish": "-",
              "confidence": "low",
              "reason": "Consistent placer in handicaps (2nd, 3rd, 4th, 3rd of 18), stays 3m, lowest weight at 9-11 after the 7lb claim, unchanged mark; level with Live To Laugh on 13 Oct form at today's weights.",
              "against": "No win in 7 and may lack a finish; best runs came in 0-100 company."
            },
            {
              "role": "danger",
              "horse": "Live To Laugh",
              "prob": 0.17,
              "placeProb": 0.42,
              "finish": "-",
              "confidence": "low",
              "reason": "Won the 18-runner Punchestown handicap by an eased 10L ('canter'); handicap chase winner off 94 and 104, so a hurdle mark of 108 is in line; stays.",
              "against": "Up 14lb and carries 16lb more than last time; pulled up over 3m154y in April."
            }
          ]
        },
        {
          "time": "14:00",
          "name": "Irish National Hunt Chase CLG Beginners Chase",
          "type": "chase",
          "distance": "2m4f",
          "going": "Good (Good to Yielding in places)",
          "runners": 12,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1400_irish-national-hunt-chase-beginners-chase.md",
          "updated": "08:36 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Glen Kiln",
              "prob": 0.22,
              "placeProb": 0.52,
              "finish": "-",
              "confidence": "low",
              "reason": "Best completed chase run in the field: short-head 2nd here on 10 Oct giving 9lb to a 125-rated winner, 10L clear of the third, clean round; fit (31 days); debutants cannot be the Win (Elliott chase debutants 2 from 48, Mullins 10 from 56).",
              "against": "No chase run beyond 2m110y and beaten 16.5L at 2m3f180y in April; the best debutants are 12-15lb better hurdlers if they jump."
            },
            {
              "role": "ew",
              "horse": "Kainsbourg",
              "prob": 0.08,
              "placeProb": 0.33,
              "finish": "-",
              "confidence": "low",
              "reason": "2nd of 6 over 2m5f55y here 31 days ago, beaten 3/4L with a clean round, 9L ahead of the next Cork National runner-up.",
              "against": "That form rates about 122-125, well below the best here; pulled up on his other chase start."
            },
            {
              "role": "danger",
              "horse": "Storm Heart",
              "prob": 0.18,
              "placeProb": 0.46,
              "finish": "-",
              "confidence": "low",
              "reason": "Hurdle OR 147-151, beat Glen Kiln 8.7L at level weights at this course in April; Townend up; Mullins chase debutants win 18% and place 48% in the sample.",
              "against": "Chase debut; 'not fluent' in several hurdle runs; 170 days off."
            }
          ]
        },
        {
          "time": "14:30",
          "name": "Michael O'Sullivan & Lorna Brooke Ireland V Britain (Q.R.) Challenge Handicap Chase",
          "type": "chase",
          "distance": "3m65y",
          "going": "Good to Yielding in places",
          "runners": 6,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1430_ireland-v-britain-challenge-handicap-chase.md",
          "updated": "08:55 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Urbs Intacta Manet",
              "prob": 0.3,
              "placeProb": 0.56,
              "finish": "-",
              "confidence": "low-medium",
              "reason": "Improving chaser (8th, 3rd, 2nd, all completed); lost a head at Fairyhouse over 3m90y on 3 Nov and was about 33L clear of Kilkee Bay at Killarney; gets 8-18lb from three rivals on net weights.",
              "against": "No win in 10 runs; 7lb-claiming rider has 1 win from 13 chase rides; his OR is 84 on the card but 78 on the 3 Nov result page (unresolved)."
            },
            {
              "role": "ew",
              "horse": "Attaboyarchie",
              "prob": 0.22,
              "placeProb": 0.45,
              "finish": "-",
              "confidence": "low",
              "reason": "OR 100 less the 7lb claim is a net 93-equivalent; was 2L clear when the saddle slipped at Limerick in May; 5 places from 31 runs; claimer Crow has 6 wins from 10 chase rides.",
              "against": "No win in 31 runs, 3 non-completions in 10 chases, and top net weight."
            },
            {
              "role": "danger",
              "horse": "A Year Older",
              "prob": 0.25,
              "placeProb": 0.5,
              "finish": "-",
              "confidence": "low",
              "reason": "Best proven ability (3m 2nd, Limerick chase win) with a no-claim amateur.",
              "against": "Pulled up at Hexham and 11th of 12 over hurdles on 3 Nov; 18lb worse off than Urbs at net weights; 2 pulled up and 1 fall in 5 chases."
            }
          ]
        },
        {
          "time": "15:00",
          "name": "INHSC Supporting Point-To-Points Hunters Chase",
          "type": "chase",
          "distance": "3m65y",
          "going": "Good to Yielding",
          "runners": 10,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1500_inhsc-hunters-chase.md",
          "updated": "08:25 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Hearts And Spades",
              "prob": 0.21,
              "placeProb": 0.54,
              "finish": "-",
              "confidence": "low",
              "reason": "Net 10-11 (11-4 listed less Mahon's 7lb claim, two sources) against 12-0 with no claim when 3rd at Cork over 3m100y on good to yielding (verified); placed in both Rules chases and won a point 9 days ago.",
              "against": "No win in 6 Rules runs, 11L behind Jetbob at Punchestown, and collateral form puts Cold Old Fire level with him at today's weights."
            },
            {
              "role": "ew",
              "horse": "Cold Old Fire",
              "prob": 0.14,
              "placeProb": 0.42,
              "finish": "-",
              "confidence": "low",
              "reason": "Completed all 6 Rules chases, won at Thurles and was 3rd at Gowran over 3m+ on heavy; net 11-2 is 5lb less than at Gowran; collateral form has him about level with Hearts And Spades.",
              "against": "204 days off, all wins and places on soft or heavy, and beaten 25L at Tramore on good to yielding."
            },
            {
              "role": "danger",
              "horse": "Everest The Brave",
              "prob": 0.16,
              "placeProb": 0.42,
              "finish": "-",
              "confidence": "low",
              "reason": "Won a maiden hunter by 8L over 2m7f150y on good to yielding and a point on 9 May; Cromwell yard.",
              "against": "One Rules run, 172 days off, jockey called him raw; point history conflicts between sources."
            }
          ]
        },
        {
          "time": "15:30",
          "name": "John Thomas McNamara Series (Q.R.) Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m4f",
          "going": "Good to Yielding",
          "runners": 14,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "writeup": "jumps/analyses/2026-11-10_fairyhouse/1530_john-thomas-mcnamara-series-handicap-hurdle.md",
          "updated": "08:17 Tue 10 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Tuckmill",
              "prob": 0.18,
              "placeProb": 0.46,
              "finish": "-",
              "confidence": "low-medium",
              "reason": "Easy 8L winner over 2m4f on good at Punchestown on 13 Oct (verified), clean round; stablemate King Of The Greys, 8.75L behind him that day, then won easily at Fairyhouse; Fahey yard in form (4 from 17 since 1 Oct).",
              "against": "10yo up 10lb to a career-high hurdle mark, claim drops from 7lb to 2lb; rider Mr McParland has 1 win from 25 listed rides (that win was Tuckmill); slow time on 13 Oct."
            },
            {
              "role": "ew",
              "horse": "Joya Del Mar",
              "prob": 0.09,
              "placeProb": 0.3,
              "finish": "-",
              "confidence": "low",
              "reason": "Level with Tuckmill on a verified March head-to-head at Down Royal; 2nd of 23 and 5th over Fairyhouse 2m4f on soft; won twice over 2m5f on good; regular rider Mr Sutton won on him in June.",
              "against": "12th of 13 at 3m on 5 Oct (stamina fail), pulled up over fences, 2 wins from 25 hurdles."
            },
            {
              "role": "danger",
              "horse": "Granville Street",
              "prob": 0.11,
              "placeProb": 0.33,
              "finish": "-",
              "confidence": "low",
              "reason": "Top-rated and top weight; ran to about 105 on good at Galway on 29 Jul; 4lb claim.",
              "against": "Beaten 26L-54L in heavy-ground hurdles, first-time blinkers, rider Mr Love 0 from 25."
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
              "prob": 0.3,
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
