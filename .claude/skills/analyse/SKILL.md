---
name: analyse
description: Analyse a UK or Irish horse race, or a whole card, using the right playbook (jumps or flat); save the write-up and log the Win/Each-Way/Danger selections before the off. Use when the user asks to analyse, preview or pick a race or meeting, e.g. "/analyse Galway 14:50" or "/analyse Kempton".
argument-hint: <course> [HH:MM] [YYYY-MM-DD]
---

# Analyse

Arguments: `$ARGUMENTS` — course, optional off time, optional date (default today).

You are the **coordinator**: gather the meeting's shared facts, hand each race to its own `race-analyst` subagent, check what comes back, and record it. Each race gets a fresh, full context; keep your own context lean. Never fork (fork inherits this conversation) — spawn `race-analyst`, which starts empty, so give it everything it needs.

1. **Clock and card.** Check the current local time. Find the meeting on the Racing Post racecards page for the date and the Sporting Life racecard. No time given → the whole card, in off-time order. Say how long is left to each off; skip any race already run and say so.

2. **Pick the playbook for each race** (see `CLAUDE.md`): hurdle, chase or NH flat race → `jumps/AGENTS-jumps.md`; otherwise `flat/AGENTS-flat-v2.md`.

3. **Build the fact pack from three sources** (see `tools/README.md`; source priority is in the playbook's "Data sources"). Save files to `packs/<YYYY-MM-DD>_<course>/<HHMM>_*` (git-ignored). No tips or "key runners"; prices are context only (playbook "Prices as context"). Per race:
   - **Sporting Life:** `node tools/sl.js meetings <date> --uk` once for race IDs, then `node tools/sl.js pack <date> <slRaceId> --out packs/…/<HHMM>_sl.md` (card, full careers, computed C/D/CD/BF, market block).
   - **Racing Post (lead source for claims, weight carried, RPR/TS, comments):** in the built-in browser open the RP race page (meeting page `racingpost.com/racecards/<courseId>/<course>/<date>` gives the race IDs), run `tools/browser/rp-card.js` with `javascript_tool`, and save the returned text as `<HHMM>_rp.txt`.
   - **At The Races (pace):** open the ATR race page, run `tools/browser/atr-card.js`, save as `<HHMM>_atr.txt`.
   - **Cross-check:** `node tools/xcheck.js <date> <slRaceId> packs/…/<HHMM>_rp.txt > packs/…/<HHMM>_xcheck.txt`. Each disagreement goes into the fact pack; RP wins on the fields it leads, otherwise report a range.
   - If the browser is unavailable, say so, run SL only, and mark claims and RPR/TS as not verified.
   Meeting level, once:
   - Going by course (jumps: hurdle and chase tracks separately), with source and time checked; read the row under today's date. Weather, rail movements.
   - Course character and pace/draw bias (At The Races course guide, Geegeez).
   - At The Races Smart Stats for the meeting (pull early: it loads intermittently): trainer/jockey course records, hot/cold form, first-time headgear, stable switchers.
   - Per race (from the files above): off time, name, type, class, distance, field size, non-runners (RP/ATR and SL can differ: note each), and the full field — number, horse, age, weight as listed, claim (RP), weight after claim, OR, jockey, trainer, draw, headgear.
   - Results of races already run today (as bias evidence for later races).

4. **Spawn one `race-analyst` per race**, in the background, in off-time order; run them in parallel so later races still finish before their off. Each prompt includes: the paths of the race's four pack files (`_sl.md`, `_rp.txt`, `_atr.txt`, `_xcheck.txt`) plus the meeting-level notes, the playbook path and code, the write-up path to use, the current time, the off time and a deadline (the off minus 15 minutes for the first pass). Don't paste in the playbook or your own opinions.

5. **Gap-filling pass — required for every race.** When a race-analyst returns its first report, send it (SendMessage to the same agent, so it keeps that race's context) exactly:

   > **Go fill data gaps and read data entirely.** Work through every gap, asserted and not-found claim in your report, re-open and read in full every page you only skimmed, re-run the Late-task verification checkpoint and Pre-send checklist, then update the write-up and report again.

   Include the time left to the off. Don't record a race until its gap-filling report is back, unless the off is too close (then record the first report, and say the gap pass was cut short).

6. **Check before recording.** For each final report: the write-up exists on disk with every required section; every runner is in the summary grid and outsider check; claims are accounted for; probabilities are sensible; unverified items are listed. Spot-check two of its key sources. Send it back with the specific problem if anything fails.

7. **Record before the off.** You alone write `<code>/data/results.js` (race-analysts never touch it). This live file holds only meetings with a race still `pending` — settled ones live in `<code>/data/results-archive.js`, which `/review` manages — so you read and append just the small live file here:
   - Add the race with `status: "pending"`, creating the meeting object if needed. Fill `writeup`, `updated`, and each pick's `confidence`, `reason` and `against`: `upcoming.html` shows them for review before the off.
   - Every race in the results file must have its write-up on disk; commit both together and push straight away after each race (see `CLAUDE.md`), so finished races survive while others are still running.
   - If the race is already recorded (a re-run or "recheck"), the race-analyst appends a `## Update HH:MM` section and you update the data entry — only before the off.

8. **Reply** with a compact table per race: the Win, the Each-Way (if any) and the Danger (if any), each with win chance, place chance, fair price, confidence and the key reason. Add the price seen (and time) beside each pick, and record it as `price` / `priceAt`. Then an outsider worth noting and anything unverified. No bets or stakes.

9. **Close** by offering a non-runner and going re-check closer to the off. For a recheck, message the same race-analyst (it keeps that race's context) with the new non-runners and going, and record its `## Update HH:MM`.
