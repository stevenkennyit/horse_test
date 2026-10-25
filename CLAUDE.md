# Horse agent

Race analysis for UK and Irish racing. The playbooks hold the method; this file says where things live and the rules that apply to every task.

## Layout

| Path | What it is |
|---|---|
| `jumps/AGENTS-jumps.md` | Playbook for hurdles, chases and NH flat races (bumpers) |
| `flat/AGENTS-flat-v2.md` | Playbook for Flat racing (turf and all-weather) |
| `jumps/data/results.js`, `flat/data/results.js` | Picks, probabilities, bets and results per meeting (schema in the jumps file's header) |
| `jumps/analyses/`, `flat/analyses/` | One Markdown write-up per race: `<YYYY-MM-DD>_<course>/<HHMM>_<race-slug>.md` |
| `dashboard.html` | Performance dashboard; reads both results files. Open it directly from the folder |

## Which playbook

- Race is a **hurdle, chase or NH flat race / bumper** (Irish cards call bumpers "Flat Race", "INH Flat Race" or "(Pro/Am) Flat Race") → `jumps/AGENTS-jumps.md`.
- Anything else → `flat/AGENTS-flat-v2.md`.
- If unsure, check the race type on the racecard before starting.

Read the chosen playbook **in full** before analysing, including its Post-race review rules and Lessons on gathering data, and follow every step.

## Commands

- `/analyse <course> [HH:MM] [date]` — analyse one race or a whole card, save the write-up and log the picks before the off.
- `/review <course> [date]` — pull results, judge the reasoning, update the data and write-ups, propose new playbook rules.

## Standing rules

- **The user places all bets.** Never log in to a bookmaker, enter account details or place a bet.
- **Check the clock first.** Racing times are local (Ireland/UK). Say how long is left to the off, and flag any race that has already run.
- **Re-check prices, non-runners and going close to the off,** and quote the time each price was checked.
- **Record before the off; never change picks, probabilities or prices after it.** Late changes before the off go in as a dated `## Update HH:MM` section and an updated data entry.
- **Each-way bets only at 5/1 or bigger.** Below 5/1, back to win or not at all.
- **Jockey claims change weights.** Check whether listed weights are before or after claims (Racing Post card weights are before claims) and account for the difference between runners.
- **Judge on reasoning, not results.** A winner on a wrong reason is still an error; a sound pick that loses is not.

## Saving work

This folder is the GitHub repository `stevenkennyit/horse_test`. Cloud sessions start from a fresh copy and lose anything not pushed, so:

- **After `/analyse` records a race, and after `/review` updates the data,** commit the changed write-ups and results files and push to `main` straight away, before replying.
- Commit message: `analyse <course> <date> <HHMM>` or `review <course> <date>`.
- If the push fails (for example, `main` is protected), push to a branch named after the task, and tell the user the work is on that branch.
- Never commit secrets, cookies or account details.

## Data-gathering notes

- **Sporting Life** pages embed their data as JSON in the `__NEXT_DATA__` script tag: racecards, horse profiles (full career) and result pages. This is the most reliable source and works with plain fetches.
- Run histories embedded in result pages are truncated and include later runs; use the horse's profile for full history and for days since its last run.
- **Racing Post** racecards give live best prices; the free form view shows only 5 runs.
- **At The Races** (`m.attheraces.com`) has pace maps, verdicts and Smart Stats; Smart Stats may show a bot check first.
- The Sporting Life going page lists several days; read the row under today's date.

## Answer style

- Lead with the verdict: top two picks, chance, fair price, best price with time checked, confidence and the bet.
- Use compact tables; tag key claims verified / asserted / not found; list what couldn't be verified.
