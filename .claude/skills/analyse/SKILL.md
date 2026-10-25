---
name: analyse
description: Analyse a UK or Irish horse race, or a whole card, using the right playbook (jumps or flat); save the write-up and log the picks before the off. Use when the user asks to analyse, preview or pick a race or meeting, e.g. "/analyse Galway 14:50" or "/analyse Southwell".
argument-hint: <course> [HH:MM] [YYYY-MM-DD]
---

# Analyse

Arguments: `$ARGUMENTS` — course, optional off time, optional date (default today).

1. **Clock and card.** Check the current local time. Find the meeting on the Racing Post racecards page for the date and the Sporting Life racecard. No time given → the whole card, in off-time order. Say how long is left to each off; skip any race already run and say so.

2. **Pick the playbook** (see `CLAUDE.md`): hurdle, chase or NH flat race → `jumps/AGENTS-jumps.md`; otherwise `flat/AGENTS-flat-v2.md`. Read it in full before starting.

3. **Analyse every runner** by following the playbook's steps in order, including its rules from past reviews. Account for jockey claims. Give every runner the full treatment, not just the market leaders.

4. **Record before the off** (the playbook's "Record the analysis" step):
   - Write `<code>/analyses/<YYYY-MM-DD>_<course>/<HHMM>_<race-slug>.md` with all required sections.
   - Add the race to `<code>/data/results.js` with `status: "pending"`, creating the meeting object if needed.
   - The write-up file is required, not optional: a results entry without its write-up is an incomplete record. Before committing, check that every race added to the results file has its write-up on disk, and commit both together.
   - If the race is already recorded (a re-run or "recheck"), append a `## Update HH:MM` section and update the data entry — only before the off.

5. **Reply** with a compact table per race: 1st and 2nd pick, win chance, fair price, best price with the time checked, confidence, the key reason, and the bet (each-way only at 5/1+). Then outsiders worth a look and anything unverified.

6. **Close** by reminding the user that they place the bets, and offer a price, non-runner and going re-check closer to the off.
