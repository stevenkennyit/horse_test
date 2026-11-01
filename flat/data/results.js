// AI agent picks and results: FLAT. One object per meeting.
// Loaded by ../../dashboard.html alongside jumps/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Same schema as jumps/data/results.js (see the field notes there): picks with prob, finish and sp; no bets. Add a meeting object to `meetings`
// after each race day; set `status: "pending"` until the result is in.
// Error codes share one list with jumps: reuse an existing code if it fits, otherwise add a new letter here.

(function (data) {
  const D = (window.AGENT_DATA = window.AGENT_DATA || { errorTypes: {}, meetings: [] });
  Object.assign(D.errorTypes, data.errorTypes || {});
  D.meetings.push(...data.meetings);
})({
  errorTypes: {
    G: "Older horse (4yo+) returning after 200+ days kept as a Win or Each-Way pick at a normal probability, with the long absence recorded as a doubt but not priced",
    H: "Win kept despite its own recorded recurring in-race fault (slow starts, no finishing kick, headed late) seen in 3+ recent runs; the fault recurred in the race (Step 13)",
    I: "Horse that ran the previous day (double declaration) made a selection without a race-morning declaration check; it was withdrawn",
    J: "Second run after a long layoff rated on the comeback run rather than on its pre-layoff form",
    F: "Live outsider (recent winner, franked figure or favourable mark/yard move) left at a near-zero probability despite its own outsider-check case",
    K: "Consistent placer (winless in its last 5+ and/or a beaten favourite) kept as the Win despite its own recorded placer-profile doubt; the profile recurred and it ran unplaced while a stronger-credentialled rival won"
  },
  meetings: [
    {
      date: "2026-10-26",
      course: "Kempton",
      country: "GB",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Polytrack: Standard to Slow",
      dataErrors: [
        "19:15: Ataturk (top pick) was withdrawn (non-runner) but the card was last re-checked at 07:35, over 11 hours before the 19:15 off, so the withdrawal was missed. Pre-off non-runner re-check not performed.",
        "16:10: finishing positions beyond the first three could not be verified from any reachable source (RP served only the current day; the SL race-id was non-sequential and not locatable; gg/Timeform/ATR blocked). Podium (Imperial Ballet 1, Divine Symmetry 2, Virtue King 3) confirmed via ratingtheraces fast-results. Al Mandoos recorded 4th but its exact placing (4th-9th) and SP are unconfirmed."
      ],
      races: [
        {
          time: "16:10", name: "Unibet's New VAR Goal Guarantee Novice Stakes (GBB Race)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 9, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1610_7f-class-4-novice-stakes.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Divine Symmetry", prob: 0.39, finish: "2", sp: "11/8", confidence: "low",
              reason: "Better Racing Post figure at today's weights (77 v 72) and a strong frank: the 3rd from his debut won next time.",
              against: "One run only, held up and keen in a slowly run race; horses held up last time win 8-10% of these at Kempton against 18-21% for those prominent." },
            { rank: 2, horse: "Imperial Ballet", prob: 0.36, finish: "1", sp: "6/4", confidence: "low",
              reason: "Only previous winner and only rated runner (OR 83); her 2yo best (RPR 80) beats his 77-equivalent, and she has tracked the leaders.",
              against: "Has run to 72 since her 13-month break, gives 2lb, and faded late in her only run at 7f." },
            { rank: 3, horse: "Al Mandoos", prob: 0.10, finish: "4", sp: null, confidence: "low",
              reason: "Unraced Godolphin newcomer; ranked behind the raced pair under rule E, and bin Suroor newcomers are 0 from 11 this season.",
              against: "No form at all; an unraced 3yo this late in the year has often had problems." },
            { rank: 4, horse: "Virtue King", prob: 0.05, finish: "3", sp: "12/1", confidence: "low", danger: true,
              reason: "First-time cheekpieces, dropping from 1m to 7f, and raced handily last time.",
              against: "Still 10 lengths or more behind Class 4 novice winners." }
          ],
          winner: { horse: "Imperial Ballet", sp: "6/4", agentProb: 0.36 },
          grade: "held", errors: [],
          notes: "Settled. 2nd pick Imperial Ballet (the only previous winner/only rated runner) won from top pick Divine Symmetry; danger Virtue King 3rd at 12/1. Top two correctly identified, order flipped. Al Mandoos recorded 4th (placing 4th-9th and margins unverified, see dataErrors)."
        },
        {
          time: "16:45", name: "Unibet More Extra Place Races EBF Novice Stakes (GBB Race) (Div I)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 10, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1645_7f-class-3-2yo-novice-stakes-div-1.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Red Wizard", prob: 0.27, finish: "1", sp: "7/2", confidence: "low",
              reason: "Best course form (5th of 8 over C&D, 4L, chasing the winner), about 1.3s faster than Stytch over C&D after adjusting for each night, and franked: the 2nd and 4th have both run 2nd since (OR85, OR86).",
              against: "Never closer than 4 lengths; Charlton is 0 from 28 and Edmunds 0 from 27 with 2yos at Kempton; only 2 runs." },
            { rank: 2, horse: "Stytch", prob: 0.17, finish: "2", sp: "7/1", confidence: "low",
              reason: "About 2L behind OR79 Gold Army at Salisbury (about 75), RPR 71 level with Red Wizard's, and a first-time hood to settle him.",
              against: "Keen and held up in both runs (held up last time wins 11% of these); his C&D run was 12L back and about 1.3s slower than Red Wizard's; A King 0 from 14 with 2yos at Kempton." },
            { rank: 3, horse: "Idealise", prob: 0.14, finish: "6", sp: "1/1", confidence: "low",
              reason: "Balding/Murphy Frankel newcomer (Murphy 24% at Kempton); the raced form he meets tops out in the mid-to-high 70s.",
              against: "Unraced: newcomers win 6% of Kempton 7f 2yo novices, Balding's Kempton newcomers are 4 from 48, and the dam's only runner was a 63-rated filly." },
            { rank: 4, horse: "Rattenbury", prob: 0.10, finish: "5", sp: "8/1", confidence: "low", danger: true,
              reason: "Strong debut race: about 63-66 on collateral (Rogue Imperial OR78, Storm Blade OR81 ahead), and second-run horses win 16% of these.",
              against: "147 days off, up from 6f to 7f by a sprinting sire, slowly away last time; C Hills 0 from 24 with 2yos at Kempton." }
          ],
          winner: { horse: "Red Wizard", sp: "7/2", agentProb: 0.27 },
          grade: "held", errors: [],
          notes: "Settled. Top pick Red Wizard won by a head from 2nd pick Stytch (nse to 3rd); the 1-2 came in exactly as ranked against a beaten 1/1 favourite, Idealise (my rank 3), who was outpaced and finished 6th. Danger Rattenbury 5th. Model result: the odds-on newcomer was correctly downgraded."
        },
        {
          time: "17:15", name: "Unibet More Extra Place Races EBF Novice Stakes (GBB Race) (Div 2)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 9, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1715_7f-class-3-2yo-novice-stakes-div-2.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Showmaster", prob: 0.41, finish: "1", sp: "1/2", confidence: "medium",
              reason: "2.5L behind Kamaal (rated 87-91) on debut, about 82 on collateral and a time figure about 20lb better than any other raced runner; sat in touch, the style that wins these.",
              against: "One run, on soft turf, and nothing from that race has run since; Cox 1 from 20 with 2yos at Kempton; four newcomers from paying yards." },
            { rank: 2, horse: "Raslan", prob: 0.10, finish: "4", sp: "7/1", confidence: "low",
              reason: "Second-best collateral (about 57-61), now with Boughey (2yos 5 from 24 here) and Murphy; raced handy both times and improved from 11.85L to 5.8L beaten.",
              against: "About 20lb to find with Showmaster; up to 7f, first run on Polytrack, 60 days off, beaten favourite on debut, no frank found." },
            { rank: 3, horse: "Le Drakkar", prob: 0.10, finish: "6", sp: "11/1", confidence: "low",
              reason: "Most expensive newcomer (185,000 euros), dam a 1m winner from a useful family; Egan rides.",
              against: "No form; de Foy 2yos 2 from 18 here; first-time tongue tie on a debutant; Easy Evening has an equal claim." }
          ],
          winner: { horse: "Showmaster", sp: "1/2", agentProb: 0.41 },
          grade: "held", errors: [],
          notes: "Settled. Top pick Showmaster (clear standout on figures) led over 1f out and won at 1/2; the correct call but a short price, so little reward. 2nd pick Raslan led until over 1f out and faded to 4th; the 25/1 Green Tundra ran into 2nd. Le Drakkar 6th."
        },
        {
          time: "17:45", name: "Unibet 40,000+ Live Streamed Events Handicap", type: "handicap", distance: "7f",
          going: "Standard to Slow", runners: 12, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1745_7f-class-4-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "I'm Workin On It", prob: 0.18, finish: "9", sp: "8/1", confidence: "low",
              reason: "Best weight-adjusted Kempton figures in the race and they repeat (17.2, 14.6, 11.3); head-to-heads put him about 4-5lb ahead of Port Road and Blue Prince; drops to Class 4 at 7f, where he has won 4 times here.",
              against: "Top weight on his highest mark and no win off higher than 81; quiet stable (Millman 1 from 20 here in six months); best figures came at 1m." },
            { rank: 2, horse: "Siwa Oasis", prob: 0.16, finish: "1", sp: "2/1", confidence: "low",
              reason: "Progressive 3yo, 7f form 2-1-1 including a cosy C&D handicap win; races handy from stall 6; Egan 11 from 55 here.",
              against: "Up 5lb for one handicap win with no frank yet; Blue Prince about level on the weights; Kempton figure (6.1) well below the top pick's." },
            { rank: 3, horse: "Rogue Messiah", prob: 0.13, finish: "7", sp: "8/1", confidence: "low",
              reason: "All-weather form 2-1-2, including a C&D 2nd off 85 staying on; best stall (1); his flops came on fast turf.",
              against: "2lb higher than for a defeat by a horse that has not run since; Luke Morris 3 from 65 here; needs the gaps from mid-division." },
            { rank: 4, horse: "Caviar Cowboy", prob: 0.11, finish: "6", sp: "12/1", confidence: "low", danger: true,
              reason: "Beaten half a length over C&D off today's mark by Lord Britain, since rated 100: the best-franked run in the race.",
              against: "Unplaced in three runs since, 61 days off, gelded since, stall 9." }
          ],
          winner: { horse: "Siwa Oasis", sp: "2/1", agentProb: 0.16 },
          grade: "mixed", errors: ["F"],
          notes: "Settled. 2nd pick Siwa Oasis (progressive 3yo) made the front over 1f out and won at 2/1f. Top pick I'm Workin On It finished 9th: the 'against' was right - a top-weight on his highest mark from a quiet stable, ranked #1 only on historic figures, and he should have been behind the progressive Siwa Oasis (error F). Rogue Messiah 7th, danger Caviar Cowboy 6th."
        },
        {
          time: "18:15", name: "Bet 20 Pound Get 20 Pound With Unibet Novice Stakes (GBB/GBBPlus Race)", type: "novice", distance: "1m3f219y",
          going: "Standard to Slow", runners: 9, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1815_1m4f-class-3-novice-stakes.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Maldives", prob: 0.30, finish: "3", sp: "2/1", confidence: "low",
              reason: "Ran to her mark of 80 on her handicap debut and the form is franked three times since; drops 11lb to novice weights and holds the highest rating at today's weight (about 76).",
              against: "Never run beyond 1m2f or on Polytrack; best figure on soft turf; heavy defeats in Group/Listed company; de Foy 4 from 58 at Kempton." },
            { rank: 2, horse: "Liam Mera Kai", prob: 0.22, finish: "5", sp: "15/8", confidence: "low",
              reason: "Proven stayer on an artificial surface: beaten a short head over 1m3f at Southwell, 6.5L clear of the rest; hurdles winner rated 111; stall 1, races handy.",
              against: "Hung and was caught late last time; loses his 5lb claim, so carries 2-3lb more; time figure well below Maldives's; Greatrex Flat runners 4 from 40 here." },
            { rank: 3, horse: "Sailor Song", prob: 0.16, finish: "6", sp: "16/1", confidence: "low",
              reason: "Best form on paper (RPR 86-88, 1.5L behind Al Azd, now rated 92) and races handy.",
              against: "184 days off, first run for Loughnane after leaving Godolphin, beaten 17.45L last time; the 88 came with a 7lb claim; widest stall." }
          ],
          winner: { horse: "Flagbearer", sp: "4/1", agentProb: 0.12 },
          grade: "mixed", errors: [],
          notes: "Settled. Won by Flagbearer (Haggas, my 12% 'Rest' runner) from Allaire (my 11%); top pick Maldives led briefly over 2f out but was headed and held on for 3rd (placed). 2nd pick, the 15/8 favourite Liam Mera Kai, led early and weakened to 5th - the untried-on-Polytrack/doubt did not pay. Winner came from just outside the ranked picks."
        },
        {
          time: "18:45", name: "Try Unibet's New Racing Bet Builder Handicap", type: "handicap", distance: "1m",
          going: "Standard to Slow", runners: 13, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1845_1m-class-4-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Fight Your Corner", prob: 0.18, finish: "1", sp: "4/1", confidence: "medium",
              reason: "Best-franked form in the race and over C&D: the 3rd, 4th (London Mile final) and 5th from his 0.3L 2nd have all won since; 1lb lower today; two matching Kempton figures; stall 3.",
              against: "68 days off; Tate 0 from 16 at Kempton in six months; beaten 4.15L as favourite off this mark; his times are below Uniting's and Gilet's best." },
            { rank: 2, horse: "Uniting", prob: 0.14, finish: "12", sp: "33/1", confidence: "low",
              reason: "Best time figure in the field (neck 2nd in the Southwell Mile Series final at today's weight) and a C&D win; Kavanagh's 3lb claim; stall 1.",
              against: "202 days off, first run for Luke Dace, first-time hood; 3lb higher; Southwell race only partly franked; held up there." },
            { rank: 3, horse: "Breathe Easy", prob: 0.10, finish: "4", sp: "10/3", confidence: "low",
              reason: "Unexposed (4 runs, 2 wins), Balding and Murphy (20% over 1m here), stall 2, races with the pace.",
              against: "240 days off; handicap win was a 4-runner race with a weak time; the case is mostly yard, jockey and draw." }
          ],
          winner: { horse: "Fight Your Corner", sp: "4/1", agentProb: 0.18 },
          grade: "held", errors: ["F"],
          notes: "Settled. Top (medium-confidence) pick Fight Your Corner led well inside the final furlong and won at 4/1, beating the 10/3 favourite (my rank 3 Breathe Easy, 4th). 2nd pick Uniting finished 12th of 13 at 33/1: ranked #2 on best time figure despite 202 days off and a first run for a new yard - the layoff/stable warning should have outweighed the figure (error F, non-costly as the top pick won)."
        },
        {
          time: "19:15", name: "Try Unibet's Superboosts Handicap", type: "handicap", distance: "1m2f219y",
          going: "Standard to Slow", runners: 13, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1915_1m2f-class-6-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Ataturk", prob: 0.15, finish: "NR", sp: null, confidence: "low",
              reason: "Most consistent at this level (0.05L 2nd, 2.3L 4th, 0.2L 2nd in Class 6 at 1m2f-1m4f); the 4th came behind Aravalli and Captain Cairney, both winners since.",
              against: "Stall 13: stalls 10+ have won 2 of 101 over this C&D; 0 from 6, beaten at 4/5; Morrison 0 from 14 at Kempton in six months." },
            { rank: 2, horse: "Uzincso", prob: 0.12, finish: "9", sp: "12/1", confidence: "low",
              reason: "Kempton specialist on his lowest mark (55, from 61 in April), stall 3; C&D 3rd off 59 in June; Butler 7 from 28 at this trip here.",
              against: "Aged 10, 4 wins from 50; weakened as favourite on 9 Sep and beaten 8.75L on 23 Sep; the mark is falling because the form is." },
            { rank: 3, horse: "Kathleen Mary", prob: 0.11, finish: "2", sp: "10/3", confidence: "low",
              reason: "Kept on from the rear at Leicester about 3lb behind Ataturk; 18lb lower than July 2025; stall 4; Murphy 22% at this trip here.",
              against: "0 from 11, unplaced in her last six; the booking is the main positive, an obvious signal." },
            { rank: 4, horse: "Baron Wagstaff", prob: 0.10, finish: "4", sp: "9/1", confidence: "low", danger: true,
              reason: "Neck 2nd over 1m4f at Wolverhampton off 54 last time; stall 2.",
              against: "Held up (wins 7.7% here), up 3lb, trainer 0 from 11 here." }
          ],
          winner: { horse: "Brave Leader", sp: "11/8", agentProb: 0.08 },
          grade: "mixed", errors: [],
          notes: "Settled. Top pick Ataturk was a late non-runner (missed - card last re-checked 07:35; see dataErrors). Won by Brave Leader, my 8% 'Rest' runner, at 11/8f. Rank 3 Kathleen Mary led early and kept on for 2nd (10/3); danger Baron Wagstaff 4th; 2nd pick Uzincso 9th, the falling-form doubt confirmed."
        },
        {
          time: "19:45", name: "Unibet Supports Safer Gambling Handicap", type: "handicap", distance: "6f",
          going: "Standard to Slow", runners: 12, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/1945_6f-class-6-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Roy Lane", prob: 0.20, finish: "1", sp: "1/1", confidence: "low",
              reason: "C&D 2nd of 12 off today's mark, franked (the 3rd won next time, the winner raised 7lb); first run for Fanshawe then; only 1lb more today; stall 2.",
              against: "A maiden with one good run; his time figure is behind Southbank's, Tie Fighter's and Diamond Dreamer's best; races midfield; 42 days off." },
            { rank: 2, horse: "Southbank", prob: 0.11, finish: "7", sp: "18/1", confidence: "low",
              reason: "C&D winner off 54 now on 49, his lowest mark in two years; carries 6-11lb less than in his best spring runs, the best time figures in the field.",
              against: "Last two runs poor (13th of 17, then 10th of 11 here, 'found nil'); a low mark only helps if he is running to form; trainer 4 from 46 here." },
            { rank: 3, horse: "Preferred", prob: 0.10, finish: "2", sp: "4/1", confidence: "low",
              reason: "Stall 1 and a front-runner where the leader wins a quarter of these; few low-drawn rivals have early speed; Rossa Ryan 29% over 6f here; mark down 5lb.",
              against: "Maiden after 5 runs with weak figures; weakened after leading at Southwell; Tate 0 from 16 here; hood left off." }
          ],
          winner: { horse: "Roy Lane", sp: "1/1", agentProb: 0.20 },
          grade: "held", errors: ["F"],
          notes: "Settled. Top pick Roy Lane made headway and led in the final furlong to win at 1/1f - correct but a short price, so little reward. Rank 3 Preferred (the front-runner/draw angle) led early and held 2nd at 4/1. 2nd pick Southbank, ranked on his low mark and best time figures despite two 'found nil' runs, finished 7th (error F); Preferred's draw/pace case was the sounder second."
        },
        {
          time: "20:15", name: "Bet At racingtv.com Handicap", type: "handicap", distance: "1m7f218y",
          going: "Standard to Slow", runners: 12, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_kempton/2015_2m-class-6-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Ada Rose", prob: 0.16, finish: "4", sp: "11/4", confidence: "low",
              reason: "Two close 2nds in her only runs at 2m, only 1lb higher; the Newcastle race is franked (Niffler won over C&D next time, the 3rd won next time); races handy; Egan 11 from 55 here.",
              against: "1 win from 9; both 2nds in small fields (4 and 6 runners); 51 days off; the collateral edge over Shopaholic runs through a chain of races." },
            { rank: 2, horse: "La Trinite", prob: 0.14, finish: "7", sp: "9/1", confidence: "low",
              reason: "Won at Bath 7 days ago by 3.75L, and carries 11lb less than that day (it was an amateur riders' race); about 4.5lb ahead of Femme Fatale on their Lingfield meeting.",
              against: "5lb penalty puts her above the mark she won off; Bath good to soft is a different test; keen early; other recent runs ordinary." },
            { rank: 3, horse: "Shopaholic", prob: 0.13, finish: "12", sp: "6/1", confidence: "low",
              reason: "Best-franked win in the race (Niffler, her 2nd at Wolverhampton, won over C&D next time); Murphy 6 from 20 at 2m here.",
              against: "Top weight after a 4lb rise, stall 12, 4th of 5 last time and tailed off before that; behind Ada Rose through Niffler; first-time cheekpieces." },
            { rank: 4, horse: "Noble Grace", prob: 0.12, finish: "3", sp: "11/1", confidence: "low", danger: true,
              reason: "Won two of her last four, the latest over 2m2f, staying on strongly.",
              against: "Up 3lb; only Kempton run a 33.8L novice defeat; the race she won had six runners." }
          ],
          winner: { horse: "Electric Gambler", sp: "4/1", agentProb: 0.06 },
          grade: "failed", errors: [],
          notes: "Settled. Won by Electric Gambler (my 6% 'Rest' runner) at 4/1 from No Ordinary Joe (20/1); danger Noble Grace 3rd at 11/1. Top pick Ada Rose chased the leaders but had no extra, 4th of 12 (just out of the places); 2nd pick La Trinite 7th, Shopaholic last. Both scored picks out; the analysis had already flagged this low-grade 2m as near-uninformative on times."
        }
      ]
    },
    {
      date: "2026-10-26",
      course: "Southwell",
      country: "GB",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Tapeta: Standard",
      dataErrors: [
        "Three non-runners not caught: Neat And Tidy (18:30), Handle With Care (19:30), Hallandale Beach (20:00). Picks last checked 20:26 Sun 25 Oct; no race-day re-check logged (Kempton the same day was re-checked 07:35). None was a top-3 pick, so picks were unaffected, but field sizes and renormalised probabilities were not updated."
      ],
      races: [
        {
          time: "16:30", name: "All-Weather Championship Is Back Apprentice Handicap (Div 1)", type: "handicap", distance: "4f214y",
          going: "Standard", runners: 10, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/1630_5f-class-6-apprentice-handicap-div-1.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Stash The Cash", prob: 0.19, finish: "8", sp: "5/1", confidence: "low",
              reason: "Best C&D record (2 close 2nds in 4 runs, figures -5/-6 at about today's weight), beat Bishop's Glory over C&D and is now 2lb better off; races up with the pace, which wins most often here.",
              against: "181 days off, new yard, and his rider is 1 from 49 at Southwell; his April C&D form is not franked." },
            { rank: 2, horse: "Fancy Dancer", prob: 0.18, finish: "3", sp: "12/1", confidence: "low",
              reason: "Three 2nds at 5f in her last 6, races prominently, and a 5lb claim makes her 12lb better off with Tomarlo than when 4L behind him.",
              against: "Beaten 8.75L last time; neither of her key runs is franked; trainer 0 from 8 at Southwell; first-time blinkers." },
            { rank: 3, horse: "Midnight Lir", prob: 0.15, finish: "2", sp: "10/3", confidence: "low",
              reason: "C&D 6th beaten 2.25L when denied a clear run, his key Thirsk run is franked, and his mark has fallen to 54.",
              against: "No place in his last 6, 2 wins from 37, and his rider is 0 from 15 at Southwell." },
            { rank: 4, horse: "Tomarlo", prob: 0.13, finish: "7", sp: "9/2", confidence: "low", danger: true,
              reason: "Made all at Wolverhampton in July; the winner of his last race has won again; first-time cheekpieces.",
              against: "Beaten 5.65L off this mark over C&D last time; trainer 4 from 54 and rider 0 from 19 at Southwell." }
          ],
          winner: { horse: "Ten Cuidado", sp: "10/1", agentProb: 0.04 },
          grade: "mixed", errors: [],
          notes: "Winner Ten Cuidado (10/1) rated 4%, bottom tier. Picks 3 (Midnight Lir, led and headed 1f out) and 2 (Fancy Dancer) filled 2nd and 3rd; top pick Stash The Cash weakened to 8th. Pace angle backed three front-runners but the winner came from prominent/midfield."
        },
        {
          time: "17:00", name: "All-Weather Championship Is Back Apprentice Handicap (Div 2)", type: "handicap", distance: "4f214y",
          going: "Standard", runners: 9, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/1700_5f-class-6-apprentice-handicap-div-2.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Pivotal Terms", prob: 0.24, finish: "2", sp: "11/8", confidence: "low",
              reason: "Won at Southwell last time, her 7lb claim offsets the 2lb rise, she was 7L clear of Beach Partee, and her trainer is 18% here.",
              against: "Drops from 6f to 5f, where three of her four runs this year were beaten 5.5L+; keen and held up, and hold-up horses win 7% of 5f races here." },
            { rank: 2, horse: "Kipp Kelly", prob: 0.19, finish: "6", sp: "20/1", confidence: "low",
              reason: "Most consistent 5f AW form in the race: 5 of his last 6 within 2L, including a win off 47 and a 2nd off today's mark.",
              against: "216 days off, a placer profile (1 win from 28), and trainer and rider are both about 4% at Southwell." },
            { rank: 3, horse: "Beach Partee", prob: 0.16, finish: "4", sp: "4/1", confidence: "low",
              reason: "Placed in 4 of his last 6, including a C&D 4th; his Brighton 2nd is franked (the winner has won since).",
              against: "Beaten 7.1L by Pivotal Terms 9 days ago; Dixon yard 4% and his rider 0 from 27 at Southwell." }
          ],
          winner: { horse: "Auradue", sp: "9/1", agentProb: 0.05 },
          grade: "mixed", errors: [],
          notes: "Winner Auradue (9/1) rated 5%. Top pick Pivotal Terms stayed on for 2nd as the drop to 5f was flagged; 2nd pick Kipp Kelly pulled hard and faded to 6th after 216 days off; Beach Partee 4th."
        },
        {
          time: "17:30", name: "AWC Finals Day At Newcastle 26th March Maiden Fillies' Stakes (GBB/GBBPlus Race)", type: "maiden", distance: "1m3f23y",
          going: "Standard", runners: 6, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/1730_1m3f-class-3-maiden-fillies-stakes.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Peace Belle", prob: 0.40, finish: "4", sp: "11/4", confidence: "medium",
              reason: "Rated 96 from placings in Listed and Group staying races, about 14lb clear of the rated 3yos even after giving 5lb.",
              against: "Drops to 1m3f, where she has been beaten twice; slowly away in 2 of her last 3, and held-up horses win 6.8% over this trip here." },
            { rank: 2, horse: "Yamnah", prob: 0.34, finish: "1", sp: "7/4", confidence: "medium",
              reason: "Beaten 1.5L at Kempton over almost the same trip (best near-trip AW figure here), 7L clear of Hatta Romance, and Gosden runners win 26% at Southwell.",
              against: "Two runs and no win; her Kempton form is not franked." },
            { rank: 3, horse: "Cracking Beauty", prob: 0.12, finish: "2", sp: "9/4", confidence: "low",
              reason: "Nose 2nd off 72 in a 1m4f handicap and 3rd at Kempton over this sort of trip.",
              against: "OR 74, about 22lb below Peace Belle; 59 days off; trainer 1 from 18 here." }
          ],
          winner: { horse: "Yamnah", sp: "7/4", agentProb: 0.34 },
          grade: "held", errors: [],
          notes: "Picks 2 and 3 filled 1st and 2nd: Yamnah (34%) led over 1f out and drew clear; Cracking Beauty 2nd. Top pick Peace Belle (40%) led but the flagged trip drop told - pushed along 3f out and beaten 14L into 4th. Top-two order was wrong (class over trip doubt); the winner was still a leading pick."
        },
        {
          time: "18:00", name: "Midnite Ain't Your Grandads Bookie Handicap", type: "handicap", distance: "1m13y",
          going: "Standard", runners: 9, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/1800_1m-class-5-3yo-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Sterling Fortune", prob: 0.26, finish: "5", sp: "10/3", confidence: "medium",
              reason: "Won by 6L over C&D last week (about 10lb) in a good time, so the 6lb penalty still leaves her ahead; she makes the running, which wins most often here, for a 23% course trainer.",
              against: "One big run after a tailed-off effort, not franked, now up in class on 7 days' rest; her earlier level was about 68-70." },
            { rank: 2, horse: "Yimmna", prob: 0.18, finish: "2", sp: "11/2", confidence: "low",
              reason: "Haggas handicap debutant; her Kempton 3rd is the best AW figure earned in contention here and is strongly franked (1st and 2nd have both won since).",
              against: "Four runs and no win, mark dropped from 76 to 73, only one run at 1m, and Marquand is 4 from 51 at Southwell." },
            { rank: 3, horse: "Mo Anam Chara", prob: 0.14, finish: "3", sp: "14/1", confidence: "low",
              reason: "Placed in 4 of her last 6, a 7f winner off 67 and a 1m AW 2nd at Dundalk.",
              against: "7lb above her last winning mark, beaten 4.5L off this mark last time, and her win is only partly franked." }
          ],
          winner: { horse: "Toastmaster", sp: "13/8", agentProb: 0.12 },
          grade: "held", errors: [],
          notes: "The first three home were all in our top-4 by probability: Toastmaster (12%, won), Yimmna (2nd pick, 2nd), Mo Anam Chara (3rd pick, 3rd). Only the top pick missed - Sterling Fortune (26%, the penalty/front-runner) was short of room and plugged on to 5th."
        },
        {
          time: "18:30", name: "Midnite Are Upping The Betting Game Handicap", type: "handicap", distance: "7f14y",
          going: "Standard", runners: 11, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/1830_7f-class-6-3yo-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Sonbelievable", prob: 0.20, finish: "2", sp: "2/1", confidence: "low",
              reason: "C&D 3rd beaten 1.25L on his handicap debut, franked by the winner, 1lb lower now, and quicker than Able Astra's division carrying more weight.",
              against: "That race was run 3s slow of the course median and he has only 4 runs." },
            { rank: 2, horse: "Able Astra", prob: 0.13, finish: "3", sp: "11/2", confidence: "low",
              reason: "C&D 3rd beaten 2.75L 11 days ago, 1lb lower now; Cox runners place 60% of the time at Southwell.",
              against: "Slower than Sonbelievable on the same night; 0 wins from 6; no frank found." },
            { rank: 3, horse: "Leia Antilles", prob: 0.12, finish: "6", sp: "6/1", confidence: "low",
              reason: "Kempton 7f 2nd beaten 2L off 45, a better time figure than either C&D 3rd, and only 1lb higher.",
              against: "Trainer 0 from 10 and rider 1 from 32 at Southwell; 0 wins from 9; no frank found." }
          ],
          winner: { horse: "Honey Dale", sp: "5/2", agentProb: 0.03 },
          grade: "mixed", errors: ["F"],
          notes: "Both top picks placed (Sonbelievable 2nd, denied a clear run; Able Astra 3rd), but the winner Honey Dale was rated just 3% and went off 5/2. Our own notes had her mark dropped 10lb to 45, a switch to Charlie Clover (22% here) with Loughnane booked, and a twice-franked key run - a live handicap plot we buried under '0 wins, 0 places from 10, last over hurdles' (error F). Neat And Tidy was a non-runner (field 11, not 12)."
        },
        {
          time: "19:00", name: "Midnite A Next Generation Betting App Novice Stakes (GBB Race)", type: "novice", distance: "6f16y",
          going: "Standard", runners: 10, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/1900_6f-class-4-novice-stakes.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Big Money", prob: 0.36, finish: "2", sp: "8/11", confidence: "medium",
              reason: "Course 2nd beaten 3.75L by an 83-rated winner, ahead of a 79-rated horse: the best exposed form here (about 76-79).",
              against: "Drops from 7f to 6f after both runs at 7f; no frank found yet." },
            { rank: 2, horse: "Darkwing", prob: 0.17, finish: "5", sp: "10/1", confidence: "low",
              reason: "RPR 77 from two 2025 runs, both now franked by later winners, and a 5lb fillies' allowance.",
              against: "370 days off and a new yard (O'Meara 7 from 92 here); never closer than 4.3L." },
            { rank: 3, horse: "Valor's Call", prob: 0.13, finish: "8", sp: "9/1", confidence: "low",
              reason: "Night Of Thunder newcomer (pedigree confirmed on Racing Post) for George Scott, 6 from 40 at Southwell.",
              against: "Unraced (rule E: pedigree is not evidence); first-time hood." }
          ],
          winner: { horse: "Prosewriter", sp: "10/3", agentProb: 0.09 },
          grade: "mixed", errors: [],
          notes: "Big Money (36%, 8/11f) ran to form but was caught close home by the St Mark's Basilica newcomer Prosewriter (our 9%, rule E keeps newcomers below raced rivals). Top pick placed 2nd; 2nd pick Darkwing 5th. Rule E applied as intended - one newcomer beating the exposed form is not a refutation of it."
        },
        {
          time: "19:30", name: "AWC Season 14 Has Begun Fillies' Handicap", type: "handicap", distance: "6f16y",
          going: "Standard", runners: 10, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/1930_6f-class-4-fillies-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Fantasy Obsessor", prob: 0.19, finish: "3", sp: "12/1", confidence: "low",
              reason: "Two C&D runs in contention give the best repeated figures in the field (+17, +24), and she carries 7-10lb less than in either.",
              against: "Up from Class 5 to Class 4, no win in her last 6, not franked, and Overbudget beat her last time." },
            { rank: 2, horse: "Lady Roxby", prob: 0.14, finish: "6", sp: "4/1", confidence: "low",
              reason: "Most consistent 6f filly here (4 of 6 within 2L, three 2nds), with form in better races, for an 18% course trainer.",
              against: "Carries 9-12, Powdering is level with her on the weights, and her Yarmouth 2nd is not franked." },
            { rank: 3, horse: "Angel Love", prob: 0.12, finish: "2", sp: "12/1", confidence: "low",
              reason: "AW 6f winner last time (Newcastle, fig +6) and placed in 4 of her last 6; trainer 19% at Southwell.",
              against: "Up 2lb, beaten 4.5L and 6.2L in her other AW handicaps this year, her win is not franked, and her rider is 1 from 32 here." }
          ],
          winner: { horse: "Zooella", sp: "4/1", agentProb: 0.03 },
          grade: "mixed", errors: ["F"],
          notes: "Winner Zooella rated just 3% and went off 4/1 (joint-2nd fav). Our outsider-check line gave her two July wins off 67 and a franked +20 AW figure, with Beckett 25% / placed 63% at Southwell - a case that beat our 3rd pick, but we parked her at 3% on 'modest AW figures' (error F). Top pick Fantasy Obsessor 3rd and 3rd pick Angel Love 2nd both placed; 2nd pick Lady Roxby 6th. Handle With Care was a non-runner (field 10, not 11)."
        },
        {
          time: "20:00", name: "Midnite: Built For 2026 Not 2006 Handicap", type: "handicap", distance: "6f16y",
          going: "Standard", runners: 8, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/2000_6f-class-5-3yo-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Horace Wallace", prob: 0.26, finish: "8", sp: "15/8", confidence: "medium",
              reason: "Three AW 6f figures (+8, +15, +16) earned in contention, his Wolverhampton win franked and his C&D 2nd partly franked; only 2lb higher.",
              against: "Up 9lb since 1 Sep; has not won off a mark above 69; trainer and jockey under 10% at Southwell." },
            { rank: 2, horse: "Overbudget", prob: 0.17, finish: "3", sp: "15/2", confidence: "low",
              reason: "Won both her last two over C&D and carries 8-13 off a 4lb higher mark.",
              against: "Her winning figures (+5, +13) are below Horace Wallace's, the latest win is not franked, and her earlier turf form was poor." },
            { rank: 3, horse: "Cosmic Clarets", prob: 0.12, finish: "7", sp: "25/1", confidence: "low",
              reason: "Two fast AW 6f figures (+15, +25) earned finishing 2nd, the Newcastle one franked, and a falling mark with 8-10 to carry.",
              against: "0 wins from 12 (5 places); the Dixon yard is 4% at Southwell." }
          ],
          winner: { horse: "Tip Foster", sp: "11/1", agentProb: 0.05 },
          grade: "mixed", errors: [],
          notes: "A scrimmage over 2f out hit several runners: top pick Horace Wallace (15/8f) led, was headed and hampered, soon beaten, last; 3rd pick Cosmic Clarets was badly hampered and stumbled (7th). 2nd pick Overbudget led then held on for 3rd. Winner Tip Foster rated 5%. Trouble in running clouds the read on the top pick. Hallandale Beach was a non-runner (field 8, not 9)."
        },
        {
          time: "20:30", name: "AW Trials Day - Lingfield 2nd Jan 2027 Handicap (GBBPlus Race)", type: "handicap", distance: "2m102y",
          going: "Standard", runners: 6, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-26_southwell/2030_2m-class-4-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Benvoy", prob: 0.32, finish: "3", sp: "2/1", confidence: "medium",
              reason: "Both AW staying runs in contention (won Kempton 2m cosily, 2nd beaten 1L at Lingfield 2m); only 5lb higher.",
              against: "Up 5lb, untried at Southwell, held up (hold-up horses win 6.6% over 2m here), no frank found, and two pulled-up hurdle runs this year." },
            { rank: 2, horse: "Tarbat Ness", prob: 0.21, finish: "1", sp: "6/1", confidence: "low",
              reason: "Placed in 5 of his last 6 at about 2m, including two 2nds off today's mark of 72.",
              against: "A placer (6 wins from 50) and his Ripon 2nd is not franked." },
            { rank: 3, horse: "Vaguely Royal", prob: 0.15, finish: "4", sp: "7/2", confidence: "low",
              reason: "Won at York 2m off 69 in July and stays well.",
              against: "Beaten 7L+ three times since, and no AW run in his last 6." }
          ],
          winner: { horse: "Tarbat Ness", sp: "6/1", agentProb: 0.21 },
          grade: "held", errors: [],
          notes: "Our 2nd pick Tarbat Ness (21%, 6/1) made all/regained the lead and pulled clear - a +6 pick. Top pick Benvoy (32%) held up as flagged (hold-up horses win 6.6% over 2m here) and could only plug on to a distant 3rd. Our own note said the pace suited handy types over the held-up Benvoy, yet we still made him top; candidate rule G (let the pace read reorder the top two)."
        }
      ]
    }
    ,{
      date: "2026-10-28",
      course: "Dundalk",
      country: "IE",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Polytrack: Standard",
      dataErrors: [
        "No pre-off non-runner re-check was run. The last checks were Tuesday evening (14:00, 14:30, 15:00, 15:30, 16:30, 17:30) or 09:04 Wednesday (16:00, 17:00), five or more hours before the first off. Non-runners that occurred: Sherekiya (14:00), Lahore Da King (14:30), Never Mind Me (16:30), Step In Style (17:00) and My First Rose (17:30). None was a pick and none changed a recorded probability, but fields were 11, 12, 13, 13 and 13 runners rather than the declared numbers.",
        "Beaten distances in the write-ups' Result sections are summed from Sporting Life's per-horse margins (nse, hd, nk and sh converted to fractions of a length) and were not cross-checked against Racing Post, which stayed unreachable."
      ],
      races: [
        {
          time: "14:00", name: "Dundalk Stadium Optional Claiming Race", type: "claimer", distance: "1m",
          going: "Standard", runners: 11, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1400_1m-optional-claiming-race.md", updated: "20:30 Tue 27 Oct",
          picks: [
            { role: "win", horse: "Sonoran", prob: 0.25, placeProb: 0.55, finish: "1", sp: "11/8", confidence: "low",
              reason: "Highest official rating in the field (81 against 74 for Venetian and 72 for Glyndwr and Justenzia), carrying his Navan winning weight of 9-13; his 12th on 9 Oct came after he dwelt.",
              against: "0 wins from 3 Dundalk starts, 5lb higher on his last run, and an 81-rated horse in a 15k claimer is odd." },
            { role: "ew", horse: "Venetian", prob: 0.19, placeProb: 0.50, finish: "11", sp: "9/1", confidence: "low",
              reason: "Dundalk regular (21 runs, 2 wins) and lightest relative to his mark of the top four; 8lb lighter than when 2nd by half a length at 7f in March, with all-weather wins at about 1m.",
              against: "200 days off with no reason found, blinkers off, and the yard is 7% at Dundalk." },
            { role: "danger", horse: "Glyndwr", prob: 0.11, placeProb: 0.32, finish: "7", sp: "13/2", confidence: "low",
              reason: "Two-time Dundalk 1m winner in cheekpieces with a 10lb claimer, about 11lb below his Nov 2025 winning weight.",
              against: "Three poor runs, rating down from 84 to 72, trainer 0 from 18 this season, and the widest draw." }
          ],
          winner: { horse: "Sonoran", sp: "11/8", agentProb: 0.25 },
          grade: "mixed", errors: ["G"],
          notes: "Win Sonoran won at 11/8 from rear of mid-division as the top-rated runner; our 25% (3/1) was less confident than the market. Each-Way Venetian came back after 200 days, a doubt we recorded, and was never a factor (11th, about 14.7L). Danger Glyndwr 7th. Justenzia, the 9% outsider we flagged for a trip change, was 2nd at 5/1. Sherekiya was a non-runner (field 11, not 12)."
        },
        {
          time: "14:30", name: "Halloween Mid-Term Racing At Dundalk Handicap", type: "handicap", distance: "1m",
          going: "Standard", runners: 12, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1430_1m-handicap.md", updated: "21:20 Tue 27 Oct",
          picks: [
            { role: "win", horse: "Moyassr", prob: 0.23, placeProb: 0.55, finish: "10", sp: "11/2", confidence: "medium",
              reason: "Four wins from six Dundalk 1m runs, all faster than a typical Dundalk mile; a 10lb claim leaves him at an effective mark of 64 against 71 when he won in January, and he was 2nd three times in September.",
              against: "No all-weather run for 8 months, the Racing Post card shows a 5lb cut to his mark pending, the rider is an unproven 10lb claimer, the wins came for his old yard, and he has stall 10." },
            { role: "ew", horse: "Glitter And Glory", prob: 0.10, placeProb: 0.32, finish: "3", sp: "11/1", confidence: "low",
              reason: "A 10lb claim takes her effective mark to 59 against 69-74 when 2nd and 3rd over 1m in the summer; Dundalk AW form includes a 7f win and two 1m 3rds.",
              against: "Beaten by 0.5 to 6.5 lengths in her last six, and the trend is down (9th last time)." },
            { role: "danger", horse: "Bella Colombia", prob: 0.17, placeProb: 0.45, finish: "5", sp: "11/1", confidence: "low",
              reason: "Dundalk 1m record of 1 win, 1 second and 1 third from 4 runs; her August win is franked (3rd and 4th both won next time), and her effective mark of 65 is only 3lb above that win mark of 62.",
              against: "Stall 12, and three lower finishes since her peak." }
          ],
          winner: { horse: "Leveraging", sp: "5/1", agentProb: 0.05 },
          grade: "mixed", errors: ["G"],
          notes: "Win Moyassr, back after 8 months with a 10lb claimer, a pending mark cut and his Dundalk wins for another yard (all recorded as doubts), was never a factor (10th). Each-Way Glitter And Glory 3rd at 11/1 (a place return). Danger Bella Colombia 5th. Winner Leveraging (5%, 5/1) had been noted as a front-runner with a faster-division 5th; Sheamus Seimhiu was 2nd at 25/1. Lahore Da King was a non-runner (field 12, not 13)."
        },
        {
          time: "15:00", name: "Irishinjuredjockeys.com Fillies Maiden", type: "maiden", distance: "7f",
          going: "Standard", runners: 14, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1500_7f-2yo-fillies-maiden.md", updated: "20:10 Tue 27 Oct",
          picks: [
            { role: "win", horse: "Nevermindtherain", prob: 0.42, placeProb: 0.78, finish: "2", sp: "13/8", confidence: "medium",
              reason: "Rated 93 against 82 for the next best, with form franked by later Group results (Leopardstown Gr3 3rd behind two later Gr1-placed fillies); carries 8-11 after a 5lb claim from draw 3.",
              against: "Still a maiden after 7 runs and headed late in her better efforts; never run on Polytrack or at Dundalk." },
            { role: "ew", horse: "Golden Alibi", prob: 0.13, placeProb: 0.43, finish: "8", sp: "7/4", confidence: "low",
              reason: "Debut Listed 7th, 4.6L behind a winner rated 101, with the 2nd rated 105; the best raw form here bar the top pick, and likely to improve.",
              against: "Sprint-bred filly stepping up from 6f, held up from stall 15 on a track that favours low draws and front-runners; barrier-trial win unverified." },
            { role: "danger", horse: "Sonic Sabiha", prob: 0.10, placeProb: 0.36, finish: "5", sp: "9/2", confidence: "low",
              reason: "2nd by a neck over C&D on 9 Oct with a rising run of form, no claim, and the best draw (stall 1).",
              against: "That race was slow (3.57s slower than standard) and unfranked, she is 5lb higher today, and she dwelt in 3 of 4 runs." }
          ],
          winner: { horse: "Little Miss Muffet", sp: "12/1", agentProb: 0.04 },
          grade: "mixed", errors: [],
          notes: "Win Nevermindtherain led and was headed over 1f out, 2nd by 1.25L: the 'caught late' pattern we recorded as the case against, now 0 from 8. Each-Way Golden Alibi (doubts on trip, draw and style) was 8th at 7/4. Winner Little Miss Muffet (4%, 12/1; 147 days off, 3lb claim, 8.2L beaten on debut) improved. The three reserves did not get in (field 14)."
        },
        {
          time: "15:30", name: "Irish Stallion Farms EBF Maiden", type: "maiden", distance: "7f",
          going: "Standard", runners: 11, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1530_7f-2yo-ebf-maiden.md", updated: "19:50 Tue 27 Oct",
          picks: [
            { role: "win", horse: "Mudyrk", prob: 0.40, placeProb: 0.76, finish: "9", sp: "5/4", confidence: "medium",
              reason: "Only runner with Group-franked form: 2nd by a half-length at Fairyhouse to Florida Bay (since a G3 winner and G1 placed), 5lb worse off at the weights.",
              against: "145 days since his last run, never run on Polytrack, and drawn 11 of 11 where low draws and front-runners tend to do better." },
            { role: "ew", horse: "Golden Idol", prob: 0.14, placeProb: 0.52, finish: "2", sp: "10/1", confidence: "low",
              reason: "3rd of 13 on debut over 7f on heavy ground at the same 9-7, tracking the leaders; the 5th has since placed in a Dundalk 7f nursery. Stall 3.",
              against: "Beaten about 6 lengths, and nothing shows he can beat Mudyrk." },
            { role: "danger", horse: "Eucalyptus", prob: 0.13, placeProb: 0.40, finish: "7", sp: "5/1", confidence: "low",
              reason: "Unraced J P O'Brien colt by McKinzie, half-brother to the high-class Passenger, ridden by Sheridan.",
              against: "No form at all, and the yard's debutants have been mixed." }
          ],
          winner: { horse: "Tantardini", sp: "5/2", agentProb: 0.09 },
          grade: "mixed", errors: [],
          notes: "Win Mudyrk (40%) led after 1f from stall 11 and weakened to 9th, 10.25L, on his first Polytrack run after 145 days; the doubts were recorded but the 40% leaned on one franked run. Each-Way Golden Idol 2nd at 10/1. Danger Eucalyptus 7th on debut. Winner Tantardini (9%, 'place at best') had a 5lb claimer and stall 1."
        },
        {
          time: "16:00", name: "Christmas Party Nights At Dundalk Stadium Handicap (Div I)", type: "handicap", distance: "7f",
          going: "Standard", runners: 14, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1600_7f-0-60-handicap-div-1.md", updated: "09:04 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Liamo", prob: 0.13, placeProb: 0.34, finish: "6", sp: "11/1", confidence: "low",
              reason: "Three-pound claim verified: 5th, about 2L behind an OR50 winner at Dundalk 7f on 16 Oct and 2lb lighter today, which rates him about 44 against his OR42; stall 15 sits in a band that has done well in 2026, and cheekpieces are back on.",
              against: "1 win from about 23 flat runs, three of his last five beaten 7L or more, and stall 15 is the widest." },
            { role: "ew", horse: "Battleforsupremacy", prob: 0.12, placeProb: 0.36, finish: "11", sp: "7/2", confidence: "low",
              reason: "Dundalk 7f record of a win in Nov 2025, a 3rd and a 4th (1.8L on 9 Oct off the same OR54); a 5lb claimer rides and blinkers go on for the 2nd time.",
              against: "Carries 12lb more than on 9 Oct off the same mark, and stall 1 (0 winners from 47 stall 1-4 runners since 1 Aug) leaves him tight; he was well beaten in two big fields elsewhere." },
            { role: "danger", horse: "Jazzit", prob: 0.10, placeProb: 0.30, finish: "2", sp: "11/4", confidence: "low",
              reason: "Won this course and trip by a short head on 16 Oct, drawn low (stall 3).",
              against: "Now 4lb heavier and 5 higher in the ratings, and a held-up type." }
          ],
          winner: { horse: "Pocket Jacks", sp: "6/1", agentProb: 0.07 },
          grade: "mixed", errors: [],
          notes: "Open 14-runner handicap: Win Liamo 6th (6L), Each-Way Battleforsupremacy 11th after being hampered 150 yards out, Danger Jazzit 2nd. Winner Pocket Jacks (7%, 6/1) was the 3yo filly with a placed record (2nd, 3rd, 6th) whose rating-versus-form gap we had noted, then trimmed for carrying 12lb more than on her last run; the two races' weights sit on different rating scales (about OR+72 then, OR+80 now), which may have overstated that rise."
        },
        {
          time: "16:30", name: "Christmas Party Nights At Dundalk Stadium Handicap (Div II)", type: "handicap", distance: "7f",
          going: "Standard", runners: 13, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1630_7f-0-60-handicap-div-2.md", updated: "20:55 Tue 27 Oct",
          picks: [
            { role: "win", horse: "Una Matata", prob: 0.21, placeProb: 0.50, finish: "6", sp: "9/4", confidence: "medium",
              reason: "Three Dundalk 7f wins this year, 3rd on 16 Oct at 135 (134 today after a 5lb claim) and beat Jazzy Dancer at level weights; draw 3.",
              against: "Only one of her last six runs was close, she is 10-12lb below her winning marks, and the 16 Oct form is not franked." },
            { role: "ew", horse: "Glen Breeze", prob: 0.12, placeProb: 0.36, finish: "9", sp: "11/1", confidence: "low",
              reason: "Beats Leannespour, Shamanka and Never Mind Me on weight-adjusted head-to-heads; carries 9-1 less a 5lb claim, runs prominently from draw 2.",
              against: "1 win from 16, laboured last time, rating down from 55 to 47, and only one run at Dundalk 7f (7th of 9)." },
            { role: "danger", horse: "Roman Harry", prob: 0.10, placeProb: 0.32, finish: "1", sp: "11/2", confidence: "low",
              reason: "Course-and-distance winner, 4th at Dundalk 7f in March at 141 (5lb more than today) and 2nd over 1m in August.",
              against: "Erratic, and 48 days since his last run." }
          ],
          winner: { horse: "Roman Harry", sp: "11/2", agentProb: 0.1 },
          grade: "mixed", errors: [],
          notes: "Danger Roman Harry (10%) won at 11/2, so the winner was in our three. Win Una Matata, the 9/4 favourite, raced keenly and finished 6th, 2L behind; the case against (one close run in six, 10-12lb below her winning marks) applied. Each-Way Glen Breeze 9th. Never Mind Me was a non-runner (field 13, not 14)."
        },
        {
          time: "17:00", name: "Irish Stallion Farms EBF Auction Maiden", type: "maiden", distance: "6f",
          going: "Standard", runners: 13, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1700_6f-2yo-auction-maiden.md", updated: "09:05 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Crayons In The Sky", prob: 0.37, placeProb: 0.70, finish: "1", sp: "1/2", confidence: "medium",
              reason: "Strongest, franked form: Haven, who beat her about 4L, was next 2nd in the Fillies' Mile; Tosca No Candis (OR 92) beat her only 3/4L over this course and distance in a fast time. Only runner placed at Dundalk, at the same weight as that 2nd.",
              against: "0 from 4 (2nd, 4th, 2nd, 4th) is a placer profile, and her trainer is 0 from 7 in the last 14 days." },
            { role: "ew", horse: "Belle Parvenue", prob: 0.14, placeProb: 0.38, finish: "3", sp: "17/2", confidence: "low",
              reason: "Down 8lb from her last run (about 3L at 6f) after being beaten about 2.35L at level weights; back to 6f with a tongue strap, and her Cork race has worked out (2nd and 4th have won since).",
              against: "Never in the frame, and 5.25L behind at Cork despite 12lb in hand; her low weight reflects her cheap price, not the handicapper's view." },
            { role: "danger", horse: "Normanton", prob: 0.15, placeProb: 0.42, finish: "2", sp: "7/2", confidence: "low",
              reason: "4th on debut in heavy ground over 7f, about 6.75L behind the winner, and likely to improve.",
              against: "Top weight, dropping to 6f, and no frank found for the three in front of him." }
          ],
          winner: { horse: "Crayons In The Sky", sp: "1/2", agentProb: 0.37 },
          grade: "held", errors: [],
          notes: "All three selections filled the first three: Win Crayons In The Sky won at 1/2, Danger Normanton 2nd, Each-Way Belle Parvenue 3rd at 17/2 for a place return. Step In Style was a non-runner and the reserve did not get in (field 13)."
        },
        {
          time: "17:30", name: "Happy Halloween Handicap", type: "handicap", distance: "1m4f",
          going: "Standard", runners: 13, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-28_dundalk/1730_1m4f-handicap.md", updated: "21:15 Tue 27 Oct",
          picks: [
            { role: "win", horse: "Dancing Steve", prob: 0.15, placeProb: 0.40, finish: "2", sp: "9/1", confidence: "low",
              reason: "Carries 8-8 (9-4 less a 10lb claim) against 9-6 when 6th, about 3 3/4L behind Enchanted Lady on 16 Oct, so around 12lb better off; his effective rating of 50 is below his last winning mark of 56.",
              against: "Rider is a very green 10lb claimer (one earlier ride), he fades late, and he is 0 from 10 at Dundalk." },
            { role: "ew", horse: "Coolnagrattan", prob: 0.12, placeProb: 0.36, finish: "5", sp: "3/1", confidence: "low",
              reason: "Unexposed 4yo, 3rd over Dundalk 1m4f 19 days ago and 3rd over Roscommon 1m4f in June, with the same 5lb claimer; level with Wandering Rocks on the 9 Oct line.",
              against: "No win in 6 runs, the 9 Oct form is not franked, and he raced freely both times at Dundalk." },
            { role: "danger", horse: "Celtic Druid", prob: 0.11, placeProb: 0.34, finish: "13", sp: "12/1", confidence: "low",
              reason: "Two wins and a 2nd from four course-and-distance runs, carrying 9-1 after a 7lb claim, 3lb lighter than on 16 Oct.",
              against: "Slow into stride in each of his last three runs, three poor runs in a row, and drawn widest (stall 16)." }
          ],
          winner: { horse: "Gallo Dell Cielo", sp: "10/3", agentProb: 0.11 },
          grade: "mixed", errors: [],
          notes: "Win Dancing Steve was beaten a neck at 9/1, the claim argument held. Winner Gallo Dell Cielo (11%, 10/3 joint favourite) was the horse we flagged for the best Dundalk record in the field (3 wins from 11) but held back for an unexplained rating rise. Each-Way Coolnagrattan 5th at 3/1, Danger Celtic Druid last. My First Rose was a non-runner and the reserves did not get in (field 13)."
        }
      ]
    },
    {
      date: "2026-10-29",
      course: "Punchestown",
      country: "IE",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Turf: Yielding to soft, yielding in places (Sporting Life, checked 18:50 Wed 28 Oct)",
      dataErrors: [
        "Racing Post result pages blocked to plain fetches (403/406): no times against standard, RPR or Topspeed for any run; time comparisons are same-card only.",
        "At The Races Smart Stats behind a bot check (not bypassed): no course trainer/jockey records. No Punchestown 7f draw or pace data found (one earlier Flat meeting on this track, 15 Sep 2026); draw treated as neutral.",
        "15:05: the analyst saw the Sporting Life verdict after the ranking was built; it was not used.",
        "No race-morning non-runner or going re-check was run (third meeting in a row). Last checks were about 19:00 Wed. Non-runners: Anymore (13:05, unsuitable ground), Melchizedek (14:35, off feed), Oracle Of Delphi (15:05 Each-Way, declared in error), Fan Club (15:35, ran yesterday), Pocket Jacks (16:05 Win, ran yesterday). Two selections were void.",
        "Going was recorded as yielding to soft, yielding in places (Wed evening); the official race-day going was Yielding (Yielding to Soft in places), slightly quicker.",
        "Course evidence for future Punchestown 7f races: four of the five 7f winners made all or raced prominently (Imposing, Margot Mae, Celestial Siren, Tai Tam Bay; Buttermere Ridge chased the leader). All races ran 4-6s slow of Racing Post standard."
      ],
      races: [
        {
          time: "13:05", name: "Irish Stallion Farms EBF Fillies Maiden", type: "maiden", distance: "1m",
          going: "Yielding to Soft", runners: 8, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-29_punchestown/1305_1m-2yo-ebf-fillies-maiden.md", updated: "18:57 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Wunderschon", prob: 0.37, placeProb: 0.70, finish: "3", sp: "8/13", confidence: "medium",
              reason: "OR 93, 18lb clear of the only other rated filly; 4th in the Eyrefield Group 3 and 4th in a franked Punchestown fillies' maiden (winner then 2nd in a Group 3, runner-up won next).",
              against: "Still a maiden after 4 runs, never within 2L of the winner, no finishing kick in 3 of 4 comments, and never raced on soft." },
            { role: "ew", horse: "Lan De Ghaire", prob: 0.12, placeProb: 0.36, finish: "6", sp: "28/1", confidence: "low",
              reason: "May form close to Listed and Group horses (3rd a neck behind later Listed winner Dancing Destiny); her 23.7L flop has an IHRB stewards' excuse (stumbled leaving the stalls).",
              against: "Off 158 days, never tried at 1m or on soft, and 18lb below Wunderschon on ratings." },
            { role: "danger", horse: "Petticoat Bay", prob: 0.16, placeProb: 0.44, finish: "1", sp: "10/3", confidence: "low",
              reason: "A P O'Brien Frankel filly on her second run, up to 1m, 3rd on soft on debut, and the 5lb claim makes her the lightest at 8-11.",
              against: "One run, beaten on debut; the step up in trip is untested." }
          ],
          winner: { horse: "Petticoat Bay", sp: "10/3", agentProb: 0.16 },
          grade: "mixed", errors: ["H"],
          notes: "Danger Petticoat Bay won at 10/3: prominent, led early and rallied to lead near the finish, the 5lb claim and second-run case holding. Win Wunderschon 3rd at 8/13 favourite, beaten 0.75L and a neck: 'outpaced under 2f out, ran on, not reach leaders', the no-finishing-kick fault recorded in 3 of her 4 runs recurring (error H). Each-Way Lan De Ghaire 6th, 8.25L, after 158 days off; the gap-pass switch from Unreal Friend (5th) made no difference. San Juan De Lope, the debutant we had at 10%, was 2nd at 6/1. Anymore was a non-runner (unsuitable ground; field 8)."
        },
        {
          time: "13:35", name: "Punchestown Premiere Weekend Sat 21 & Sun 22 November Handicap", type: "handicap", distance: "1m",
          going: "Yielding to Soft", runners: 14, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-29_punchestown/1335_1m-handicap.md", updated: "19:10 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Lady Arwen", prob: 0.17, placeProb: 0.44, finish: "7", sp: "14/1", confidence: "low",
              reason: "Most in hand on handicap yardsticks (ran to about 72-78 against an effective 66 after Cleary's 5lb claim), placed in 4 of her last 6, the only franked form among the contenders, and handles soft.",
              against: "Slowly away in each of her last 6 runs, her last run was her worst of the season, and her Punchestown runs were over 1m1f." },
            { role: "ew", horse: "Flash Of Fire", prob: 0.12, placeProb: 0.34, finish: "4", sp: "9/2", confidence: "low",
              reason: "About 3-6lb in hand on two of her last three runs (4th at Punchestown over 1m 30y, 5th in a strong Naas 7f handicap on soft); mark down 4lb and 9-5 with Mulligan's claim.",
              against: "Beaten 17.25L at Cork last time in first-time cheekpieces, 1 win from 7, may need to settle, and the September start may not be today's." },
            { role: "danger", horse: "Jp's Express", prob: 0.12, placeProb: 0.40, finish: "13", sp: "10/1", confidence: "low",
              reason: "Consistent at 1m-1m1f on soft (3, 3, 6, 5, 1, 3) and a career-best 3rd of 19 at the Curragh last time.",
              against: "On yardsticks he has only run to about his mark (70), a place type; only narrowly ahead of Aquilla Star." }
          ],
          winner: { horse: "Lady Mary Heath", sp: "10/3", agentProb: 0.04 },
          grade: "failed", errors: ["H", "F"],
          notes: "Won by Lady Mary Heath (4%, 10/3 favourite), held up and switched for a run to win going away. Our write-up had her 5lb lighter than her 5th of 23 at the Curragh 9 days earlier and solid in big Curragh fields, but parked her at 4% as a 'maiden after 10 runs' (error F). Win Lady Arwen 7th, 6.75L: 'slowly away, in rear', the fault recorded in each of her last 6 runs (error H). Each-Way Flash Of Fire 4th, beaten a short head for 3rd after challenging. Danger Jp's Express 13th, short of room and beaten 22.75L."
        },
        {
          time: "14:05", name: "Win A Trip To Lapland At Punchestown On Sun 22 November Maiden", type: "maiden", distance: "7f",
          going: "Yielding to Soft", runners: 11, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-29_punchestown/1405_7f-2yo-maiden.md", updated: "18:56 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Nonsense", prob: 0.26, placeProb: 0.60, finish: "2", sp: "15/8", confidence: "low",
              reason: "1.75L 2nd of 12 on debut in a Curragh 7f soft maiden behind a 30/100 shot, 1.75L clear of Wo Wo Never (OR 88): the highest central figure here (about 91), on today's trip and ground.",
              against: "One run at 33/1, the winner has not run since (no frank), headed late, small yard, and stall 10 has unknown effect." },
            { role: "ew", horse: "Imposing", prob: 0.19, placeProb: 0.50, finish: "1", sp: "7/2", confidence: "low",
              reason: "Improved from a 14.75L debut to a 2L 2nd at Leopardstown over 7f; the Critical Reason line puts him about 90-93, and he is the likely leader from stall 3.",
              against: "Leopardstown looked steadily run, 4lb worse off with the smaller claim, untried on soft, and his course debut was poor." },
            { role: "danger", horse: "Oklahoma", prob: 0.18, placeProb: 0.48, finish: "5", sp: "9/4", confidence: "low",
              reason: "Best peak form in the race: 2.25L 2nd to G1 winner Giant Sequoia and 1L 3rd to City of Dubai; OR 87.",
              against: "Weakened in each of his last 3 runs, beaten favourite each time, off 37 days, untried on soft." }
          ],
          winner: { horse: "Imposing", sp: "7/2", agentProb: 0.19 },
          grade: "held", errors: [],
          notes: "Each-Way Imposing won at 7/2, making virtually all from stall 3 exactly as the write-up's lone-leader case said. Win Nonsense (15/8 favourite) 2nd, 1.5L: keen, outpaced 2f out and ran on, a sound pick beaten by the pace set-up. Danger Oklahoma 5th, 4.25L, weakening late for the fourth run in a row as recorded. Princeton (12%) 3rd. All three selections' reasoning held."
        },
        {
          time: "14:35", name: "Premiere Weekend Race & Dine Packages From 75 Euros Nursery Handicap", type: "nursery", distance: "7f",
          going: "Yielding to Soft", runners: 6, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-29_punchestown/1435_7f-2yo-nursery-handicap.md", updated: "18:58 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Margot Mae", prob: 0.24, placeProb: 0.45, finish: "1", sp: "11/4", confidence: "low",
              reason: "Back to 7f on soft-side ground, the conditions of her best run (1.05L 3rd in June, with Ibelieveicanfly, now rated 98-100, behind her); mark down from 78 to 70 and an easier race than last time.",
              against: "Four runs since have rated about 63-69, below today's 70, and the June run was not fast on the clock." },
            { role: "ew", horse: "Gabby Hayes", prob: 0.21, placeProb: 0.40, finish: "6", sp: "8/1", confidence: "low",
              reason: "Best repeated clock figures in the field, including 3rd on heavy at the Curragh behind Moon Sand (5th in a Group 3 next time); 3lb below the mark he placed off, on suitable ground.",
              against: "Beaten 6L+ in all four maidens, 13th of 13 on the all-weather last time, and Miss Cornelia beat him at Galway on worse terms." },
            { role: "danger", horse: "Wecouldavehaditall", prob: 0.22, placeProb: 0.43, finish: "5", sp: "13/8", confidence: "low",
              reason: "1.45L 3rd in the Naas nursery; OR 68 less a 3lb claim is an effective 65, with a first-time hood after pulling hard.",
              against: "Her three 7f runs were beaten 9-12L and the Naas race was slowly run." }
          ],
          winner: { horse: "Margot Mae", sp: "11/4", agentProb: 0.24 },
          grade: "held", errors: [],
          notes: "Win Margot Mae won at 11/4, making all against the far rail back at 7f on easy ground, as argued. Each-Way Gabby Hayes last of 6, 9.25L: raced in last and wide, the hold-up-in-a-steady-pace doubt we recorded. Danger Wecouldavehaditall 5th at 13/8 favourite, no extra late at 7f, the trip doubt recorded. Melchizedek was a non-runner (off feed), as Racing Post had him the evening before."
        },
        {
          time: "15:05", name: "Premiere Weekend Two-Day Ticket Just 35 Euros Maiden", type: "maiden", distance: "7f",
          going: "Yielding to Soft", runners: 11, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-29_punchestown/1505_7f-3yo-plus-maiden.md", updated: "18:58 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Spacebound", prob: 0.30, placeProb: 0.60, finish: "2", sp: "4/5", confidence: "medium",
              reason: "1/2L 2nd over 7f on soft to heavy at the Curragh to Lewis Carroll (now OR 98, Listed-placed), ahead of Zenford and Listentodwindblow; OR down 83 to 77 and 8lb lighter than last time after the 5lb claim.",
              against: "0 from 5, twice beaten favourite, headed or 'no extra' late in 4 of 5 runs, and first-time hood." },
            { role: "ew", horse: "Oracle Of Delphi", prob: 0.14, placeProb: 0.42, finish: "NR", sp: null, confidence: "low",
              reason: "Improved about 11L to a 1.25L 3rd at Navan on 21 Oct, a head ahead of Elmakaya (OR 77) and 2.6L ahead of Celestial Siren; effectively about 77-83 with the fillies' allowance.",
              against: "Only 2 runs, Navan form unfranked, the 3rd came at 66/1, beaten 12.7L on her only soft run, drawn 10." },
            { role: "danger", horse: "Saliba", prob: 0.18, placeProb: 0.48, finish: "4", sp: "4/1", confidence: "low",
              reason: "Highest rated (80), 2nds franked by Back Straight (now 90) and Teoest (84), and 2nd over this course in September.",
              against: "Never run at 7f, and his 1m runs are weaker than his 1m1f-1m2f runs." }
          ],
          winner: { horse: "Celestial Siren", sp: "5/1", agentProb: 0.12 },
          grade: "mixed", errors: ["H", "J"],
          notes: "Won by Celestial Siren (12%, 5/1), our named nearest outsider, pressing the leader and going clear. We ranked her behind Oracle Of Delphi on their Navan meeting, which was her first run for 369 days (error J). Win Spacebound 2nd at 4/5 favourite, 0.5L: 'led but pestered, headed under 2f out, rallied', the headed-late fault recorded in 4 of his 5 runs recurring (error H). Danger Saliba 4th, 1.25L, at 7f for the first time. Each-Way Oracle Of Delphi was a non-runner (declared in error), so void."
        },
        {
          time: "15:35", name: "See You At The GR1 Double Header 21 & 22 November Handicap (Div I)", type: "handicap", distance: "7f",
          going: "Yielding to Soft", runners: 12, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-29_punchestown/1535_7f-0-60-handicap-div-1.md", updated: "19:10 Wed 28 Oct",
          picks: [
            { role: "win", horse: "La Tulipe Noire", prob: 0.16, placeProb: 0.42, finish: "6", sp: "6/1", confidence: "low",
              reason: "At today's weights she is 5.4lb ahead of Tariff (Curragh 20 Oct, his 7lb claim verified) and 1.1lb ahead of Free Solo from a truly run Curragh 7f soft race; best time figure in the field (Curragh 7f heavy, Nov 2025).",
              against: "12 runs since her last win, 0 top-3 in her last 6, the Tariff meeting was slowly run, and her best figures are a year old on heavier ground." },
            { role: "ew", horse: "Staywitherjohnny", prob: 0.13, placeProb: 0.33, finish: "5", sp: "14/1", confidence: "low",
              reason: "6.1lb ahead of Tariff at today's weights from Gowran on 19 Oct despite a slow start; her truly run Gowran 3rd in May is about 8lb above today's effective 47 with Tormey's 7lb; first-time blinkers.",
              against: "Never raced below 1m on the Flat, 0 from 11, and two of her three good figures came in slowly run races." },
            { role: "danger", horse: "Free Solo", prob: 0.13, placeProb: 0.38, finish: "10", sp: "10/1", confidence: "low",
              reason: "Only 1.1lb behind the Win on the same truly run Curragh race; franked Leopardstown 2nd, fast on the clock; running about 2lb above his mark.",
              against: "Aged 9, 14 runs without a win, and 0 from 10 on soft." }
          ],
          winner: { horse: "Tai Tam Bay", sp: "13/2", agentProb: 0.08 },
          grade: "failed", errors: ["J"],
          notes: "Won by Tai Tam Bay (8%, 13/2), who soon led from stall 3, went clear and held on. The write-up had her well handicapped on autumn-2025 form and second up after a layoff, but rated her on the comeback run (error J). Win La Tulipe Noire 6th, 6.25L, outpaced; the head-to-head with Tariff came from a slowly run race, as noted. Tariff, dropped from Danger in the gap pass, ran 3rd at 9/4 favourite. Each-Way Staywitherjohnny 5th, 5.75L, running on from the rear at a trip below her best. Danger Free Solo 10th. Fan Club was a non-runner (ran the day before)."
        },
        {
          time: "16:05", name: "See You At The GR1 Double Header 21 & 22 November Handicap (Div II)", type: "handicap", distance: "7f",
          going: "Yielding to Soft", runners: 11, source: "full", status: "settled",
          writeup: "flat/analyses/2026-10-29_punchestown/1605_7f-0-60-handicap-div-2.md", updated: "19:05 Wed 28 Oct",
          picks: [
            { role: "win", horse: "Pocket Jacks", prob: 0.16, placeProb: 0.44, finish: "NR", sp: null, confidence: "low",
              reason: "Most consistent near her mark (3 of 4 handicaps in the first 3), best runs about 53-58 against a need of 57, and won at Dundalk on 28 Oct in the fastest 7f time of that card.",
              against: "The 7lb penalty leaves no weight in hand; runs again within 24 hours, Polytrack to turf, on ground softer than she has met." },
            { role: "ew", horse: "Buttermere Ridge", prob: 0.15, placeProb: 0.40, finish: "1", sp: "11/2", confidence: "low",
              reason: "3rd at Listowel in a race since franked (winner raised 10lb and placed twice, runner-up won off 71) rates about 61-62 against a need of 53; one of the likely pace-setters.",
              against: "Fades late in 5-6 of his last 6 Flat runs, 1 win in 20, and his Roscommon race has worked out badly." },
            { role: "danger", horse: "Real Petite", prob: 0.13, placeProb: 0.36, finish: "8", sp: "11/2", confidence: "low",
              reason: "Her 4L Gowran win rates about 55 against a need of 46 (OR 53 less a 7lb claim), the biggest upside in the field.",
              against: "Nine Flat runs away from Gowran produced nothing better than 6th, and her only 7f run was 14th." }
          ],
          winner: { horse: "Buttermere Ridge", sp: "11/2", agentProb: 0.15 },
          grade: "mixed", errors: ["I"],
          notes: "Each-Way Buttermere Ridge won at 11/2, prominent and chasing the clear leader, leading over 1f out and going clear: the franked Listowel 3rd and pace case held, and he did not fade this time. Win Pocket Jacks was a non-runner (ran the day before at Dundalk, where she won); she was picked knowing she had run within 24 hours, and no race-morning check was made (error I), so void. Danger Real Petite 8th, 8L, outpaced at 7f as her one 7f run warned. Field 11."
        }
      ]
    },
    {
      date: "2026-11-01",
      course: "Curragh",
      country: "IE",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Straight: Yielding to Soft; Round: Yielding (checked 12:45 GMT)",
      dataErrors: [],
      races: [
        {
          time: "13:27", name: "Ryans Cleaning Race", type: "conditions", distance: "7f",
          going: "Yielding to Soft", runners: 9, source: "full", status: "settled",
          writeup: "flat/analyses/2026-11-01_curragh/1327_7f-conditions-race.md", updated: "13:10 Sun 1 Nov",
          picks: [
            { role: "win", horse: "Excellent Believe", prob: 0.26, placeProb: 0.55, finish: "7", sp: "6/4", confidence: "medium",
              reason: "8lb lighter than his C&D 3rd; field-best RPR 102/TS 52 in that C&D race while giving the winner 21lb; beat Unique Journey 5.5L C&D and now 4lb better off; drops from Class 2/Listed into a conditions race.",
              against: "Winless in his last 6, a beaten favourite, and 0 wins since joining Stephen Thorne - a consistent placer, not a proven winner." },
            { role: "ew", horse: "Key Witness", prob: 0.21, placeProb: 0.50, finish: "5", sp: "7/1", confidence: "medium",
              reason: "Rated 8lb above Storm Ready yet receives 6lb today; gave him only 3lb effective when beaten 0.5L at Naas (now ~9lb better off); soft/heavy-ground CD specialist, front-runner drawn 10 high.",
              against: "A 7lb claimer (claim may not fully count); 6.5L 6th in his only Listed try; rated 5lb below Excellent Believe." },
            { role: "danger", horse: "Storm Ready", prob: 0.13, placeProb: 0.45, finish: "6", sp: "12/1", confidence: "low",
              reason: "Unbeaten 2/2 but both wins narrow (0.3L, 0.5L); progressive 3yo who could beat both if the weight swing or Key Witness's claim doesn't materialise.",
              against: "3yo rated 87 vs older 95-103 at near-level weights; ~9lb swing against him on the Key Witness form." }
          ],
          winner: { horse: "Unique Journey", sp: "4/1", agentProb: 0.13 },
          grade: "failed", errors: ["K"],
          notes: "Settled. Won by Unique Journey (4/1), my named outsider (0.13) - top OR 103 and a last-time winner, buried under '0 wins at 7f'. Win Excellent Believe (6/4f) 7th: the recorded placer-profile doubt ('winless in 6, beaten favourite, 0 wins for the yard') materialised - a consistent placer made the Win (error K). EW Key Witness 5th, Danger Storm Ready 6th."
        },
        {
          time: "14:02", name: "Isuzu Ireland Handicap", type: "handicap", distance: "7f",
          going: "Yielding to Soft", runners: 25, source: "full", status: "settled",
          writeup: "flat/analyses/2026-11-01_curragh/1402_7f-handicap.md", updated: "13:16 Sun 1 Nov",
          picks: [
            { role: "win", horse: "Givehertilxmas", prob: 0.18, placeProb: 0.45, finish: "15", sp: "14/1", confidence: "medium",
              reason: "Won the 20-runner Curragh 7f handicap on soft 17 days ago (exact course/distance/ground) by 1.5L, beating 5 of today's field; second win in a row; carries ~4lb less actual than when she won.",
              against: "Up to 72 after two wins; the 5lb swing puts Dolly Hello ~1L ahead on the single head-to-head; her wins came when well in at the bottom of the handicap." },
            { role: "ew", horse: "Dolly Hello", prob: 0.10, placeProb: 0.38, finish: "21", sp: "25/1", confidence: "medium",
              reason: "3rd in the key race (a head behind the runner-up) and now ~1L ahead of that race's winner on today's weights; soft/heavy 7f form; genuine place chance at a longer fair price than the Win.",
              against: "No win in her last 6; 'never nearer' 3rd; a 14/14 blip in August." },
            { role: "danger", horse: "Therewillbeglory", prob: 0.12, placeProb: 0.42, finish: "7", sp: "5/1", confidence: "medium",
              reason: "Most consistent (2nd/2nd/2nd in handicaps, incl. a 22-runner Curragh 6f soft) and won last time - but that was a fillies maiden, and her handicap record is near-misses, not wins.",
              against: "Won a fillies maiden (not a handicap) after 0 from 9; +5lb today." }
          ],
          winner: { horse: "Thru And Thru", sp: "12/1", agentProb: null },
          grade: "failed", errors: [],
          notes: "Settled. Won by Thru And Thru (12/1), unrated. Win Givehertilxmas 15th at 14/1 (market far less bullish than my 0.18); EW Dolly Hello 21st; Danger Therewillbeglory 7th. Open 25-runner handicap - no pick placed."
        },
        {
          time: "14:37", name: "QuinnBet Loughbrown Stakes (Group 3)", type: "group", distance: "2m 71y",
          going: "Yielding", runners: 11, source: "full", status: "settled",
          writeup: "flat/analyses/2026-11-01_curragh/1437_2m-group-3-stakes.md", updated: "13:20 Sun 1 Nov",
          picks: [
            { role: "win", horse: "Chally Chute", prob: 0.34, placeProb: 0.66, finish: "7", sp: "8/1", confidence: "medium",
              reason: "Won this race last year (2025 Loughbrown by 3.5L) and the Irish Cesarewitch over 2m here last month off top weight; meets the Cesarewitch 3rd (Galileo Dame) and 6th (Sky Captain) on far better terms.",
              against: "7-day return after a below-par 6th in the G1 Royal-Oak; his wins came on heavy, so any drying would blunt his edge." },
            { role: "ew", horse: "Abbotsford", prob: 0.10, placeProb: 0.38, finish: "2", sp: "11/2", confidence: "medium",
              reason: "Improving Frankel 3yo, the only runner bar Chally Chute with a 2m win this season (Beggar's End, soft, by 2L; beat Galileo Dame ~5.25L giving 6lb); gets 6lb WFA, Weld has won 2 of last 5 runnings.",
              against: "That win was a 100k handicap off OR 96; his one stakes try (Vinnie Roe Listed) was a flop - 7th of 9, ~10L, 11/4 favourite." },
            { role: "danger", horse: "Amelia Earhart", prob: 0.25, placeProb: 0.60, finish: "1", sp: "2/1", confidence: "low",
              reason: "G1-placed four times this season (St Leger 3rd, Royallieu 3rd, Royal-Oak 4th), drops from G1 to G3 and receives 9lb from Chally Chute; finished ~3L in front of him in the Royal-Oak.",
              against: "A 2m stamina query and no win since May." }
          ],
          winner: { horse: "Amelia Earhart", sp: "2/1", agentProb: 0.25 },
          grade: "mixed", errors: [],
          notes: "Settled. Danger Amelia Earhart won at 2/1fav (G1 class dropping to G3, receiving 9lb - winner in our three); EW Abbotsford 2nd at 11/2 (placed). Win Chally Chute 7th at 8/1 - the 7-day-return-after-G1 doubt materialised; course form was ranked over current G1 class."
        },
        {
          time: "15:12", name: "Keadeen Hotel Premier Handicap", type: "handicap", distance: "1m",
          going: "Yielding to Soft", runners: 21, source: "full", status: "settled",
          writeup: "flat/analyses/2026-11-01_curragh/1512_1m-premier-handicap.md", updated: "13:19 Sun 1 Nov",
          picks: [
            { role: "win", horse: "Majestic King", prob: 0.14, placeProb: 0.40, finish: "8", sp: "6/1", confidence: "medium",
              reason: "Verified head-to-heads: 3rd 1.25L behind Iamimmaculate (4 Oct) while 3lb better off, now 6lb better off (a ~3lb swing that clears the 1.25L); beat Uncle Goalie while 3lb better off on 18 Oct, same terms today.",
              against: "Career-high mark 82 in his deepest race; his two wins were low-grade (Listowel off 68); draw 9 neutral." },
            { role: "ew", horse: "Lady Lilac", prob: 0.07, placeProb: 0.34, finish: "2", sp: "12/1", confidence: "medium",
              reason: "+10lb swing vs Iamimmaculate (5th 1.75L behind carrying 9-1, now 6lb better off - clearly reverses it); 17lb better off vs Diego El Queso; drawn 22 (favoured on soft).",
              against: "1 win in 17 (7 places) - a placer, hence EW not Win." },
            { role: "danger", horse: "Iamimmaculate", prob: 0.11, placeProb: 0.35, finish: "6", sp: "12/1", confidence: "low",
              reason: "Won this grade at this track/trip 4 Oct off 85, progressive; most likely to beat the top two if the head-to-head logic misfires.",
              against: "Low draw 2 on soft, +5lb." }
          ],
          winner: { horse: "Java Wood", sp: "40/1", agentProb: null },
          grade: "mixed", errors: [],
          notes: "Settled. Won by Java Wood (40/1), unrated. EW Lady Lilac 2nd at 12/1 (the +10lb swing vs Iamimmaculate held - place return). Win Majestic King 8th at 6/1JF - the 'career-high mark in deepest race' doubt held. Danger Iamimmaculate 6th."
        },
        {
          time: "15:47", name: "Velo Coffee At The Curragh Maiden", type: "maiden", distance: "1m4f",
          going: "Yielding", runners: 20, source: "full", status: "settled",
          writeup: "flat/analyses/2026-11-01_curragh/1547_1m4f-maiden.md", updated: "13:30 Sun 1 Nov",
          picks: [
            { role: "win", horse: "Loosen And Limber", prob: 0.24, placeProb: 0.55, finish: "1", sp: "1/1", confidence: "medium",
              reason: "Only runner with a course-and-distance placing this season (3rd/7 over C&D 20 Oct, beaten 3.75L by the 1/5-fav Together Now), improving sharply; carries 9-3 (10lb less than older geldings).",
              against: "Only 2 starts; the 3rd came in a 7-runner fillies maiden; 80/1 both runs; drawn widest of the contenders (18)." },
            { role: "ew", horse: "Purple Bandit", prob: 0.18, placeProb: 0.45, finish: "9", sp: "11/2", confidence: "medium",
              reason: "Debut 2nd/15 at Roscommon over 1m4f (beaten 5.5L by Miss Romagna) and finished ~1.75L ahead of Almazann, who won a Curragh 1m4f maiden next; failed to stay 2m1f so the drop back to 1m4f is a plus.",
              against: "Beaten 5.5L while conceding 5lb; only 2 starts; blinkers already on for that 2nd." },
            { role: "danger", horse: "Joe Cool", prob: 0.15, placeProb: 0.48, finish: "2", sp: "6/1", confidence: "low",
              reason: "Most proven (OR 75, three flat seconds, a hurdle win), cheekpieces worked (2nd latest), 5lb better off with Navy Guitar than when beating him 6L.",
              against: "0-for-8 on the flat; no 12f form (13f 4th 14.5L, 14f 10th 14L); latest 2nd was in a 'very poor race'." }
          ],
          winner: { horse: "Loosen And Limber", sp: "1/1", agentProb: 0.24 },
          grade: "held", errors: [],
          notes: "Settled. Win Loosen And Limber won at 1/1fav (only C&D placer, improving) - correct but short price. Danger Joe Cool 2nd at 6/1. EW Purple Bandit 9th - the 'beaten 5.5L while conceding 5lb, only 2 starts' doubt materialised."
        },
        {
          time: "16:20", name: "QuinnBet Finale Stakes", type: "listed", distance: "1m4f",
          going: "Yielding", runners: 12, source: "full", status: "settled",
          writeup: "flat/analyses/2026-11-01_curragh/1620_1m4f-listed-stakes.md", updated: "13:13 Sun 1 Nov",
          picks: [
            { role: "win", horse: "Thread Of Gold", prob: 0.34, placeProb: 0.62, finish: "1", sp: "2/1", confidence: "medium",
              reason: "Most reliable progressive profile: G3 Kilternan 5th (3.5L) plus back-to-back Premier handicap wins (Nasrullah 1m1f off 88, Guinness 1m4f off 97); top-rated 107, ~12lb clear, no poor run all season, G3 to weak Listed.",
              against: "50 days off; held-up style needs a fair pace; the corrected weight-adjusted Kilternan line now favours In My Teens (~2.5L better at today's level weights), so his edge is reliability, not best form." },
            { role: "ew", horse: "The Austrian", prob: 0.12, placeProb: 0.40, finish: "4", sp: "4/1", confidence: "medium",
              reason: "Improving 3yo (7211), two wins at 1m4f+ (Listowel maiden 2.25L, Thurles handicap off 89), 24 days fresh; best place chance of the outsiders at a long fair price.",
              against: "Only maiden/5-runner-handicap grade; needs ~10lb to win at Listed level; wandered when hitting the front." },
            { role: "danger", horse: "In My Teens", prob: 0.15, placeProb: 0.38, finish: "5", sp: "14/1", confidence: "low",
              reason: "Strongest C&D form (Ragusa Premier won 7L eased off 96 at this C&D, 9lb lighter today) and weight-adjusted better than Thread Of Gold on the Kilternan line - chief threat if she rediscovers form.",
              against: "Last three runs 6th/8th/12th, ran freely, poor on soft." }
          ],
          winner: { horse: "Thread Of Gold", sp: "2/1", agentProb: 0.34 },
          grade: "held", errors: [],
          notes: "Settled. Win Thread Of Gold won at 2/1fav (reliability over the Kilternan head-to-head - correct). EW The Austrian 4th (just out of the 3 places) at 4/1. Danger In My Teens 5th."
        }
      ]
    }
  ]
});
