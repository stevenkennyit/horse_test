// AI agent picks and results: JUMPS. One object per meeting.
// Loaded by ../../dashboard.html alongside flat/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Add a new meeting object to `meetings` after each race day; set `status: "pending"` until the result is in.
// The agent ranks picks only; it does not recommend bets or check prices. The user decides how to bet.
//
// Field notes
//   picks[].prob      agent's stated win probability (0-1) at analysis time (fair price = 1/prob, shown by the dashboard)
//   picks[].finish    official finishing position, or "F", "PU", "UR", "BD", "R"; "-" while pending
//   picks[].sp        starting price (fractional, e.g. "5/2", "Evens"), added at review from the result page
//   picks[].confidence, .reason, .against   "low"|"medium"|"high"; one-line case for and against (shown on upcoming.html)
//   picks[].danger    true for a horse named as the danger rather than a ranked pick
//   writeup, updated  race write-up path; when the picks were last checked (e.g. "17:50 Sun 25 Oct")
//   winner.agentProb  probability the agent stated for the eventual winner; null if the winner was not rated
//   grade             "held" | "mixed" | "failed" | "pending" - judged on the reasoning, not the result
//   errors            judgement-error codes from `errorTypes`
//   source            "full" = full agent analysis; "verified" = user-supplied picks checked by the agent
//
// Legacy fields (25 Oct 2026 Galway only; no longer recorded): picks[].price = best price seen at analysis time;
//   bets[] = paper bets from the old recommended bet slip (stake/returned in points). The dashboard ignores both.

