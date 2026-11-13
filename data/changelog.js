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
    date: "2026-11-13", scope: "both", title: "Simpler prompts; coordinator delegates all data gathering",
    detail: "Reverted the prices-as-context expansion (11 Nov) and the placer-not-Win / class-over-course-form rules (1 Nov Curragh review): market and specific-case rules were bloating the prompt and tracking the 25 Oct baseline. Also restructured /analyse: the coordinator now does only clock + racecard listing + delegation, with no shared fact pack. Each race-analyst subagent gathers its own racecard, going, non-runners, field, pace/draw and Smart Stats for its one race — keeping race-specific reasoning inside its own context."
  }
]);
