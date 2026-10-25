// AI agent picks and results: JUMPS. One object per meeting.
// Loaded by ../../dashboard.html alongside flat/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Add a new meeting object to `meetings` after each race day; set `status: "pending"` until the result is in.
// The agent ranks picks only; it does not recommend bets or check prices. The user decides how to bet.
//
// Field notes
//   picks[].prob      agent's stated win probability (0-1) at analysis time (fair price = 1/prob, shown by the dashboard)
//   picks[].finish    official finishing position, or "F", "PU", "UR", "BD", "R"; "-" while pending
//   picks[].sp        starting price (fractional, e.g. "5/2", "Evens"), added at review from the result page
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
    }
  ]
});
