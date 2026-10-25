---
name: review
description: Review a meeting that has already been analysed - pull the official results, judge the reasoning against them, update the results data and race write-ups, and propose new playbook rules. Use after racing, e.g. "/review Galway 2026-10-25".
argument-hint: <course> [YYYY-MM-DD]
---

# Review

Arguments: `$ARGUMENTS` — course and date (default today).

1. **Find the meeting** in `jumps/data/results.js` or `flat/data/results.js` and list its races and their status. If it isn't there, say so and stop.

2. **Pull each result** from the Sporting Life result page. If in-running comments are missing, use the Racing Post result page. A result that isn't weighed in, or has no comments yet, is marked `provisional: true`.

3. **Follow the playbook's Post-race review** (`jumps/AGENTS-jumps.md` or `flat/AGENTS-flat-v2.md`) for every race:
   - Table each pick: rank, finish, beaten distance, SP, and whether the reasoning held.
   - Separate data errors from judgement errors; give each judgement error a code from `errorTypes`, adding a new letter for a new type.
   - Name what held and what failed, including sound picks that lost and wrong picks that won.

4. **Update the record:**
   - In the results file: every pick's `finish` and `sp` (starting price), `winner` (`agentProb` = the probability stated before the off, or `null` if the winner wasn't rated), `status`, `grade`, `errors`, `notes`, and the meeting's `dataErrors`. Don't change picks or probabilities.
   - Append a `## Result` section to each race's write-up.

5. **Propose rules, don't apply them yet.** Draft one rule per new judgement error, naming the playbook step it belongs to. Show the drafts and the review summary; add them, and the review entry in the playbook's Post-race review section, only after the user agrees.

6. **Report** the results table and the headline figures for this meeting (top pick won, second pick won, the pick score, 1pt win on the top pick at SP), and point the user to `dashboard.html`.
