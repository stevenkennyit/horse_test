# Data tools

Three sources, each read the way it works reliably, then cross-checked. Audited 11 Nov 2026 on Market Rasen 13:51, 12 Nov.

| Source | How to read it | What only it gives |
|---|---|---|
| **Sporting Life** | `node tools/sl.js …` (plain fetch, Node) | Full careers (every run, in-running comment), day index, going, results with SP |
| **Racing Post** | Built-in browser: open the RP race page, run `tools/browser/rp-card.js` with `javascript_tool` | Jockey claims, RPR/TS (card and each run), RP close-up comments, wind-op and first-time flags, days since run |
| **At The Races** | Built-in browser: open the ATR race page, run `tools/browser/atr-card.js` | Pace chart (forecast + early-pace bar per runner), expert view, claims |

Then `node tools/xcheck.js <date> <slRaceId> <rp-output.txt>` lists every SL/RP disagreement (OR, weight, position, field size, NR status, runs one source lacks). Report each one as a range or a conflict; silence counts as two-source verification.

## Routine for one race
1. `node tools/sl.js meetings <date> --uk` → race IDs, going.
2. `node tools/sl.js pack <date> <slRaceId> --out <scratch>/pack.md` → card + full careers + computed C/D/CD/BF.
3. Browser: `https://www.racingpost.com/racecards/<courseId>/<course>/<date>/<rpRaceId>` → run `rp-card.js` → save output to `<scratch>/rp.txt`. (Course and race IDs come from the RP meeting page `/racecards/<courseId>/<course>/<date>`; Market Rasen = 35.)
4. `node tools/xcheck.js <date> <slRaceId> <scratch>/rp.txt`.
5. Browser: ATR race page → run `atr-card.js` for pace.
6. RP result pages (`/results/…`) for key past runs: open in the browser; the page's `__NEXT_DATA__` → `initialState.raceResult.data` has comments, TS/RPR, claims, time vs standard, and `prevRaceUrl` to walk back through a horse's career.

## Known traps (found in the audit)
- **ATR card pills are not the standard symbols.** Maidens carry "C"; a winless horse carries "G HG Cl Hcp". Use the computed flags in `sl.js pack`, never ATR's.
- **WebFetch summaries are lossy on these sites.** On an RP result it dropped every in-running comment and invented an "extra-weight marker"; on ATR it returned names only. Use the tools above; WebFetch only for locating URLs.
- **Racing Post anonymous form = last 5–7 runs.** The profile page also showed a 2024 Navan fall that is in no other record for Miss Denver (SL debut Feb 2025): treat RP profile rows not found on SL as suspect.
- **Sporting Life weights are before claims**; SL has no claim field. RP `weightAllowanceLbs` is the claim.
- **SL date pages for future days redirect to today.** `sl.js meetings` gets around it via the going page → fast-cards.
- **Non-runners differ by source and time.** At 18:20 the day before, RP/ATR showed Double Indemnity NR while SL showed DOUBTFUL.
- **OR on older runs can differ by 1–2lb between SL and RP.** Quote as a range.
- Blocked/dead: RP and ATR by plain fetch (406 / JS challenge), Timeform (WAF), Sky Sports profiles (404), Geegeez course page (404), Racing TV cards (empty shell). Don't add browser-like headers to get past blocks.
- Prices are context, not the decider (CLAUDE.md). `sl.js card`/`pack` end with a market block (current price, market % with the overround removed, each-way terms, time read) and profiles show past SPs; `--no-prices` hides them. The browser snippets leave prices out to save tokens: SL's block is enough. Morning prices are not the SP.
