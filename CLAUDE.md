# Horse agent

Race analysis for UK and Irish racing. The playbooks hold the method; this file says where things live and the rules that apply to every task.

## Layout

| Path | What it is |
|---|---|
| `jumps/AGENTS-jumps.md` | Playbook for hurdles, chases and NH flat races (bumpers) |
| `flat/AGENTS-flat-v2.md` | Playbook for Flat racing (turf and all-weather) |
| `jumps/data/results.js`, `flat/data/results.js` | Picks, probabilities and results per meeting (schema in the jumps file's header) |
| `jumps/analyses/`, `flat/analyses/` | One Markdown write-up per race: `<YYYY-MM-DD>_<course>/<HHMM>_<race-slug>.md` |
| `dashboard.html` | Performance dashboard; reads both results files. Open it directly from the folder |
| `.claude/agents/race-analyst.md` | Subagent `/analyse` spawns per race: deep-dives one race in a fresh context and writes its write-up |
| `upcoming.html` | Races still to run: the agent's picks, chances and reasons, for review before the off |

## Which playbook

- Race is a **hurdle, chase or NH flat race / bumper** (Irish cards call bumpers "Flat Race", "INH Flat Race" or "(Pro/Am) Flat Race") → `jumps/AGENTS-jumps.md`.
- Anything else → `flat/AGENTS-flat-v2.md`.
- If unsure, check the race type on the racecard before starting.

Read the chosen playbook **in full** before analysing, including its Post-race review rules and Lessons on gathering data, and follow every step.

## Commands

- `/analyse <course> [HH:MM] [date]` — analyse one race or a whole card, save the write-up and log the Win/Each-Way/Danger selections before the off.
- `/review <course> [date]` — pull results and starting prices, judge the reasoning, update the data and write-ups, propose new playbook rules.

## Standing rules

- **Picks only, no bets.** The agent ranks 2–3 picks with win probabilities; the user decides whether and how to bet. Don't recommend bets, stakes or bet types, and don't fetch or quote prices before the off — the market is not an input. Never log in to a bookmaker, enter account details or place a bet.
- **Picks are scored on price after the race** (see the playbook's "How picks are scored"): a winner earns its odds, a placer a fifth of them, a loser −1. Check every outsider properly before ranking; never rank on rating, form figures or stable alone.
- **Check the clock first.** Racing times are local (Ireland/UK). Say how long is left to the off, and flag any race that has already run.
- **Re-check non-runners and going close to the off,** and quote the time they were checked.
- **Record before the off; never change picks or probabilities after it.** Late changes before the off go in as a dated `## Update HH:MM` section and an updated data entry.
- **Jockey claims change weights.** Check whether listed weights are before or after claims (Racing Post card weights are before claims) and account for the difference between runners.
- **Judge on reasoning, not results.** A winner on a wrong reason is still an error; a sound pick that loses is not.

## Saving work

This folder is the GitHub repository `stevenkennyit/horse_test`. Cloud sessions start from a fresh copy and lose anything not pushed, so:

- **Results always go to `main`.** GitHub Pages (the dashboard and `upcoming.html`) deploys from `main`, so write-ups and the results files must land on `main` to be reviewable. **After `/analyse` records a race, and after `/review` updates the data,** commit the changed write-ups and results files and push to `main` straight away, before replying — **even when the session was started on a task/feature branch** (push the results commits to `main`, e.g. `git push origin <branch>:main`, which also triggers the Pages deployment).
- Commit message: `analyse <course> <date> <HHMM>` or `review <course> <date>`.
- Only if a direct push to `main` genuinely fails (for example, `main` is protected) push to a branch named after the task, and tell the user the work is on that branch.
- Never commit secrets, cookies or account details.

## Data-gathering notes

- **Sporting Life** pages embed their data as JSON in the `__NEXT_DATA__` script tag: racecards, horse profiles (full career) and result pages. This is the most reliable source and works with plain fetches.
- Run histories embedded in result pages are truncated and include later runs; use the horse's profile for full history and for days since its last run.
- **Racing Post** racecards' free form view shows only 5 runs.
- **At The Races** (`m.attheraces.com`) has pace maps, verdicts and Smart Stats; Smart Stats may show a bot check first.
- The Sporting Life going page lists several days; read the row under today's date.

## Answer style

- Lead with the verdict: the Win, the Each-Way (if any) and the Danger (if any), each with win chance, place chance, fair price, confidence and the key reason.
- Use compact tables; tag key claims verified / asserted / not found; list what couldn't be verified.
