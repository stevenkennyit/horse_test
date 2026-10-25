// AI agent picks and results: FLAT. One object per meeting.
// Loaded by ../../dashboard.html alongside jumps/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Same schema as jumps/data/results.js (see the field notes there): picks with prob, finish and sp; no bets. Add a meeting object to `meetings`
// after each race day; set `status: "pending"` until the result is in.
// Error codes share one list with jumps: reuse an existing code if it fits, otherwise add a new letter here.

(function (data) {
  const D = (window.AGENT_DATA = window.AGENT_DATA || { errorTypes: {}, meetings: [
    {
      date: "2026-10-26",
      course: "Kempton",
      country: "GB",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Polytrack: Standard to Slow",
      dataErrors: [],
      races: [
        {
          time: "16:10", name: "Unibet's New VAR Goal Guarantee Novice Stakes (GBB Race)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 9, source: "full", status: "pending",
          picks: [
            { rank: 1, horse: "Divine Symmetry", prob: 0.38, price: "6/5", finish: "-" },
            { rank: 2, horse: "Imperial Ballet", prob: 0.35, price: "5/4", finish: "-" },
            { rank: 3, horse: "Al Mandoos", prob: 0.14, price: "7/2", finish: "-" },
            { rank: 4, horse: "Virtue King", prob: 0.04, price: "22/1", finish: "-" }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Top two level on collateral (Talking Bear) and ratings; Divine Symmetry preferred on franked form, 2lb receipt and stall 1. No bet at 17:14 prices (value lines 13/8 and 15/8).",
          bets: [
            { bet: "Divine Symmetry win, only at 13/8 or bigger (not triggered at 6/5)", stake: 0, returned: null }
          ]
        }
      ]
    }
  ] });
  Object.assign(D.errorTypes, data.errorTypes || {});
  D.meetings.push(...data.meetings);
})({
  errorTypes: {},
  meetings: [
    {
      date: "2026-10-26",
      course: "Kempton",
      country: "GB",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Polytrack: Standard to Slow",
      dataErrors: [],
      races: [
        {
          time: "16:10", name: "Unibet's New VAR Goal Guarantee Novice Stakes (GBB Race)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 9, source: "full", status: "pending",
          picks: [
            { rank: 1, horse: "Divine Symmetry", prob: 0.38, price: "6/5", finish: "-" },
            { rank: 2, horse: "Imperial Ballet", prob: 0.35, price: "5/4", finish: "-" },
            { rank: 3, horse: "Al Mandoos", prob: 0.14, price: "7/2", finish: "-" },
            { rank: 4, horse: "Virtue King", prob: 0.04, price: "22/1", finish: "-" }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Top two level on collateral (Talking Bear) and ratings; Divine Symmetry preferred on franked form, 2lb receipt and stall 1. No bet at 17:14 prices (value lines 13/8 and 15/8).",
          bets: [
            { bet: "Divine Symmetry win, only at 13/8 or bigger (not triggered at 6/5)", stake: 0, returned: null }
          ]
        }
      ]
    }
  ]
});
