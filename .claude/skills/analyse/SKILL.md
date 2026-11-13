---
name: analyse
description: Analyse a UK or Irish horse race, or a whole card, using the right playbook (jumps or flat); save the write-up and log the Win/Each-Way/Danger selections before the off. Use when the user asks to analyse, preview or pick a race or meeting, e.g. "/analyse Galway 14:50" or "/analyse Kempton".
argument-hint: <course> [HH:MM] [YYYY-MM-DD]
---

# Analyse

Arguments: `$ARGUMENTS` — course, optional off time, optional date (default today).

You are the **coordinator**. Your job is small: find the meeting's list of races, pick the playbook for each, spawn one `race-analyst` subagent per race, then record what comes back. **Do no form analysis yourself.** All race-specific thinking belongs inside the race-analyst's own context so the subagent's judgement is not anchored by anything you've already decided. Never fork (fork inherits this conversation) — spawn `race-analyst`, which starts empty.

1. **Clock.** Check the current local time (`TZ=Europe/London date` or `TZ=Europe/Dublin date`).

2. **List the races.** Open the Racing Post or Sporting Life racecards page for the meeting and the date. Extract **only the card header for each race** — enough to pick the playbook and label the write-up:
   - off time (HHMM)
   - race name
   - race type (hurdle / chase / NH flat / flat / all-weather)
   - class and distance
   - field size (runner count)

   No runner names, no going research, no Smart Stats, no pace notes, no trainer/jockey facts. Say how long is left to each off; skip any race already run and say so.

3. **Pick the playbook per race** (see `CLAUDE.md`): hurdle, chase or NH flat race → `jumps/AGENTS-jumps.md`; otherwise `flat/AGENTS-flat-v2.md`.

4. **Spawn one `race-analyst` per race**, in the background, in off-time order; run them in parallel so later races still finish before their off. Each prompt is minimal and carries **only** metadata the subagent could not otherwise disambiguate from the course and date, prefaced by the evaluation framing:

   ```
   You are being evaluated. Your Win, Each-Way and Danger selections will be
   scored against the actual result after the race (see the playbook's "How
   picks are scored"). Collect and analyse every piece of data the playbook
   calls for before issuing them — shortcuts show up in the score.

   course: <course>
   date: <YYYY-MM-DD>
   off (local): <HH:MM>
   race name: <name>
   race type: <hurdle|chase|NH flat|flat|all-weather>
   class: <class> | distance: <distance> | field size: <N>
   playbook: <jumps|flat> (<path>)
   write-up path: <code>/analyses/<YYYY-MM-DD>_<course>/<HHMM>_<race-slug>.md
   now (local): <HH:MM>
   deadline (first pass): off − 15 min = <HH:MM>
   ```

   No runner list, no going, no "key runners", no pace shape, no priors. The subagent gathers all of that itself — that is its job. Pass the framing paragraph verbatim; it is what makes the subagent treat the task as evaluated, not advisory.

5. **Gap-filling pass — required for every race.** When a race-analyst returns its first report, send it (SendMessage to the same agent, so it keeps that race's context) exactly:

   > **Go fill data gaps and read data entirely.** Work through every gap, asserted and not-found claim in your report, re-open and read in full every page you only skimmed, re-run the Late-task verification checkpoint and Pre-send checklist, then update the write-up and report again.

   Include the time left to the off. Don't record a race until its gap-filling report is back, unless the off is too close (then record the first report, and say the gap pass was cut short).

6. **Check before recording.** For each final report: the write-up exists on disk with every required section; every runner is in the summary grid and outsider check; claims are accounted for; probabilities are sensible; unverified items are listed. Spot-check two of its key sources. Send it back with the specific problem if anything fails.

7. **Record before the off.** You alone write `<code>/data/results.js` (race-analysts never touch it). This live file holds only meetings with a race still `pending` — settled ones live in `<code>/data/results-archive.js`, which `/review` manages — so you read and append just the small live file here:
   - Add the race with `status: "pending"`, creating the meeting object if needed. Fill `writeup`, `updated`, and each pick's `confidence`, `reason` and `against`: `upcoming.html` shows them for review before the off.
   - Every race in the results file must have its write-up on disk; commit both together and push straight away after each race (see `CLAUDE.md`), so finished races survive while others are still running.
   - If the race is already recorded (a re-run or "recheck"), the race-analyst appends a `## Update HH:MM` section and you update the data entry — only before the off.

8. **Reply** with a compact table per race: the Win, the Each-Way (if any) and the Danger (if any), each with win chance, place chance, fair price, confidence and the key reason. Then an outsider worth noting and anything unverified. No bets, stakes or prices.

9. **Close** by offering a non-runner and going re-check closer to the off. For a recheck, message the same race-analyst (it keeps that race's context) with the time, and record its `## Update HH:MM`.
