// ARCHIVE (settled meetings) — JUMPS. Moved out of results.js to keep the live file small.
// Same shape and loader as results.js; the dashboard loads this file too, so settled meetings still score.
// upcoming.html does NOT load this file. Error-type definitions live in results.js, not here.
// Do not hand-append during /analyse; /review moves a meeting here once all its races are settled.

(function (data) {
  const D = (window.AGENT_DATA = window.AGENT_DATA || { errorTypes: {}, meetings: [] });
  Object.assign(D.errorTypes, data.errorTypes || {});
  D.meetings.push(...data.meetings);
})({
  "errorTypes": {},
  "meetings": [
    {
      "date": "2026-10-25",
      "course": "Galway",
      "country": "IRE",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdles soft; chase course soft to heavy (Storm Boelo)",
      "dataErrors": [
        "Read Monday's going row as Sunday's on the Sporting Life going page",
        "Sporting Life last_ran_days field unreliable; gaps recomputed from full profiles",
        "Result-page previous_results truncated; made horses look like debutants",
        "Heavy-ground filter matched 'Soft in places' inside yielding descriptions",
        "Racing Post profile row (2024 hurdle fall) not in Sporting Life record; discarded",
        "16:30: first analysis missed the 7lb claims for four raced fillies (Racing Post card weights are before claims); caught and revised at 16:22",
        "15:56: Bulgaden Castle logged as 'U/P' (unplaced) from the provisional result; official finish 5th"
      ],
      "races": [
        {
          "time": "12:32",
          "name": "Gerry Coyme Memorial EBF Beginners Chase",
          "type": "chase",
          "distance": "2m6f111y",
          "going": "Soft to Heavy",
          "runners": 6,
          "source": "verified",
          "status": "settled",
          "picks": [
            {
              "rank": 1,
              "horse": "Chart Topper",
              "prob": 0.5,
              "price": "10/11",
              "finish": "1",
              "sp": "10/11"
            },
            {
              "rank": 2,
              "horse": "Da Capo Glory",
              "prob": 0.22,
              "price": "9/2",
              "finish": "5",
              "sp": "7/2"
            }
          ],
          "winner": {
            "horse": "Chart Topper",
            "sp": "10/11",
            "agentProb": 0.5
          },
          "grade": "held",
          "errors": [],
          "notes": "Class edge beat the unproven-on-heavy doubt; won by 17L. Da Capo Glory ran poorly (jumped left, detached).",
          "bets": [
            {
              "bet": "Chart Topper → Da Capo Glory straight forecast",
              "stake": 0.5,
              "returned": 0
            },
            {
              "bet": "Da Capo Glory → Chart Topper straight forecast",
              "stake": 0.25,
              "returned": 0
            }
          ]
        },
        {
          "time": "13:07",
          "name": "COLM QUINN BMW Handicap Chase",
          "type": "chase",
          "distance": "2m6f111y",
          "going": "Soft to Heavy",
          "runners": 10,
          "source": "verified",
          "status": "settled",
          "picks": [
            {
              "rank": 1,
              "horse": "Crecora Hills",
              "prob": 0.22,
              "price": "7/1",
              "finish": "F",
              "sp": "3/1"
            },
            {
              "rank": 2,
              "horse": "Only For Our Man",
              "prob": 0.15,
              "price": "5/1",
              "finish": "3",
              "sp": "11/2"
            }
          ],
          "winner": {
            "horse": "Illtakehimmyself",
            "sp": "7/2",
            "agentProb": null
          },
          "grade": "mixed",
          "errors": [
            "A",
            "D"
          ],
          "notes": "Crecora Hills was sound value (backed 7/1 to 3/1F) and fell at the 2nd. Good-ground horses marked down on early maiden heavy runs finished 1-2-3.",
          "bets": [
            {
              "bet": "Crecora Hills each-way (0.5pt e/w)",
              "stake": 1,
              "returned": 0
            },
            {
              "bet": "Crecora Hills → Only For Our Man straight forecast",
              "stake": 0.25,
              "returned": 0
            },
            {
              "bet": "Crecora Hills → Illtakehimmyself straight forecast",
              "stake": 0.25,
              "returned": 0
            }
          ]
        },
        {
          "time": "13:42",
          "name": "Brasserie On The Corner Handicap Chase",
          "type": "chase",
          "distance": "2m2f54y",
          "going": "Soft to Heavy",
          "runners": 13,
          "source": "verified",
          "status": "settled",
          "picks": [
            {
              "rank": 1,
              "horse": "Dearg Mor",
              "prob": 0.2,
              "price": "10/3",
              "finish": "3",
              "sp": "15/8"
            },
            {
              "rank": 2,
              "horse": "Harty Cup",
              "prob": 0.17,
              "price": "7/1",
              "finish": "PU",
              "sp": "10/1"
            }
          ],
          "winner": {
            "horse": "Lanzhou",
            "sp": "16/1",
            "agentProb": null
          },
          "grade": "failed",
          "errors": [
            "B",
            "D"
          ],
          "notes": "Harty Cup backed on price despite trainer's 0/3 chase-debut record; not fluent twice, pulled up. Prince Palace first past the post, disqualified (rider weighed in light).",
          "bets": [
            {
              "bet": "Harty Cup win",
              "stake": 0.5,
              "returned": 0
            },
            {
              "bet": "Dearg Mor ↔ Springboard reverse forecast",
              "stake": 0.25,
              "returned": 0
            }
          ]
        },
        {
          "time": "14:17",
          "name": "COLM QUINN BMW Mares Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m11y",
          "going": "Soft",
          "runners": 8,
          "source": "full",
          "status": "settled",
          "picks": [
            {
              "rank": 1,
              "horse": "Light Up The Dark",
              "prob": 0.5,
              "price": "10/11",
              "finish": "2",
              "sp": "4/7"
            },
            {
              "rank": 2,
              "horse": "Simply Natural",
              "prob": 0.3,
              "price": "15/8",
              "finish": "1",
              "sp": "5/2"
            }
          ],
          "winner": {
            "horse": "Simply Natural",
            "sp": "5/2",
            "agentProb": 0.3
          },
          "grade": "held",
          "errors": [],
          "notes": "Debut-jumping doubt on Light Up The Dark was real (not fluent 2 out); refusing odds-on was correct. Simply Natural made all.",
          "bets": [
            {
              "bet": "Light Up The Dark win (only at Evens+; not triggered)",
              "stake": 0,
              "returned": 0
            },
            {
              "bet": "Light Up The Dark → Simply Natural straight forecast",
              "stake": 0.5,
              "returned": 0
            },
            {
              "bet": "Tote trifecta LUTD → Simply Natural → Holly's Thunder",
              "stake": 0.25,
              "returned": 0
            }
          ]
        },
        {
          "time": "14:50",
          "name": "Medical Technology Ireland Expo Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m11y",
          "going": "Soft",
          "runners": 8,
          "source": "full",
          "status": "settled",
          "picks": [
            {
              "rank": 1,
              "horse": "Inthenickoftime",
              "prob": 0.29,
              "price": "11/4",
              "finish": "5",
              "sp": "5/2"
            },
            {
              "rank": 2,
              "horse": "Shellrunforbriggs",
              "prob": 0.2,
              "price": "7/2",
              "finish": "2",
              "sp": "4/1"
            }
          ],
          "winner": {
            "horse": "Castleheath",
            "sp": "3/1",
            "agentProb": 0.18
          },
          "grade": "mixed",
          "errors": [
            "A"
          ],
          "notes": "Soft-ground doubt on Inthenickoftime held. Castleheath marked down on soft runs from an over-rated period and won comfortably.",
          "bets": [
            {
              "bet": "Inthenickoftime win",
              "stake": 1,
              "returned": 0
            },
            {
              "bet": "Inthenickoftime ↔ Shellrunforbriggs reverse forecast",
              "stake": 0.5,
              "returned": 0
            }
          ]
        },
        {
          "time": "15:20",
          "name": "Supermac's Rated Novice Hurdle",
          "type": "hurdle",
          "distance": "2m4f156y",
          "going": "Soft",
          "runners": 5,
          "source": "full",
          "status": "settled",
          "picks": [
            {
              "rank": 1,
              "horse": "Fly Away Home",
              "prob": 0.32,
              "price": "6/1",
              "finish": "5",
              "sp": "11/2"
            },
            {
              "rank": 2,
              "horse": "Ole Ole",
              "prob": 0.31,
              "price": "4/1",
              "finish": "1",
              "sp": "11/4"
            }
          ],
          "winner": {
            "horse": "Ole Ole",
            "sp": "11/4",
            "agentProb": 0.31
          },
          "grade": "mixed",
          "errors": [
            "A",
            "C"
          ],
          "notes": "Ole Ole's stamina case (dam's record) held. Fly Away Home took a keen hold in a slowly run race, as flagged. Harpy Eagle (opposed on soft) ran 2nd.",
          "bets": [
            {
              "bet": "Fly Away Home each-way (1pt e/w)",
              "stake": 2,
              "returned": 0
            },
            {
              "bet": "Ole Ole win @ 4/1",
              "stake": 1,
              "returned": 5
            },
            {
              "bet": "Fly Away Home ↔ Ole Ole reverse forecast",
              "stake": 0.5,
              "returned": 0
            }
          ]
        },
        {
          "time": "15:56",
          "name": "Glenlo Abbey Hotel & Estate Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m5f100y",
          "going": "Soft",
          "runners": 12,
          "source": "full",
          "status": "settled",
          "picks": [
            {
              "rank": 1,
              "horse": "Bulgaden Castle",
              "prob": 0.45,
              "price": "5/6",
              "finish": "5",
              "sp": "Evens"
            },
            {
              "rank": 2,
              "horse": "Doctor Elvis",
              "prob": 0.25,
              "price": "7/2",
              "finish": "2",
              "sp": "3/1"
            }
          ],
          "winner": {
            "horse": "Always Scoring",
            "sp": "25/1",
            "agentProb": null
          },
          "grade": "mixed",
          "errors": [],
          "notes": "Refusing Bulgaden Castle at odds-on held: 5th of 10 finishers at Evens, keen early, mistake at the last, no extra (trainer's 150+ day returners 0/60). Doctor Elvis led, rallied, beaten 1 3/4L. Winner Always Scoring (25/1) stayed on from the rear stepping up in trip; dismissed, not rated.",
          "bets": [
            {
              "bet": "Doctor Elvis win @ 7/2",
              "stake": 0.5,
              "returned": 0
            }
          ]
        },
        {
          "time": "16:30",
          "name": "Tom Dempsey Flooring 4yo Fillies Pro/Am Flat Race",
          "type": "bumper",
          "distance": "2m11y",
          "going": "Soft",
          "runners": 6,
          "source": "full",
          "status": "settled",
          "provisional": true,
          "picks": [
            {
              "rank": 1,
              "horse": "Moscovite",
              "prob": 0.4,
              "price": "11/10",
              "finish": "6",
              "sp": "4/6"
            },
            {
              "rank": 2,
              "horse": "Va La Vie",
              "prob": 0.22,
              "price": "10/3",
              "finish": "2",
              "sp": "4/1"
            },
            {
              "rank": 3,
              "horse": "Mozart's Song",
              "prob": 0.14,
              "price": "8/1",
              "finish": "3",
              "sp": "11/1"
            }
          ],
          "winner": {
            "horse": "Bluebell Breeze",
            "sp": "13/2",
            "agentProb": null
          },
          "grade": "failed",
          "errors": [
            "E"
          ],
          "notes": "Unraced Moscovite (EUR260k, 40%) beaten 21L in last at 4/6; unraced Va La Vie 2nd, beaten 3L. Winner Bluebell Breeze was one of the raced fillies getting 7lb from both (claim missed until the 16:22 revision); raced 7lb-claimers filled 1st, 3rd, 4th and 5th. In-running comments not yet published.",
          "bets": [
            {
              "bet": "Va La Vie win (only at 3/1+) — withdrawn at 16:22, now below revised fair price",
              "stake": 0,
              "returned": 0
            },
            {
              "bet": "Mozart's Song each-way @ 8/1 (0.25pt e/w, 2 places at 1/4)",
              "stake": 0.5,
              "returned": 0
            }
          ]
        }
      ]
    },
    {
      "date": "2026-10-26",
      "course": "Galway",
      "country": "IRE",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdles soft; chase course soft to heavy (rain; Tuesday listed heavy)",
      "dataErrors": [
        "Ground came up Soft to Heavy across the whole card; the hurdle races (13:42-16:32) were analysed on 'Soft', a slight softening from overnight rain",
        "Free Racing Post result pages carried no in-running/jumping comments, so the 'how' behind the UR/PU/F runners (incl. danger Grace Faraday PU at 15:55, Plug In Hybrid UR at 13:42, For My Lady F at 14:12) is unconfirmed from source",
        "Two ranked picks were late ground withdrawals for 'unsuitable ground': Open Secret (15:20, 2nd pick) and Todo Bien (16:32, 2nd pick) - the latter removed the race's only proven soft/heavy runner"
      ],
      "races": [
        {
          "time": "13:12",
          "name": "SANSERV Rated Novice Chase",
          "type": "chase",
          "distance": "2m2f54y",
          "going": "Soft to Heavy",
          "runners": 7,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Gap-fill pass swapped the top two (Coral River 0.28 -> 0.23; Karl Des Tourelles 0.26 -> 0.30) after O'Sullivan's 150+ day returners came out 1 from 23. Three chase debutants; no clear pace. RESULT: Karl Des Tourelles won (Evens F) by 2 1/4L; the gap-fill swap to put him top over Coral River was vindicated. Danger King's Bucks 2nd (4/1); On Your Way 3rd (25/1); Coral River (179 days off) 4th (13/2).",
          "winner": {
            "horse": "Karl Des Tourelles",
            "sp": "Evens",
            "agentProb": 0.3
          },
          "writeup": "jumps/analyses/2026-10-26_galway/1312_sanserv-rated-novice-chase.md",
          "updated": "08:00 Mon 26 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Karl Des Tourelles",
              "prob": 0.3,
              "finish": "1",
              "sp": "Evens",
              "confidence": "low",
              "reason": "Best chase figure in the field: 2 3/4L 2nd to Road To Home (138) over course and distance 20 days ago, 10L ahead of Chart Topper (won here by 17L yesterday); fit, stays 3m on testing ground, 4lb better off than Coral River.",
              "against": "1 win in 17 starts; found little after leading or challenging in 4 races; jumping safe but slow at times."
            },
            {
              "rank": 2,
              "horse": "Coral River",
              "prob": 0.23,
              "finish": "4",
              "sp": "13/2",
              "confidence": "low",
              "reason": "Only previous chase winner (Clonmel rated novice), placed twice on heavy in Punchestown rated novices with the Dec 2nd franked; 5 of 5 chase completions.",
              "against": "179 days off (trainer 1 from 23 after 150+ days), 4lb penalty, unproven past 2m4f on testing ground."
            },
            {
              "rank": 3,
              "horse": "On Your Way",
              "prob": 0.13,
              "finish": "3",
              "sp": "25/1",
              "confidence": "low",
              "reason": "Chase debut on heavy: 3/4L behind He's Gorgeous and 3/4L ahead of Moudan (won 3 of 7 since, last off 130); gets the same 7lb claim again (carries 10-12).",
              "against": "328 days off, keen and held up in a race with no clear pace, has unseated and fallen over hurdles, amateur rider over fences."
            },
            {
              "rank": 4,
              "horse": "King's Bucks",
              "prob": 0.13,
              "finish": "2",
              "sp": "4/1",
              "confidence": "low",
              "danger": true,
              "reason": "3rd in the Grade 2 Hyde behind a later Grade 1 winner, verified point winner; de Bromhead chase debutants 4 from 17, all completed.",
              "against": "Chase debut, and last two runs poor (pulled up in a Grade 1, then beaten 13L at even money)."
            }
          ]
        },
        {
          "time": "13:42",
          "name": "QuinnBet 3-Y-O Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m90y",
          "going": "Soft",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Four hurdle debutants on soft; ground expected to worsen. Borora Aura (front-runner, won on soft to heavy, carries 10-0) the outsider if it turns heavy. RESULT: Sharkeyboy won (8/13F); the hurdle-debut doubt was correctly overridden by his flat form and Mullins. Green Soul (soft-stamina doubt flagged) 5th, well beaten; Wills History 9th. The flagged outsider Borora Aura ran 3rd (22/1).",
          "winner": {
            "horse": "Sharkeyboy",
            "sp": "8/13",
            "agentProb": 0.38
          },
          "writeup": "jumps/analyses/2026-10-26_galway/1342_quinnbet-3yo-maiden-hurdle.md",
          "updated": "07:54 Mon 26 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Sharkeyboy",
              "prob": 0.38,
              "finish": "1",
              "sp": "8/13",
              "confidence": "medium",
              "reason": "Flat OR 84-88, joint-best in the field; neck 2nd over 1m4f at Galway and beat Hello Garda (now hurdle OR 103) 13L; Mullins hurdling debutants 36%.",
              "against": "Hurdle debut, never raced on soft, 0 from 6 on the flat and headed late in two narrow defeats."
            },
            {
              "rank": 2,
              "horse": "Green Soul",
              "prob": 0.24,
              "finish": "5",
              "sp": "11/4",
              "confidence": "medium",
              "reason": "Clean hurdle round when 4th at Cork after 379 days off, staying on; top RPR/TS on the card; has run on soft.",
              "against": "Cork form unfranked; best flat form at 5.5f-1m, so 2m on soft up Galway's climb is a stamina question."
            },
            {
              "rank": 3,
              "horse": "Wills History",
              "prob": 0.09,
              "finish": "9",
              "sp": "66/1",
              "confidence": "low",
              "reason": "Collateral puts him 5-12lb behind Green Soul at level weights and he gets 7lb today; no jumping error on debut.",
              "against": "Faded from 2 out on his only start, unexplained NR at Cork on 11 Oct, inexperienced 7lb claimer."
            }
          ]
        },
        {
          "time": "14:12",
          "name": "Connolly's RED MILLS Irish EBF Auction & Median Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m90y",
          "going": "Soft",
          "runners": 11,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "Gap-fill pass (Update 07:58) put Give It A Crack top (0.21 -> 0.26) over Coolishael (0.28 -> 0.24) after her heavy-ground point 2nd was verified; Missouri Snow replaced Jury Time as the danger. Five hurdle debutants. RESULT: Winner If You Believe was our 3rd pick (11/4) on its proven-soft angle; Coolishael 2nd (2/1F), danger Missouri Snow 3rd (7/1), top pick Give It A Crack 4th (3/1). All four named runners filled the first four places, but the gap-fill promotion of Give It A Crack over Coolishael was backwards.",
          "winner": {
            "horse": "If You Believe",
            "sp": "11/4",
            "agentProb": 0.19
          },
          "writeup": "jumps/analyses/2026-10-26_galway/1412_irish-ebf-auction-median-maiden-hurdle.md",
          "updated": "07:58 Mon 26 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Give It A Crack",
              "prob": 0.26,
              "finish": "4",
              "sp": "3/1",
              "confidence": "medium",
              "reason": "About level with Coolishael at today's weights on the Listowel head-to-head (beaten 5L, 5lb better off now); 2nd on heavy over 3m in a mares' point; De Bromhead 9 NH wins from 34.",
              "against": "One hurdle run only, 5lb claimer replaces O'Keeffe, ATR noted mistakes and greenness at Listowel, no frank for that race."
            },
            {
              "rank": 2,
              "horse": "Coolishael",
              "prob": 0.24,
              "finish": "2",
              "sp": "2/1",
              "confidence": "medium",
              "reason": "Deepest Rules form: gave the Listowel winner 16lb and was beaten 1L; beaten 8.5L at level weights by Lizzie Twigg (since Listed winner, 127-128); three clean hurdle rounds.",
              "against": "No soft or heavy form found in any code, still a maiden (beaten at 8/15 at Ballinrobe), 'no extra' in 2 of 3 hurdle runs, yard 1 NH win from 29."
            },
            {
              "rank": 3,
              "horse": "If You Believe",
              "prob": 0.19,
              "finish": "1",
              "sp": "11/4",
              "confidence": "low",
              "reason": "Proven on soft: Clonmel 4th carrying 6lb more than the first two is worth about the low 110s; Cromwell and Donoghue won twice here yesterday.",
              "against": "Off 354 days for an unknown reason; Cromwell's 300+ day returners in the sample unplaced; not fluent twice in his only hurdle run."
            },
            {
              "rank": 4,
              "horse": "Missouri Snow",
              "prob": 0.1,
              "finish": "3",
              "sp": "7/1",
              "confidence": "low",
              "danger": true,
              "reason": "Point winner on soft to heavy, bumper winner and Listed 3rd; gets 12lb from the geldings and races prominently.",
              "against": "Hurdle debut, and beaten 15L in the Listed bumper."
            }
          ]
        },
        {
          "time": "14:45",
          "name": "Corrib Oil Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m90y",
          "going": "Soft",
          "runners": 19,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Fergy Five NR; reserve What About Max has no rider and is withdrawn automatically if none is named by 11:00 (re-check). Gap-fill pass cut Boycetown 0.42 -> 0.36 for hurdle debut in a 19-runner soft field (Cromwell hurdle debutants 0 from 11 in the sample). RESULT: 2nd pick Thinkitdontjinxit won (3/1) by 11L; its can-lead / soft-point reasoning held. Top pick Boycetown only dead-heated 3rd (10/11F, btn ~12.5L) - the gap-fill downgrade for the hurdle debut and ground was right. King Idaho 13th; danger This Songisforyou 10th.",
          "winner": {
            "horse": "Thinkitdontjinxit",
            "sp": "3/1",
            "agentProb": 0.15
          },
          "writeup": "jumps/analyses/2026-10-26_galway/1445_corrib-oil-maiden-hurdle.md",
          "updated": "07:59 Mon 26 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Boycetown",
              "prob": 0.36,
              "finish": "3",
              "sp": "10/11",
              "confidence": "medium",
              "reason": "About a stone clear on form: 4th in the Cheltenham Champion Bumper and 3rd beaten 2.5L in the Punchestown G1; proven on soft to heavy; completed a 3m point; prominent style suits the course.",
              "against": "Hurdle debut in a 19-runner field on soft; Cromwell hurdle debutants 0 from 11 in the sample; ran green and hung right in bumpers; 180 days off."
            },
            {
              "rank": 2,
              "horse": "Thinkitdontjinxit",
              "prob": 0.15,
              "finish": "1",
              "sp": "3/1",
              "confidence": "low",
              "reason": "Won his 3m point on soft by 8L, 2nd beaten 1.5L on soft at Thurles; was withdrawn at Limerick for the ground, so here for it; can lead.",
              "against": "About a stone below Boycetown, beaten 52.5L last time, Elliott debutants 0 from 6 in the sample."
            },
            {
              "rank": 3,
              "horse": "King Idaho",
              "prob": 0.09,
              "finish": "13",
              "sp": "14/1",
              "confidence": "low",
              "reason": "6th, beaten about 8.5L, in a strongly franked heavy-ground Naas bumper (2nd Simply Natural won here yesterday; 3rd now rated 118); Byrnes yard in form.",
              "against": "One run, 315 days off, hurdle debut, held up against a front-running bias."
            },
            {
              "rank": 4,
              "horse": "This Songisforyou",
              "prob": 0.07,
              "finish": "10",
              "sp": "9/1",
              "confidence": "low",
              "danger": true,
              "reason": "Flat 96-100 class and fit.",
              "against": "Jumping errors in 3 of 3 hurdle runs."
            }
          ]
        },
        {
          "time": "15:20",
          "name": "W.B. Gavin & Co. Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m5f200y",
          "going": "Soft",
          "runners": 14,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Open 14-runner soft handicap; picks plus danger 0.50. Prophet's Corner (front-runner, off 115 after claim) the closest outsider. One Big Boum's blinkers, worn for his 24L Fairyhouse win, are left off. RESULT: Top pick Stumptown won (7/1), a correctly-rated outsider (0.16 vs ~12.5% implied) - the chase-form-worth-145 angle held. 2nd pick Open Secret withdrawn (unsuitable ground; 12 ran). Danger Teed Up 4th (7/2F); One Big Boum 9th (blinkers off).",
          "winner": {
            "horse": "Stumptown",
            "sp": "7/1",
            "agentProb": 0.16
          },
          "writeup": "jumps/analyses/2026-10-26_galway/1520_wb-gavin-handicap-hurdle.md",
          "updated": "08:00 Mon 26 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Stumptown",
              "prob": 0.16,
              "finish": "1",
              "sp": "7/1",
              "confidence": "medium",
              "reason": "Hurdle mark 127 against chase form worth about 145 (3rd off 147 at Cheltenham, beaten 1.7L giving the winner 17lb) and a 5L win off 142 on heavy; won twice after long breaks; Cromwell 6/26 over jumps this month.",
              "against": "No hurdle run since 2022 (off 117), may lack hurdle speed at 2m5f, could be a cross-country prep, 229 days off."
            },
            {
              "rank": 2,
              "horse": "Open Secret",
              "prob": 0.13,
              "finish": "NR",
              "sp": "-",
              "confidence": "low",
              "reason": "Best three hurdle runs all on soft or soft-heavy, including a 0.75L G3 2nd worth about 130 against a mark of 127; completed all 7 hurdle starts and had a Flat run 28 days ago.",
              "against": "Beaten 16.6L and 26.5L in his only two handicaps; longest trip yet."
            },
            {
              "rank": 3,
              "horse": "One Big Boum",
              "prob": 0.12,
              "finish": "9",
              "sp": "22/1",
              "confidence": "low",
              "reason": "All four hurdle wins on soft or heavy, including a 24L heavy-ground win at Fairyhouse; likely leader.",
              "against": "Blinkers off (reason not found) after winning in them; up 21lb since January; untested beyond 2m4f50y at this level."
            },
            {
              "rank": 4,
              "horse": "Teed Up",
              "prob": 0.09,
              "finish": "4",
              "sp": "7/2",
              "confidence": "low",
              "danger": true,
              "reason": "Six Galway wins, the most in the field; August Galway 3rd franked by Castleheath winning here yesterday; off 114 after the claim.",
              "against": "Beaten 64L and 66L on both soft/heavy hurdle runs this year."
            }
          ]
        },
        {
          "time": "15:55",
          "name": "COLM QUINN BMW Handicap Hurdle (0-100)",
          "type": "hurdle",
          "distance": "3m",
          "going": "Soft",
          "runners": 20,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "20-runner 0-100 handicap on soft, wide open (picks 0.38 combined). Reserve Good World (R21) would carry 11-7. More rain helps Roc My Haarth and Imperial Tune. RESULT: Top pick Moonshine Girl won (12/1) by 13L, a correctly-rated outsider (0.16 vs ~7.7% implied) - the progressive-profile / C&D-win angle held. 2nd pick Roc My Haarth placed 4th (4/1). Lake Okeechobee 6th; danger Grace Faraday pulled up (13/2), the 0-from-9 soft/heavy-handicap doubt held. 19 ran.",
          "winner": {
            "horse": "Moonshine Girl",
            "sp": "12/1",
            "agentProb": 0.16
          },
          "writeup": "jumps/analyses/2026-10-26_galway/1555_colm-quinn-bmw-handicap-hurdle.md",
          "updated": "07:55 Mon 26 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Moonshine Girl",
              "prob": 0.16,
              "finish": "1",
              "sp": "12/1",
              "confidence": "medium",
              "reason": "Progressive (75 in May to 93); won over course and distance by 12L on 7 Sep (2nd won next time) and about 1lb better off with Grace Faraday than when 1/2L behind her on 6 Oct.",
              "against": "Career-high mark, true 3m on soft unproven, first-time visor replaces the blinkers she won in, 1 win from 20 over hurdles."
            },
            {
              "rank": 2,
              "horse": "Roc My Haarth",
              "prob": 0.13,
              "finish": "4",
              "sp": "4/1",
              "confidence": "low",
              "reason": "Best soft/heavy staying form among those rated 90+: 2nd over 3m on heavy at Limerick (beat Grace Faraday 18.5L), races prominently.",
              "against": "0 from 15 over hurdles, last two runs poor, beaten 37L and 18L on heavy before and has unseated."
            },
            {
              "rank": 3,
              "horse": "Lake Okeechobee",
              "prob": 0.09,
              "finish": "6",
              "sp": "10/1",
              "confidence": "low",
              "reason": "Carries 10-1 after a 5lb claim; improving (3rd at Listowel staying on) and completed all 9 starts.",
              "against": "Maiden, never beyond 2m6f, needs a personal best; yard 1 win in its last 50 runs."
            },
            {
              "rank": 4,
              "horse": "Grace Faraday",
              "prob": 0.08,
              "finish": "PU",
              "sp": "13/2",
              "confidence": "low",
              "danger": true,
              "reason": "Best course form: won this race last year, won here 7 Sep, 2nd here 6 Oct.",
              "against": "0 from 9 in soft/heavy hurdle handicaps and on a career-high 100."
            }
          ]
        },
        {
          "time": "16:32",
          "name": "Electric Galway (C & G) (Pro/Am) INH Flat Race",
          "type": "bumper",
          "distance": "2m90y",
          "going": "Soft",
          "runners": 9,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "Six of nine carry 11-3 with 7lb claims; Evans Wishes, Here's Jim and Marble Hill carry 11-10. Three unraced (Here's Jim capped by rule E). If heavy is declared, Todo Bien moves to top (about 0.28) and Ballyadam Star 2nd (about 0.22). RESULT: 2nd pick Todo Bien - the only proven soft/heavy runner - was withdrawn for unsuitable ground (7 ran), removing the form anchor. Winner Rockonfamouslee (16/1) was the 'strongest outsider' we identified but cut to 0.06 on a 0-40 trainer bumper record; we priced it near its SP. Top pick Ballyadam Star (11/8F, unproven on soft) 5th of 7; 3rd pick Marble Hill placed 3rd (2/1). Favourite was correctly tempered below the market (0.26 vs ~42% implied) but left on top after the ground NR.",
          "winner": {
            "horse": "Rockonfamouslee",
            "sp": "16/1",
            "agentProb": 0.06
          },
          "writeup": "jumps/analyses/2026-10-26_galway/1632_electric-galway-pro-am-flat-race.md",
          "updated": "08:10 Mon 26 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Ballyadam Star",
              "prob": 0.26,
              "finish": "5",
              "sp": "11/8",
              "confidence": "medium",
              "reason": "5th of 18 in the Punchestown festival 4yo bumper, beaten about 6L (3L behind Teofil, who has won 3 since); keeps his 7lb claim and gets 7lb from Marble Hill.",
              "against": "Never run on soft, Flat dam line, the Punchestown race was slowly run and Galway's 2f uphill finish tests stamina; off 181 days."
            },
            {
              "rank": 2,
              "horse": "Todo Bien",
              "prob": 0.25,
              "finish": "NR",
              "sp": "-",
              "confidence": "low",
              "reason": "Only runner with soft or heavy form: 3rd at Naas, 2 1/4L behind Apache Peak (later Listed 3rd); races prominently, Elliott 20% in bumpers, carries 11-3.",
              "against": "'No extra' late in both runs, best run in a 5-runner race, off 175 days."
            },
            {
              "rank": 3,
              "horse": "Marble Hill",
              "prob": 0.19,
              "finish": "3",
              "sp": "2/1",
              "confidence": "low",
              "reason": "Beaten 1 1/4L by Gillane (since won a 17-runner maiden hurdle) and 6L clear of the 3rd; French jumps pedigree, Cromwell in form.",
              "against": "Carries 11-10 with no claim, 13lb more than at Bellewstown, giving 7lb to both picks above; never run on soft; off 191 days."
            }
          ]
        }
      ]
    },
    {
      "date": "2026-10-27",
      "course": "Newcastle",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good (Good to Soft in places)",
      "dataErrors": [
        "Session rate limit (reset 12:40 UTC) killed the first gap-fill round; all races were then re-gap-filled and updated before their offs (12:56 was done record-only after the off, picks unchanged).",
        "ATR Smart Stats + Geegeez bot-blocked (Cloudflare) all day: course character was verified from alternative sources (Wikipedia/Timeform/Great British Racing) but trainer-jockey course strike-rates and formal pace maps could not be obtained.",
        "Sporting Life result/profile API carries no structured beaten-distance on the ride object itself; margins read from the finish_distance field and in-running comments."
      ],
      "races": [
        {
          "time": "12:56",
          "name": "Border Minstrel Dog Friendly Pub Maiden Hurdle (GBB Race)",
          "type": "hurdle",
          "distance": "2m190y",
          "going": "Good (Good to Soft in places)",
          "runners": 6,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Maiden hurdle, no OR. Both principals hurdle debutants from a bumper background. RESULT: 1-2-3 EXACTLY as ranked — Wilde's Legacy won readily (4/7F), My Mate Aj 2nd (btn 4.5L), danger Champagne Powder 3rd (7lb-claim angle held). Reasoning held in full.",
          "winner": {
            "horse": "Wilde's Legacy",
            "sp": "4/7",
            "agentProb": 0.37
          },
          "writeup": "jumps/analyses/2026-10-27_newcastle/1256_maiden-hurdle.md",
          "updated": "12:43 Tue 27 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Wilde's Legacy",
              "prob": 0.37,
              "finish": "1",
              "sp": "4/7",
              "confidence": "medium",
              "reason": "Strongest bumper form (dual winner with Grade 1 Champion Bumper exposure); strong-finishing style suits Newcastle's stiff uphill; in-form Snowden/Sheehan.",
              "against": "Hurdle debut (jumping unproven), 230 days off, the key win only weakly franked."
            },
            {
              "rank": 2,
              "horse": "My Mate Aj",
              "prob": 0.3,
              "finish": "2",
              "sp": "13/8",
              "confidence": "medium",
              "reason": "Won an 11-runner maiden bumper making all; beat Sky Grove who then won a C4 hurdle (franked); likely the lone front-runner = pace edge on the stiff track; jumping-bred.",
              "against": "Hurdle debut, keen-goer, modest Lingfield run, 194 days off."
            },
            {
              "rank": 3,
              "horse": "Champagne Powder",
              "prob": 0.14,
              "finish": "3",
              "sp": "20/1",
              "confidence": "low",
              "danger": true,
              "reason": "Only runner besides Captain Ted with hurdle experience; 4yo weight-for-age pull plus a 7lb claim (Noreci) and first-time hood to help her settle; race-fit to punish raggedness from the two debutants.",
              "against": "Hurdle form is two well-beaten 5ths and she didn't get home over 17f."
            }
          ]
        },
        {
          "time": "13:26",
          "name": "Mini Golf At High Gosforth Park Novices' Handicap Chase",
          "type": "chase",
          "distance": "3m",
          "going": "Good (Good to Soft in places)",
          "runners": 4,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "3m novices' handicap chase, 4 runners (Joie More a late NR → win-only terms). RESULT: top two finished 1-2 — Royal Time won (6/4F), Luminaries 2nd (btn 1.75L); Royal Time's 3m stamina doubt overcome (rallied). Danger Thereyare FELL 10th — the flagged chase-debut risk materialised. Win-only field, so Luminaries' 2nd does not score.",
          "winner": {
            "horse": "Royal Time",
            "sp": "6/4",
            "agentProb": 0.39
          },
          "writeup": "jumps/analyses/2026-10-27_newcastle/1326_novices-handicap-chase.md",
          "updated": "12:55 Tue 27 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Royal Time",
              "prob": 0.39,
              "finish": "1",
              "sp": "6/4",
              "confidence": "medium",
              "reason": "Only runner with current chase-winning form and a clean jumping record (10/11 chase completions, the 'U' a hamper); won LTO 9 days ago unpenalised; prominent galloper suits the stiff track.",
              "against": "His wins/best are 2m4f-2m7f and his 3m runs are only one-paced — back up to a stiff 3m is the live doubt; amateur rider, top weight."
            },
            {
              "rank": 2,
              "horse": "Luminaries",
              "prob": 0.32,
              "finish": "2",
              "sp": "9/4",
              "confidence": "medium",
              "reason": "Won last 2 (both this month, hurdles, in blinkers), well-in over fences (chase OR 82 vs 89-96 in 2025), proven 3m stayer on good, course form.",
              "against": "Recorded 3m-chase PU, 'not fluent' x3 (Step-14 cap, held below Royal Time); 0/4 over fences; the resurgence is over hurdles."
            },
            {
              "rank": 3,
              "horse": "Thereyare",
              "prob": 0.18,
              "finish": "F",
              "sp": "11/4",
              "confidence": "low",
              "danger": true,
              "reason": "Won LTO (2m7f hurdle), point background, strong staying pedigree, from a strong yard (Greenall & Guerriero ~19%) that lands chase-debut handicaps; Maggs's claim nets him below 11-9.",
              "against": "Chase debutant (jumping cap, not top pick) and 220 days off; the LTO win is unfranked; unproven over fences/3m."
            }
          ]
        },
        {
          "time": "14:01",
          "name": "High Gosforth Park Golf Club Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m190y",
          "going": "Good (Good to Soft in places)",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [
            "F"
          ],
          "notes": "10-runner Class-5 handicap hurdle. RESULT: 2nd pick Cawthorne Cracker WON (9/4F); 3rd pick Thesoldiersminit 2nd (btn 2.75L); danger Nobotheratall 4th. Top pick National Question tailed off 8th ('soon lost touch') — its own stated against (13lb above last year's mark, below par in spring) was right, so ranking it over the in-form Cawthorne was the error (code F). Winner came from the top two.",
          "winner": {
            "horse": "Cawthorne Cracker",
            "sp": "9/4",
            "agentProb": 0.21
          },
          "writeup": "jumps/analyses/2026-10-27_newcastle/1401_handicap-hurdle.md",
          "updated": "13:01 Tue 27 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "National Question",
              "prob": 0.27,
              "finish": "8",
              "sp": "6/1",
              "confidence": "medium",
              "reason": "Won this exact race in 2025 (beating Cawthorne Cracker off a 12lb-lower mark) and 2nd in 2024; completes every start (34/34); returns fresh (136 days), the same pattern as last year's fresh win; the Carlisle win is franked by 4 next-time-out winners; 5lb claim nets him to ~OR 81.",
              "against": "Rated 13lb above last year's winning mark (73) and below par on both spring runs — relies on bouncing back fresh."
            },
            {
              "rank": 2,
              "horse": "Cawthorne Cracker",
              "prob": 0.21,
              "finish": "1",
              "sp": "9/4",
              "confidence": "medium",
              "reason": "In-form and consistent (2nd-1st-2nd last three) over 2m-2m4f on good; placed at this C&D (3rd 2024, 5th 2025); last six all clean; trip and ground ideal.",
              "against": "Exposed veteran near his OR-84 ceiling; carries no claim, so fairly treated rather than well-in; National Question beat him in this race last year."
            },
            {
              "rank": 3,
              "horse": "Thesoldiersminit",
              "prob": 0.11,
              "finish": "2",
              "sp": "9/2",
              "confidence": "low",
              "reason": "Progressive 5yo, 4th of 10 off 88 at Worcester three weeks ago; Powell booked; left-jumping less costly at left-handed Newcastle.",
              "against": "Winless over hurdles (0/7) with a recurring left-jumping flaw and fades late — a recorded jumping doubt caps him."
            },
            {
              "rank": 4,
              "horse": "Nobotheratall",
              "prob": 0.08,
              "finish": "4",
              "sp": "9/1",
              "confidence": "low",
              "danger": true,
              "reason": "Best on official figures (2nd in a Class 3 off 110 in June) and 10lb lower now.",
              "against": "Out of form (124798), top weight 12-0, a fading front-runner at a stamina-testing track; quick back in 11 days."
            }
          ]
        },
        {
          "time": "14:31",
          "name": "Sunday Lunch At The Border Minstrel Novices' Limited Handicap Chase (GBB Race)",
          "type": "chase",
          "distance": "3m",
          "going": "Good (Good to Soft in places)",
          "runners": 4,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "4-runner 3m novices' limited handicap chase; 3 of 4 chase debutants. RESULT: danger Sleedagh WON (9/2) with our exact reasoning (only proven chaser, debutants err); Kent De Thaix 2nd (btn short-head), Silver Hill last of 4 ('lost position 3 out' — the debut doubt), Rocheval 3rd. Both scored picks lost (win-only field). Ranking error: in a 3-of-4-debutant chase the proven chaser should have been promoted above the debutants, not left as the danger (proposed new rule, pending).",
          "winner": {
            "horse": "Sleedagh",
            "sp": "9/2",
            "agentProb": 0.18
          },
          "writeup": "jumps/analyses/2026-10-27_newcastle/1431_novices-limited-handicap-chase.md",
          "updated": "13:00 Tue 27 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Kent De Thaix",
              "prob": 0.35,
              "finish": "2",
              "sp": "2/1",
              "confidence": "medium",
              "reason": "Proven, well-franked 3m handicap form (won 3m Wetherby beating American Mike, who then won a Class-3 chase and reached OR140; 6th of 15 beaten under a length off OR123 on soft at Ayr) and sound hurdle jumping (6/7 completions); improved since joining S England; wind op + first-time tongue strap.",
              "against": "Chase debut unproven (the point-to-point background could not be verified), top weight, 193-day layoff."
            },
            {
              "rank": 2,
              "horse": "Silver Hill",
              "prob": 0.34,
              "finish": "4",
              "sp": "2/1",
              "confidence": "medium",
              "reason": "Progressive and franked (Sanilam, who beat him 1/2L, went on to win in Class 2 and reach OR127); bumper winner with a stamina pedigree (Shirocco/Presenting) for the 3m step; hot Snowden + Sheehan; Newcastle course form.",
              "against": "Never jumped a fence and never raced beyond 2m4f — two unproven questions at once — plus 223 days off and a hold-up style on a stiff galloping track."
            },
            {
              "rank": 3,
              "horse": "Sleedagh",
              "prob": 0.18,
              "finish": "1",
              "sp": "9/2",
              "confidence": "low",
              "danger": true,
              "reason": "The only completed chaser in the field, stays ~3m, dropping to OR 114, fit (33 days); place chance if the debutants err.",
              "against": "Winless in 8, one-paced (placings often well beaten), tailed off last on chase debut."
            }
          ]
        },
        {
          "time": "15:01",
          "name": "Dogs Welcome At The Border Minstrel Pub Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m190y",
          "going": "Good (Good to Soft in places)",
          "runners": 6,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "6-runner Class-4 handicap hurdle. RESULT: 2nd pick North Of Richmond WON (9/4); 3rd pick Roarin' Success 2nd (btn 1L); top pick Jentobello 3rd (btn 3L, led then headed before last); danger Hunters Spring weakened 4th. Winner from the top two — but the gap-fill switch (promoting Jentobello over NoR) demoted the actual winner: the verified well-in/wins-fresh NoR was the better first-pass top pick.",
          "winner": {
            "horse": "North Of Richmond",
            "sp": "9/4",
            "agentProb": 0.23
          },
          "writeup": "jumps/analyses/2026-10-27_newcastle/1501_handicap-hurdle.md",
          "updated": "12:57 Tue 27 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Jentobello",
              "prob": 0.32,
              "finish": "3",
              "sp": "13/8",
              "confidence": "medium",
              "reason": "Most reliable in the race — placed 8 of 9 career, completed all 9, won last time — and now proven around the trip (two 2m bumper wins + a ~2m hurdle debut resolve the trip-drop doubt); B S Hughes.",
              "against": "His last win was only a 3-runner race; giving weight all round."
            },
            {
              "rank": 2,
              "horse": "North Of Richmond",
              "prob": 0.23,
              "finish": "1",
              "sp": "9/4",
              "confidence": "medium",
              "reason": "Well-in on a now-verified Codetalker line (he beat Codetalker on debut; Codetalker has since won a 15-runner C4 off OR120, rated ~124); wins fresh (won hurdle debut after ~10.5 months off), answering the 242-day layoff.",
              "against": "242 days off, 12-0 top weight up a stiff hill, and 0 completed handicap starts — his only handicap run was a PU."
            },
            {
              "rank": 3,
              "horse": "Roarin' Success",
              "prob": 0.2,
              "finish": "2",
              "sp": "3/1",
              "confidence": "medium",
              "reason": "In-form and the race's reliable completer (every start completed); proven at the C&D (2nd over Newcastle 2m190y) and suited by a strong pace as a staying closer.",
              "against": "Exposed placer running to a 103 mark, no Class-4 win."
            },
            {
              "rank": 4,
              "horse": "Hunters Spring",
              "prob": 0.14,
              "finish": "4",
              "sp": "14/1",
              "confidence": "low",
              "danger": true,
              "reason": "Strongest Newcastle course record — a 2m190y bumper winner there plus a placed bumper and a hurdle 4th — and bottom weight getting weight from all.",
              "against": "Winless over hurdles (0/6) and modest overall."
            }
          ]
        },
        {
          "time": "15:31",
          "name": "attheraces.com/marketmovers Handicap Chase (GBB Race)",
          "type": "chase",
          "distance": "2m4f19y",
          "going": "Good (Good to Soft in places)",
          "runners": 6,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "6-runner Class-4 handicap chase. RESULT: our opposed 3rd pick Rule Me In WON (11/10F), travelling well ('shaken up after 3 out going well') — the 21lb mark collapse (107 to 86) beat our jumping caution. Top pick Empty Nest 2nd (btn 4.75L, C&D form held, places). 2nd pick Aill Dubh last of 6 — the 'not well-in' temper was right. Sound process on the faller fear, but it won anyway.",
          "winner": {
            "horse": "Rule Me In",
            "sp": "11/10",
            "agentProb": 0.17
          },
          "writeup": "jumps/analyses/2026-10-27_newcastle/1531_handicap-chase.md",
          "updated": "12:56 Tue 27 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Empty Nest",
              "prob": 0.34,
              "finish": "2",
              "sp": "7/1",
              "confidence": "medium",
              "reason": "Best course-and-distance form (Newcastle 2m4f19y: 1-2-2-3); no fall/unseat in a 23-run career; now 2-4lb below his C&D winning/placing marks; stable no.1 jockey takes him over the stablemate.",
              "against": "199 days off and one prior below-par seasonal return — may need the run."
            },
            {
              "rank": 2,
              "horse": "Aill Dubh",
              "prob": 0.21,
              "finish": "6",
              "sp": "8/1",
              "confidence": "medium",
              "danger": true,
              "reason": "In form (2 wins in 2026, 6 straight completions since March), course winner, good ground ideal, stiff stamina track suits; 5lb claim nets him to the lightest weight.",
              "against": "Actually ~7lb out of the handicap (races above his winning marks); trip drop to his sharpest since a winter slump; may duel for the lead."
            },
            {
              "rank": 3,
              "horse": "Rule Me In",
              "prob": 0.17,
              "finish": "1",
              "sp": "11/10",
              "confidence": "low",
              "reason": "Mark collapsed 107 to 86; 2nd LTO in cheekpieces (39 days); hot travelling yard.",
              "against": "0-8 over fences with chronic jumping errors (a bad mistake nearly every start); must quicken late over fences on a stiff track — exactly his error scenario."
            }
          ]
        },
        {
          "time": "16:01",
          "name": "Breeders' Cup On Sky Sports Racing Open Maiden NH Flat Race (GBB Race)",
          "type": "bumper",
          "distance": "2m190y",
          "going": "Good (Good to Soft in places)",
          "runners": 9,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Open maiden bumper, 9 runners. RESULT: 2nd pick Always Proud WON (9/4, the Class-2-drop angle); top pick Mon Missel 2nd, beaten a HEAD ('just denied in sustained drive'). 3rd pick Batchelor's Lad 4th. Danger Cayenne — the unraced 7/4F we capped under Step 15 — finished 5th behind both picks: the cap was vindicated (Galway-Moscovite lesson applied correctly). Winner from the top two.",
          "winner": {
            "horse": "Always Proud",
            "sp": "9/4",
            "agentProb": 0.2
          },
          "writeup": "jumps/analyses/2026-10-27_newcastle/1601_open-maiden-nh-flat-race.md",
          "updated": "12:54 Tue 27 Oct",
          "picks": [
            {
              "rank": 1,
              "horse": "Mon Missel",
              "prob": 0.26,
              "finish": "2",
              "sp": "4/1",
              "confidence": "medium",
              "reason": "Only race-fit, recent form (3rd of 8 in a 2m Stratford bumper 22 days ago, led and stayed on); the galloping stiffer track suits a horse that wanted a stamina test at sharp Stratford; Snowden/Sheehan.",
              "against": "Beaten at 4/5 and only one-paced; Stratford form unfranked (winner and 2nd not run since)."
            },
            {
              "rank": 2,
              "horse": "Always Proud",
              "prob": 0.2,
              "finish": "1",
              "sp": "9/4",
              "confidence": "medium",
              "reason": "Best bare line — 7th of 20 in a Class-2 Newbury bumper (btn ~8.75L off a light 10-10), now dropping to Class 5; pedigree stays 2m.",
              "against": "220 days off and 'petered out late' at Newbury — a stamina doubt up this stiff hill; the Class-2 line only moderately franked."
            },
            {
              "rank": 3,
              "horse": "Batchelor's Lad",
              "prob": 0.14,
              "finish": "4",
              "sp": "22/1",
              "confidence": "low",
              "reason": "Promising 2nd of 6 on debut at Doncaster (beat the 5/6 favourite); a likely rider's claim would help him against the no-claim rivals.",
              "against": "228 days off, weakly franked (the winner then flopped 9th of 10 in Class 2), still a maiden."
            },
            {
              "rank": 4,
              "horse": "Cayenne",
              "prob": 0.18,
              "finish": "5",
              "sp": "7/4",
              "confidence": "low",
              "danger": true,
              "reason": "N G Richards has a verified strong bumper record (~30%, 24-81) and the yard strengthens in winter; McMenamin booked; top Timeform stars.",
              "against": "Unraced (Step-15 cap: kept below 30% and below two franked rivals); dam a 10.5f Flat winner, so stamina for a stiff 2m is unproven (Galway-Moscovite lesson)."
            }
          ]
        }
      ]
    },
    {
      "date": "2026-10-31",
      "course": "Ascot",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdles Good to Firm (Good in places); chase course Good (Good to Firm in places)",
      "dataErrors": [
        "14:00: Boothill was a late non-runner (withdrawn after the card was finalised); 11 actually ran. Not a pick, so no material impact."
      ],
      "races": [
        {
          "time": "13:25",
          "name": "Ascot Underwriting Novices' Limited Handicap Chase (GBB Race)",
          "type": "chase",
          "distance": "2m2f181y",
          "going": "Good (Good to Firm in places)",
          "runners": 5,
          "source": "full",
          "status": "settled",
          "grade": "failed",
          "errors": [
            "H",
            "I"
          ],
          "winner": {
            "horse": "The Gray Ghost",
            "sp": "7/2",
            "agentProb": 0.08
          },
          "notes": "RESULT: The Gray Ghost (7/2) won — the horse we wrote off (0.08) on 'recurring jumping errors'; one 'not fluent 12th' but stayed on well. Win JTV 2nd (13/8F, keen, not fluent); E-W Merely A Detail 4th; Danger Glynn Brae last of 5. Errors H+I: non-fatal fluency over-weighted, and 0.42/high-confidence on a pick carrying its own amateur-claim + jumping doubts.",
          "writeup": "jumps/analyses/2026-10-31_ascot/1325_ascot-underwriting-novices-limited-handicap-chase.md",
          "updated": "16:50 Sat 31 Oct",
          "picks": [
            {
              "role": "win",
              "horse": "Jet To Vegas",
              "prob": 0.42,
              "placeProb": 0.72,
              "finish": "2",
              "sp": "13/8",
              "confidence": "high",
              "reason": "Only runner with proven chase form and Ascot course form over fences (2nd to Thomas Mor 142 ahead of Lucky Place 153 last Nov); last-time-out win franked (Fringill Dike won next time by 23L); races off ~128 with the 7lb claim, ~7lb well-in; small field suits.",
              "against": "7lb claim taken by an amateur (Mr Lucas Murphy for B S Hughes); 'slow 1st'/'jumped right' errors on his card; weak 4-runner Market Rasen win; 2m2.5f shorter than his best."
            },
            {
              "role": "ew",
              "horse": "Merely A Detail",
              "prob": 0.11,
              "placeProb": 0.31,
              "finish": "4",
              "sp": "15/2",
              "confidence": "medium",
              "reason": "Cleanest chase-jumping record in the field (3/3 over fences, all top-3, 2 wins); progressive 5yo at bottom weight, 14lb lighter than last run; J J Burke booked.",
              "against": "Lowest-rated (114), ~3lb wrong at the weights, needs ~10lb improvement to win; no Ascot form — the place, not the win, is the angle."
            },
            {
              "role": "danger",
              "horse": "Glynn Brae",
              "prob": 0.21,
              "placeProb": 0.42,
              "finish": "5",
              "sp": "9/2",
              "confidence": "medium",
              "reason": "Top-rated (136); won at Ascot over 2m5f on good; front-runner at a front-runner-friendly stiff track; top yard with stable jockey — Chepstow 9th was a keen/hampered premier-handicap reappearance."
            }
          ]
        },
        {
          "time": "14:00",
          "name": "Sodexo Live! Handicap Chase (GBB Race)",
          "type": "chase",
          "distance": "2m172y",
          "going": "Good (Good to Firm in places)",
          "runners": 12,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "winner": {
            "horse": "Vanderpoel",
            "sp": "4/1",
            "agentProb": 0.17
          },
          "notes": "RESULT: Danger Vanderpoel won (4/1) — winner in our three (coverage held). Win Martator 2nd (11/1, 'no impression'); E-W Haas Boy 7th (4/1). Boothill a late NR (11 ran). The single Grand Annual head-to-head was over-weighted vs Vanderpoel's broader progressive profile; the flagged alternative E-W Shakeyatailfeather ran 3rd (16/1).",
          "writeup": "jumps/analyses/2026-10-31_ascot/1400_sodexo-live-handicap-chase.md",
          "updated": "16:50 Sat 31 Oct",
          "picks": [
            {
              "role": "win",
              "horse": "Martator",
              "prob": 0.19,
              "placeProb": 0.45,
              "finish": "2",
              "sp": "11/1",
              "confidence": "medium",
              "reason": "Won the Grand Annual (Cheltenham 20-runner Premier handicap) last time; strongest Ascot record (won 2m167y twice, 2nd in Hurst Park over CD, that form franked by Calico).",
              "against": "Top weight 12-0 (+5 to 144), 234 days off at 9yo, and the Grand Annual win was 66/1 by a nose — a single standout, not a consistent level."
            },
            {
              "role": "ew",
              "horse": "Haas Boy",
              "prob": 0.12,
              "placeProb": 0.38,
              "finish": "7",
              "sp": "4/1",
              "confidence": "medium",
              "reason": "Race-fit course-and-distance winner — won this Ascot 2m172y in March off 114 (now 120, 10-4), close 2nd in a Chepstow hurdle 20 days ago as a prep; sound jumper, goes prominent.",
              "against": "Ascot win was 'all out' in a 5-runner Class 3 and other wins in 3-4-runner fields; 12-runner Class 2 is a big step up."
            },
            {
              "role": "danger",
              "horse": "Vanderpoel",
              "prob": 0.17,
              "placeProb": 0.42,
              "finish": "1",
              "sp": "4/1",
              "confidence": "medium",
              "reason": "Progressive 7yo (4 wins/8), Ascot CD winner, runs off the same mark as his Grand Annual 7th; wind op since, clean jumper, prominent — but the Grand Annual head-to-head was decisively Martator's (~13L behind)."
            }
          ]
        },
        {
          "time": "14:33",
          "name": "Sodexo Live! Regal Encore Handicap Chase (Premier Handicap) (GBB Race)",
          "type": "chase",
          "distance": "2m7f185y",
          "going": "Good (Good to Firm in places)",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "winner": {
            "horse": "Viroflay",
            "sp": "3/1",
            "agentProb": 0.2
          },
          "notes": "RESULT: Win Viroflay won (3/1) and E-W Your Darling 2nd (16/1) — reasoning held in full. Califet En Vol (our main outsider, 5/2F) flopped 6th, vindicating the 3m-over-fences doubt; Danger Imperial Alex 9th (33/1).",
          "writeup": "jumps/analyses/2026-10-31_ascot/1433_sodexo-live-regal-encore-handicap-chase.md",
          "updated": "16:50 Sat 31 Oct",
          "picks": [
            {
              "role": "win",
              "horse": "Viroflay",
              "prob": 0.2,
              "placeProb": 0.52,
              "finish": "1",
              "sp": "3/1",
              "confidence": "medium",
              "reason": "Field's most proven 3m stayer (won Kempton 3m off 136, Newton Abbot 3m1f off 140; 7 runs at the trip); 11/16 placed, won last time; 7lb claim runs him off ~137 on ideal good ground.",
              "against": "Handicap wins all Class 3 or below; only recent Cl1 (Topham) was 17th with mistakes; 7lb amateur ~3/21 in 2026 and 0-9 over fences; 171 days off."
            },
            {
              "role": "ew",
              "horse": "Your Darling",
              "prob": 0.14,
              "placeProb": 0.38,
              "finish": "2",
              "sp": "16/1",
              "confidence": "medium",
              "reason": "Best proven place form at this level — 3rd of 11 in the Betfair Swinley (this C&D, off 139) with that form franked (winner Montregard 3rd in a Listed next time); 2nd Kempton 3m (Cl2).",
              "against": "11yo top weight 12-0, 5lb above his Swinley mark, 182 days off; only reappearance was 4th of 4 as favourite; last run a pull-up."
            },
            {
              "role": "danger",
              "horse": "Imperial Alex",
              "prob": 0.13,
              "placeProb": 0.35,
              "finish": "9",
              "sp": "33/1",
              "confidence": "medium",
              "reason": "Won the bet365 Summer Cup (Cl2, 3m10y, 13 ran) beating Ki Woo with Queensbury Boy 8th; stays 3m3f; carries 10-10 with first-time visor; Queensbury Boy won a Cl1 next time (indirect frank)."
            }
          ]
        },
        {
          "time": "15:10",
          "name": "1st Class Logistics Novices' Hurdle (GBB Race)",
          "type": "hurdle",
          "distance": "1m7f157y",
          "going": "Good to Firm (Good in places)",
          "runners": 5,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [
            "G"
          ],
          "winner": {
            "horse": "Babs",
            "sp": "11/4",
            "agentProb": 0.21
          },
          "notes": "RESULT: E-W Babs won (11/4) — the only proven hurdler beat the classier debutants. Win Sportingsilvermine 3rd (13/8F, 'not fluent' twice), Danger No Way Jay 2nd (7/4). Error G: a hurdle debutant (flat recruit) ranked above the proven, reliable completer.",
          "writeup": "jumps/analyses/2026-10-31_ascot/1510_1st-class-logistics-novices-hurdle.md",
          "updated": "16:50 Sat 31 Oct",
          "picks": [
            {
              "role": "win",
              "horse": "Sportingsilvermine",
              "prob": 0.36,
              "placeProb": 0.62,
              "finish": "3",
              "sp": "13/8",
              "confidence": "medium",
              "reason": "Strongest overall profile — flat OR 91 (Class 2 Old Newton Cup winner, 2nd in Shergar Cup at Ascot), fit (4th at Newmarket 28d ago), good-to-firm his best surface; James Owen has a proven Flat-to-hurdles record.",
              "against": "Never jumped a hurdle; recent flat form patchy; 1m7.5f at stiff Ascot a shade beyond his proven flat best (~1m4f-1m6f)."
            },
            {
              "role": "ew",
              "horse": "Babs",
              "prob": 0.21,
              "placeProb": 0.48,
              "finish": "1",
              "sp": "11/4",
              "confidence": "medium",
              "reason": "Only proven hurdler (4 starts, 4 completions, 2 wins + 1 2nd; 2/2 over hurdles on good); most likely to run her race into a place if a debutant fluffs its jumping, at a longer fair price.",
              "against": "Gives 3-4lb to all while stepping up Class 4 to Class 3; last win a short-head photo in a slowly-run race; both hurdle wins only weakly franked."
            },
            {
              "role": "danger",
              "horse": "No Way Jay",
              "prob": 0.25,
              "placeProb": 0.52,
              "finish": "2",
              "sp": "7/4",
              "confidence": "medium",
              "reason": "Best NH-relevant form — 4th/15 in the Listed Ascot bumper (this C&D) behind Bass Hunter (later Champion Bumper 3rd, hurdle-debut winner) and ahead of Forthfactor (later Grade 2 bumper winner); right-handed suits; Tizzard/Powell hot."
            }
          ]
        },
        {
          "time": "15:43",
          "name": "Lavazza Handicap Hurdle (GBB Race)",
          "type": "hurdle",
          "distance": "1m7f157y",
          "going": "Good to Firm (Good in places)",
          "runners": 16,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "winner": {
            "horse": "Trustintimes",
            "sp": "11/4",
            "agentProb": 0.18
          },
          "notes": "RESULT: Win Trustintimes won (11/4) and E-W Moveit Like Minnie 3rd (11/2) — reasoning held in full. Danger Morning Mayhem 7th (12/1); Indemnity 2nd (28/1, rated 0.07).",
          "writeup": "jumps/analyses/2026-10-31_ascot/1543_lavazza-handicap-hurdle.md",
          "updated": "16:50 Sat 31 Oct",
          "picks": [
            {
              "role": "win",
              "horse": "Trustintimes",
              "prob": 0.18,
              "placeProb": 0.42,
              "finish": "1",
              "sp": "11/4",
              "confidence": "medium",
              "reason": "Only Ascot winner in the field (won this C&D off 119); unbeaten in 4 hurdle completions at 2m or shorter; ATR Smart Stats 5-4-1 at the trip; ~16lb better off with Williethebuilder on their Kempton form.",
              "against": "Every win in 7-9-runner Class 3/4 and the C&D win (20/1, 'left in disputed lead 4th') may have been gifted; 16-runner Class 2 off 127 (8lb above that mark); only big-field test (Aintree) was 17th."
            },
            {
              "role": "ew",
              "horse": "Moveit Like Minnie",
              "prob": 0.13,
              "placeProb": 0.45,
              "finish": "3",
              "sp": "11/2",
              "confidence": "medium",
              "reason": "Deepest Ascot record (8 hurdle runs, 6 top-4; 3rd in this race last year, that form franked by Alexei winning Greatwood + Kingwell); carries 2lb less than then; 30/31 hurdle completions; front-runner suits Ascot, de Boinville booked.",
              "against": "9yo serial placer who has never won at Ascot C&D (3rd/4th/5th); yard (Twiston-Davies) cold at 1/19 this season; faces competition for the lead."
            },
            {
              "role": "danger",
              "horse": "Morning Mayhem",
              "prob": 0.15,
              "placeProb": 0.4,
              "finish": "7",
              "sp": "12/1",
              "confidence": "medium",
              "reason": "Most consistent current Class 2 form — 2nd/17 in the Welsh Champion and 2nd by a head at Market Rasen, both conquerors franked; stays 2m and a mid-division stalker who avoids the early pace battle."
            }
          ]
        },
        {
          "time": "16:15",
          "name": "Ascot Colts And Fillies' Club Open NH Flat Race (GBB Race)",
          "type": "bumper",
          "distance": "1m7f157y",
          "going": "Good to Firm (Good in places)",
          "runners": 9,
          "source": "full",
          "status": "settled",
          "provisional": true,
          "grade": "mixed",
          "errors": [],
          "winner": {
            "horse": "Saint Argente",
            "sp": "2/1",
            "agentProb": 0.26
          },
          "notes": "RESULT: Danger Saint Argente won (2/1) — winner in our three. Win Lord Churchill 2nd (9/4F, the thin franked-vs-unfranked edge went the wrong way); E-W Shane's Spirit 6th (9/1). Unraced Colombe d'Or (0.10) 3rd (7/2). In-running comments not yet published (provisional).",
          "writeup": "jumps/analyses/2026-10-31_ascot/1615_ascot-colts-and-fillies-club-open-nh-flat-race.md",
          "updated": "16:50 Sat 31 Oct",
          "picks": [
            {
              "role": "win",
              "horse": "Lord Churchill",
              "prob": 0.3,
              "placeProb": 0.6,
              "finish": "2",
              "sp": "9/4",
              "confidence": "medium",
              "reason": "Only one of the three penalised winners whose form is franked (Posh Chick won next time out); RPR revised to 113, best in field; prominent/truly-run style suits galloping Ascot.",
              "against": "Stable debut off 213 days for a cold new yard (0/14 last 14d); 113 is a reassessment of a 104 on-the-day run; frank was in a modest mares' bumper."
            },
            {
              "role": "ew",
              "horse": "Shane's Spirit",
              "prob": 0.15,
              "placeProb": 0.45,
              "finish": "6",
              "sp": "9/1",
              "confidence": "medium",
              "reason": "Only race-fit runner (41 days); proven Rules bumper winner who made all on Good to Firm; front-running edge at Ascot at a longer fair price.",
              "against": "4lb penalty puts him level with rivals rated ~10lb better; Plumpton win in a 6-runner Class 5; recorded keen-goer."
            },
            {
              "role": "danger",
              "horse": "Saint Argente",
              "prob": 0.26,
              "placeProb": 0.55,
              "finish": "1",
              "sp": "2/1",
              "confidence": "medium",
              "reason": "Beat Listed-placed Ivor Bear (2/1F) by 2L at stiff Warwick; in-form Greatrex keeps him, Sam Twiston-Davies booked, wind op since last run."
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-02",
      "course": "Plumpton",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good (Good to Soft in places)",
      "dataErrors": [
        "Fact pack mis-mapped Range (14:30) as first-time cheekpieces; the cheekpieces belong to Nardaran (established) — caught in the 14:30 gap-fill pass",
        "14:30 first pass wrongly called Kocktail Bleu untried at 2m4f; he had run the trip once and weakened late — corrected in gap-fill before recording",
        "14:00 Onewayortother was a late non-runner (declared at ~07:20, withdrawn by race time); not flagged in the 12:43 pre-off sweep"
      ],
      "races": [
        {
          "time": "13:00",
          "name": "Richard Soan Roofing Services Novices' Handicap Chase",
          "type": "chase",
          "distance": "3m1f157y",
          "going": "Good (Good to Soft in places)",
          "runners": 4,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "winner": {
            "horse": "Could Be You",
            "sp": "3/1",
            "agentProb": 0.24
          },
          "notes": "RESULT: Danger Could Be You WON (3/1), made all — our only proven 3m stayer, exactly as flagged. Win Tom Taggle 3rd (13/8F), 'lost position before 4 out' — the stamina doubt was right. Hard Stare 2nd (9/4). Winner came from our top two. The Step 13 chase-debut cap kept the winner (a point-experienced debutant) off the Win; a front-runner won on a front-runner track.",
          "writeup": "jumps/analyses/2026-11-02_plumpton/1300_novices-handicap-chase.md",
          "updated": "08:15 Mon 2 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Tom Taggle",
              "prob": 0.37,
              "placeProb": 0.58,
              "finish": "3",
              "sp": "13/8",
              "confidence": "low",
              "reason": "The only runner with completed chase rounds (2/2 under Rules) in a field where the other three are chase debutants capped by Step 13; race-fit (21d), jumps and stays at least 2m7f.",
              "against": "3m1f is 2.5f beyond his only win; verified in-running shows he weakened after the last at 2m7f, and his last run (Worcester 2m4f, 3rd of 9) was beaten ~18-20l, RPR 76 — a real stamina/form doubt, so the Win rests on jumping/experience not stamina."
            },
            {
              "role": "danger",
              "horse": "Could Be You",
              "prob": 0.24,
              "placeProb": 0.48,
              "finish": "1",
              "sp": "3/1",
              "confidence": "low",
              "reason": "The only proven 3m stayer (5th of 8 over 3m0.5f, btn 5.25l, last month, off 75) and 10lb well-in on a dropped mark, with Irish point fence experience — directly attacks the Win's stamina weakness; chase-debut cap keeps him off top. Near-tied with Hard Stare (0.22), who is held off Danger by a hold-up style that fights Plumpton's front-runner bias."
            }
          ]
        },
        {
          "time": "13:30",
          "name": "Cappagh Browne Utilities Ltd Maiden Hurdle (GBB Race)",
          "type": "hurdle",
          "distance": "2m4f116y",
          "going": "Good (Good to Soft in places)",
          "runners": 7,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "winner": {
            "horse": "Bold Step",
            "sp": "13/8",
            "agentProb": 0.34
          },
          "notes": "RESULT: Win Bold Step WON (13/8) and our top three finished 1-2-3 — EW Bailly's Comet 2nd (5/4F), Danger Le Cold Grey 3rd (10/3). Reasoning held in full: Bold Step's trip/hurdle-experience edge over the debutants, 'stayed on well' despite the held-up worry; Bailly's Comet's class placed; Le Cold Grey the front-runner faded late.",
          "writeup": "jumps/analyses/2026-11-02_plumpton/1330_maiden-hurdle.md",
          "updated": "08:25 Mon 2 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Bold Step",
              "prob": 0.34,
              "placeProb": 0.66,
              "finish": "1",
              "sp": "13/8",
              "confidence": "medium",
              "reason": "Only principal to have jumped a hurdle in public (2nd on debut, kept on) and the only runner proven at today's 2m4f, highest rating (RPR 104) earned in contention, sire Scorpion for stamina, Henderson/de Boinville.",
              "against": "Only one hurdle start and 'not fluent 3 out'; races held-up at a sharp, front-runner-biased track that SL itself flagged as a possible excuse last time — hence capped at 0.34."
            },
            {
              "role": "ew",
              "horse": "Bailly's Comet",
              "prob": 0.28,
              "placeProb": 0.62,
              "finish": "2",
              "sp": "5/4",
              "confidence": "medium",
              "reason": "Best bumper class of the debutants (won debut; 3rd of 16 in a Class 1 Listed at Cheltenham over 2m+, so stays beyond 2m), front-running style suits the track, 4yo weight-for-age, Honeyball yard flying (34% since July).",
              "against": "Hurdle debut (jumping unproven) and he weakened late over just 2m at Newbury, so 2m4f asks a stamina question — place-value call, not the Win."
            },
            {
              "role": "danger",
              "horse": "Le Cold Grey",
              "prob": 0.24,
              "placeProb": 0.56,
              "finish": "3",
              "sp": "10/3",
              "confidence": "low",
              "reason": "Confirmed front-runner at a front-runner track and first run after a verified wind operation, Nicholls/Twiston-Davies — chief threat if he jumps and stays; held behind on three unknowns (hurdle debut, 242-day layoff, stamina tested only to 2m)."
            }
          ]
        },
        {
          "time": "14:00",
          "name": "Southern Contract Novices' Handicap Chase",
          "type": "chase",
          "distance": "2m3f166y",
          "going": "Good (Good to Soft in places)",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "failed",
          "errors": [],
          "winner": {
            "horse": "Walk In The West",
            "sp": "7/1",
            "agentProb": 0.05
          },
          "notes": "RESULT: Winner Walk In The West (7/1), an A J Honeyball CHASE DEBUTANT we rated 0.05 (Step 13 cap), with stablemate Kapability (also a chase debut) 2nd (7/1). Win Hiero Sport 4th (10/3, 'weakened before 2 out' as flagged); EW Lunar Ocean 6th (3/1F); Danger Known Warrior 7th, tailed off. Diamond Days fell, Georges Street PU; Onewayortother a late non-runner. Failed: two well-connected chase debutants we buried ran 1-2.",
          "writeup": "jumps/analyses/2026-11-02_plumpton/1400_novices-handicap-chase.md",
          "updated": "07:55 Mon 2 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Hiero Sport",
              "prob": 0.22,
              "placeProb": 0.52,
              "finish": "4",
              "sp": "10/3",
              "confidence": "medium",
              "reason": "Proven at 2m3f-2m4f on Good (2nd Market Rasen 2m3f last time off 82), prominent/makes-running style suits Plumpton's front-runner bias, fit (25d), improving off a low OR 82.",
              "against": "0-from-3 over fences and 'no extra final 110yds' when 2nd last time — may be a strong-travelling placer who finds little; a handicapper on the up can be caught by the weights."
            },
            {
              "role": "ew",
              "horse": "Lunar Ocean",
              "prob": 0.12,
              "placeProb": 0.36,
              "finish": "6",
              "sp": "3/1",
              "confidence": "medium",
              "reason": "Only runner with chase form over today's exact 2m3f166y at Plumpton (2nd, Mar); top-3 in 8 of 12 chases; bottom weight OR 79 + verified 5lb claim (eff 10-2); made-all winner.",
              "against": "Untrustworthy with recurring jumping errors, beaten favourite 5 times, and 162 days off — hard to win with, hence each-way; layoff and jumping risk cap the place chance."
            },
            {
              "role": "danger",
              "horse": "Known Warrior",
              "prob": 0.18,
              "placeProb": 0.48,
              "finish": "7",
              "sp": "10/1",
              "confidence": "medium",
              "reason": "Best-handicapped on form (OR 99), 2nd at Plumpton in Feb, fit (12d); but 0/10, a hold-up one-pacer on a front-runner track who unseated (early mistake) on his comeback — chief threat rather than likely winner."
            }
          ]
        },
        {
          "time": "14:30",
          "name": "Southern Cranes Handicap Hurdle (GBB Race)",
          "type": "hurdle",
          "distance": "2m4f116y",
          "going": "Good (Good to Soft in places)",
          "runners": 12,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "winner": {
            "horse": "Ike Sport",
            "sp": "22/1",
            "agentProb": 0.04
          },
          "notes": "RESULT: Winner Ike Sport (22/1), a hold-up horse at a career-high mark we opposed on the front-runner bias (rated 0.04). EW Maldini Milano 2nd (10/3) — placed, a sound each-way call at a price. Win Goodwin 11th (11/1), 'led, dropped away tamely' — the bounce-back needed too much, as flagged. Range 3rd (14/1), Walk On High 4th; Danger Let Him B 7th (5/2F). Kocktail Bleu NR. Mixed: EW placed, but the 22/1 winner beat the front-runner read.",
          "writeup": "jumps/analyses/2026-11-02_plumpton/1430_handicap-hurdle.md",
          "updated": "12:40 Mon 2 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Goodwin",
              "prob": 0.21,
              "placeProb": 0.5,
              "finish": "11",
              "sp": "11/1",
              "confidence": "medium",
              "reason": "Proven C&D front-runner — won a Class 2 here over this exact 2m4f116y off OR117 carrying 10-11 (made all); today OR121 but the 5lb claim brings him back to 10-11; in his identical 'below-par Fontwell return -> Plumpton win' seasonal pattern; C Gordon 4/6 at Plumpton; Kocktail Bleu's exit eases his lead.",
              "against": "Course-dependent form — beaten ~10L (last of 5) on a dismal return 18 days ago and tailed off away from Plumpton; quirky, and must get his own way up front against two other pace-forcers."
            },
            {
              "role": "ew",
              "horse": "Maldini Milano",
              "prob": 0.15,
              "placeProb": 0.47,
              "finish": "2",
              "sp": "10/3",
              "confidence": "medium",
              "reason": "Unbeaten at this exact course and distance (2/2) and carries 7lb less actual weight than his April course win despite +8lb OR (10-11 after the claim); progressive Nicholls runner (yard 18%, 58% placed) — a longer price purely on the 210-day layoff, which is where the each-way value sits.",
              "against": "210 days off (first run of the season) and up in grade into a deeper Class 2, and he wins here from off the pace — slightly against the bias; if he needs the run a place is likelier than the win."
            },
            {
              "role": "danger",
              "horse": "Let Him B",
              "prob": 0.1,
              "placeProb": 0.4,
              "finish": "7",
              "sp": "5/2",
              "confidence": "low",
              "reason": "Progressive Irish raider (OR 84->95->97->113), proven at 2m4f, first-time tongue strap, shipped to Plumpton on connections' intent — the most likely improver to beat the top two; not staked because he is +16lb on his last win and a hold-up closer against the front-runner bias."
            }
          ]
        },
        {
          "time": "15:00",
          "name": "Kalm Club Handicap Chase (GBB Race)",
          "type": "chase",
          "distance": "3m1f157y",
          "going": "Good (Good to Soft in places)",
          "runners": 6,
          "source": "full",
          "status": "settled",
          "grade": "failed",
          "errors": [],
          "winner": {
            "horse": "Alien Storm",
            "sp": "6/1",
            "agentProb": 0.08
          },
          "notes": "RESULT: Winner Alien Storm (6/1), the course specialist we downgraded on trip (rated 0.08), with Ile De Jersey 2nd (13/2, rated 0.10, opposed on a 324-day layoff). Win Jubilant 5th (11/8F, 'dropped away'); EW Tommie Beau PU (jumping let him down, as flagged); Danger Rickety Bridge 3rd (9/2, blundered 4 out). Failed: winner and runner-up were both our downgraded outsiders — a 4-time course winner beat the 'trip unproven' knock.",
          "writeup": "jumps/analyses/2026-11-02_plumpton/1500_handicap-chase.md",
          "updated": "12:30 Mon 2 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Jubilant",
              "prob": 0.33,
              "placeProb": 0.54,
              "finish": "5",
              "sp": "11/8",
              "confidence": "medium",
              "reason": "Won this exact 3m1f157y Plumpton chase (off 119); solid underlying chase form at 3m-3m1f (3 wins + 3 thirds from 8); front-runner suiting the verified front-runner bias; bottom weight + 3lb claim near his winning mark; James Owen yard red-hot (12/50 in 14d).",
              "against": "Occasional jumping lapses ('bad mistake' Ascot, 'not fluent' Warwick); returns to fences after 2 hurdle runs and up to Class 3; may have to fight for the lead with two other front-runners."
            },
            {
              "role": "ew",
              "horse": "Tommie Beau",
              "prob": 0.12,
              "placeProb": 0.29,
              "finish": "PU",
              "sp": "6/1",
              "confidence": "low",
              "reason": "Two-time C&D winner at this 3m1f Plumpton trip, front-runner suiting the bias, fit (15d) and in form (won Cartmel Aug off 127), 5lb claim -> eff ~11-4; a value place price the market likely downgrades for age/one bad round.",
              "against": "His two C&D wins were off OR117 and he is 129 today (+12lb); 11yo and 'let down by his jumping' last time on a sharp track — the place goes if he errs on the turns."
            },
            {
              "role": "danger",
              "horse": "Rickety Bridge",
              "prob": 0.25,
              "placeProb": 0.47,
              "finish": "3",
              "sp": "9/2",
              "confidence": "medium",
              "reason": "Unbeaten 3-from-3 over fences and progressive (Nicholls/Gingell), the handy presser set to pounce if the front pair duel — but up 8lb since last win, 143 days off, never seen Plumpton, and beat only small fields (4-4-5)."
            }
          ]
        },
        {
          "time": "15:30",
          "name": "Southern Access Platforms Handicap Hurdle",
          "type": "hurdle",
          "distance": "1m7f207y",
          "going": "Good (Good to Soft in places)",
          "runners": 6,
          "source": "full",
          "status": "settled",
          "grade": "failed",
          "errors": [],
          "winner": {
            "horse": "Cayman Dancer",
            "sp": "7/1",
            "agentProb": 0.09
          },
          "notes": "RESULT: Winner Cayman Dancer (7/1), a hold-up horse we opposed on the front-runner bias (rated 0.09). Win Uncle Remus 4th (7/4F), 'led... mistake and headed last, weakened final 110yds' — the 13lb-rise-to-career-high doubt was right. Danger Soul Limbo 2nd (7/2); EW Birthday Angel last of 6 (11/4). Goodwin Face NR. Failed: the lone-leader Win faded late and a closer won — the front-runner read over-applied on good ground.",
          "writeup": "jumps/analyses/2026-11-02_plumpton/1530_handicap-hurdle.md",
          "updated": "12:35 Mon 2 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Uncle Remus",
              "prob": 0.3,
              "placeProb": 0.58,
              "finish": "4",
              "sp": "7/4",
              "confidence": "medium",
              "reason": "The likely lone leader (made all / clear last in his last two wins) on a corroborated front-runner-biased track, red-hot (won 2 of last 3), carrying bottom weight 11-1 (15lb below top), a proven stayer at the trip on the ground.",
              "against": "Handicapper has lifted him 13lb in two months to a career-high 97 that is above his proven level (off 89-93 earlier this year he ran 8th/9th/5th), up in class and never run at a stiffer, sharper track than his winning ones."
            },
            {
              "role": "ew",
              "horse": "Birthday Angel",
              "prob": 0.22,
              "placeProb": 0.52,
              "finish": "6",
              "sp": "11/4",
              "confidence": "medium",
              "reason": "With Goodwin Face out she is the sole remaining proven Plumpton C&D winner (won here Nov 2025), arriving in winning form (career best last time) with recent hurdle rounds clean — genuine each-way value likely let go at a price up in grade.",
              "against": "Up 7lb on her last winning mark and up to Class 4, an exposed 6yo with a Flat-mixed record who comes from midfield, so needs the race to set up for a finishing run on a front-runner track."
            },
            {
              "role": "danger",
              "horse": "Soul Limbo",
              "prob": 0.15,
              "placeProb": 0.42,
              "finish": "2",
              "sp": "7/2",
              "confidence": "low",
              "reason": "Unexposed H Fry hurdler (5th start) on handicap debut off 108, fresh from a Flat pipe-opener and able to go forward — the improver and verdict's top pick; not higher because 108 isn't clearly lenient, he took keen hold and weakened at Stratford, has a fall in 4 hurdle starts and has never seen Plumpton."
            }
          ]
        },
        {
          "time": "16:00",
          "name": "Final Fence Open 30th November Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m4f116y",
          "going": "Good (Good to Soft in places)",
          "runners": 7,
          "source": "full",
          "status": "settled",
          "provisional": true,
          "grade": "failed",
          "errors": [],
          "winner": {
            "horse": "Keno Black",
            "sp": "9/4",
            "agentProb": 0.09
          },
          "notes": "RESULT (provisional — in-running not yet published): Winner Keno Black (9/4), rated 0.09 (we opposed on a fall LTO + 220 days off). Win Everyonesgame 2nd (25/1 — ran far above its market price but a win bet loses); EW Low Expectations 3rd (4/1, outside the 2 places); Danger The Boss Bear 4th (15/8F). Coastal Command PU. Failed: winner outside our three, though the Win out-ran a 25/1 SP into 2nd.",
          "writeup": "jumps/analyses/2026-11-02_plumpton/1600_handicap-hurdle.md",
          "updated": "08:20 Mon 2 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Everyonesgame",
              "prob": 0.3,
              "placeProb": 0.55,
              "finish": "2",
              "sp": "25/1",
              "confidence": "medium",
              "reason": "Cleanest line in the race: 2nd of 4 over this exact C&D (2m4f116y Plumpton) in May beaten a neck off OR110 — today's mark — and a prominent racer suiting the front-runner bias; 5lb claim drops top weight to 11-5.",
              "against": "160 days off and a 9yo on a falling mark, and A Irvine is a low-strike yard (~5% jumps, verified) — he must bounce straight back to the May effort first time out."
            },
            {
              "role": "ew",
              "horse": "Low Expectations",
              "prob": 0.17,
              "placeProb": 0.43,
              "finish": "3",
              "sp": "4/1",
              "confidence": "medium",
              "reason": "Plumpton course winner and a genuine front-runner on a front-runner track, 1st run after a verified wind operation, and back to a winnable 2m4f after his losing runs came only raised in class / over 2m7f-3m — best each-way engine at a longer price.",
              "against": "OR 102 is a career high (4lb above last win), 218 days off, and a confirmed keen-goer who can be found out in a moderate gallop."
            },
            {
              "role": "danger",
              "horse": "The Boss Bear",
              "prob": 0.13,
              "placeProb": 0.33,
              "finish": "4",
              "sp": "15/8",
              "confidence": "low",
              "reason": "The field's only exact-C&D winner (Plumpton 2m4f116y, verified), races prominently (track fit), and starts for an in-form James Owen yard (~19% jumps, verified) on the new-recruit angle — more likely winner than the fitter but track-unsuited, winless-stabled Calme Olympien; not staked on 210 days off, top weight and three bad runs to end last term."
            }
          ]
        }
      ]
    },
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
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "EW Moves Like Gold (9/4) won and Danger Powerful Act (11/2) was 2nd — the two classy-pedigree newcomers filled 1-2 exactly as rated. Top pick and favourite Burk Flight led, was ridden to assert 2f out, headed and weakened to 5th (btn ~4L). The value read nailed the first two home; the 'most likely winner' label was on the wrong horse.",
          "winner": { "horse": "Moves Like Gold", "sp": "9/4", "agentProb": 0.15 },
          "writeup": "jumps/analyses/2026-11-03_lingfield/1302_open-maiden-nh-flat-race.md",
          "updated": "10:25 Tue 3 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Burk Flight",
              "prob": 0.28,
              "placeProb": 0.52,
              "finish": "5",
              "sp": "7/4",
              "confidence": "low",
              "reason": "Only debutant with evidence beyond a name: NH-bred sire for a bumper, 5lb claim to effective 10-11, in-form O Murphy yard, and the two exposed rivals both ran badly.",
              "against": "Completely unraced; case leans on stable + pedigree (what the market prices hardest) with a 5lb claimer up; any of six newcomers can win."
            },
            {
              "role": "ew",
              "horse": "Moves Like Gold",
              "prob": 0.15,
              "placeProb": 0.42,
              "finish": "1",
              "sp": "9/4",
              "confidence": "low",
              "reason": "Classy stamina pedigree (Golden Horn x Galileo), joint-lightest at 10-9 after a 7lb claim - genuine place value at a longer price.",
              "against": "Unraced with a 7lb amateur aboard; a top Flat stamina pedigree need not translate to a debut Polytrack bumper."
            },
            {
              "role": "danger",
              "horse": "Powerful Act",
              "prob": 0.14,
              "placeProb": 0.40,
              "finish": "2",
              "sp": "11/2",
              "confidence": "low",
              "reason": "Smart Kingman/New Approach pedigree with cruising speed, but top weight 11-2 and a miler-ish stamina profile are real 2m debut queries."
            }
          ]
        },
        {
          "time": "13:37",
          "name": "John Marshall 80th Birthday Celebration Novices' Hurdle (GBB Race)",
          "type": "Novices' hurdle",
          "distance": "2m",
          "going": "Good (Good to Soft in places)",
          "runners": 11,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Top pick The Perfect Poet (4/5F) won as reasoned - class-dropper from a G2, prominent, rallied from 2 out to lead on the run-in despite 206 days off and an unproven jump. Danger Analogical 3rd (just held, kept on one pace). EW Our Amigo, the flagged declining 232-day returner, 5th and out of the frame.",
          "winner": { "horse": "The Perfect Poet", "sp": "4/5", "agentProb": 0.26 },
          "writeup": "jumps/analyses/2026-11-03_lingfield/1337_novices-hurdle.md",
          "updated": "10:35 Tue 3 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "The Perfect Poet",
              "prob": 0.26,
              "placeProb": 0.52,
              "finish": "1",
              "sp": "4/5",
              "confidence": "medium",
              "reason": "Decisive Fontwell bumper winner dropping from a Grade 2 into Class 4; strong Pauling yard, Kayf Tara pedigree and prominent style suit sharp Lingfield.",
              "against": "Bumper win was only Class 5, tailed off 16/20 in that G2, 206 days off and jumping unproven - hence held to 0.26."
            },
            {
              "role": "ew",
              "horse": "Our Amigo",
              "prob": 0.11,
              "placeProb": 0.38,
              "finish": "5",
              "sp": "13/2",
              "confidence": "low-medium",
              "reason": "Value hidden by the card: the only runner with higher-class hurdle form (Class 3 3rd of 14, led after 2 out) AND Lingfield C&D form, back at trip/track in weaker Class 4.",
              "against": "Declining trend, 232 days off, 6yo and a possible bleeder (unverified) - the place chance carries the value, not the win."
            },
            {
              "role": "danger",
              "horse": "Analogical",
              "prob": 0.20,
              "placeProb": 0.46,
              "finish": "3",
              "sp": "11/2",
              "confidence": "medium",
              "reason": "Race-fit (30 days) vs two fresh principals, completed his hurdle bow 3rd of 8 with Flat tactical speed and cheekpieces back - but the bow was untidy with no finishing kick."
            }
          ]
        },
        {
          "time": "14:12",
          "name": "Sky Sports Racing Sky 415 Mares' Handicap Hurdle",
          "type": "Handicap hurdle (mares)",
          "distance": "2m",
          "going": "Good (Good to Soft in places)",
          "runners": 9,
          "source": "full",
          "status": "settled",
          "grade": "failed",
          "errors": ["J"],
          "notes": "All three picks out of the frame. Chosen Hero - explicitly dismissed as the 'well-in but won't complete' trap (PU/PU/PU/9th) and left unranked - went strongly, led before 2 out and pulled clear to win cosily as 6/5 fav. Top pick Little Lady Lucy (make-all read) disputed the lead, was headed before 2 out and weakened to 7th; EW Daring To Dream 5th, Danger Everest 4th (btn a head).",
          "winner": { "horse": "Chosen Hero", "sp": "6/5", "agentProb": null },
          "writeup": "jumps/analyses/2026-11-03_lingfield/1412_mares-handicap-hurdle.md",
          "updated": "10:45 Tue 3 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Little Lady Lucy",
              "prob": 0.28,
              "placeProb": 0.54,
              "finish": "7",
              "sp": "17/2",
              "confidence": "medium",
              "reason": "Effective 11-1 / OR~76 after a triple-verified 10lb claim vs spring wins off 70 & 77; a confirmed make-all front-runner that stays 2m on good - ideal for sharp Lingfield.",
              "against": "127 days off, and her only prior run after a long break was a beaten, held-up 9th - she may need the run."
            },
            {
              "role": "ew",
              "horse": "Daring To Dream",
              "prob": 0.10,
              "placeProb": 0.40,
              "finish": "5",
              "sp": "6/1",
              "confidence": "medium",
              "reason": "Career-low mark 77, 3rd off 79 just 15 days ago, fit, and completes every start - a reliable place at a longer price.",
              "against": "Maiden whose jumping lapses (not-fluent/mistake in 6 of last 9) cap any winning chance."
            },
            {
              "role": "danger",
              "horse": "Everest",
              "prob": 0.11,
              "placeProb": 0.34,
              "finish": "4",
              "sp": "7/1",
              "confidence": "low",
              "reason": "Class dropper and Flat-fit, but placed hurdle form is all at 2m1f-2m3f (both 2m tries poor incl a stamina PU here), she's a 'not fluent' hold-up jumper and ~12 months without jumping."
            }
          ]
        },
        {
          "time": "14:47",
          "name": "Follow attheraces On Instagram Handicap Chase (GBB Race)",
          "type": "Handicap chase",
          "distance": "2m",
          "going": "Good",
          "runners": 8,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "EW Superstylin (12/1) won - the 'Lingfield C&D chase winner who goes well fresh, place value after 193 days' read landed at a big price. Win Away For The Night ran as expected (led after 4 out, headed 2 out, kept on, 3rd btn a head for 2nd). Danger Touquet led, slipped on the flat before 3 out, lost his place and was eased (last of 8).",
          "winner": { "horse": "Superstylin", "sp": "12/1", "agentProb": 0.17 },
          "writeup": "jumps/analyses/2026-11-03_lingfield/1447_handicap-chase.md",
          "updated": "10:40 Tue 3 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Away For The Night",
              "prob": 0.26,
              "placeProb": 0.60,
              "finish": "3",
              "sp": "7/2",
              "confidence": "medium",
              "reason": "Only race-fit, proven 2m chaser: 4 chase starts all completed (2 wins, 2 seconds), won Worcester 22 days ago; prominent front-runner suiting a sharp track.",
              "against": "Up 6lb (OR 97->103) for a hard-fought win and up to Class 4, with a mistake-under-pressure habit."
            },
            {
              "role": "ew",
              "horse": "Superstylin",
              "prob": 0.17,
              "placeProb": 0.55,
              "finish": "1",
              "sp": "12/1",
              "confidence": "medium",
              "reason": "Verified Lingfield C&D chase winner (plus 2nd/2nd/3rd there) who goes well fresh; consistent placer off a workable 106 - place value at a price after 193 days.",
              "against": "9yo and exposed (3 wins/30), often held up, which gives prominent types first run on this track; one Lingfield unseat."
            },
            {
              "role": "danger",
              "horse": "Touquet",
              "prob": 0.20,
              "placeProb": 0.56,
              "finish": "8",
              "sp": "11/2",
              "confidence": "medium",
              "reason": "Highest-rated (108), most consistent (1,1,2,2 chase run) and placed twice at Lingfield over this exact C&D - best horse if fit, but off ~215 days on a fitness-rewarding track."
            }
          ]
        },
        {
          "time": "15:22",
          "name": "attheraces.com/marketmovers Handicap Hurdle",
          "type": "Handicap hurdle",
          "distance": "2m3f110y",
          "going": "Good (Good to Soft in places)",
          "runners": 9,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Clean sweep of the frame by the three picks. Win Cooler Than Me (5/2F) overcame the one flagged risk (213 days off) - ran on strongly to lead on the run-in. EW Gone In Sixty 2nd (btn 1/2L), Danger Market House 3rd (btn a nose). The pre-race market verdict's Calshot Spit only 4th (mistake last). Jet Steel fell 2 out.",
          "winner": { "horse": "Cooler Than Me", "sp": "5/2", "agentProb": 0.26 },
          "writeup": "jumps/analyses/2026-11-03_lingfield/1522_handicap-hurdle.md",
          "updated": "10:35 Tue 3 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Cooler Than Me",
              "prob": 0.26,
              "placeProb": 0.52,
              "finish": "1",
              "sp": "5/2",
              "confidence": "medium",
              "reason": "Proven at today's trip on all going (won 2m3f1y, 2nd off top weight, 3rd over 3m1f), progressive, 5lb claim to effective 11-3.",
              "against": "213 days off with no evidence he runs well fresh - the one decisive risk, which caps the top chance at 0.26."
            },
            {
              "role": "ew",
              "horse": "Gone In Sixty",
              "prob": 0.09,
              "placeProb": 0.42,
              "finish": "2",
              "sp": "6/1",
              "confidence": "medium",
              "reason": "Consistent Class 5 placer reverting to hurdles off a feasible OR80, bottom weight 10-9, race-fit, stays well - best each-way expectation at a longer price.",
              "against": "Almost never wins (2 from 44) and his last two starts (chases) were 5th."
            },
            {
              "role": "danger",
              "horse": "Market House",
              "prob": 0.22,
              "placeProb": 0.50,
              "finish": "3",
              "sp": "9/2",
              "confidence": "medium",
              "reason": "Race-fit (15d), won at 2m3f and 2nd twice over 2m4f in 2026, consistent, strong James Owen yard, 5lb claim - most likely winner if Cooler Than Me is below best, capped by a fluency wobble ('not fluent' twice)."
            }
          ]
        },
        {
          "time": "15:57",
          "name": "Sky Sports Racing Virgin 512 Handicap Chase",
          "type": "Handicap chase",
          "distance": "2m4f",
          "going": "Good",
          "runners": 7,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "Danger Mersey Street (proven 2m4f stayer) ran best of the picks - made the running, headed only on the run-in, 2nd at 14/1. Win/favourite A Great Excuse faded to 3rd exactly as the 'untested at 2m4f, 243 days off' caveat warned. Unrated Onewayortother (15/2) challenged before the last and won; EW Helios Allen 4th (not fluent 2 out and last).",
          "winner": { "horse": "Onewayortother", "sp": "15/2", "agentProb": null },
          "writeup": "jumps/analyses/2026-11-03_lingfield/1557_handicap-chase.md",
          "updated": "10:12 Tue 3 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "A Great Excuse",
              "prob": 0.28,
              "placeProb": 0.55,
              "finish": "3",
              "sp": "13/8",
              "confidence": "medium",
              "reason": "Only previous Lingfield chase winner; joint-top-rated (OR 100) but effective 95 after the 5lb claim (4lb below winning day); in-form yard (22%), first run after a wind op, races prominent so not lead-dependent.",
              "against": "Untested at 2m4f (his 2m-plus runs were on soft/heavy and faded late), 243 days off and three below-par runs since the course win; proven-stayer Mersey Street could beat him."
            },
            {
              "role": "ew",
              "horse": "Helios Allen",
              "prob": 0.12,
              "placeProb": 0.50,
              "finish": "4",
              "sp": "10/3",
              "confidence": "medium",
              "reason": "Placed last 3 off today's mark incl 2nd at 2m4f Good recently, bottom weight 10-2, race-fit, 6/7 chase completions - a reliable closer suiting the neutral/anti-front-runner read.",
              "against": "1 win from 19 (0 from 7 chases) so the win end is weak, and his yard is cold (0/10 last 30d)."
            },
            {
              "role": "danger",
              "horse": "Mersey Street",
              "prob": 0.24,
              "placeProb": 0.50,
              "finish": "2",
              "sp": "14/1",
              "confidence": "medium",
              "reason": "Sound jumper (8/9 completions) proven at 2m4f on Good, race-fit on his 2nd run back - level with the Win on a pure jumps read, held to Danger on the neutral course note and A Great Excuse's class/well-in edge."
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-04",
      "course": "Chepstow",
      "country": "Wales",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdle: good to soft (soft in places); Chase: good to good-to-firm in places (SL/ATR feed, checked 07:25 Wed 4 Nov)",
      "dataErrors": [],
      "races": [
        {
          "time": "12:20",
          "name": "Lords Taverners Conditional Jockeys' Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "2m 7f 136y",
          "going": "Good to good-to-firm in places",
          "runners": 5,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "5-runner conditional jockeys' handicap chase; 2 places. Jockey claims verified (SL card + Racing Post card, 08:05): only Gingerbred's rider claims (6lb, rides ~10-10); the other four carry their listed (raw, pre-claim) weights. No pick change. RESULT (good, g-firm in places): Danger Gingerbred (10/11f) won, Win Roe And Co (9/2) kept on at one pace in 2nd, EW Ballynaheer (9/1) PU before 3 out. Our two principals filled 1-2 but we had the order wrong: Gingerbred was downgraded to Danger on an asserted soft-ground/longer-trip mismatch that the race disproved (he handled 2m7f on sound ground off a last-time win and the 6lb claim). Candidate new error K (proposed).",
          "winner": { "horse": "Gingerbred", "sp": "10/11f", "agentProb": 0.25 },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1220_lords-taverners-conditional-handicap-chase.md",
          "updated": "08:05 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Roe And Co", "prob": 0.33, "placeProb": 0.60, "finish": "2", "sp": "9/2", "confidence": "medium", "reason": "Only C&D winner (Chepstow 2m7f136y, Nov 2025, good/g-firm); all three chase wins at 2m6f-2m7f (3/3 complete), both chase PUs only when stepped to 3m1f; ideal trip and ground, fit off two hurdle 3rds.", "against": "About 8lb higher than his 2m7f winning marks and back over fences after two hurdle runs; small-field upset risk." },
            { "role": "ew", "horse": "Ballynaheer", "prob": 0.17, "placeProb": 0.47, "finish": "PU", "sp": "9/1", "confidence": "medium", "reason": "Won off today's exact mark (104) at 2m7f191y in April, stays well, 18/19 chase completions, races prominently - strong place shout at a longer price.", "against": "Form has tailed off since April and he gives about 13lb to Gingerbred." },
            { "role": "danger", "horse": "Gingerbred", "prob": 0.25, "placeProb": 0.52, "finish": "1", "sp": "10/11f", "confidence": "medium", "reason": "Won last time and far the lightest via the 6lb claim; but a soft-ground 3m+ stayer dropping to 2m7f on sound ground and a keen-goer - ground/trip mismatch caps him to Danger." }
          ]
        },
        {
          "time": "14:30",
          "name": "Lysaght Cup Novices' Limited Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "2m 16y",
          "going": "Good to good-to-firm in places",
          "runners": 5,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "5-runner Class-3 novice limited handicap chase; 2 places. No jockey claims (verified). Four of five have just one completed chase start; Rula Bula (0.23) is a co-danger. Chase going good to good-to-firm. RESULT (good, g-firm in places): EW Tour Ovalie (10/3) made her own running and won; Win Black Hawk Eagle (7/1) led then weakened to 3rd of 4; co-danger Rula Bula (7/4f) unseated at the 2nd; Danger Desertmore News was a NON-RUNNER. We found the winner as the EW, but her value case rested on a held-up ride into a front-running duel that never happened (Desertmore NR, Rula Bula UR) - she won by leading. Top-rated Black Hawk Eagle's C&D-winner case did not hold.",
          "winner": { "horse": "Tour Ovalie", "sp": "10/3", "agentProb": 0.12 },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1430_lysaght-cup-novices-limited-handicap-chase.md",
          "updated": "07:55 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Black Hawk Eagle", "prob": 0.28, "placeProb": 0.52, "finish": "3", "sp": "7/1", "confidence": "medium", "reason": "Verified winner of this exact C&D (Chepstow 2m16y, made all, won going away) off a similar fresh break; back to his ideal 2m trip on suitable ground - the only strong proven C&D form in the race.", "against": "172 days off at 8yo with two poor runs since (a fall when keen-leading and a 44L-beaten 4th, both at 2m4f) and a likely duel for the lead with Desertmore News." },
            { "role": "ew", "horse": "Tour Ovalie", "prob": 0.12, "placeProb": 0.30, "finish": "1", "sp": "10/3", "confidence": "low", "reason": "Bottom weight, 6-time winner at ~2m, stayed on into 3rd on her chase debut beaten only 4.75L; held-up style suits if the two front-runners duel - genuine quarter-odds place value at a price.", "against": "Jumped right / hung left on her one chase start - a worry reverting to a left-handed track - and is below the proven rivals on form (place play, not a win call)." },
            { "role": "danger", "horse": "Desertmore News", "prob": 0.25, "placeProb": 0.47, "finish": "NR", "sp": null, "confidence": "medium", "reason": "Progressive front-runner, fitter for his first run back (21d), completed chase debut cleanly, good ground to suit; chief threat but stamina up the Chepstow hill and the pace clash are doubts." }
          ]
        },
        {
          "time": "12:51",
          "name": "Free Tips On attheraces.com Maiden Hurdle (GBB Race)",
          "type": "maiden hurdle",
          "distance": "2m 3f 100y",
          "going": "Good to soft (soft in places)",
          "runners": 15,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "13 of 15 are hurdle debutants; ranked on bumper/point ability, stamina for a stiff 2m3f and trainer skill with first-time hurdlers. Point/Irish-point form from SL card commentary (SL profiles omit point runs) - unverified on quality. Secret Jet Away NR (14 ran, 3 places). RESULT (good to soft): our three picks filled 1-2-3 but in the wrong order - Danger New Rules (7/2, Nicholls/Walk In The Park pointer) won, Win Red Acres Max (5/6f) outpaced in 2nd, EW Cool Customer (6/1) 3rd. Strong coverage; the layoff downgrade of New Rules (11 months, one career run) left the winner as the Danger, though the market also made Red Acres Max the clear favourite.",
          "winner": { "horse": "New Rules", "sp": "7/2", "agentProb": 0.18 },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1251_free-tips-maiden-hurdle.md",
          "updated": "07:45 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Red Acres Max", "prob": 0.28, "placeProb": 0.55, "finish": "2", "sp": "5/6f", "confidence": "medium", "reason": "Strongest verified racecourse profile - won at Carlisle (forged clear), battling 2nd on heavy at Fontwell, plus a point win; hot Snowden yard, G Sheehan.", "against": "Hurdle debutant (jumping on trust), bumper win was a 4-runner race, 227 days off." },
            { "role": "ew", "horse": "Cool Customer", "prob": 0.12, "placeProb": 0.40, "finish": "3", "sp": "6/1", "confidence": "medium", "reason": "Only course winner (won his bumper here), 3/3 placed on soft/gd-sf, stamina sire - genuine place chance at a longer price than the Win.", "against": "Modest Class 5 bumper level, 234 days off, hurdles unknown." },
            { "role": "danger", "horse": "New Rules", "prob": 0.18, "placeProb": 0.42, "finish": "1", "sp": "7/2", "confidence": "medium", "reason": "Nicholls' EUR105k, Walk In The Park, unbeaten in points, Sam Twiston-Davies; chief threat but 11-month absence and a single career run keep him a danger not the win." }
          ]
        },
        {
          "time": "13:25",
          "name": "LSL Racing 'National Hunt' Maiden Hurdle (GBB Race) (Div 1)",
          "type": "maiden hurdle",
          "distance": "2m 16y",
          "going": "Good to soft (soft in places)",
          "runners": 13,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "No runner has won over hurdles; mostly hurdle debutants on bumper/point form. Ranked on bumper/point class, stamina for the stiff 2m and trainer conversion. Point form and claim amounts from card commentary - unverified; does not change the order. RESULT (good to soft): Danger St James's Finest (5/2, the only Class-2 bumper winner) won; Win Order On Time (1/2f) led and went clear but was headed and outpaced after 2 out into 2nd; EW Plan De Stan (9/1) fell at the last when in touch. Our top two filled 1-2 again with the order wrong. Preferring Order On Time on a more-recent C&D win and shorter layoff over St James's Finest's higher proven grade was the wrong read, though the market agreed, sending Order On Time off odds-on.",
          "winner": { "horse": "St James's Finest", "sp": "5/2", "agentProb": 0.24 },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1325_lsl-national-hunt-maiden-hurdle-div1.md",
          "updated": "07:45 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Order On Time", "prob": 0.30, "placeProb": 0.58, "finish": "2", "sp": "1/2f", "confidence": "medium", "reason": "Only proven course-and-distance winner (won an 11-runner bumper here over this exact 2m16y, going clear; EUR200k; Nicholls/S Twiston-Davies).", "against": "Hurdle jumping unproven, 216 days off, and St James's Finest won in a higher grade." },
            { "role": "ew", "horse": "Plan De Stan", "prob": 0.09, "placeProb": 0.32, "finish": "F", "sp": "9/1", "confidence": "low", "reason": "Twice runner-up at 2m in bumpers (staying-on, good and soft), stays the stiff track, Quinn's claim gives relief - best proven place form at the trip at a price.", "against": "Never jumped a hurdle, 179 days off, 0 wins from 3 (placed-not-won)." },
            { "role": "danger", "horse": "St James's Finest", "prob": 0.24, "placeProb": 0.52, "finish": "1", "sp": "5/2", "confidence": "medium", "reason": "Sole Class-2 bumper winner (best bumper grade), ran here 4th on debut, bred to stay, Skelton/H Skelton; held below the Win on Order On Time's more recent C&D win and shorter layoff." }
          ]
        },
        {
          "time": "13:58",
          "name": "LSL Racing 'National Hunt' Maiden Hurdle (GBB Race) (Div 2)",
          "type": "maiden hurdle",
          "distance": "2m 16y",
          "going": "Good to soft (soft in places)",
          "runners": 12,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "Weak maiden; exposed hurdle form modest, so unexposed point/bumper recruits favoured. No F/U/P/R in the field; no jockey claims (verified). Point-win manner from SL spotlight - unverified on quality. RESULT (good to soft): Win A Sight To Sea (4/7f) led before the 2nd, went clear from 3 out and won easily; EW The Lightmaker (9/2) chased home in 2nd (btn 14L). Textbook: the EUR190k Skelton point-winner was the archetype that lands a weak maiden, exactly as called, and the two picks filled 1-2. Danger Jerry The Dreamer (14/1) never landed a blow, 8th.",
          "winner": { "horse": "A Sight To Sea", "sp": "4/7f", "agentProb": 0.33 },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1358_lsl-national-hunt-maiden-hurdle-div2.md",
          "updated": "07:45 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "A Sight To Sea", "prob": 0.33, "placeProb": 0.60, "finish": "1", "sp": "4/7f", "confidence": "medium", "reason": "EUR190k Irish point winner, Skelton/Harry Skelton, Timeform 5* and card top-ranked, hurdle debut - the archetype that lands weak maidens; stays 2m easily.", "against": "346-day layoff AND hurdle debut at once - two unknowns, with only one point run as evidence." },
            { "role": "ew", "horse": "The Lightmaker", "prob": 0.13, "placeProb": 0.50, "finish": "2", "sp": "9/2", "confidence": "low", "reason": "Most reliable form (2nd in a Chepstow 2m16y bumper over this exact C&D, then 3rd), prominent, proven ground; genuine place at a longer price.", "against": "Never jumped a hurdle, small yard (Dan Horsford) - the jumping is the whole question." },
            { "role": "danger", "horse": "Jerry The Dreamer", "prob": 0.18, "placeProb": 0.45, "finish": "8", "sp": "14/1", "confidence": "medium", "reason": "Other expensive point-winning Rules debutant (won 2nd of 2 Irish points, TF4*, Mulholland), 283 days off; chief threat if A Sight To Sea's layoff tells." }
          ]
        },
        {
          "time": "15:05",
          "name": "DragonBet Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "2m 3f 98y",
          "going": "Good to good-to-firm in places",
          "runners": 11,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "11-runner handicap chase with three chase debutants (all Step-13 capped); Win held under the ~25% ceiling and probability spread wide. Course form not found for the top two; jockey claims only partly cross-checked. Bahtiyar ran yesterday (1-day turnaround). Bahtiyar, Diligent Militia and Can't Resist It all NR (8 ran, 3 places). RESULT (good, g-firm in places): winner Sage Green (12/1) was unrated by us. Win Mr Mcwhinny (9/2) FELL AT THE LAST while challenging the winner - running exactly to his form-horse billing when the race ended under him (sound call, unlucky). EW Two To Tango (13/2) 2nd and Danger Great Dance (10/3) 3rd, so our EW and Danger filled the places. The handicapper-caught-up worry on Mr Mcwhinny did not stop him; only the fall did.",
          "winner": { "horse": "Sage Green", "sp": "12/1", "agentProb": null },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1505_dragonbet-handicap-chase.md",
          "updated": "07:50 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Mr Mcwhinny", "prob": 0.23, "placeProb": 0.52, "finish": "F", "sp": "9/2", "confidence": "medium", "reason": "Form horse (141112, 4 of last 6 incl a chase hat-trick), 6/6 chase completions in 2026, travels strongly, trip and good/good-to-firm ground ideal, in-form Tom Ellis yard.", "against": "Every win was Class 5 off 78-90; now 24lb higher (OR 102) in his first Class-4 handicap chase - the handicapper may have caught up." },
            { "role": "ew", "horse": "Two To Tango", "prob": 0.16, "placeProb": 0.50, "finish": "2", "sp": "13/2", "confidence": "medium", "reason": "Placed 4 of last 5, won over today's exact trip (2m3f98y Stratford), sound jumper (21/22 completions), good-to-firm proven - strong place chance at a longer price than the Win.", "against": "Chronic non-winner (one win amid many placings); his trip win was at sharp, flat Stratford, not stiff undulating Chepstow (course unproven)." },
            { "role": "danger", "horse": "Great Dance", "prob": 0.10, "placeProb": 0.35, "finish": "3", "sp": "10/3", "confidence": "low", "reason": "Highest ability on hurdle form (OR 112, listed-placed), shaped well on C&D return - but a chase debut off top weight 12-2 caps her to Danger not Win." }
          ]
        },
        {
          "time": "15:40",
          "name": "Floyds Turfcare & Weed Solutions Handicap Hurdle",
          "type": "handicap hurdle",
          "distance": "2m 3f 100y",
          "going": "Good to soft (soft in places)",
          "runners": 18,
          "source": "full",
          "status": "settled",
          "grade": "failed",
          "errors": ["F"],
          "notes": "18-runner Class-5 handicap hurdle; 4 each-way places, Win diluted to the 16+ ceiling. Fitness is the structural edge - only V Power, Midnight Pass (24d) and I Heard A Rumour (28d) are race-fit; everything else is 105-724 days off. Jockey claims verified from SL (Dodd -5 on Highbury Hill, Clarke -7 on Nowherenearmilan). Corner Forward NR, Angel Wave WD (16 ran, 4 places). RESULT (good to soft): winner I Heard A Rumour (7/2f) was one of the three race-fit horses we named as the structural edge - then did not back. Win Highbury Hill (8/1, 205 days off) was always behind, 11th; EW V Power (12/1, fit) 6th; Danger Isabella Islay (20/1) 7th. We named fitness as the edge and made a 205-day absentee the Win over a horse our own analysis flagged as fit - error F (the 'well-in' standout mark ranked above our own stated layoff warning). The fit horse we identified won.",
          "winner": { "horse": "I Heard A Rumour", "sp": "7/2f", "agentProb": null },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1540_floyds-handicap-hurdle.md",
          "updated": "08:00 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Highbury Hill", "prob": 0.21, "placeProb": 0.50, "finish": "11", "sp": "8/1", "confidence": "medium", "reason": "Well-in (carries 11-8 after Dodd's 5lb claim vs the OR98 she won this exact C&D off in Jan; also 3rd-of-16 here on good-to-soft), 11/11 clean jumper, ran 2nd on her last seasonal reappearance.", "against": "205 days off is longer than any gap she has returned from before, and she relies on a 5lb-claiming conditional." },
            { "role": "ew", "horse": "V Power", "prob": 0.12, "placeProb": 0.42, "finish": "6", "sp": "12/1", "confidence": "medium", "reason": "Best each-way value - race-fit (24d) and the only fit runner with a strong recent C&D line (2nd of 13 here on good-to-soft on 11 Oct, beat today's Midnight Pass receiving 5lb); stays, likely a big price.", "against": "Still beaten 5L by a facile winner that day and is largely a modest summer flat handicapper - OR87 may be near his ceiling." },
            { "role": "danger", "horse": "Isabella Islay", "prob": 0.10, "placeProb": 0.38, "finish": "7", "sp": "20/1", "confidence": "low", "reason": "Progressive lightly-raced 4yo who won at today's trip and was a close 3rd next time; chief improver threat, held off the EW slot by 175 days off and only 4 career runs." }
          ]
        },
        {
          "time": "16:10",
          "name": "Dunraven Open NH Flat Race (GBB Race)",
          "type": "NH flat (bumper)",
          "distance": "2m 16y",
          "going": "Good to soft",
          "runners": 15,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "15 runners, 11 unraced; Win drawn from the raced group per bumper discipline. Confidence low throughout. Point form for raced horses rests on Timeform card commentary (SL profiles 404) - unverified on quality. Mirage D'ainay and Just Colin NR (13 ran, 3 places). RESULT (good to soft): winner Don't Panic (5/2f) was an unraced newcomer, outside our raced-horse group and unrated. Our picks filled 2-3-4: Win Uncle Cc (3/1) 2nd btn 3.25L, Danger Magimax (10/3) 3rd, EW Bears Socks (28/1) 4th. The bumper discipline (rank from the raced group, don't over-rate newcomers - error E) held up its reasoning but missed a well-touted newcomer the market sent off favourite.",
          "winner": { "horse": "Don't Panic", "sp": "5/2f", "agentProb": null },
          "writeup": "jumps/analyses/2026-11-04_chepstow/1610_dunraven-open-nh-flat-race.md",
          "updated": "07:40 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Uncle Cc", "prob": 0.17, "placeProb": 0.42, "finish": "2", "sp": "3/1", "confidence": "low", "reason": "Only runner with a winning racecourse line (won sole Irish point, Mar 2026); Tizzard yard in top form.", "against": "Single point win on softer/longer; unproven at 2m round a stiff track, 234 days off; fancied newcomers could overrun him." },
            { "role": "ew", "horse": "Bears Socks", "prob": 0.08, "placeProb": 0.30, "finish": "4", "sp": "28/1", "confidence": "low", "reason": "Runner-up on both point-bumper starts (most consistent raced profile); likely a bigger price with a genuine place chance.", "against": "325-day layoff, unexposed modest point form, small yard without newcomer firepower." },
            { "role": "danger", "horse": "Magimax", "prob": 0.14, "placeProb": 0.40, "finish": "3", "sp": "10/3", "confidence": "low", "reason": "EUR125k, 2nd on sole Irish point, Cobden booked, Lavelle good with bumper types; chief threat but placed not won." }
          ]
        }
      ]
    },
    {
      "date": "2026-11-05",
      "course": "Newbury",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good to Soft, Soft in places (GoingStick 4.6) - official raceday reading; no chases (hurdles and NH flat on the round course)",
      "dataErrors": [
        "Results pulled from the Sporting Life race API (/api/horse-racing/race/<id>); the SL results web pages 404'd for this meeting, as did the racecards the day before.",
        "13:52: the SL race-API finish_position did not reflect the stewards' amendment - Princess Day finished 3rd but was DISQUALIFIED for causing interference and placed 4th, promoting Connells Cross to 3rd; official amended placings recorded.",
        "14:25: Doughmore Bay was a non-runner, so 16 ran (not the 17 declared at analysis); not a pick."
      ],
      "races": [
        {
          "time": "12:42",
          "name": "OLBG Conditional Jockeys' Handicap Hurdle",
          "type": "handicap hurdle",
          "distance": "2m69y",
          "going": "Good to Soft",
          "runners": 16,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": ["J"],
          "notes": "RESULT: Zarakerjack (4/1, bottom-weight improver) won; we rated it 0.02, capping a Flat-improved, lenient-marked horse on old left-jumping/PU figures (error J recurrence). Each-Way Faivoir placed 3rd at 14/1 - the well-in-on-the-claim value call landed. Win Treasure Planet (5/2f) plugged on into 7th; Danger General Briar 11th. The SL verdict itself had tipped Spirits Bay (2nd) and Zarakerjack.",
          "winner": { "horse": "Zarakerjack", "sp": "4/1", "agentProb": 0.02 },
          "writeup": "jumps/analyses/2026-11-05_newbury/1242_olbg-conditional-jockeys-handicap-hurdle.md",
          "updated": "19:30 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Treasure Planet", "prob": 0.22, "placeProb": 0.52, "finish": "7", "sp": "5/2", "confidence": "medium", "reason": "Only pick with both a very recent win (Chepstow Cl2, 25d) and course-and-distance form (2nd here over exact 2m69y, btn 0.75L); 9/9 completions, progressive 4yo carrying 11-6 after the 3lb claim; hold-up style suits a stiff galloping track with a genuine pace.", "against": "Up 3lb to a career-high mark and a 4yo v seasoned handicappers; the LTO win got a soft passage ('left in second'), so the bare form may flatter." },
            { "role": "ew", "horse": "Faivoir", "prob": 0.11, "placeProb": 0.40, "finish": "3", "sp": "14/1", "confidence": "medium", "reason": "The 10lb conditional claim leaves him 11-4 off OR124, effectively racing well below a mark he was placed off last season (3rd Greatwood off 134); Newbury course winner, hold-up style suited to the stiff track and honest pace - best each-way value on own numbers.", "against": "11yo whose seasonal reappearance was poor (6th, weakened before 2 out); pace- and luck-dependent hold-up type." },
            { "role": "danger", "horse": "General Briar", "prob": 0.11, "placeProb": 0.38, "finish": "11", "sp": "14/1", "confidence": "medium", "reason": "The field's one winner over today's EXACT course and distance (Newbury 2m69y off 116 in Jan), now off just 117 and back in Class 3 after two pull-ups that came only in much hotter Class 2 races; bold-jumping prominent style suits. Risk: 214d off and a contested lead could compromise a front-runner." }
          ]
        },
        {
          "time": "13:17",
          "name": "CSP Maiden Hurdle (GBB Race)",
          "type": "maiden hurdle",
          "distance": "2m69y",
          "going": "Good to Soft",
          "runners": 9,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": ["K", "L"],
          "notes": "RESULT: Presley (85/40, unexposed Skelton bumper-placer) won; we rated it 0.14 as 'best clean debutant profile' but ranked exposed modest hurdle form above it (error L). Win Moments Away (2/1jf) led and emptied, 5th; Danger Merlin Allen rallied to 3rd. Each-Way Fervent (100/1) 7th - a market-pariah EW given an inflated 0.33 place prob (error K); the race had no genuine each-way proposition and one should have been omitted.",
          "winner": { "horse": "Presley", "sp": "85/40", "agentProb": 0.14 },
          "writeup": "jumps/analyses/2026-11-05_newbury/1317_csp-maiden-hurdle.md",
          "updated": "19:30 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Moments Away", "prob": 0.30, "placeProb": 0.58, "finish": "5", "sp": "2/1", "confidence": "medium", "reason": "Only runner proven over hurdles AND placed (RPR 128; 2nd on debut over 2m4f, stays, handles soft) in a field where six rivals have never jumped a hurdle; drops to a sharper 2m69y with Sean Bowen.", "against": "Beaten odds-on last time ('not fluent 7th, no impression') and beaten ~4L by today's rival Merlin Allen in the G2 bumper, so not even the best bumper horse here; 0/5, up in class." },
            { "role": "ew", "horse": "Fervent", "prob": 0.08, "placeProb": 0.33, "finish": "7", "sp": "100/1", "confidence": "low", "reason": "2nd-best proven hurdle form (RPR 104) and the only non-Moments-Away runner to have completed a hurdle ('kept on' over 2m); galloping 2m69y suits a stayer - a longer-priced place proposition chosen on place expectation.", "against": "That completion was a modest 4th beaten 8.5L, he fell (weakening) on debut, and connections/form say handicaps are more his bag - the place leans on debutants faltering." },
            { "role": "danger", "horse": "Merlin Allen", "prob": 0.24, "placeProb": 0.52, "finish": "3", "sp": "2/1", "confidence": "medium", "reason": "Strongest pure form in the field (3rd of 20 in a G2 Aintree bumper, ~4L clear of Moments Away at level weights, all on today's ground); held just below the Win only as a hurdle debutant off 208 days after a wind op." }
          ]
        },
        {
          "time": "13:52",
          "name": "Grahame Church Memorial Mares' Novices' Hurdle (GBB Race)",
          "type": "mares' novices' hurdle",
          "distance": "2m69y",
          "going": "Good to Soft",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": ["L"],
          "notes": "RESULT (amended): Royal Response (3/1, Henderson/de Boinville point winner) won; we rated it 0.09 and capped it as unproven potential (error L - under-rated an elite-yard point winner). Danger The Flaggy Shore 2nd and Each-Way Connells Cross promoted to 3rd (11/1) after our Win Princess Day finished 3rd but was DISQUALIFIED for causing interference (hung left) and placed 4th. Two of our three framed; the gap-pass switch of Flaggy Shore to Danger was vindicated (ran 2nd, not the Win).",
          "winner": { "horse": "Royal Response", "sp": "3/1", "agentProb": 0.09 },
          "writeup": "jumps/analyses/2026-11-05_newbury/1352_grahame-church-memorial-mares-novices-hurdle.md",
          "updated": "19:30 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Princess Day", "prob": 0.24, "placeProb": 0.55, "finish": "4", "sp": "13/8", "confidence": "medium", "reason": "Course-and-distance winner over today's exact Newbury 2m69y (bumper), race-fit (25d), consistent (1110-2, three bumper wins), top RPR 120; the drop from 2m3f to 2m69y answers her one-paced hurdle debut.", "against": "Beaten 3.75L as the 4/6 fav on her only hurdle run; her proven class is in bumpers, not over hurdles." },
            { "role": "ew", "horse": "Connells Cross", "prob": 0.15, "placeProb": 0.48, "finish": "3", "sp": "11/1", "confidence": "medium", "reason": "At 16/1 finished 3rd at Chepstow (11 Oct) only 0.5L behind 4/6 fav Princess Day despite a jumping error she rallied from; race-fit, RPR 119, drops to a sharper trip - the longer-priced each-way value on the same line.", "against": "Maiden over hurdles with a recorded jumping error - novice risk on a stiff track." },
            { "role": "danger", "horse": "The Flaggy Shore", "prob": 0.22, "placeProb": 0.52, "finish": "2", "sp": "11/1", "confidence": "medium", "reason": "The field's only hurdle winner (5lb penalty confirms it) and a bold front-running 12L all-the-way Class 4 winner whose style suits galloping Newbury; chief threat, but one hurdle run only, a 169-day reappearance and concedes 5lb to all." }
          ]
        },
        {
          "time": "14:25",
          "name": "Pertemps Network Handicap Hurdle (Pertemps Series Qualifier) (GBB Race)",
          "type": "handicap hurdle",
          "distance": "3m57y",
          "going": "Good to Soft",
          "runners": 16,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "RESULT: Masaccio (33/1, 19 months off) won on reappearance - we flagged him 'needs the run', unforecastable at the price (variance, no error). Danger Miami Magic 2nd - the well-handicapped chaser-reverting-with-wind-op angle held strongly. Win Kilwaughter 8th, exposed by the stiff 3m on softening ground exactly as the case-against warned. Each-Way Bill Baxter (C/D-form upgrade) only 11th - the inexperienced-10lb-claimer/front-runner caveat proved the relevant one. Non-runner: Doughmore Bay (16 ran).",
          "winner": { "horse": "Masaccio", "sp": "33/1", "agentProb": 0.05 },
          "writeup": "jumps/analyses/2026-11-05_newbury/1425_pertemps-network-handicap-hurdle.md",
          "updated": "19:30 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Kilwaughter", "prob": 0.16, "placeProb": 0.45, "finish": "8", "sp": "13/2", "confidence": "medium", "reason": "Race-fit (14d) and progressive 6yo in a field of 12 reappearances; stays 3m (4th Haydock 3m58y off 125), Newbury course winner, 7lb claim leaves him ~10-7 low in the handicap.", "against": "First try at a stiff 3m on softening ground (his one 3m run was on good at flat Haydock), off a career-high 130, and a quick 14-day turnaround after a hard win." },
            { "role": "ew", "horse": "Bill Baxter", "prob": 0.12, "placeProb": 0.44, "finish": "11", "sp": "18/1", "confidence": "medium", "reason": "Verified C/D line: 2nd (unlucky, mistake last, headed final 110y) over this EXACT Newbury 3m57y on good-to-soft last Nov, beating Docpickedme ~5L, and that run was fresh off ~187 days - same profile as today; 10lb claim leaves him ~10-1, ~2lb better off than that near-win.", "against": "The 10lb claim reflects a genuinely inexperienced rider on a front-runner needing judgement, in a race with several other front-runners; age 10." },
            { "role": "danger", "horse": "Miami Magic", "prob": 0.12, "placeProb": 0.38, "finish": "2", "sp": "10/3", "confidence": "medium", "reason": "Well-handicapped progressive chaser (rated 145) reverting to hurdles off 138 with a verified first-time wind op; stays 3m (fell in 3rd in a G1, jumping not stamina). Co-danger One Big Bang (0.11) the softening ground helps most." }
          ]
        },
        {
          "time": "14:58",
          "name": "Check Out The BetVictor Bet Builder Novices' Hurdle (GBB Race)",
          "type": "novices' hurdle",
          "distance": "2m2f183y",
          "going": "Good to Soft",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "RESULT: Coolnav (17/2) made all and won - the Win landed at a big price, vindicating 'best verified in-contention hurdle line, proven to stay on the ground' over the unexposed debutants. Each-Way Grand Teton weakened (8th); Danger Percy De Courcy 4th (bad mistake 2 out). Standout call of the day; winner correctly identified as the Win.",
          "winner": { "horse": "Coolnav", "sp": "17/2", "agentProb": 0.26 },
          "writeup": "jumps/analyses/2026-11-05_newbury/1458_betvictor-bet-builder-novices-hurdle.md",
          "updated": "19:30 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Coolnav", "prob": 0.26, "placeProb": 0.55, "finish": "1", "sp": "17/2", "confidence": "medium", "reason": "Best verified in-contention hurdle line in the field: 4th of 13 beaten 4L in a competitive Chepstow maiden (2m3f GtS), jumped round, proven to stay the trip on the ground; RPR 120 earned in contention, and beat Company Charge ~2L on identical terms. Proven ability over unraced potential.", "against": "Only a 4th, not a winner; a recorded keen-going streak and an error two out, and a modest yard against well-bred Skelton/Nicholls/Henderson debutants." },
            { "role": "ew", "horse": "Grand Teton", "prob": 0.12, "placeProb": 0.40, "finish": "8", "sp": "8/1", "confidence": "low", "reason": "The only non-Coolnav runner that is BOTH a proven hurdle completer and a proven 2m4f stayer on today's ground, so lower jumping/stamina risk than every debutant; Henderson with a stable-jockey upgrade (de Boinville); poor bare form keeps the fair price long = place value.", "against": "Winless and placeless in two runs ('made no impression' last time); its RPR/TS were earned while beaten (weak signal)." },
            { "role": "danger", "horse": "Percy De Courcy", "prob": 0.17, "placeProb": 0.42, "finish": "4", "sp": "9/4", "confidence": "medium", "reason": "Unbeaten maiden point winner joining a top yard with champion-stable jockey Harry Skelton - the archetype newcomer that beats exposed maidens; capped by unproven hurdle jumping, a 284-day absence and a flat-bred sire (Poet's Word)." }
          ]
        },
        {
          "time": "15:33",
          "name": "British Horse Society Open National Hunt Flat Race (Category 1 Elimination) (GBB Race) (Div I)",
          "type": "NH flat (bumper)",
          "distance": "2m69y",
          "going": "Good to Soft",
          "runners": 11,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": ["K"],
          "notes": "RESULT: Wordfromhome (5/4f) made all and won cosily - the Win landed as the only point winner in the field. Danger Block Flight 3rd (coverage). Each-Way He's Happy (66/1) never involved, 8th - a market-pariah EW given an over-stated 0.30 place prob (error K); in an all-newcomer bumper no genuine each-way existed and one should have been omitted.",
          "winner": { "horse": "Wordfromhome", "sp": "5/4", "agentProb": 0.28 },
          "writeup": "jumps/analyses/2026-11-05_newbury/1533_bhs-open-nh-flat-div1.md",
          "updated": "19:30 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Wordfromhome", "prob": 0.28, "placeProb": 0.52, "finish": "1", "sp": "5/4", "confidence": "medium", "reason": "Only confirmed race-winner in the field (won 4yo geldings maiden point, Monksgrange 29 Mar 2026); now Nicholls/S Twiston-Davies, EUR65k Derby Sale; galloping stayers' track suits a point winner.", "against": "Point-to-bumper translation unproven, 221 days off and a Rules debut, against well-bred fresh newcomers from Henderson, Fry, Skelton and Greatrex." },
            { "role": "ew", "horse": "He's Happy", "prob": 0.08, "placeProb": 0.30, "finish": "8", "sp": "66/1", "confidence": "low", "reason": "The only other raced runner (2nd in a point) and the field's only 5yo, so most mature; a placed pointer is a sounder each-way basis at a long price than the unraced newcomers.", "against": "Small yard (Syd Hosie), a single placed point with venue/margin not found, ~271-day absence and a bumper debut." },
            { "role": "danger", "horse": "Block Flight", "prob": 0.14, "placeProb": 0.38, "finish": "3", "sp": "14/1", "confidence": "medium", "reason": "Henderson/de Boinville elite newcomer combo on a track that suits the type; chief threat but UNRACED, so capped per Step 14 (not Win, not above 30%)." }
          ]
        },
        {
          "time": "16:05",
          "name": "BetVictor Open National Hunt Flat Race (Category 1 Elimination) (GBB Race) (Div II)",
          "type": "NH flat (bumper)",
          "distance": "2m69y",
          "going": "Good to Soft",
          "runners": 11,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "RESULT: Radiant Walk (16/1, unraced Derham newcomer) won; correctly capped at 0.06 under the Step 14 unraced rule, so no error - variance. Win Newgrove (11/8f, our point winner) stayed on but was always held, 2nd. Each-Way Geissler 6th; Danger Mister Realistic never competitive (8th). Win placed; the winner was not catchable on the evidence available.",
          "winner": { "horse": "Radiant Walk", "sp": "16/1", "agentProb": 0.06 },
          "writeup": "jumps/analyses/2026-11-05_newbury/1605_betvictor-open-nh-flat-div2.md",
          "updated": "19:30 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Newgrove", "prob": 0.29, "placeProb": 0.58, "finish": "2", "sp": "11/8", "confidence": "medium", "reason": "Only point-to-point winner in the field (won sole Irish point at Tyrella, survived a late error); now the red-hot Skelton yard with Harry Skelton, trainer says 'sharper than your average pointer, ready for a bumper'; galloping stayers' track suits.", "against": "Still green (visible late point mistake), newcomer bumpers are high-variance and a well-bred unraced rival from a top yard can beat a short point winner." },
            { "role": "ew", "horse": "Geissler", "prob": 0.14, "placeProb": 0.40, "finish": "6", "sp": "8/1", "confidence": "low", "reason": "Placed (4th) in an Irish point, now a Henderson/de Boinville debutant (EUR95k, 'yard good record in this'); behind Mister Realistic's point run so should go off a longer price with a genuine place chance - better each-way expectation.", "against": "Wears a first-time hood (quirk/keenness hint) and was only 4th in his point; unproven under Rules." },
            { "role": "danger", "horse": "Mister Realistic", "prob": 0.18, "placeProb": 0.47, "finish": "8", "sp": "10/3", "confidence": "medium", "reason": "Best point line of the raced horses (2nd on sole Irish point), half-brother to a bumper winner, in-form Sean Bowen booked; chief threat to Newgrove if the favourite misfires." }
          ]
        }
      ]
    },
    {
      "date": "2026-11-06",
      "course": "Aintree",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Good to Soft (Good in places) - Mildmay chase + hurdle course (autumn fixture; the Haldon Gold Cup was relocated here from Exeter). No raceday GoingStick published. Analysed single-pass at the user's request, then a full gap-fill pass was run before the offs.",
      "dataErrors": [
        "Sporting Life and Racing Post racecard pages 404'd for this relocated fixture pre-race; cards were rebuilt from the SL race API (/api/horse-racing/race/<id>) + horse profiles, and results read back cleanly from the same APIs post-race.",
        "12:40 first pass (pre gap-fill): Avide wrongly shown with a 1lb claim from the RP card (SL API confirmed 11-0, no claim), and Watery Borren's headgear mis-read as blinkers+wind-op (actually tongue strap only) - both corrected before the off.",
        "Result beaten-distances from the SL API came without unit labels (treated as lengths)."
      ],
      "races": [
        {
          "time": "12:40",
          "name": "BetMGM Novices' Hurdle (Novices' Championship Hurdle Series Qualifier) (GBB Race)",
          "type": "novices' hurdle",
          "distance": "2m209y",
          "going": "Good to Soft (Good in places)",
          "runners": 4,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": ["N"],
          "notes": "RESULT: Risky Obsession (1/1f) won - our 3rd pick (rated 0.19). We documented its sharp class drop (Class 1 -> Class 3) with first-time hood+tongue but ranked it behind a weight-conceding modest Cl4 winner and a 211-day-off rival (error N). WIN Watery Borren led and went 5L clear, headed before 2 out, outpaced into 3rd (9/4). DANGER Aqua Bleu led just before 2 out, headed at the last, 2nd (7/2). Avide (hurdle debut) tailed off last. The near-even top two was called correctly; we just inverted the market's favourite.",
          "winner": { "horse": "Risky Obsession", "sp": "1/1", "agentProb": 0.19 },
          "writeup": "jumps/analyses/2026-11-06_aintree/1240_betmgm-novices-hurdle.md",
          "updated": "23:45 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "Watery Borren", "prob": 0.33, "placeProb": 0.60, "finish": "3", "sp": "9/4", "confidence": "low-medium", "reason": "Race-fit (won a 13-runner Cl4 at Carlisle 15 days ago over 2m1f), top projected rating, hot 41% yard, suits the galloping track. 4-runner win-only field, so no each-way.", "against": "Only ONE rules run; gives 6lb to all three rivals off a Cl4 win landed at 17/2, up in class, and the card RPR 133 is unconfirmed on the result page." },
            { "role": "danger", "horse": "Aqua Bleu", "prob": 0.32, "placeProb": 0.60, "finish": "2", "sp": "7/2", "confidence": "low-medium", "reason": "Most proven/consistent (3 Cl4 wins + a 2nd from 5; the only blemish a PU in a Grade 1, verified at source as simply outclassed, not a jumping/stamina flaw), handles cut, receives 6lb. Behind the Win only on fitness: 211 days off, first run back (yard noted a cold spell). Near-even call with the Win. (3rd Risky Obsession 0.19, 4th Avide 0.16 - all-Flat hurdle debutant.)" }
          ]
        },
        {
          "time": "13:15",
          "name": "Download The BetMGM App Novices' Limited Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "3m210y",
          "going": "Good to Soft (Good in places)",
          "runners": 5,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "RESULT: WIN Off The Jury (5/2) made all, a mistake at the 14th, pushed along and ran on well to hold - top pick won; the front-running, twice-a-fence-winner, fence-experience read nailed it. DANGER Below The Radar 2nd (4/1), every chance at the last but held. EW Dixie Mafia 4th (6/1), weakened (did not place; 2 places). Leader Crik 3rd, Barnpark tailed off.",
          "winner": { "horse": "Off The Jury", "sp": "5/2", "agentProb": 0.40 },
          "writeup": "jumps/analyses/2026-11-06_aintree/1315_betmgm-novices-limited-handicap-chase.md",
          "updated": "23:45 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "Off The Jury", "prob": 0.40, "placeProb": 0.62, "finish": "1", "sp": "5/2", "confidence": "medium", "reason": "Only one in the field to have won twice over fences (sound, fluent jumper), a prominent racer suiting the galloping Mildmay course; progressive novice up just 4-5lb for two wins. Fence experience is the key at this staying trip.", "against": "Never won beyond 2m5f; 3m record is one hurdle 3rd plus a PU and a run-out, so 3m210y stamina is unproven; top weight and 142 days off." },
            { "role": "ew", "horse": "Dixie Mafia", "prob": 0.25, "placeProb": 0.52, "finish": "4", "sp": "6/1", "confidence": "medium", "reason": "Best each-way value on our numbers: proven stays 3m on soft at this exact course (2nd Aintree 3m149y), won his only chase start comfortably, 2lb well-in and receives 15lb from top; Christian Williams staying yard.", "against": "Only one completed chase start (fencing barely tested), lowest-rated, 196 days off, and two 80/1 hurdle flops on record." },
            { "role": "danger", "horse": "Below The Radar", "prob": 0.15, "placeProb": 0.42, "finish": "2", "sp": "4/1", "confidence": "medium", "reason": "Nicholls/S Twiston-Davies, stays 3m (3rd Newbury 3m on Heavy), gets 7lb and a consistent placer; chief threat if the first two fail. But fell on his only chase start, no win since Mar 2024 and 205 days off." }
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
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "RESULT: WIN All In You (6/4f) held up, led at the last and went clear readily - top pick won; the corrected 'roughly level with Dedicated Hero, fit from the Flat, hold-up suits a strong pace' read was spot on. DANGER Lyssenko 2nd (4/1). Dedicated Hero (top weight, correctly opposed) 6th. EW King Ulanda last of 7 (exposed Cl4-level, as the case-against said).",
          "winner": { "horse": "All In You", "sp": "6/4", "agentProb": 0.28 },
          "writeup": "jumps/analyses/2026-11-06_aintree/1350_betmgm-handicap-hurdle.md",
          "updated": "23:45 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "All In You", "prob": 0.28, "placeProb": 0.54, "finish": "1", "sp": "6/4", "confidence": "medium", "reason": "Fit from the Flat with his hurdle mark barely moved (126->127) vs Dedicated Hero's +10lb spring rise; on the re-read Ayr G2 line (btn 6.5L in 4th, hampered when the leader fell) the pair are now roughly level at today's weights; hold-up style suits a likely strong pace; Sean Bowen booked.", "against": "Modest hurdle CV (one Cl3 win, a G1 PU, a hampered 4th); a closer who needs the race to fall right, and the Flat-to-hurdles fitness read is an inference." },
            { "role": "ew", "horse": "King Ulanda", "prob": 0.08, "placeProb": 0.36, "finish": "7", "sp": "7/1", "confidence": "low", "reason": "Best place-at-a-price: lightest in off 113, in form (beaten a head for 4th in a Cl3 last time), hold-up type who benefits if the front pair duel; likely the biggest price with a real place chance.", "against": "Exposed Cl4-level horse stepping into Cl3; his own card note says the handicapper 'has him about right'; places far more than he wins." },
            { "role": "danger", "horse": "Lyssenko", "prob": 0.19, "placeProb": 0.42, "finish": "2", "sp": "4/1", "confidence": "medium", "reason": "Unbeaten in France (2 Pau wins), Skelton/Harry Skelton, could be ahead of his first British mark of 125. Not staked: 294 days off and untested on good-to-soft vs UK handicap class." }
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
          "status": "settled",
          "grade": "held",
          "errors": [],
          "notes": "RESULT: WIN Royal Infantry (11/8) led from the 2nd fence, asserted 3 out and ran on - top pick won. DANGER Klimt Madrik (6/5f) made mistakes at the 2nd and 3 out and was always held, 2nd - exactly the jumping + held-up-in-a-front-run-race doubt that kept the market fav out of our Win. Intosomethinggood (our 3rd, 0.20) 3rd. The pace/stamina tactical read was vindicated in full.",
          "winner": { "horse": "Royal Infantry", "sp": "11/8", "agentProb": 0.42 },
          "writeup": "jumps/analyses/2026-11-06_aintree/1425_future-stars-novices-chase.md",
          "updated": "23:45 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "Royal Infantry", "prob": 0.42, "placeProb": 0.72, "finish": "1", "sp": "11/8", "confidence": "medium", "reason": "Lone confirmed front-runner stepping up to 3m (likely his optimal trip) on a galloping track; made all to win his latest chase 17 days ago, was outpaced (not out-stayed) at 2m4f, strong stamina sire, top yard/Harry Skelton - can dictate a stamina test two hold-up rivals must answer.", "against": "Never run beyond 2m7f (3m unproven for him too); a hurdle 'nearly-horse' whose chase wins came only in weak 3-runner fields; a jumping error from the front would hand it over." },
            { "role": "danger", "horse": "Klimt Madrik", "prob": 0.38, "placeProb": 0.70, "finish": "2", "sp": "6/5", "confidence": "medium", "reason": "Best on form (OR 143, G1 Challow 2nd, G1 Turners 8th btn 1.75L of 21) and 5lb well-in; if he stays 3m the likeliest winner. Kept out of the Win by a specific doubt: never beyond 2m5f and a hold-up type who must close with fences to jump in a race likely run honestly from the front. 3rd pick Intosomethinggood 0.20 (lowest-rated, PU'd the one time tried at 3m)." }
          ]
        },
        {
          "time": "15:00",
          "name": "BetMGM Haldon Gold Cup Handicap Chase (Grade 2) (Limited Handicap)",
          "type": "handicap chase",
          "distance": "1m7f176y",
          "going": "Good to Soft (Good in places)",
          "runners": 6,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": ["M"],
          "notes": "RESULT: Rubaud (4/1) made all and won - we FLAGGED him as 'the one confirmed front-runner who could steal a soft, uncontested lead on a galloping 2m' but opposed him for the EW in favour of one-paced Brookie, and our WIN JPR One (2nd, 11/4) was outpaced by exactly that leader (error M - the pace read was right but not acted on). DANGER Mirabad 3rd (9/4f), no extra. EW Brookie 4th (lost a right hind shoe). We did correctly rank JPR One above Mirabad.",
          "winner": { "horse": "Rubaud", "sp": "4/1", "agentProb": 0.11 },
          "writeup": "jumps/analyses/2026-11-06_aintree/1500_haldon-gold-cup.md",
          "updated": "23:45 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "JPR One", "prob": 0.40, "placeProb": 0.66, "finish": "2", "sp": "11/4", "confidence": "medium", "reason": "Grade 1-placed 2m chaser dropping into a 6-runner G2 in career-best form (won 2m Cheltenham hcap under top weight 14 days ago; 2nd G1 Celebration in April); soundest jumper in the race (18 chase runs, 0 falls, 1 unseat); proven at trip/going; won this race in 2024.", "against": "Top weight off a career-high 161, a new jockey (Jonjo O'Neill Jr in for Powell), and has never actually won at Aintree." },
            { "role": "ew", "horse": "Brookie", "prob": 0.09, "placeProb": 0.28, "finish": "4", "sp": "6/1", "confidence": "low", "reason": "Place-at-a-price: 2nd in a Maghull G1 over this EXACT C&D (proven track/trip), dropped 13lb to a workable 137, fit (4th in a Cl2 Ascot hcap 6 days ago), first-time cheekpieces; more reliable to complete than Rubaud.", "against": "Exposed one-paced hold-up horse in a 2-place race with two clearly better rivals; +4lb out of the handicap." },
            { "role": "danger", "horse": "Mirabad", "prob": 0.26, "placeProb": 0.52, "finish": "3", "sp": "9/4", "confidence": "medium", "reason": "Won the Maghull G1 over this exact C&D on Good to Soft and returned with a sound 2nd in a Listed hurdle on 22 Oct; chief threat. Held off the Win by a 17lb rise since that C&D win (career-high 155), a genuine jumping-lapse record (2 unseats in 7 chase starts) and being 6lb worse off than JPR One." }
          ]
        },
        {
          "time": "15:35",
          "name": "BetMGM Handicap Chase (Premier Handicap) (GBB Race)",
          "type": "handicap chase",
          "distance": "3m210y",
          "going": "Good to Soft (Good in places)",
          "runners": 12,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "RESULT: Montregard (5/1) won - named in our write-up as 'a co-danger just below the top three (Cobden the signal)', rated 0.11. EW Kap Vert PLACED 3rd at 11/1 - the stamina/travel value call landed (12 run = 3 places). WIN Konfusion 5th (12/1), outpaced as the jumping + 209-day-reappearance doubts warned. DANGER/joint-2nd-pick Here Comes Georgie (5/2f) only 7th - our modest 0.14 on the market fav vindicated. King Turgeon 2nd (18/1).",
          "winner": { "horse": "Montregard", "sp": "5/1", "agentProb": 0.11 },
          "writeup": "jumps/analyses/2026-11-06_aintree/1535_betmgm-premier-handicap-chase.md",
          "updated": "23:45 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "Konfusion", "prob": 0.16, "placeProb": 0.42, "finish": "5", "sp": "12/1", "confidence": "medium", "reason": "Cleanest track-specific line: ran to OR145 when 3rd of 13 in THIS exact race (Aintree 3m210y, GtS) last April and lines up off the SAME mark; progressive stayer who returns well fresh. Big-field Win cap applied (16%).", "against": "Not a fluent jumper ('not fluent' recurs; 1 fall + 1 unseat) and a 209-day seasonal reappearance." },
            { "role": "ew", "horse": "Kap Vert", "prob": 0.14, "placeProb": 0.40, "finish": "3", "sp": "11/1", "confidence": "medium", "reason": "Best each-way value: progressive 6yo who won the 16-runner Scottish Grand National (4m2f, heavy) travelling strongly - stamina guaranteed, travels into his races, sound jumper, likely a longer price up in grade.", "against": "Up 7lb and dropping sharply from 4m2f; unproven at this exact course / 'short' 3m; 202 days off." },
            { "role": "danger", "horse": "Here Comes Georgie", "prob": 0.14, "placeProb": 0.40, "finish": "7", "sp": "5/2", "confidence": "medium", "reason": "The one race-fit runner near the top (13 days off), won a 3m1f GtS handicap chase 13 days ago travelling powerfully, distance-proven, Skelton. Held off the Win only by the 7lb rise and a hold-up style. Co-danger Montregard 0.11 (Cobden booked)." }
          ]
        },
        {
          "time": "16:05",
          "name": "Gamble Responsibly At BetMGM Handicap Hurdle",
          "type": "handicap hurdle",
          "distance": "2m209y",
          "going": "Good to Soft (Good in places)",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "errors": [],
          "notes": "RESULT: Secret Vino (18/1) won - our outsider (rated 0.08), downgraded on a '2m1f may be too sharp' stamina worry that proved unfounded (mild mis-weight, but a genuine 18/1 market outsider = largely variance). EW Limier d'Arthel 2nd (11/4, led at the last, headed near the line) and DANGER Knight Templar 3rd (11/2) BOTH PLACED (10 run = 3 places). WIN Quaviste (11/8f) led approaching 2 out then weakened to 6th - the 251-day reappearance 'may need the run' caveat held. Mia Sunshine (our flagged improver) 4th.",
          "winner": { "horse": "Secret Vino", "sp": "18/1", "agentProb": 0.08 },
          "writeup": "jumps/analyses/2026-11-06_aintree/1605_betmgm-handicap-hurdle.md",
          "updated": "23:45 Fri 6 Nov",
          "picks": [
            { "role": "win", "horse": "Quaviste", "prob": 0.26, "placeProb": 0.56, "finish": "6", "sp": "11/8", "confidence": "medium", "reason": "Best weight-adjusted line: 4th of 17 beaten 1.5L in a Class 2 handicap (Morebattle, Kelso) off TODAY'S exact mark 113, now dropped to Class 4; Dan/Harry Skelton; travels into his races with pace to aim at.", "against": "251-day seasonal reappearance (may need the run) and no win over hurdles yet; one unseat shows a jumping blip exists." },
            { "role": "ew", "horse": "Limier d'Arthel", "prob": 0.12, "placeProb": 0.52, "finish": "2", "sp": "11/4", "confidence": "medium", "reason": "Consistent placer (2nd/2nd/3rd, travels smoothly), shaped well on handicap debut 2nd off 107, raised only +3lb to 110; Cobden + Hobbs/White, 16-day back-up - genuine place at a longer price.", "against": "Flagged keen-goer; places rather than wins, so could be second again." },
            { "role": "danger", "horse": "Knight Templar", "prob": 0.18, "placeProb": 0.48, "finish": "3", "sp": "11/2", "confidence": "medium", "reason": "Progressive 5yo, won a 15-runner Class 4 at Chepstow LTO off 109 travelling strongly; up 5lb but the most likely of the rest to beat the top two. Left off the EW slot as a short-priced LTO winner with less value than Limier. (Mia Sunshine 0.14 the chief unselected improver.)" }
          ]
        }
      ]
    },
    {
      "date": "2026-11-07",
      "course": "Gowran Park",
      "country": "IRE",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Chase course Good; hurdle course Good to Yielding (SL card header, checked 09:36 GMT 7 Nov; dry). Right-handed galloping track, uphill run-in \u2014 prominent bias.",
      "races": [
        {
          "time": "12:10",
          "name": "Irish Stallion Farms EBF Mares Beginners Chase",
          "type": "chase",
          "distance": "2m",
          "going": "Good",
          "runners": 4,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1210_irish-stallion-farms-ebf-mares-beginners-chase.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Sixandahalf",
              "prob": 0.47,
              "placeProb": 0.72,
              "finish": "1",
              "confidence": "medium",
              "reason": "Clear class edge \u2014 Grade 1-placed hurdler (~16lb best in race on hurdle ratings), stays 2m well, completed her one chase start making the running; prominent style suits the stiff uphill Gowran finish.",
              "against": "Beaten at 2/9 on her only chase start (2-runner match) and weakened late; jumping/battle under pressure unproven on one run, and she concedes 7lb to the two claimers.",
              "sp": "4/11"
            },
            {
              "role": "danger",
              "horse": "Miss Fourie",
              "prob": 0.28,
              "placeProb": 0.58,
              "finish": "3",
              "confidence": "medium",
              "reason": "True OR-122 hurdler who led and looked the winner on her last chase start before a bad blunder at the last (3rd of 4); clearly able if she jumps.",
              "against": "Recurring jumping errors over fences and a held-up style that works against the prominent-bias track.",
              "sp": "3/1"
            }
          ],
          "errors": [],
          "notes": "WIN Sixandahalf (4/11F) disputed, led before 2 out and shaken up to pull clear run-in, won easily - the ~16lb class edge as called. DANGER Miss Fourie 3rd (3/1); Mo Ghille Mar 2nd (13/2); Cruisin Susan tailed off. Top pick won.",
          "winner": {
            "horse": "Sixandahalf",
            "sp": "4/11",
            "agentProb": 0.47
          }
        },
        {
          "time": "12:45",
          "name": "Gerry Comerford Drilling Beginners Chase",
          "type": "chase",
          "distance": "2m4f",
          "going": "Good",
          "runners": 10,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1245_gerry-comerford-drilling-beginners-chase.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Princess Aveen",
              "prob": 0.28,
              "placeProb": 0.55,
              "finish": "6",
              "confidence": "medium",
              "reason": "Won LTO at today's exact trip and ground (Fairyhouse 2m4f Good, stayed on to lead last stride); point-to-point schooling gives the best jumping grounding of eight chase debutants; carries least weight (mare's allowance + 5lb claim).",
              "against": "Both rules wins came from the rear and Gowran favours prominent racers; chase jumping formally unproven and the points form is asserted, not read at source.",
              "sp": "9/2"
            },
            {
              "role": "ew",
              "horse": "Market Ready",
              "prob": 0.11,
              "placeProb": 0.46,
              "finish": "7",
              "confidence": "low",
              "reason": "Most proven stayer at the trip (3rd Clonmel 2m4f 16 days ago, 2nd over 2m5f), course form at Gowran, joint-top OR 105, sound jumper and freshest \u2014 the best place-at-a-price.",
              "against": "0 wins from 10 and repeatedly one-paced, so the win leg is weak; chase debut adds jumping risk \u2014 a place play, not a likely winner.",
              "sp": "8/1"
            },
            {
              "role": "danger",
              "horse": "Build A Bridge",
              "prob": 0.22,
              "placeProb": 0.5,
              "finish": "1",
              "confidence": "medium",
              "reason": "Best recent hurdle form (won Punchestown going away 13 Oct, 2nd Limerick off OR 90), flawless 11/11 hurdle completions, prominent style suits Gowran, Danny Mullins up.",
              "against": "Chase debut with no point-schooling noted, and a step up to 2m4f from his recent 2m.",
              "sp": "6/4"
            }
          ],
          "errors": [],
          "notes": "DANGER Build A Bridge (6/4F) led, was joined but asserted before the last - our chief threat (best recent hurdle form, prominent, D Mullins) won. WIN Princess Aveen 6th (9/2): the flagged hold-up style + chase-debut jumping doubt told (jumped left 2 out, soon no extra). EW Market Ready 7th. Eternal Reward (our 0.11 outsider) 2nd (11/1). Winner came from our picks (Danger).",
          "winner": {
            "horse": "Build A Bridge",
            "sp": "6/4",
            "agentProb": 0.22
          }
        },
        {
          "time": "13:20",
          "name": "Noreside Catering Handicap Chase",
          "type": "chase",
          "distance": "2m",
          "going": "Good",
          "runners": 7,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1320_noreside-catering-handicap-chase.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Break My Soul",
              "prob": 0.4,
              "placeProb": 0.58,
              "finish": "5",
              "confidence": "medium",
              "reason": "Clear class drop \u2014 3rd in the Cheltenham Grand Annual (Cls1, 20 ran) off 136 beaten 3/4L, and a course-and-distance winner here (Gowran 2m chase); sound jumper (5/6 complete, no falls) with a good fresh record.",
              "against": "182-day layoff off top weight 11-12, and a hold-up type on a prominent-racing track.",
              "sp": "3/1"
            },
            {
              "role": "ew",
              "horse": "Leave In Secret",
              "prob": 0.1,
              "placeProb": 0.3,
              "finish": "4",
              "confidence": "low",
              "reason": "Carries just 9-7 effective (7lb claim) and is consistently close-up (3rd of 20, 2nd, beaten 1.5L last time); prominent style fits Gowran \u2014 the best longer-priced place call.",
              "against": "0/9 over fences, and with only two places paying his habit of minor placings will often miss out.",
              "sp": "3/1"
            },
            {
              "role": "danger",
              "horse": "Golden Joy",
              "prob": 0.18,
              "placeProb": 0.33,
              "finish": "1",
              "confidence": "medium",
              "reason": "Second-best on class (staying-on 2nd in a Cls1 2m1f Leopardstown handicap off 130), now with a new yard.",
              "against": "Fell (tired) last time and PU'd with a bad mistake the run before \u2014 real completion risk \u2014 and runs from off the pace into a stiff finish.",
              "sp": "12/1"
            }
          ],
          "errors": [],
          "notes": "DANGER Golden Joy (12/1) led before the next and pressed late to hold on - our second-on-class pick won despite the completion risk we flagged. WIN Break My Soul 5th (3/1): the 182-day layoff + hold-up-on-a-prominent-track doubt materialised (no impression 3 out). EW Leave In Secret 4th (3/1), just out (2 places paid). Winner from our picks (Danger).",
          "winner": {
            "horse": "Golden Joy",
            "sp": "12/1",
            "agentProb": 0.18
          }
        },
        {
          "time": "13:50",
          "name": "PRL Group Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m20y",
          "going": "Good to Yielding",
          "runners": 12,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1350_prl-group-maiden-hurdle.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Brady Hartsfield",
              "prob": 0.25,
              "placeProb": 0.5,
              "finish": "2",
              "confidence": "low",
              "reason": "Best form in the race \u2014 2nd in a Listed bumper (Limerick) and 2nd in a Punchestown graduation; top-rated, and Good to Yielding suits better than the heavy he disliked.",
              "against": "Two unknowns at once \u2014 hurdle debut (jumping unproven) and a 203-day seasonal reappearance.",
              "sp": "7/2"
            },
            {
              "role": "ew",
              "horse": "Rocky Alfonso",
              "prob": 0.1,
              "placeProb": 0.32,
              "finish": "10",
              "confidence": "low",
              "reason": "His one good bumper run came when he dictated (3rd of 8 Galway); a confirmed front-runner into Gowran's strongly prominent-biased track, with a 5lb claim (effective 11-2).",
              "against": "Hurdle debut (jumping unproven) and only modest bumper form.",
              "sp": "18/1"
            },
            {
              "role": "danger",
              "horse": "Baila Conmigo",
              "prob": 0.22,
              "placeProb": 0.55,
              "finish": "3",
              "confidence": "medium",
              "reason": "Only proven, sound-jumping hurdler in the field (4/4 completions, frame every time, 3rd of 20 Galway on Yielding), race-fit, prominent, 5lb claim.",
              "against": "Failed to win any of four maiden hurdles, finding 'no extra' each time \u2014 an exposed frame-hitter \u2014 plus a one-day Flat back-up.",
              "sp": "5/2"
            }
          ],
          "errors": [
            "J"
          ],
          "notes": "Huntin Boots (2/1F) won - the horse we rated only 0.07, having capped it on its refusal/unseat-before-the-1st on its sole prior hurdle start. Our WIN Brady Hartsfield 2nd (7/2) and DANGER Baila Conmigo 3rd (5/2) filled the places behind it. Error J: a demonstrably talented, well-bred, well-backed horse downgraded on a single non-completion treated as proof it would not jump. EW Rocky Alfonso 10th (jumped right, mistake).",
          "winner": {
            "horse": "Huntin Boots",
            "sp": "2/1",
            "agentProb": 0.07
          }
        },
        {
          "time": "14:20",
          "name": "Proficient Engineering Irish EBF Maiden Hurdle",
          "type": "hurdle",
          "distance": "2m20y",
          "going": "Good to Yielding",
          "runners": 7,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1420_proficient-engineering-irish-ebf-maiden-hurdle.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Got The Honours",
              "prob": 0.37,
              "placeProb": 0.6,
              "finish": "3",
              "confidence": "medium",
              "reason": "Point winner from a powerful yard (G P Cromwell / Keith Donoghue) on hurdling debut against exposed, winless, long-absent rivals \u2014 the classic weak-maiden angle.",
              "against": "Never jumped a hurdle in public, off ~196 days with a first-time tongue-tie; Reckless holds the only solid hurdle form.",
              "sp": "6/5"
            },
            {
              "role": "ew",
              "horse": "Reckless",
              "prob": 0.3,
              "placeProb": 0.56,
              "finish": "2",
              "confidence": "medium",
              "reason": "Only solid hurdle form in the race (2nd of 18 at Fairyhouse 2m4f, 5th of 24 over 2m); prominent style suits Gowran's uphill finish, 3lb claim (effective 11-9).",
              "against": "245 days off and nothing shown since \u2014 a 'needs the run' risk; last seen tailed off in a heavy bumper.",
              "sp": "5/4"
            },
            {
              "role": "danger",
              "horse": "Lyrical Park",
              "prob": 0.09,
              "placeProb": 0.26,
              "finish": "1",
              "confidence": "low",
              "reason": "Most recent racing (21d), completes, prominent (track-suited), drops to a sharper 2m with first-time cheekpieces.",
              "against": "Well beaten in all three starts \u2014 coverage only.",
              "sp": "20/1"
            }
          ],
          "errors": [
            "N"
          ],
          "notes": "DANGER Lyrical Park (20/1) led before the last and kept on strongly - our chief threat won; we named the exact reasons (recent racing, completes, prominent, trip drop, first-time cheekpieces) but rated it only 0.09. WIN Got The Honours 3rd (6/5F) and EW Reckless 2nd (5/4) - the two market principals placed. Error N: a first-time-headgear runner with a live positive left under-ranked. Winner from our picks (Danger).",
          "winner": {
            "horse": "Lyrical Park",
            "sp": "20/1",
            "agentProb": 0.09
          }
        },
        {
          "time": "15:30",
          "name": "Pat Carroll's Pub Kilkenny Mares Handicap Hurdle (0-100) (Div 1)",
          "type": "hurdle",
          "distance": "2m3f180y",
          "going": "Good to Yielding",
          "runners": 15,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1530_pat-carrolls-pub-kilkenny-mares-handicap-hurdle-div1.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "A Snow White Park",
              "prob": 0.28,
              "placeProb": 0.6,
              "finish": "2",
              "confidence": "medium",
              "reason": "Only genuine class edge in a 0-100 \u2014 reverts to hurdles off mark 100 having just completed a chase hat-trick (chase mark 122, Listed winner two days ago); a prominent racer, which Gowran's stiff uphill finish rewards.",
              "against": "12-0 top weight conceding 8-35lb, her hurdle form is only modest (winless in handicap hurdles), and she runs just two days after a hard Listed chase \u2014 bounce/turnaround risk.",
              "sp": "4/5"
            },
            {
              "role": "ew",
              "horse": "Doyen Og",
              "prob": 0.06,
              "placeProb": 0.26,
              "finish": "F",
              "confidence": "low",
              "reason": "In form and lightest in the race (9-7 after a 7lb claim) \u2014 3rd of 16 at Limerick over 2m5f 21 days ago off the same mark; stays well and races prominently, a genuine place chance at a big price.",
              "against": "Career maiden in 20 runs; LTO 3rd partly 'left in third' and drops from 2m5f to 2m3f180y \u2014 a place play, not a win.",
              "sp": "7/1"
            },
            {
              "role": "danger",
              "horse": "Kate Knows Best",
              "prob": 0.13,
              "placeProb": 0.42,
              "finish": "5",
              "confidence": "medium",
              "reason": "Front-running and well-weighted (11-4 after claim), a proven stayer whose two falls were over fences not hurdles; run-fit with a prominent profile that suits Gowran.",
              "against": "One-paced off 97 ('no extra') \u2014 needs a bit more.",
              "sp": "18/1"
            }
          ],
          "errors": [
            "N"
          ],
          "notes": "Good Bye Milan (18/1) won - a 9yo Gowran course winner in FIRST-TIME CHEEKPIECES we rated only 0.02 (we noted the headgear 'could spark her' but called her stale). WIN A Snow White Park 2nd (4/5F): the class-revert angle got the favourite there but she was collared and could not regain it. EW Doyen Og was disputing when she FELL 2 out (a sound call undone by a fall). DANGER Kate Knows Best 5th (18/1). Error N: first-time-headgear revival under-ranked.",
          "winner": {
            "horse": "Good Bye Milan",
            "sp": "18/1",
            "agentProb": 0.02
          }
        },
        {
          "time": "16:00",
          "name": "Pat Carroll's Pub Kilkenny Mares Handicap Hurdle (0-100) (Div 2)",
          "type": "hurdle",
          "distance": "2m3f180y",
          "going": "Good to Yielding",
          "runners": 14,
          "source": "full",
          "status": "settled",
          "grade": "held",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1600_pat-carrolls-pub-kilkenny-mares-handicap-hurdle-div2.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Eaglewood",
              "prob": 0.18,
              "placeProb": 0.55,
              "finish": "F",
              "confidence": "medium",
              "reason": "Proven at today's exact trip now \u2014 3rd of 11 at Clonmel over 2m3f on Good just 37 days ago, beaten 1.25L; a flawless completer (0 F/U/P in 13) with a prominent style that fits Gowran's stiff finish; carries full weight.",
              "against": "A perennial placer \u2014 her only win in 13 starts was a 2024 bumper; habitually one-paced, so can place without winning.",
              "sp": "4/1"
            },
            {
              "role": "ew",
              "horse": "Talas Kera",
              "prob": 0.11,
              "placeProb": 0.38,
              "finish": "1",
              "confidence": "low",
              "reason": "2nd of 13 at Gowran over 2m4f last time off OR77 (now 80), closing from the rear at this very track; a 5lb claim takes her to just 10-3 carried \u2014 a well-in each-way engine at a longer price.",
              "against": "A maiden beaten 3L and 'no impression on the winner' last time \u2014 genuinely one-paced, more place than win.",
              "sp": "7/2"
            },
            {
              "role": "danger",
              "horse": "Poetic Focus",
              "prob": 0.16,
              "placeProb": 0.48,
              "finish": "6",
              "confidence": "medium",
              "reason": "Best recent figures in the race \u2014 two narrow 2nds at 2m6f, both prominent and staying on; a front-running profile ideal for the stiff finish.",
              "against": "Every good run is at 2m6f; today drops her 3f to 2m3f180y, and her one run at this exact C&D was a beaten 12/19 on Heavy.",
              "sp": "3/1"
            }
          ],
          "errors": [],
          "notes": "EW Talas Kera (7/2) made swift progress to challenge 3 out, led and asserted - our each-way call won (course-and-trip form, well-in off a low mark, closes-at-this-track all verified). WIN Eaglewood FELL 5th - a freak for a 13-run flawless completer (a correct call undone by a fall). DANGER Poetic Focus 6th (3/1F): the flagged trip-drop doubt held (led, then no extra). Winner came from our picks (Each-Way).",
          "winner": {
            "horse": "Talas Kera",
            "sp": "7/2",
            "agentProb": 0.11
          }
        },
        {
          "time": "14:55",
          "name": "GAIN Equine Nutrition Novice Handicap Hurdle",
          "type": "hurdle",
          "distance": "2m20y",
          "going": "Good to Yielding",
          "runners": 8,
          "source": "full",
          "status": "settled",
          "grade": "mixed",
          "writeup": "jumps/analyses/2026-11-07_gowran-park/1455_gain-equine-nutrition-novice-handicap-hurdle.md",
          "updated": "16:45 Sat 7 Nov",
          "picks": [
            {
              "role": "win",
              "horse": "Cocofred",
              "prob": 0.27,
              "placeProb": 0.58,
              "finish": "5",
              "confidence": "medium",
              "reason": "Highest-rated (OR 120) and won his last two; a prominent-and-stays-on style ideal for a contested pace into Gowran's uphill finish; De Bromhead / O'Keeffe, two poor runs both on Soft-Heavy (irrelevant today).",
              "against": "Gives 9-10lb to two in-form, effectively-level rivals and is 3lb worse off with Firebrand than when he beat him only a neck \u2014 a classic top-weight give-weight-away shape.",
              "sp": "11/4"
            },
            {
              "role": "ew",
              "horse": "Papagei",
              "prob": 0.1,
              "placeProb": 0.42,
              "finish": "2",
              "confidence": "medium",
              "reason": "~8lb better off with Facile Ocean than when beaten just 1.25L at Downpatrick three weeks ago; stays strongly up the hill and a hot pace gives the grinder something to close into \u2014 a big-priced genuine placer.",
              "against": "Exposed one-paced type (3 wins from 28) who quickens off nothing and needs the leaders to stop.",
              "sp": "7/2"
            },
            {
              "role": "danger",
              "horse": "Facile Ocean",
              "prob": 0.22,
              "placeProb": 0.55,
              "finish": "7",
              "confidence": "medium",
              "reason": "Progressive \u2014 won his last two including on handicap debut; effectively 9lb better off with Cocofred and level with Firebrand.",
              "against": "Front-running style is the most exposed to being collared up Gowran's stiff finish in a pace-pressured race.",
              "sp": "5/1"
            }
          ],
          "errors": [],
          "notes": "Bell Ex Too (10/3), the 3yo we rated 0.09 as a live outsider, won on weight-for-age. Our EW Papagei 2nd (7/2) - the verified weight-swing head-to-head (~8lb better off with Facile Ocean) nailed the place. WIN Cocofred 5th (11/4F): the flagged top-weight 'giving weight to improving rivals' doubt told (jumped left, no impression). DANGER Facile Ocean 7th (5/1), no extra. Papagei's each-way place is the method's win here.",
          "winner": {
            "horse": "Bell Ex Too",
            "sp": "10/3",
            "agentProb": 0.09
          }
        }
      ],
      "dataErrors": [
        "Sporting Life racecard URLs intermittently served the wrong race body on first fetch (caching); every race was re-fetched and verified by off-time and runner list before use.",
        "Golden Joy (13:20): SL card last_ran_days said 28; actual 191 (fell Punchestown 30 Apr) - recomputed from the profile pre-off.",
        "Beaten distances are not exposed in the Sporting Life result feed (margin fields null); finishing positions, SPs and in-running comments recorded, margins described qualitatively."
      ]
    }
  ]
});