(function (data) {
  const D = (window.AGENT_DATA = window.AGENT_DATA || { errorTypes: {}, meetings: [] });
  Object.assign(D.errorTypes, data.errorTypes || {});
  D.meetings.push(...data.meetings);
})({
  errorTypes: {
    A: "Early-career ground runs held against an improved horse",
    B: "Recorded jumping doubt overridden by price",
    C: "Keen-goer made top pick in a weak pace",
    D: "Forecasts in a 10+ runner handicap (retired: bets no longer recommended)",
    E: "Unraced newcomer rated above raced rivals on price, pedigree or booking"
  },
  meetings: [
    {
      date: "2026-10-25",
      course: "Galway",
      country: "IRE",
      code: "jumps",
      playbook: "jumps/AGENTS-jumps.md",
      going: "Hurdles soft; chase course soft to heavy (Storm Boelo)",
      dataErrors: [
        "Read Monday's going row as Sunday's on the Sporting Life going page",
        "Sporting Life last_ran_days field unreliable; gaps recomputed from full profiles",
        "Result-page previous_results truncated; made horses look like debutants",
        "Heavy-ground filter matched 'Soft in places' inside yielding descriptions",
        "Racing Post profile row (2024 hurdle fall) not in Sporting Life record; discarded",
        "16:30: first analysis missed the 7lb claims for four raced fillies (Racing Post card weights are before claims); caught and revised at 16:22",
        "15:56: Bulgaden Castle logged as 'U/P' (unplaced) from the provisional result; official finish 5th"
      ],
      races: [
        {
          time: "12:32", name: "Gerry Coyme Memorial EBF Beginners Chase", type: "chase", distance: "2m6f111y",
          going: "Soft to Heavy", runners: 6, source: "verified", status: "settled",
          picks: [
            { rank: 1, horse: "Chart Topper", prob: 0.50, price: "10/11", finish: "1", sp: "10/11" },
            { rank: 2, horse: "Da Capo Glory", prob: 0.22, price: "9/2", finish: "5", sp: "7/2" }
          ],
          winner: { horse: "Chart Topper", sp: "10/11", agentProb: 0.50 },
          grade: "held", errors: [],
          notes: "Class edge beat the unproven-on-heavy doubt; won by 17L. Da Capo Glory ran poorly (jumped left, detached).",
          bets: [
            { bet: "Chart Topper → Da Capo Glory straight forecast", stake: 0.5, returned: 0 },
            { bet: "Da Capo Glory → Chart Topper straight forecast", stake: 0.25, returned: 0 }
          ]
        },
        {
          time: "13:07", name: "COLM QUINN BMW Handicap Chase", type: "chase", distance: "2m6f111y",
          going: "Soft to Heavy", runners: 10, source: "verified", status: "settled",
          picks: [
            { rank: 1, horse: "Crecora Hills", prob: 0.22, price: "7/1", finish: "F", sp: "3/1" },
            { rank: 2, horse: "Only For Our Man", prob: 0.15, price: "5/1", finish: "3", sp: "11/2" }
          ],
          winner: { horse: "Illtakehimmyself", sp: "7/2", agentProb: null },
          grade: "mixed", errors: ["A", "D"],
          notes: "Crecora Hills was sound value (backed 7/1 to 3/1F) and fell at the 2nd. Good-ground horses marked down on early maiden heavy runs finished 1-2-3.",
          bets: [
            { bet: "Crecora Hills each-way (0.5pt e/w)", stake: 1.0, returned: 0 },
            { bet: "Crecora Hills → Only For Our Man straight forecast", stake: 0.25, returned: 0 },
            { bet: "Crecora Hills → Illtakehimmyself straight forecast", stake: 0.25, returned: 0 }
          ]
        },
        {
          time: "13:42", name: "Brasserie On The Corner Handicap Chase", type: "chase", distance: "2m2f54y",
          going: "Soft to Heavy", runners: 13, source: "verified", status: "settled",
          picks: [
            { rank: 1, horse: "Dearg Mor", prob: 0.20, price: "10/3", finish: "3", sp: "15/8" },
            { rank: 2, horse: "Harty Cup", prob: 0.17, price: "7/1", finish: "PU", sp: "10/1" }
          ],
          winner: { horse: "Lanzhou", sp: "16/1", agentProb: null },
          grade: "failed", errors: ["B", "D"],
          notes: "Harty Cup backed on price despite trainer's 0/3 chase-debut record; not fluent twice, pulled up. Prince Palace first past the post, disqualified (rider weighed in light).",
          bets: [
            { bet: "Harty Cup win", stake: 0.5, returned: 0 },
            { bet: "Dearg Mor ↔ Springboard reverse forecast", stake: 0.25, returned: 0 }
          ]
        },
        {
          time: "14:17", name: "COLM QUINN BMW Mares Maiden Hurdle", type: "hurdle", distance: "2m11y",
          going: "Soft", runners: 8, source: "full", status: "settled",
          picks: [
            { rank: 1, horse: "Light Up The Dark", prob: 0.50, price: "10/11", finish: "2", sp: "4/7" },
            { rank: 2, horse: "Simply Natural", prob: 0.30, price: "15/8", finish: "1", sp: "5/2" }
          ],
          winner: { horse: "Simply Natural", sp: "5/2", agentProb: 0.30 },
          grade: "held", errors: [],
          notes: "Debut-jumping doubt on Light Up The Dark was real (not fluent 2 out); refusing odds-on was correct. Simply Natural made all.",
          bets: [
            { bet: "Light Up The Dark win (only at Evens+; not triggered)", stake: 0, returned: 0 },
            { bet: "Light Up The Dark → Simply Natural straight forecast", stake: 0.5, returned: 0 },
            { bet: "Tote trifecta LUTD → Simply Natural → Holly's Thunder", stake: 0.25, returned: 0 }
          ]
        },
        {
          time: "14:50", name: "Medical Technology Ireland Expo Handicap Hurdle", type: "hurdle", distance: "2m11y",
          going: "Soft", runners: 8, source: "full", status: "settled",
          picks: [
            { rank: 1, horse: "Inthenickoftime", prob: 0.29, price: "11/4", finish: "5", sp: "5/2" },
            { rank: 2, horse: "Shellrunforbriggs", prob: 0.20, price: "7/2", finish: "2", sp: "4/1" }
          ],
          winner: { horse: "Castleheath", sp: "3/1", agentProb: 0.18 },
          grade: "mixed", errors: ["A"],
          notes: "Soft-ground doubt on Inthenickoftime held. Castleheath marked down on soft runs from an over-rated period and won comfortably.",
          bets: [
            { bet: "Inthenickoftime win", stake: 1.0, returned: 0 },
            { bet: "Inthenickoftime ↔ Shellrunforbriggs reverse forecast", stake: 0.5, returned: 0 }
          ]
        },
        {
          time: "15:20", name: "Supermac's Rated Novice Hurdle", type: "hurdle", distance: "2m4f156y",
          going: "Soft", runners: 5, source: "full", status: "settled",
          picks: [
            { rank: 1, horse: "Fly Away Home", prob: 0.32, price: "6/1", finish: "5", sp: "11/2" },
            { rank: 2, horse: "Ole Ole", prob: 0.31, price: "4/1", finish: "1", sp: "11/4" }
          ],
          winner: { horse: "Ole Ole", sp: "11/4", agentProb: 0.31 },
          grade: "mixed", errors: ["A", "C"],
          notes: "Ole Ole's stamina case (dam's record) held. Fly Away Home took a keen hold in a slowly run race, as flagged. Harpy Eagle (opposed on soft) ran 2nd.",
          bets: [
            { bet: "Fly Away Home each-way (1pt e/w)", stake: 2.0, returned: 0 },
            { bet: "Ole Ole win @ 4/1", stake: 1.0, returned: 5.0 },
            { bet: "Fly Away Home ↔ Ole Ole reverse forecast", stake: 0.5, returned: 0 }
          ]
        },
        {
          time: "15:56", name: "Glenlo Abbey Hotel & Estate Maiden Hurdle", type: "hurdle", distance: "2m5f100y",
          going: "Soft", runners: 12, source: "full", status: "settled",
          picks: [
            { rank: 1, horse: "Bulgaden Castle", prob: 0.45, price: "5/6", finish: "5", sp: "Evens" },
            { rank: 2, horse: "Doctor Elvis", prob: 0.25, price: "7/2", finish: "2", sp: "3/1" }
          ],
          winner: { horse: "Always Scoring", sp: "25/1", agentProb: null },
          grade: "mixed", errors: [],
          notes: "Refusing Bulgaden Castle at odds-on held: 5th of 10 finishers at Evens, keen early, mistake at the last, no extra (trainer's 150+ day returners 0/60). Doctor Elvis led, rallied, beaten 1 3/4L. Winner Always Scoring (25/1) stayed on from the rear stepping up in trip; dismissed, not rated.",
          bets: [
            { bet: "Doctor Elvis win @ 7/2", stake: 0.5, returned: 0 }
          ]
        },
        {
          time: "16:30", name: "Tom Dempsey Flooring 4yo Fillies Pro/Am Flat Race", type: "bumper", distance: "2m11y",
          going: "Soft", runners: 6, source: "full", status: "settled", provisional: true,
          picks: [
            { rank: 1, horse: "Moscovite", prob: 0.40, price: "11/10", finish: "6", sp: "4/6" },
            { rank: 2, horse: "Va La Vie", prob: 0.22, price: "10/3", finish: "2", sp: "4/1" },
            { rank: 3, horse: "Mozart's Song", prob: 0.14, price: "8/1", finish: "3", sp: "11/1" }
          ],
          winner: { horse: "Bluebell Breeze", sp: "13/2", agentProb: null },
          grade: "failed", errors: ["E"],
          notes: "Unraced Moscovite (EUR260k, 40%) beaten 21L in last at 4/6; unraced Va La Vie 2nd, beaten 3L. Winner Bluebell Breeze was one of the raced fillies getting 7lb from both (claim missed until the 16:22 revision); raced 7lb-claimers filled 1st, 3rd, 4th and 5th. In-running comments not yet published.",
          bets: [
            { bet: "Va La Vie win (only at 3/1+) — withdrawn at 16:22, now below revised fair price", stake: 0, returned: 0 },
            { bet: "Mozart's Song each-way @ 8/1 (0.25pt e/w, 2 places at 1/4)", stake: 0.5, returned: 0 }
          ]
        }
      ]
    },
    {
      date: "2026-10-26",
      course: "Galway",
      country: "IRE",
      code: "jumps",
      playbook: "jumps/AGENTS-jumps.md",
      going: "Hurdles soft; chase course soft to heavy (rain; Tuesday listed heavy)",
      dataErrors: [],
      races: [
        {
          time: "13:12", name: "SANSERV Rated Novice Chase", type: "chase", distance: "2m2f54y",
          going: "Soft to Heavy", runners: 7, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "Gap-fill pass swapped the top two (Coral River 0.28 -> 0.23; Karl Des Tourelles 0.26 -> 0.30) after O'Sullivan's 150+ day returners came out 1 from 23. Three chase debutants; no clear pace.",
          winner: null,
          writeup: "jumps/analyses/2026-10-26_galway/1312_sanserv-rated-novice-chase.md", updated: "08:00 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Karl Des Tourelles", prob: 0.30, finish: "-", confidence: "low",
              reason: "Best chase figure in the field: 2 3/4L 2nd to Road To Home (138) over course and distance 20 days ago, 10L ahead of Chart Topper (won here by 17L yesterday); fit, stays 3m on testing ground, 4lb better off than Coral River.",
              against: "1 win in 17 starts; found little after leading or challenging in 4 races; jumping safe but slow at times." },
            { rank: 2, horse: "Coral River", prob: 0.23, finish: "-", confidence: "low",
              reason: "Only previous chase winner (Clonmel rated novice), placed twice on heavy in Punchestown rated novices with the Dec 2nd franked; 5 of 5 chase completions.",
              against: "179 days off (trainer 1 from 23 after 150+ days), 4lb penalty, unproven past 2m4f on testing ground." },
            { rank: 3, horse: "On Your Way", prob: 0.13, finish: "-", confidence: "low",
              reason: "Chase debut on heavy: 3/4L behind He's Gorgeous and 3/4L ahead of Moudan (won 3 of 7 since, last off 130); gets the same 7lb claim again (carries 10-12).",
              against: "328 days off, keen and held up in a race with no clear pace, has unseated and fallen over hurdles, amateur rider over fences." },
            { rank: 4, horse: "King's Bucks", prob: 0.13, finish: "-", confidence: "low", danger: true,
              reason: "3rd in the Grade 2 Hyde behind a later Grade 1 winner, verified point winner; de Bromhead chase debutants 4 from 17, all completed.",
              against: "Chase debut, and last two runs poor (pulled up in a Grade 1, then beaten 13L at even money)." }
          ]
        },
        {
          time: "13:42", name: "QuinnBet 3-Y-O Maiden Hurdle", type: "hurdle", distance: "2m90y",
          going: "Soft", runners: 10, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "Four hurdle debutants on soft; ground expected to worsen. Borora Aura (front-runner, won on soft to heavy, carries 10-0) the outsider if it turns heavy.",
          winner: null,
          writeup: "jumps/analyses/2026-10-26_galway/1342_quinnbet-3yo-maiden-hurdle.md", updated: "07:54 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Sharkeyboy", prob: 0.38, finish: "-", confidence: "medium",
              reason: "Flat OR 84-88, joint-best in the field; neck 2nd over 1m4f at Galway and beat Hello Garda (now hurdle OR 103) 13L; Mullins hurdling debutants 36%.",
              against: "Hurdle debut, never raced on soft, 0 from 6 on the flat and headed late in two narrow defeats." },
            { rank: 2, horse: "Green Soul", prob: 0.24, finish: "-", confidence: "medium",
              reason: "Clean hurdle round when 4th at Cork after 379 days off, staying on; top RPR/TS on the card; has run on soft.",
              against: "Cork form unfranked; best flat form at 5.5f-1m, so 2m on soft up Galway's climb is a stamina question." },
            { rank: 3, horse: "Wills History", prob: 0.09, finish: "-", confidence: "low",
              reason: "Collateral puts him 5-12lb behind Green Soul at level weights and he gets 7lb today; no jumping error on debut.",
              against: "Faded from 2 out on his only start, unexplained NR at Cork on 11 Oct, inexperienced 7lb claimer." }
          ]
        },
        {
          time: "14:12", name: "Connolly's RED MILLS Irish EBF Auction & Median Maiden Hurdle", type: "hurdle", distance: "2m90y",
          going: "Soft", runners: 11, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "Gap-fill pass (Update 07:58) put Give It A Crack top (0.21 -> 0.26) over Coolishael (0.28 -> 0.24) after her heavy-ground point 2nd was verified; Missouri Snow replaced Jury Time as the danger. Five hurdle debutants.",
          winner: null,
          writeup: "jumps/analyses/2026-10-26_galway/1412_irish-ebf-auction-median-maiden-hurdle.md", updated: "07:58 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Give It A Crack", prob: 0.26, finish: "-", confidence: "medium",
              reason: "About level with Coolishael at today's weights on the Listowel head-to-head (beaten 5L, 5lb better off now); 2nd on heavy over 3m in a mares' point; De Bromhead 9 NH wins from 34.",
              against: "One hurdle run only, 5lb claimer replaces O'Keeffe, ATR noted mistakes and greenness at Listowel, no frank for that race." },
            { rank: 2, horse: "Coolishael", prob: 0.24, finish: "-", confidence: "medium",
              reason: "Deepest Rules form: gave the Listowel winner 16lb and was beaten 1L; beaten 8.5L at level weights by Lizzie Twigg (since Listed winner, 127-128); three clean hurdle rounds.",
              against: "No soft or heavy form found in any code, still a maiden (beaten at 8/15 at Ballinrobe), 'no extra' in 2 of 3 hurdle runs, yard 1 NH win from 29." },
            { rank: 3, horse: "If You Believe", prob: 0.19, finish: "-", confidence: "low",
              reason: "Proven on soft: Clonmel 4th carrying 6lb more than the first two is worth about the low 110s; Cromwell and Donoghue won twice here yesterday.",
              against: "Off 354 days for an unknown reason; Cromwell's 300+ day returners in the sample unplaced; not fluent twice in his only hurdle run." },
            { rank: 4, horse: "Missouri Snow", prob: 0.10, finish: "-", confidence: "low", danger: true,
              reason: "Point winner on soft to heavy, bumper winner and Listed 3rd; gets 12lb from the geldings and races prominently.",
              against: "Hurdle debut, and beaten 15L in the Listed bumper." }
          ]
        },
        {
          time: "15:55", name: "COLM QUINN BMW Handicap Hurdle (0-100)", type: "hurdle", distance: "3m",
          going: "Soft", runners: 20, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "20-runner 0-100 handicap on soft, wide open (picks 0.38 combined). Reserve Good World (R21) would carry 11-7. More rain helps Roc My Haarth and Imperial Tune.",
          winner: null,
          writeup: "jumps/analyses/2026-10-26_galway/1555_colm-quinn-bmw-handicap-hurdle.md", updated: "07:55 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Moonshine Girl", prob: 0.16, finish: "-", confidence: "medium",
              reason: "Progressive (75 in May to 93); won over course and distance by 12L on 7 Sep (2nd won next time) and about 1lb better off with Grace Faraday than when 1/2L behind her on 6 Oct.",
              against: "Career-high mark, true 3m on soft unproven, first-time visor replaces the blinkers she won in, 1 win from 20 over hurdles." },
            { rank: 2, horse: "Roc My Haarth", prob: 0.13, finish: "-", confidence: "low",
              reason: "Best soft/heavy staying form among those rated 90+: 2nd over 3m on heavy at Limerick (beat Grace Faraday 18.5L), races prominently.",
              against: "0 from 15 over hurdles, last two runs poor, beaten 37L and 18L on heavy before and has unseated." },
            { rank: 3, horse: "Lake Okeechobee", prob: 0.09, finish: "-", confidence: "low",
              reason: "Carries 10-1 after a 5lb claim; improving (3rd at Listowel staying on) and completed all 9 starts.",
              against: "Maiden, never beyond 2m6f, needs a personal best; yard 1 win in its last 50 runs." },
            { rank: 4, horse: "Grace Faraday", prob: 0.08, finish: "-", confidence: "low", danger: true,
              reason: "Best course form: won this race last year, won here 7 Sep, 2nd here 6 Oct.",
              against: "0 from 9 in soft/heavy hurdle handicaps and on a career-high 100." }
          ]
        },
        {
          time: "16:32", name: "Electric Galway (C & G) (Pro/Am) INH Flat Race", type: "bumper", distance: "2m90y",
          going: "Soft", runners: 9, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "Six of nine carry 11-3 with 7lb claims; Evans Wishes, Here's Jim and Marble Hill carry 11-10. Three unraced (Here's Jim capped by rule E). If heavy is declared, Todo Bien moves to top (about 0.28) and Ballyadam Star 2nd (about 0.22).",
          winner: null,
          writeup: "jumps/analyses/2026-10-26_galway/1632_electric-galway-pro-am-flat-race.md", updated: "08:10 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Ballyadam Star", prob: 0.26, finish: "-", confidence: "medium",
              reason: "5th of 18 in the Punchestown festival 4yo bumper, beaten about 6L (3L behind Teofil, who has won 3 since); keeps his 7lb claim and gets 7lb from Marble Hill.",
              against: "Never run on soft, Flat dam line, the Punchestown race was slowly run and Galway's 2f uphill finish tests stamina; off 181 days." },
            { rank: 2, horse: "Todo Bien", prob: 0.25, finish: "-", confidence: "low",
              reason: "Only runner with soft or heavy form: 3rd at Naas, 2 1/4L behind Apache Peak (later Listed 3rd); races prominently, Elliott 20% in bumpers, carries 11-3.",
              against: "'No extra' late in both runs, best run in a 5-runner race, off 175 days." },
            { rank: 3, horse: "Marble Hill", prob: 0.19, finish: "-", confidence: "low",
              reason: "Beaten 1 1/4L by Gillane (since won a 17-runner maiden hurdle) and 6L clear of the 3rd; French jumps pedigree, Cromwell in form.",
              against: "Carries 11-10 with no claim, 13lb more than at Bellewstown, giving 7lb to both picks above; never run on soft; off 191 days." }
          ]
        }
      ]
    }
  ]
});
