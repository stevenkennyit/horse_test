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
  },
  {
    date: "2026-10-27", scope: "both", title: "Win / Each-Way / Danger selection format",
    detail: "Output changed from 2-3 ranked picks + a danger to three named roles: a Win (most likely winner, scored as a win bet), an optional Each-Way (best each-way proposition on our own numbers, scored as an each-way bet), and an optional Danger (chief threat, not staked, coverage only). Every selection now also carries a place probability. Scoring and the dashboard are split by role so win skill and place/value skill are measured separately; legacy meetings map rank 1 -> Win, rank 2 -> Each-Way, danger -> Danger."
  },
  {
    date: "2026-11-01", scope: "flat", title: "Curragh review: placer-not-Win, class-over-course-form",
    detail: "A placer is never the Win (Step 5/13): a horse winless in its last 5+, a beaten favourite, or 0 wins for its current yard is an Each-Way at best (error K). Class over course form on a quick return (Step 12): don't rank a horse's course/C&D form above a rival's clearly superior current class when it returns within ~14 days of a hard Group race."
  }
]);
