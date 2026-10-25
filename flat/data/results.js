// AI agent picks and results: FLAT. One object per meeting.
// Loaded by ../../dashboard.html alongside jumps/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Same schema as jumps/data/results.js (see the field notes there): picks with prob, finish and sp; no bets. Add a meeting object to `meetings`
// after each race day; set `status: "pending"` until the result is in.
// Error codes share one list with jumps: reuse an existing code if it fits, otherwise add a new letter here.

(function (data) {
  const D = (window.AGENT_DATA = window.AGENT_DATA || { errorTypes: {}, meetings: [] });
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
            { rank: 1, horse: "Divine Symmetry", prob: 0.38, finish: "-" },
            { rank: 2, horse: "Imperial Ballet", prob: 0.37, finish: "-" },
            { rank: 3, horse: "Al Mandoos", prob: 0.10, finish: "-" },
            { rank: 4, horse: "Virtue King", prob: 0.05, finish: "-" }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 17:35 25 Oct. Top two level on exact Talking Bear margins; Divine Symmetry narrowly preferred on RP figures (75 v 72, +2lb) and a strong frank (Grow Old With Me RPR 88 next time). Own Kempton 7f novice count: draw neutral, held-up horses rarely win (his only run was held up). bin Suroor newcomers 0/11 since May."
        }
      ]
    }
  ]
});
