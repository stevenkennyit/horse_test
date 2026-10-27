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
    E: "Unraced newcomer rated above raced rivals on price, pedigree or booking",
    F: "A standout figure or low mark ranked above the pick's own stated current-form, layoff or stable-form warning"
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
      dataErrors: [
        "Ground came up Soft to Heavy across the whole card; the hurdle races (13:42-16:32) were analysed on 'Soft', a slight softening from overnight rain",
        "Free Racing Post result pages carried no in-running/jumping comments, so the 'how' behind the UR/PU/F runners (incl. danger Grace Faraday PU at 15:55, Plug In Hybrid UR at 13:42, For My Lady F at 14:12) is unconfirmed from source",
        "Two ranked picks were late ground withdrawals for 'unsuitable ground': Open Secret (15:20, 2nd pick) and Todo Bien (16:32, 2nd pick) - the latter removed the race's only proven soft/heavy runner"
      ],
      races: [
        {
          time: "13:12", name: "SANSERV Rated Novice Chase", type: "chase", distance: "2m2f54y",
          going: "Soft to Heavy", runners: 7, source: "full", status: "settled", grade: "held", errors: [],
          notes: "Gap-fill pass swapped the top two (Coral River 0.28 -> 0.23; Karl Des Tourelles 0.26 -> 0.30) after O'Sullivan's 150+ day returners came out 1 from 23. Three chase debutants; no clear pace. RESULT: Karl Des Tourelles won (Evens F) by 2 1/4L; the gap-fill swap to put him top over Coral River was vindicated. Danger King's Bucks 2nd (4/1); On Your Way 3rd (25/1); Coral River (179 days off) 4th (13/2).",
          winner: { horse: "Karl Des Tourelles", sp: "Evens", agentProb: 0.30 },
          writeup: "jumps/analyses/2026-10-26_galway/1312_sanserv-rated-novice-chase.md", updated: "08:00 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Karl Des Tourelles", prob: 0.30, finish: "1", sp: "Evens", confidence: "low",
              reason: "Best chase figure in the field: 2 3/4L 2nd to Road To Home (138) over course and distance 20 days ago, 10L ahead of Chart Topper (won here by 17L yesterday); fit, stays 3m on testing ground, 4lb better off than Coral River.",
              against: "1 win in 17 starts; found little after leading or challenging in 4 races; jumping safe but slow at times." },
            { rank: 2, horse: "Coral River", prob: 0.23, finish: "4", sp: "13/2", confidence: "low",
              reason: "Only previous chase winner (Clonmel rated novice), placed twice on heavy in Punchestown rated novices with the Dec 2nd franked; 5 of 5 chase completions.",
              against: "179 days off (trainer 1 from 23 after 150+ days), 4lb penalty, unproven past 2m4f on testing ground." },
            { rank: 3, horse: "On Your Way", prob: 0.13, finish: "3", sp: "25/1", confidence: "low",
              reason: "Chase debut on heavy: 3/4L behind He's Gorgeous and 3/4L ahead of Moudan (won 3 of 7 since, last off 130); gets the same 7lb claim again (carries 10-12).",
              against: "328 days off, keen and held up in a race with no clear pace, has unseated and fallen over hurdles, amateur rider over fences." },
            { rank: 4, horse: "King's Bucks", prob: 0.13, finish: "2", sp: "4/1", confidence: "low", danger: true,
              reason: "3rd in the Grade 2 Hyde behind a later Grade 1 winner, verified point winner; de Bromhead chase debutants 4 from 17, all completed.",
              against: "Chase debut, and last two runs poor (pulled up in a Grade 1, then beaten 13L at even money)." }
          ]
        },
        {
          time: "13:42", name: "QuinnBet 3-Y-O Maiden Hurdle", type: "hurdle", distance: "2m90y",
          going: "Soft", runners: 10, source: "full", status: "settled", grade: "held", errors: [],
          notes: "Four hurdle debutants on soft; ground expected to worsen. Borora Aura (front-runner, won on soft to heavy, carries 10-0) the outsider if it turns heavy. RESULT: Sharkeyboy won (8/13F); the hurdle-debut doubt was correctly overridden by his flat form and Mullins. Green Soul (soft-stamina doubt flagged) 5th, well beaten; Wills History 9th. The flagged outsider Borora Aura ran 3rd (22/1).",
          winner: { horse: "Sharkeyboy", sp: "8/13", agentProb: 0.38 },
          writeup: "jumps/analyses/2026-10-26_galway/1342_quinnbet-3yo-maiden-hurdle.md", updated: "07:54 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Sharkeyboy", prob: 0.38, finish: "1", sp: "8/13", confidence: "medium",
              reason: "Flat OR 84-88, joint-best in the field; neck 2nd over 1m4f at Galway and beat Hello Garda (now hurdle OR 103) 13L; Mullins hurdling debutants 36%.",
              against: "Hurdle debut, never raced on soft, 0 from 6 on the flat and headed late in two narrow defeats." },
            { rank: 2, horse: "Green Soul", prob: 0.24, finish: "5", sp: "11/4", confidence: "medium",
              reason: "Clean hurdle round when 4th at Cork after 379 days off, staying on; top RPR/TS on the card; has run on soft.",
              against: "Cork form unfranked; best flat form at 5.5f-1m, so 2m on soft up Galway's climb is a stamina question." },
            { rank: 3, horse: "Wills History", prob: 0.09, finish: "9", sp: "66/1", confidence: "low",
              reason: "Collateral puts him 5-12lb behind Green Soul at level weights and he gets 7lb today; no jumping error on debut.",
              against: "Faded from 2 out on his only start, unexplained NR at Cork on 11 Oct, inexperienced 7lb claimer." }
          ]
        },
        {
          time: "14:12", name: "Connolly's RED MILLS Irish EBF Auction & Median Maiden Hurdle", type: "hurdle", distance: "2m90y",
          going: "Soft", runners: 11, source: "full", status: "settled", grade: "mixed", errors: [],
          notes: "Gap-fill pass (Update 07:58) put Give It A Crack top (0.21 -> 0.26) over Coolishael (0.28 -> 0.24) after her heavy-ground point 2nd was verified; Missouri Snow replaced Jury Time as the danger. Five hurdle debutants. RESULT: Winner If You Believe was our 3rd pick (11/4) on its proven-soft angle; Coolishael 2nd (2/1F), danger Missouri Snow 3rd (7/1), top pick Give It A Crack 4th (3/1). All four named runners filled the first four places, but the gap-fill promotion of Give It A Crack over Coolishael was backwards.",
          winner: { horse: "If You Believe", sp: "11/4", agentProb: 0.19 },
          writeup: "jumps/analyses/2026-10-26_galway/1412_irish-ebf-auction-median-maiden-hurdle.md", updated: "07:58 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Give It A Crack", prob: 0.26, finish: "4", sp: "3/1", confidence: "medium",
              reason: "About level with Coolishael at today's weights on the Listowel head-to-head (beaten 5L, 5lb better off now); 2nd on heavy over 3m in a mares' point; De Bromhead 9 NH wins from 34.",
              against: "One hurdle run only, 5lb claimer replaces O'Keeffe, ATR noted mistakes and greenness at Listowel, no frank for that race." },
            { rank: 2, horse: "Coolishael", prob: 0.24, finish: "2", sp: "2/1", confidence: "medium",
              reason: "Deepest Rules form: gave the Listowel winner 16lb and was beaten 1L; beaten 8.5L at level weights by Lizzie Twigg (since Listed winner, 127-128); three clean hurdle rounds.",
              against: "No soft or heavy form found in any code, still a maiden (beaten at 8/15 at Ballinrobe), 'no extra' in 2 of 3 hurdle runs, yard 1 NH win from 29." },
            { rank: 3, horse: "If You Believe", prob: 0.19, finish: "1", sp: "11/4", confidence: "low",
              reason: "Proven on soft: Clonmel 4th carrying 6lb more than the first two is worth about the low 110s; Cromwell and Donoghue won twice here yesterday.",
              against: "Off 354 days for an unknown reason; Cromwell's 300+ day returners in the sample unplaced; not fluent twice in his only hurdle run." },
            { rank: 4, horse: "Missouri Snow", prob: 0.10, finish: "3", sp: "7/1", confidence: "low", danger: true,
              reason: "Point winner on soft to heavy, bumper winner and Listed 3rd; gets 12lb from the geldings and races prominently.",
              against: "Hurdle debut, and beaten 15L in the Listed bumper." }
          ]
        },
        {
          time: "14:45", name: "Corrib Oil Maiden Hurdle", type: "hurdle", distance: "2m90y",
          going: "Soft", runners: 19, source: "full", status: "settled", grade: "held", errors: [],
          notes: "Fergy Five NR; reserve What About Max has no rider and is withdrawn automatically if none is named by 11:00 (re-check). Gap-fill pass cut Boycetown 0.42 -> 0.36 for hurdle debut in a 19-runner soft field (Cromwell hurdle debutants 0 from 11 in the sample). RESULT: 2nd pick Thinkitdontjinxit won (3/1) by 11L; its can-lead / soft-point reasoning held. Top pick Boycetown only dead-heated 3rd (10/11F, btn ~12.5L) - the gap-fill downgrade for the hurdle debut and ground was right. King Idaho 13th; danger This Songisforyou 10th.",
          winner: { horse: "Thinkitdontjinxit", sp: "3/1", agentProb: 0.15 },
          writeup: "jumps/analyses/2026-10-26_galway/1445_corrib-oil-maiden-hurdle.md", updated: "07:59 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Boycetown", prob: 0.36, finish: "3", sp: "10/11", confidence: "medium",
              reason: "About a stone clear on form: 4th in the Cheltenham Champion Bumper and 3rd beaten 2.5L in the Punchestown G1; proven on soft to heavy; completed a 3m point; prominent style suits the course.",
              against: "Hurdle debut in a 19-runner field on soft; Cromwell hurdle debutants 0 from 11 in the sample; ran green and hung right in bumpers; 180 days off." },
            { rank: 2, horse: "Thinkitdontjinxit", prob: 0.15, finish: "1", sp: "3/1", confidence: "low",
              reason: "Won his 3m point on soft by 8L, 2nd beaten 1.5L on soft at Thurles; was withdrawn at Limerick for the ground, so here for it; can lead.",
              against: "About a stone below Boycetown, beaten 52.5L last time, Elliott debutants 0 from 6 in the sample." },
            { rank: 3, horse: "King Idaho", prob: 0.09, finish: "13", sp: "14/1", confidence: "low",
              reason: "6th, beaten about 8.5L, in a strongly franked heavy-ground Naas bumper (2nd Simply Natural won here yesterday; 3rd now rated 118); Byrnes yard in form.",
              against: "One run, 315 days off, hurdle debut, held up against a front-running bias." },
            { rank: 4, horse: "This Songisforyou", prob: 0.07, finish: "10", sp: "9/1", confidence: "low", danger: true,
              reason: "Flat 96-100 class and fit.",
              against: "Jumping errors in 3 of 3 hurdle runs." }
          ]
        },
        {
          time: "15:20", name: "W.B. Gavin & Co. Handicap Hurdle", type: "hurdle", distance: "2m5f200y",
          going: "Soft", runners: 14, source: "full", status: "settled", grade: "held", errors: [],
          notes: "Open 14-runner soft handicap; picks plus danger 0.50. Prophet's Corner (front-runner, off 115 after claim) the closest outsider. One Big Boum's blinkers, worn for his 24L Fairyhouse win, are left off. RESULT: Top pick Stumptown won (7/1), a correctly-rated outsider (0.16 vs ~12.5% implied) - the chase-form-worth-145 angle held. 2nd pick Open Secret withdrawn (unsuitable ground; 12 ran). Danger Teed Up 4th (7/2F); One Big Boum 9th (blinkers off).",
          winner: { horse: "Stumptown", sp: "7/1", agentProb: 0.16 },
          writeup: "jumps/analyses/2026-10-26_galway/1520_wb-gavin-handicap-hurdle.md", updated: "08:00 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Stumptown", prob: 0.16, finish: "1", sp: "7/1", confidence: "medium",
              reason: "Hurdle mark 127 against chase form worth about 145 (3rd off 147 at Cheltenham, beaten 1.7L giving the winner 17lb) and a 5L win off 142 on heavy; won twice after long breaks; Cromwell 6/26 over jumps this month.",
              against: "No hurdle run since 2022 (off 117), may lack hurdle speed at 2m5f, could be a cross-country prep, 229 days off." },
            { rank: 2, horse: "Open Secret", prob: 0.13, finish: "NR", sp: "-", confidence: "low",
              reason: "Best three hurdle runs all on soft or soft-heavy, including a 0.75L G3 2nd worth about 130 against a mark of 127; completed all 7 hurdle starts and had a Flat run 28 days ago.",
              against: "Beaten 16.6L and 26.5L in his only two handicaps; longest trip yet." },
            { rank: 3, horse: "One Big Boum", prob: 0.12, finish: "9", sp: "22/1", confidence: "low",
              reason: "All four hurdle wins on soft or heavy, including a 24L heavy-ground win at Fairyhouse; likely leader.",
              against: "Blinkers off (reason not found) after winning in them; up 21lb since January; untested beyond 2m4f50y at this level." },
            { rank: 4, horse: "Teed Up", prob: 0.09, finish: "4", sp: "7/2", confidence: "low", danger: true,
              reason: "Six Galway wins, the most in the field; August Galway 3rd franked by Castleheath winning here yesterday; off 114 after the claim.",
              against: "Beaten 64L and 66L on both soft/heavy hurdle runs this year." }
          ]
        },
        {
          time: "15:55", name: "COLM QUINN BMW Handicap Hurdle (0-100)", type: "hurdle", distance: "3m",
          going: "Soft", runners: 20, source: "full", status: "settled", grade: "held", errors: [],
          notes: "20-runner 0-100 handicap on soft, wide open (picks 0.38 combined). Reserve Good World (R21) would carry 11-7. More rain helps Roc My Haarth and Imperial Tune. RESULT: Top pick Moonshine Girl won (12/1) by 13L, a correctly-rated outsider (0.16 vs ~7.7% implied) - the progressive-profile / C&D-win angle held. 2nd pick Roc My Haarth placed 4th (4/1). Lake Okeechobee 6th; danger Grace Faraday pulled up (13/2), the 0-from-9 soft/heavy-handicap doubt held. 19 ran.",
          winner: { horse: "Moonshine Girl", sp: "12/1", agentProb: 0.16 },
          writeup: "jumps/analyses/2026-10-26_galway/1555_colm-quinn-bmw-handicap-hurdle.md", updated: "07:55 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Moonshine Girl", prob: 0.16, finish: "1", sp: "12/1", confidence: "medium",
              reason: "Progressive (75 in May to 93); won over course and distance by 12L on 7 Sep (2nd won next time) and about 1lb better off with Grace Faraday than when 1/2L behind her on 6 Oct.",
              against: "Career-high mark, true 3m on soft unproven, first-time visor replaces the blinkers she won in, 1 win from 20 over hurdles." },
            { rank: 2, horse: "Roc My Haarth", prob: 0.13, finish: "4", sp: "4/1", confidence: "low",
              reason: "Best soft/heavy staying form among those rated 90+: 2nd over 3m on heavy at Limerick (beat Grace Faraday 18.5L), races prominently.",
              against: "0 from 15 over hurdles, last two runs poor, beaten 37L and 18L on heavy before and has unseated." },
            { rank: 3, horse: "Lake Okeechobee", prob: 0.09, finish: "6", sp: "10/1", confidence: "low",
              reason: "Carries 10-1 after a 5lb claim; improving (3rd at Listowel staying on) and completed all 9 starts.",
              against: "Maiden, never beyond 2m6f, needs a personal best; yard 1 win in its last 50 runs." },
            { rank: 4, horse: "Grace Faraday", prob: 0.08, finish: "PU", sp: "13/2", confidence: "low", danger: true,
              reason: "Best course form: won this race last year, won here 7 Sep, 2nd here 6 Oct.",
              against: "0 from 9 in soft/heavy hurdle handicaps and on a career-high 100." }
          ]
        },
        {
          time: "16:32", name: "Electric Galway (C & G) (Pro/Am) INH Flat Race", type: "bumper", distance: "2m90y",
          going: "Soft", runners: 9, source: "full", status: "settled", grade: "mixed", errors: [],
          notes: "Six of nine carry 11-3 with 7lb claims; Evans Wishes, Here's Jim and Marble Hill carry 11-10. Three unraced (Here's Jim capped by rule E). If heavy is declared, Todo Bien moves to top (about 0.28) and Ballyadam Star 2nd (about 0.22). RESULT: 2nd pick Todo Bien - the only proven soft/heavy runner - was withdrawn for unsuitable ground (7 ran), removing the form anchor. Winner Rockonfamouslee (16/1) was the 'strongest outsider' we identified but cut to 0.06 on a 0-40 trainer bumper record; we priced it near its SP. Top pick Ballyadam Star (11/8F, unproven on soft) 5th of 7; 3rd pick Marble Hill placed 3rd (2/1). Favourite was correctly tempered below the market (0.26 vs ~42% implied) but left on top after the ground NR.",
          winner: { horse: "Rockonfamouslee", sp: "16/1", agentProb: 0.06 },
          writeup: "jumps/analyses/2026-10-26_galway/1632_electric-galway-pro-am-flat-race.md", updated: "08:10 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Ballyadam Star", prob: 0.26, finish: "5", sp: "11/8", confidence: "medium",
              reason: "5th of 18 in the Punchestown festival 4yo bumper, beaten about 6L (3L behind Teofil, who has won 3 since); keeps his 7lb claim and gets 7lb from Marble Hill.",
              against: "Never run on soft, Flat dam line, the Punchestown race was slowly run and Galway's 2f uphill finish tests stamina; off 181 days." },
            { rank: 2, horse: "Todo Bien", prob: 0.25, finish: "NR", sp: "-", confidence: "low",
              reason: "Only runner with soft or heavy form: 3rd at Naas, 2 1/4L behind Apache Peak (later Listed 3rd); races prominently, Elliott 20% in bumpers, carries 11-3.",
              against: "'No extra' late in both runs, best run in a 5-runner race, off 175 days." },
            { rank: 3, horse: "Marble Hill", prob: 0.19, finish: "3", sp: "2/1", confidence: "low",
              reason: "Beaten 1 1/4L by Gillane (since won a 17-runner maiden hurdle) and 6L clear of the 3rd; French jumps pedigree, Cromwell in form.",
              against: "Carries 11-10 with no claim, 13lb more than at Bellewstown, giving 7lb to both picks above; never run on soft; off 191 days." }
          ]
        }
      ]
    },
    {
      date: "2026-10-27",
      course: "Newcastle",
      country: "GB",
      code: "jumps",
      playbook: "jumps/AGENTS-jumps.md",
      going: "Good (Good to Soft in places)",
      dataErrors: [
        "Session rate limit (reset 12:40 UTC) cut short the gap-filling pass for every race; picks recorded from the first-pass analyses. ATR course guide + Smart Stats bot-blocked all day."
      ],
      races: [
        {
          time: "12:56", name: "Border Minstrel Dog Friendly Pub Maiden Hurdle (GBB Race)", type: "hurdle", distance: "2m190y",
          going: "Good (Good to Soft in places)", runners: 6, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "Maiden hurdle, no OR. Both principals are hurdle debutants from a bumper background, so ~a third of the book stays with the field. Champagne Powder (7lb claim) and Captain Ted are the only two with hurdle experience. GAP PASS CUT SHORT by the session rate limit.",
          winner: null,
          writeup: "jumps/analyses/2026-10-27_newcastle/1256_maiden-hurdle.md", updated: "12:43 Tue 27 Oct",
          picks: [
            { rank: 1, horse: "Wilde's Legacy", prob: 0.37, finish: "-", confidence: "medium",
              reason: "Strongest bumper form (dual winner with Grade 1 Champion Bumper exposure); strong-finishing style suits Newcastle's stiff uphill; in-form Snowden/Sheehan.",
              against: "Hurdle debut (jumping unproven), 230 days off, the key win only weakly franked." },
            { rank: 2, horse: "My Mate Aj", prob: 0.30, finish: "-", confidence: "medium",
              reason: "Won an 11-runner maiden bumper making all; beat Sky Grove who then won a C4 hurdle (franked); likely the lone front-runner = pace edge on the stiff track; jumping-bred.",
              against: "Hurdle debut, keen-goer, modest Lingfield run, 194 days off." },
            { rank: 3, horse: "Champagne Powder", prob: 0.14, finish: "-", confidence: "low", danger: true,
              reason: "Only runner besides Captain Ted with hurdle experience; 4yo weight-for-age pull plus a 7lb claim (Noreci) and first-time hood to help her settle; race-fit to punish raggedness from the two debutants.",
              against: "Hurdle form is two well-beaten 5ths and she didn't get home over 17f." }
          ]
        },
        {
          time: "13:26", name: "Mini Golf At High Gosforth Park Novices' Handicap Chase", type: "chase", distance: "3m",
          going: "Good (Good to Soft in places)", runners: 5, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "3m novices' handicap chase on a stiff track. Non-runners: Wannabe, Wearelongterm, Jet Light. Charlie Maggs (Thereyare) still claims (rode Luminaries in a conditionals' race LTO) — if it applies, Thereyare carries a few lb less than the listed 11-9. GAP PASS CUT SHORT by the session rate limit.",
          winner: null,
          writeup: "jumps/analyses/2026-10-27_newcastle/1326_novices-handicap-chase.md", updated: "12:48 Tue 27 Oct",
          picks: [
            { rank: 1, horse: "Royal Time", prob: 0.36, finish: "-", confidence: "medium",
              reason: "Only runner with current chase-winning form and a sound jumping record (10/11 chase completions, the 'U' a hamper); won LTO 9 days ago unpenalised; prominent style suits.",
              against: "Best at 2m4f-2m7f, one-paced at 3m+; up in trip on a stiff track, amateur rider, top weight." },
            { rank: 2, horse: "Luminaries", prob: 0.30, finish: "-", confidence: "medium",
              reason: "Red-hot (won last 2 in blinkers over hurdles), well treated over fences (chase OR 82 vs 89-96 in 2025), proven 3m stayer on good, Newcastle course form.",
              against: "0-from-4 over fences with 2 PU; his one 3m chase start was a PU, 'not fluent' x3 — a recorded chase-jumping doubt; the surge is over hurdles, not fences." },
            { rank: 3, horse: "Thereyare", prob: 0.17, finish: "-", confidence: "low", danger: true,
              reason: "Won LTO (2m7f hurdle), point background, strong staying pedigree (Jet Away), progressive 5yo from a good yard; Maggs's claim may net him below 11-9.",
              against: "Chase debutant (jumping cap) and 220 days off; unproven at 3m and over fences." }
          ]
        },
        {
          time: "14:01", name: "High Gosforth Park Golf Club Handicap Hurdle", type: "hurdle", distance: "2m190y",
          going: "Good (Good to Soft in places)", runners: 10, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "10-runner Class-5 handicap hurdle; top pick held to 0.26 (field size + completion risk). Non-runner: Alidam. Joshua Thompson's 5lb claim already in National Question's effective weight; Charlie Maggs's claim on Cawthorne Cracker unresolved (assumed none, conservative). GAP PASS CUT SHORT by the session rate limit.",
          winner: null,
          writeup: "jumps/analyses/2026-10-27_newcastle/1401_handicap-hurdle.md", updated: "12:48 Tue 27 Oct",
          picks: [
            { rank: 1, horse: "National Question", prob: 0.26, finish: "-", confidence: "medium",
              reason: "Won this exact race in 2025 and 2nd in 2024; completes every start (34/34); returns fresh (136 days), the same pattern as last year's fresh win; 5lb claim nets him to ~OR 81.",
              against: "Rated 13lb higher than last year's win mark (73) and below par on both spring runs; the Carlisle frank is asserted." },
            { rank: 2, horse: "Cawthorne Cracker", prob: 0.22, finish: "-", confidence: "medium",
              reason: "In-form and consistent (2nd-1st-2nd last three) over 2m-2m4f on good; placed here (3rd 2024, 5th 2025) at this C&D; last six all completed.",
              against: "Exposed veteran near his ceiling (won off 79 in Sept, now 84); older record carries 2 falls/2 PUs; Maggs claim unresolved." },
            { rank: 3, horse: "Thesoldiersminit", prob: 0.11, finish: "-", confidence: "low",
              reason: "Progressive 5yo, improved to 4th of 10 off 88 at Worcester three weeks ago; Powell booked; jumps left, less penalised at left-handed Newcastle.",
              against: "Winless over hurdles (0/7) with a recurring left-jumping flaw and fades late — a recorded jumping doubt caps him." },
            { rank: 4, horse: "Nobotheratall", prob: 0.08, finish: "-", confidence: "low", danger: true,
              reason: "Best on official figures (was 2nd in a Class 3 off 110) and 10lb lower now.",
              against: "Out of form (4-7-9-8 since), top weight 12-0, a confirmed front-runner who weakens — the stiff uphill finish is where a fading leader gets swallowed." }
          ]
        },
        {
          time: "14:31", name: "Sunday Lunch At The Border Minstrel Novices' Limited Handicap Chase (GBB Race)", type: "chase", distance: "3m",
          going: "Good (Good to Soft in places)", runners: 4, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "4-runner 3m novices' limited handicap chase; 3 of 4 are chase debutants, so shared jumping/completion risk caps the top pick under 50%. Non-runner: Dunkerque. No jockey claims apply. GAP PASS CUT SHORT by the session rate limit.",
          winner: null,
          writeup: "jumps/analyses/2026-10-27_newcastle/1431_novices-limited-handicap-chase.md", updated: "12:48 Tue 27 Oct",
          picks: [
            { rank: 1, horse: "Kent De Thaix", prob: 0.37, finish: "-", confidence: "medium",
              reason: "Proven 3m stamina (won 3m Wetherby beating American Mike (OR135) off 16lb; 6th/15 off 123 at 3m Ayr); point-to-point fence background de-risks the chase debut; wind op + first-time tongue strap.",
              against: "Fences unproven in public (point background asserted), top weight, 193-day layoff; if Silver Hill jumps he may be the better horse." },
            { rank: 2, horse: "Silver Hill", prob: 0.33, finish: "-", confidence: "medium",
              reason: "Most progressive/classy on hurdle form; hot Snowden yard + Sheehan; Newcastle course form (2nd of 12).",
              against: "Two unproven questions at once — never jumped a fence and never beyond 2m4f (3m asserted) — plus 223 days off and a hold-up style on a stiff galloping track." },
            { rank: 3, horse: "Sleedagh", prob: 0.17, finish: "-", confidence: "low", danger: true,
              reason: "The only completed chaser in the field, proven ~3m stamina, dropping to OR 114, fit (33 days); place chance if the debutants jump raggedly.",
              against: "Winless in 8, one-paced, tailed off on chase debut." }
          ]
        },
        {
          time: "15:01", name: "Dogs Welcome At The Border Minstrel Pub Handicap Hurdle", type: "hurdle", distance: "2m190y",
          going: "Good (Good to Soft in places)", runners: 6, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "6-runner Class-4 handicap hurdle. No jockey claims apply; three mares but no mares' allowance in a handicap. A front-running duel (Max Of Stars, Jentobello) up a stiff uphill 2m favours the staying closers. GAP PASS CUT SHORT by the session rate limit.",
          winner: null,
          writeup: "jumps/analyses/2026-10-27_newcastle/1501_handicap-hurdle.md", updated: "12:48 Tue 27 Oct",
          picks: [
            { rank: 1, horse: "North Of Richmond", prob: 0.27, finish: "-", confidence: "medium",
              reason: "Class-3 novice form above a Class 4 off 114 (1lb below last mark); beat Codetalker on hurdle debut; wins fresh (won after a ~10.5-month break before), answering the 242-day layoff; Woods booked.",
              against: "12-0 top weight up a stiff hill after 8 months; his only handicap start was a PU; part of the 'well-in' rests on an unverified Codetalker mark." },
            { rank: 2, horse: "Jentobello", prob: 0.25, finish: "-", confidence: "medium",
              reason: "Most reliable in the race — placed 5 of 6, completed all 6, 2nd in a 10-runner C4 off this mark, won LTO; champion jockey Hughes; the trip drop to a stiff 2m may help him finish.",
              against: "No run at 2m in his last six — a sharp trip drop, early speed unproven; his recent win was a weak 3-runner race." },
            { rank: 3, horse: "Roarin' Success", prob: 0.21, finish: "-", confidence: "medium",
              reason: "In-form, honest, the race's safest completer (6/6); proven at trip, stays and closes to suit a strong-pace stiff 2m; 11lb from top weight; McCain/McMenamin in good order.",
              against: "Running to her mark not ahead of it, and no Class-4 win — a strong place candidate more than a proven winner." },
            { rank: 4, horse: "Hunters Spring", prob: 0.13, finish: "-", confidence: "low", danger: true,
              reason: "Only runner with Newcastle 2m190y form in its last six; bottom weight getting weight from all; better-than-looks last run (3rd of 10, btn 1/2, off 99).",
              against: "Modest (no win in last six), a jumping unseat in the last six, unproven as a winner at this level." }
          ]
        },
        {
          time: "15:31", name: "attheraces.com/marketmovers Handicap Chase (GBB Race)", type: "chase", distance: "2m4f19y",
          going: "Good (Good to Soft in places)", runners: 6, source: "full", status: "pending", grade: "pending", errors: [],
          notes: "6-runner Class-4 handicap chase. Non-runners: My Friend Sean, Humble Jumble. Only Aill Dubh carries a claim (Joshua Thompson 5lb, netting him to ~9-11) and he is ~7lb 'out of the handicap'. GAP PASS CUT SHORT by the session rate limit.",
          winner: null,
          writeup: "jumps/analyses/2026-10-27_newcastle/1531_handicap-chase.md", updated: "12:48 Tue 27 Oct",
          picks: [
            { rank: 1, horse: "Empty Nest", prob: 0.34, finish: "-", confidence: "medium",
              reason: "Best course-and-distance form (Newcastle 2m4f19y: 1-2-2-3); no fall/unseat in a 23-run career; now 2-4lb below his C&D winning/placing marks; stable no.1 jockey takes him over the stablemate.",
              against: "199 days off and one prior below-par seasonal return — may need the run." },
            { rank: 2, horse: "Aill Dubh", prob: 0.21, finish: "-", confidence: "medium", danger: true,
              reason: "In form (2 wins in 2026, 6 straight completions since March), course winner, good ground ideal, stiff stamina track suits; 5lb claim nets him to the lightest weight.",
              against: "Actually ~7lb out of the handicap (races above his winning marks); trip drop to his sharpest since a winter slump; may duel for the lead." },
            { rank: 3, horse: "Rule Me In", prob: 0.17, finish: "-", confidence: "low",
              reason: "Mark collapsed 107 to 86; 2nd LTO in cheekpieces (39 days); hot travelling yard.",
              against: "0-8 over fences with chronic jumping errors (a bad mistake nearly every start); must quicken late over fences on a stiff track — exactly his error scenario." }
          ]
        }
      ]
    }
  ]
});
