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
    }
  ]
});
