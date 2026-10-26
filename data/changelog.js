// Playbook changelog: dated rule changes, shown on dashboard.html to spot whether a change moved performance.
// Loaded by ../dashboard.html. Each entry:
//   date   YYYY-MM-DD, the day the rule took effect (analyses from this date on used it)
//   scope  "both" | "flat" | "jumps" - which playbook(s) changed
//   title  short label
//   detail one or two sentences: what changed and why
// Add an entry whenever a /review run or a manual edit changes a playbook rule, so the before/after
// split on the dashboard stays meaningful.
(function (list) {
  window.AGENT_CHANGELOG = (window.AGENT_CHANGELOG || []).concat(list);
})([
  {
    date: "2026-10-25", scope: "jumps", title: "Galway review: five rules added",
    detail: "Judge the going record only at the horse's current level (Step 4); don't make a keen-goer the top pick in a weak pace (Step 9); a recorded jumping or temperament doubt caps the pick (Step 14); unraced bumper horses aren't rated over raced rivals on price, pedigree or booking (Step 15). Error types A, B, C, E."
  },
  {
    date: "2026-10-26", scope: "both", title: "Favourite-reliability calibration",
    detail: "Top-pick win probability is calibrated to field size and handicap status, not to class or race code. Clear standouts can hold 40%+ in small fields and non-handicaps; big-field handicaps (12+, especially 16+) cap the top pick near 25-30% with more probability spread across the field. Added to the ranking step of both playbooks."
  }
]);
