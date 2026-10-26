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
  errorTypes: {},
  meetings: [
    {
      date: "2026-10-26",
      course: "Kempton",
      country: "GB",
      code: "flat",
      playbook: "flat/AGENTS-flat-v2.md",
      going: "Polytrack: Standard to Slow",
      dataErrors: [],
      races: [
        {
          time: "16:10", name: "Unibet's New VAR Goal Guarantee Novice Stakes (GBB Race)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1610_7f-class-4-novice-stakes.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Divine Symmetry", prob: 0.39, finish: "-", confidence: "low",
              reason: "Better Racing Post figure at today's weights (77 v 72) and a strong frank: the 3rd from his debut won next time.",
              against: "One run only, held up and keen in a slowly run race; horses held up last time win 8-10% of these at Kempton against 18-21% for those prominent." },
            { rank: 2, horse: "Imperial Ballet", prob: 0.36, finish: "-", confidence: "low",
              reason: "Only previous winner and only rated runner (OR 83); her 2yo best (RPR 80) beats his 77-equivalent, and she has tracked the leaders.",
              against: "Has run to 72 since her 13-month break, gives 2lb, and faded late in her only run at 7f." },
            { rank: 3, horse: "Al Mandoos", prob: 0.10, finish: "-", confidence: "low",
              reason: "Unraced Godolphin newcomer; ranked behind the raced pair under rule E, and bin Suroor newcomers are 0 from 11 this season.",
              against: "No form at all; an unraced 3yo this late in the year has often had problems." },
            { rank: 4, horse: "Virtue King", prob: 0.05, finish: "-", confidence: "low", danger: true,
              reason: "First-time cheekpieces, dropping from 1m to 7f, and raced handily last time.",
              against: "Still 10 lengths or more behind Class 4 novice winners." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 18:06 25 Oct. Top two level on Talking Bear margins and Topspeed; Divine Symmetry narrowly preferred on RP figures (75 v 72, +2lb) and a strong frank (Grow Old With Me RPR 88 next time). Kempton 7f novice count (92 races): draw neutral; held up last time 8-10% v prominent 18-21%. bin Suroor newcomers 0/11 since May."
        },
        {
          time: "16:45", name: "Unibet More Extra Place Races EBF Novice Stakes (GBB Race) (Div I)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 10, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1645_7f-class-3-2yo-novice-stakes-div-1.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Red Wizard", prob: 0.27, finish: "-", confidence: "low",
              reason: "Best course form (5th of 8 over C&D, 4L, chasing the winner), about 1.3s faster than Stytch over C&D after adjusting for each night, and franked: the 2nd and 4th have both run 2nd since (OR85, OR86).",
              against: "Never closer than 4 lengths; Charlton is 0 from 28 and Edmunds 0 from 27 with 2yos at Kempton; only 2 runs." },
            { rank: 2, horse: "Stytch", prob: 0.17, finish: "-", confidence: "low",
              reason: "About 2L behind OR79 Gold Army at Salisbury (about 75), RPR 71 level with Red Wizard's, and a first-time hood to settle him.",
              against: "Keen and held up in both runs (held up last time wins 11% of these); his C&D run was 12L back and about 1.3s slower than Red Wizard's; A King 0 from 14 with 2yos at Kempton." },
            { rank: 3, horse: "Idealise", prob: 0.14, finish: "-", confidence: "low",
              reason: "Balding/Murphy Frankel newcomer (Murphy 24% at Kempton); the raced form he meets tops out in the mid-to-high 70s.",
              against: "Unraced: newcomers win 6% of Kempton 7f 2yo novices, Balding's Kempton newcomers are 4 from 48, and the dam's only runner was a 63-rated filly." },
            { rank: 4, horse: "Rattenbury", prob: 0.10, finish: "-", confidence: "low", danger: true,
              reason: "Strong debut race: about 63-66 on collateral (Rogue Imperial OR78, Storm Blade OR81 ahead), and second-run horses win 16% of these.",
              against: "147 days off, up from 6f to 7f by a sprinting sire, slowly away last time; C Hills 0 from 24 with 2yos at Kempton." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 19:45 25 Oct after a full audit (5 errors of my own corrected) and new counts from 946 Kempton races. Order unchanged. Red Wizard: franked collateral 76-78, adjusted C&D time +0.30s v typical winner (Stytch +1.56s), but Charlton 0/28 with 2yos at Kempton. Idealise: pedigree weaker than first stated. Rest: King Gamrah 10% (Tate debuts 3/7), India's Ridge 7%, Sequoiadendron 6%, Boy's Slipper 4%, St Peter's Cross 3%, Clink 2%."
        },
        {
          time: "17:15", name: "Unibet More Extra Place Races EBF Novice Stakes (GBB Race) (Div 2)", type: "novice", distance: "7f",
          going: "Standard to Slow", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1715_7f-class-3-2yo-novice-stakes-div-2.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Showmaster", prob: 0.41, finish: "-", confidence: "medium",
              reason: "2.5L behind Kamaal (rated 87-91) on debut, about 82 on collateral and a time figure about 20lb better than any other raced runner; sat in touch, the style that wins these.",
              against: "One run, on soft turf, and nothing from that race has run since; Cox 1 from 20 with 2yos at Kempton; four newcomers from paying yards." },
            { rank: 2, horse: "Raslan", prob: 0.10, finish: "-", confidence: "low",
              reason: "Second-best collateral (about 57-61), now with Boughey (2yos 5 from 24 here) and Murphy; raced handy both times and improved from 11.85L to 5.8L beaten.",
              against: "About 20lb to find with Showmaster; up to 7f, first run on Polytrack, 60 days off, beaten favourite on debut, no frank found." },
            { rank: 3, horse: "Le Drakkar", prob: 0.10, finish: "-", confidence: "low",
              reason: "Most expensive newcomer (185,000 euros), dam a 1m winner from a useful family; Egan rides.",
              against: "No form; de Foy 2yos 2 from 18 here; first-time tongue tie on a debutant; Easy Evening has an equal claim." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 20:50 25 Oct; re-checked 07:35 26 Oct, no non-runners. Showmaster's form is in the 80s, the rest well below; newcomers win about 6-8% of these and held-up horses won 3 of 203 Kempton 7f 2yo novices. Rest: Easy Evening 10%, Ala Et Prece 7%, Sashimono 7%, Punto Di Blu 6%, Green Tundra 5%, Turbo Charger 4%."
        },
        {
          time: "17:45", name: "Unibet 40,000+ Live Streamed Events Handicap", type: "handicap", distance: "7f",
          going: "Standard to Slow", runners: 12, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1745_7f-class-4-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "I'm Workin On It", prob: 0.18, finish: "-", confidence: "low",
              reason: "Best weight-adjusted Kempton figures in the race and they repeat (17.2, 14.6, 11.3); head-to-heads put him about 4-5lb ahead of Port Road and Blue Prince; drops to Class 4 at 7f, where he has won 4 times here.",
              against: "Top weight on his highest mark and no win off higher than 81; quiet stable (Millman 1 from 20 here in six months); best figures came at 1m." },
            { rank: 2, horse: "Siwa Oasis", prob: 0.16, finish: "-", confidence: "low",
              reason: "Progressive 3yo, 7f form 2-1-1 including a cosy C&D handicap win; races handy from stall 6; Egan 11 from 55 here.",
              against: "Up 5lb for one handicap win with no frank yet; Blue Prince about level on the weights; Kempton figure (6.1) well below the top pick's." },
            { rank: 3, horse: "Rogue Messiah", prob: 0.13, finish: "-", confidence: "low",
              reason: "All-weather form 2-1-2, including a C&D 2nd off 85 staying on; best stall (1); his flops came on fast turf.",
              against: "2lb higher than for a defeat by a horse that has not run since; Luke Morris 3 from 65 here; needs the gaps from mid-division." },
            { rank: 4, horse: "Caviar Cowboy", prob: 0.11, finish: "-", confidence: "low", danger: true,
              reason: "Beaten half a length over C&D off today's mark by Lord Britain, since rated 100: the best-franked run in the race.",
              against: "Unplaced in three runs since, 61 days off, gelded since, stall 9." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 21:25 25 Oct. Update 07:35 26 Oct: Dr Strangelove (1%, stall 14) now a non-runner as well as Tavana, 12 run; picks unchanged. Lunario's 7lb claim taken off (carries 8-7). Rest: Blue Prince 9%, Pinatubo's Legacy 8%, Weffaag 8%, Wild Nature 5%, Lunario 4%, Port Road 4%, Aigeas 2%, City Cyclone 2%."
        },
        {
          time: "18:15", name: "Bet 20 Pound Get 20 Pound With Unibet Novice Stakes (GBB/GBBPlus Race)", type: "novice", distance: "1m3f219y",
          going: "Standard to Slow", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1815_1m4f-class-3-novice-stakes.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Maldives", prob: 0.30, finish: "-", confidence: "low",
              reason: "Ran to her mark of 80 on her handicap debut and the form is franked three times since; drops 11lb to novice weights and holds the highest rating at today's weight (about 76).",
              against: "Never run beyond 1m2f or on Polytrack; best figure on soft turf; heavy defeats in Group/Listed company; de Foy 4 from 58 at Kempton." },
            { rank: 2, horse: "Liam Mera Kai", prob: 0.22, finish: "-", confidence: "low",
              reason: "Proven stayer on an artificial surface: beaten a short head over 1m3f at Southwell, 6.5L clear of the rest; hurdles winner rated 111; stall 1, races handy.",
              against: "Hung and was caught late last time; loses his 5lb claim, so carries 2-3lb more; time figure well below Maldives's; Greatrex Flat runners 4 from 40 here." },
            { rank: 3, horse: "Sailor Song", prob: 0.16, finish: "-", confidence: "low",
              reason: "Best form on paper (RPR 86-88, 1.5L behind Al Azd, now rated 92) and races handy.",
              against: "184 days off, first run for Loughnane after leaving Godolphin, beaten 17.45L last time; the 88 came with a 7lb claim; widest stall." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 21:45 25 Oct; re-checked 07:35 26 Oct, no non-runners. Pete's Sake's 5lb claim taken off. Only 19 Kempton 1m4f non-handicaps in the draw/pace count, so treated as weak. Rest: Flagbearer 12%, Allaire 11%, Bintnaseefa 3%, Pete's Sake 2%, Perzaaneh 2%, Katana 2%."
        },
        {
          time: "18:45", name: "Try Unibet's New Racing Bet Builder Handicap", type: "handicap", distance: "1m",
          going: "Standard to Slow", runners: 13, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1845_1m-class-4-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Fight Your Corner", prob: 0.18, finish: "-", confidence: "medium",
              reason: "Best-franked form in the race and over C&D: the 3rd, 4th (London Mile final) and 5th from his 0.3L 2nd have all won since; 1lb lower today; two matching Kempton figures; stall 3.",
              against: "68 days off; Tate 0 from 16 at Kempton in six months; beaten 4.15L as favourite off this mark; his times are below Uniting's and Gilet's best." },
            { rank: 2, horse: "Uniting", prob: 0.14, finish: "-", confidence: "low",
              reason: "Best time figure in the field (neck 2nd in the Southwell Mile Series final at today's weight) and a C&D win; Kavanagh's 3lb claim; stall 1.",
              against: "202 days off, first run for Luke Dace, first-time hood; 3lb higher; Southwell race only partly franked; held up there." },
            { rank: 3, horse: "Breathe Easy", prob: 0.10, finish: "-", confidence: "low",
              reason: "Unexposed (4 runs, 2 wins), Balding and Murphy (20% over 1m here), stall 2, races with the pace.",
              against: "240 days off; handicap win was a 4-runner race with a weak time; the case is mostly yard, jockey and draw." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 22:15 25 Oct; re-checked 07:35 26 Oct, Musical Angel still the only non-runner. Uniting's 3lb claim taken off (carries 9-5). Rest: Fallacious Promise 9%, Loblolly 9%, Gilet 8%, Drifts Away 8%, Bold Suitor 6%, Bubbles Wonky 5%, Studious 4%, Crossbar 4%, Get Outta Here 3%, Warning Sign 2%."
        },
        {
          time: "19:15", name: "Try Unibet's Superboosts Handicap", type: "handicap", distance: "1m2f219y",
          going: "Standard to Slow", runners: 13, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1915_1m2f-class-6-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Ataturk", prob: 0.15, finish: "-", confidence: "low",
              reason: "Most consistent at this level (0.05L 2nd, 2.3L 4th, 0.2L 2nd in Class 6 at 1m2f-1m4f); the 4th came behind Aravalli and Captain Cairney, both winners since.",
              against: "Stall 13: stalls 10+ have won 2 of 101 over this C&D; 0 from 6, beaten at 4/5; Morrison 0 from 14 at Kempton in six months." },
            { rank: 2, horse: "Uzincso", prob: 0.12, finish: "-", confidence: "low",
              reason: "Kempton specialist on his lowest mark (55, from 61 in April), stall 3; C&D 3rd off 59 in June; Butler 7 from 28 at this trip here.",
              against: "Aged 10, 4 wins from 50; weakened as favourite on 9 Sep and beaten 8.75L on 23 Sep; the mark is falling because the form is." },
            { rank: 3, horse: "Kathleen Mary", prob: 0.11, finish: "-", confidence: "low",
              reason: "Kept on from the rear at Leicester about 3lb behind Ataturk; 18lb lower than July 2025; stall 4; Murphy 22% at this trip here.",
              against: "0 from 11, unplaced in her last six; the booking is the main positive, an obvious signal." },
            { rank: 4, horse: "Baron Wagstaff", prob: 0.10, finish: "-", confidence: "low", danger: true,
              reason: "Neck 2nd over 1m4f at Wolverhampton off 54 last time; stall 2.",
              against: "Held up (wins 7.7% here), up 3lb, trainer 0 from 11 here." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 22:45 25 Oct; re-checked 07:35 26 Oct, Tales Old As Time still the only non-runner. Strong C&D draw effect (stalls 10+ 2 from 101) counts against the top pick; weak race. Rest: Katalyst 9%, Fizzy Bear 8%, Brave Leader 8%, Heart Sign 8%, Somethingintheair 7%, Boogie Inthejungle 3%, Indian Mary 3%, Open To Offers 3%, Golden Caviar 3%."
        },
        {
          time: "19:45", name: "Unibet Supports Safer Gambling Handicap", type: "handicap", distance: "6f",
          going: "Standard to Slow", runners: 12, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/1945_6f-class-6-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Roy Lane", prob: 0.20, finish: "-", confidence: "low",
              reason: "C&D 2nd of 12 off today's mark, franked (the 3rd won next time, the winner raised 7lb); first run for Fanshawe then; only 1lb more today; stall 2.",
              against: "A maiden with one good run; his time figure is behind Southbank's, Tie Fighter's and Diamond Dreamer's best; races midfield; 42 days off." },
            { rank: 2, horse: "Southbank", prob: 0.11, finish: "-", confidence: "low",
              reason: "C&D winner off 54 now on 49, his lowest mark in two years; carries 6-11lb less than in his best spring runs, the best time figures in the field.",
              against: "Last two runs poor (13th of 17, then 10th of 11 here, 'found nil'); a low mark only helps if he is running to form; trainer 4 from 46 here." },
            { rank: 3, horse: "Preferred", prob: 0.10, finish: "-", confidence: "low",
              reason: "Stall 1 and a front-runner where the leader wins a quarter of these; few low-drawn rivals have early speed; Rossa Ryan 29% over 6f here; mark down 5lb.",
              against: "Maiden after 5 runs with weak figures; weakened after leading at Southwell; Tate 0 from 16 here; hood left off." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 23:10 25 Oct; re-checked 07:35 26 Oct, no non-runners. Leaders win about 25% of Kempton 6f handicaps (114 races). Rest: Everydaysasaturday 10%, Diamond Dreamer 9%, Express Train 8%, Tie Fighter 8%, Stapleford Park 6%, Wild Act 6%, Esplanade 5%, Nezeeh 4%, Addictive 3%."
        },
        {
          time: "20:15", name: "Bet At racingtv.com Handicap", type: "handicap", distance: "1m7f218y",
          going: "Standard to Slow", runners: 12, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_kempton/2015_2m-class-6-handicap.md", updated: "07:35 Mon 26 Oct",
          picks: [
            { rank: 1, horse: "Ada Rose", prob: 0.16, finish: "-", confidence: "low",
              reason: "Two close 2nds in her only runs at 2m, only 1lb higher; the Newcastle race is franked (Niffler won over C&D next time, the 3rd won next time); races handy; Egan 11 from 55 here.",
              against: "1 win from 9; both 2nds in small fields (4 and 6 runners); 51 days off; the collateral edge over Shopaholic runs through a chain of races." },
            { rank: 2, horse: "La Trinite", prob: 0.14, finish: "-", confidence: "low",
              reason: "Won at Bath 7 days ago by 3.75L, and carries 11lb less than that day (it was an amateur riders' race); about 4.5lb ahead of Femme Fatale on their Lingfield meeting.",
              against: "5lb penalty puts her above the mark she won off; Bath good to soft is a different test; keen early; other recent runs ordinary." },
            { rank: 3, horse: "Shopaholic", prob: 0.13, finish: "-", confidence: "low",
              reason: "Best-franked win in the race (Niffler, her 2nd at Wolverhampton, won over C&D next time); Murphy 6 from 20 at 2m here.",
              against: "Top weight after a 4lb rise, stall 12, 4th of 5 last time and tailed off before that; behind Ada Rose through Niffler; first-time cheekpieces." },
            { rank: 4, horse: "Noble Grace", prob: 0.12, finish: "-", confidence: "low", danger: true,
              reason: "Won two of her last four, the latest over 2m2f, staying on strongly.",
              against: "Up 3lb; only Kempton run a 33.8L novice defeat; the race she won had six runners." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 23:40 25 Oct; re-checked 07:35 26 Oct, no non-runners. La Trinite's 5lb penalty and Public Enemy's 3lb claim accounted for. Low-grade 2m: times near-uninformative, ranked on beaten distances and franks. Rest: State Express 10%, Femme Fatale 8%, Further Measure 7%, Make It Up 6%, Electric Gambler 6%, Letmebetheboss 3%, Public Enemy 3%, No Ordinary Joe 2%."
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
      dataErrors: [],
      races: [
        {
          time: "16:30", name: "All-Weather Championship Is Back Apprentice Handicap (Div 1)", type: "handicap", distance: "4f214y",
          going: "Standard", runners: 10, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1630_5f-class-6-apprentice-handicap-div-1.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Stash The Cash", prob: 0.19, finish: "-", confidence: "low",
              reason: "Best C&D record (2 close 2nds in 4 runs, figures -5/-6 at about today's weight), beat Bishop's Glory over C&D and is now 2lb better off; races up with the pace, which wins most often here.",
              against: "181 days off, new yard, and his rider is 1 from 49 at Southwell; his April C&D form is not franked." },
            { rank: 2, horse: "Fancy Dancer", prob: 0.18, finish: "-", confidence: "low",
              reason: "Three 2nds at 5f in her last 6, races prominently, and a 5lb claim makes her 12lb better off with Tomarlo than when 4L behind him.",
              against: "Beaten 8.75L last time; neither of her key runs is franked; trainer 0 from 8 at Southwell; first-time blinkers." },
            { rank: 3, horse: "Midnight Lir", prob: 0.15, finish: "-", confidence: "low",
              reason: "C&D 6th beaten 2.25L when denied a clear run, his key Thirsk run is franked, and his mark has fallen to 54.",
              against: "No place in his last 6, 2 wins from 37, and his rider is 0 from 15 at Southwell." },
            { rank: 4, horse: "Tomarlo", prob: 0.13, finish: "-", confidence: "low", danger: true,
              reason: "Made all at Wolverhampton in July; the winner of his last race has won again; first-time cheekpieces.",
              against: "Beaten 5.65L off this mark over C&D last time; trainer 4 from 54 and rider 0 from 19 at Southwell." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Small changes, same order. Stash The Cash eased from 21% to 19%: his rider Taryn Langley is 1 from 49 at Southwell AW in two years, and his 28 Apr C&D form is not franked (the two horses that have run since have not placed). Midnight Lir up from 14% to 15%: his key Thirsk run is franked (the winner Sunlit Sea has won since). Bishop's Glory up from 10% to 11%. Leaders win 21.7% of 8+ runner 5f races here against 7.2% for those held up, which suits the front-running Fancy Dancer, Stash The Cash and Tomarlo. Rest: Bishop's Glory 11%, Timebar 7%, Mister Moet 5%, Beautiful Rumour 5%, Ten Cuidado 4%, Lil Wade 3%."
        },
        {
          time: "17:00", name: "All-Weather Championship Is Back Apprentice Handicap (Div 2)", type: "handicap", distance: "4f214y",
          going: "Standard", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1700_5f-class-6-apprentice-handicap-div-2.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Pivotal Terms", prob: 0.24, finish: "-", confidence: "low",
              reason: "Won at Southwell last time, her 7lb claim offsets the 2lb rise, she was 7L clear of Beach Partee, and her trainer is 18% here.",
              against: "Drops from 6f to 5f, where three of her four runs this year were beaten 5.5L+; keen and held up, and hold-up horses win 7% of 5f races here." },
            { rank: 2, horse: "Kipp Kelly", prob: 0.19, finish: "-", confidence: "low",
              reason: "Most consistent 5f AW form in the race: 5 of his last 6 within 2L, including a win off 47 and a 2nd off today's mark.",
              against: "216 days off, a placer profile (1 win from 28), and trainer and rider are both about 4% at Southwell." },
            { rank: 3, horse: "Beach Partee", prob: 0.16, finish: "-", confidence: "low",
              reason: "Placed in 4 of his last 6, including a C&D 4th; his Brighton 2nd is franked (the winner has won since).",
              against: "Beaten 7.1L by Pivotal Terms 9 days ago; Dixon yard 4% and his rider 0 from 27 at Southwell." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Same order. Pivotal Terms up from 22% to 24%: trainer Iain Jardine is 12 from 66 (18%) at Southwell AW. Kipp Kelly down from 20% to 19% (trainer 5 from 112, rider 3 from 74 here). Beach Partee down from 17% to 16%: his key Brighton run is franked, but the Dixon yard is 11 from 251 (4%) here and his rider is 0 from 27. Pivotal Terms' winning form: no frank found (none of the first three has run since). Rest: Bridget's Baby 12%, Anglesey Lad 7%, Coast 6%, Great Success 6%, Auradue 5%, Petes Diamond 5%."
        },
        {
          time: "17:30", name: "AWC Finals Day At Newcastle 26th March Maiden Fillies' Stakes (GBB/GBBPlus Race)", type: "maiden", distance: "1m3f23y",
          going: "Standard", runners: 6, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1730_1m3f-class-3-maiden-fillies-stakes.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Peace Belle", prob: 0.40, finish: "-", confidence: "medium",
              reason: "Rated 96 from placings in Listed and Group staying races, about 14lb clear of the rated 3yos even after giving 5lb.",
              against: "Drops to 1m3f, where she has been beaten twice; slowly away in 2 of her last 3, and held-up horses win 6.8% over this trip here." },
            { rank: 2, horse: "Yamnah", prob: 0.34, finish: "-", confidence: "medium",
              reason: "Beaten 1.5L at Kempton over almost the same trip (best near-trip AW figure here), 7L clear of Hatta Romance, and Gosden runners win 26% at Southwell.",
              against: "Two runs and no win; her Kempton form is not franked." },
            { rank: 3, horse: "Cracking Beauty", prob: 0.12, finish: "-", confidence: "low",
              reason: "Nose 2nd off 72 in a 1m4f handicap and 3rd at Kempton over this sort of trip.",
              against: "OR 74, about 22lb below Peace Belle; 59 days off; trainer 1 from 18 here." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Same order, closer. Peace Belle down from 42% to 40% and Yamnah up from 32% to 34%. Gosden runners win 26% (17 from 66) at Southwell AW against 7% (4 from 54) for Candlish. Over 1m3f here, horses leading during the race win 18.1% against 6.8% for those held up, which counts against the slow-starting Peace Belle if the pace is steady. Neither key run is franked: Yamnah's Kempton race has had one of its first three run since without placing; from Peace Belle's last race, the winner Brilliant Star has placed since. Rest: Hatta Romance 8%, Tempestra 4%, Littleferry 2%."
        },
        {
          time: "18:00", name: "Midnite Ain't Your Grandads Bookie Handicap", type: "handicap", distance: "1m13y",
          going: "Standard", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1800_1m-class-5-3yo-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Sterling Fortune", prob: 0.26, finish: "-", confidence: "medium",
              reason: "Won by 6L over C&D last week (about 10lb) in a good time, so the 6lb penalty still leaves her ahead; she makes the running, which wins most often here, for a 23% course trainer.",
              against: "One big run after a tailed-off effort, not franked, now up in class on 7 days' rest; her earlier level was about 68-70." },
            { rank: 2, horse: "Yimmna", prob: 0.18, finish: "-", confidence: "low",
              reason: "Haggas handicap debutant; her Kempton 3rd is the best AW figure earned in contention here and is strongly franked (1st and 2nd have both won since).",
              against: "Four runs and no win, mark dropped from 76 to 73, only one run at 1m, and Marquand is 4 from 51 at Southwell." },
            { rank: 3, horse: "Mo Anam Chara", prob: 0.14, finish: "-", confidence: "low",
              reason: "Placed in 4 of her last 6, a 7f winner off 67 and a 1m AW 2nd at Dundalk.",
              against: "7lb above her last winning mark, beaten 4.5L off this mark last time, and her win is only partly franked." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Yimmna moves up to 2nd (15% to 18%): her Kempton 3rd is strongly franked, with the winner Enchanted Queen and runner-up Noozhaa both winning since. Mo Anam Chara drops to 3rd (16% to 14%); her Thirsk win is only partly franked (Real Jack has placed since). Toastmaster up from 11% to 12% (his Doncaster win is franked by the 2nd and 3rd); Starlight Sami down to 7%, Mr Keble down to 4%. Sterling Fortune stays top at 26%: James Tate is 20 from 86 (23%) at Southwell AW, and front-runners win 16.7% of 1m races here, but her 6L win is not franked yet (one of the first three has run since without placing). Rest: Toastmaster 12%, Galba 11%, Starlight Sami 7%, New Bay Star 5%, Mr Keble 4%, Vincenzo Bellini 3%."
        },
        {
          time: "18:30", name: "Midnite Are Upping The Betting Game Handicap", type: "handicap", distance: "7f14y",
          going: "Standard", runners: 12, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1830_7f-class-6-3yo-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Sonbelievable", prob: 0.20, finish: "-", confidence: "low",
              reason: "C&D 3rd beaten 1.25L on his handicap debut, franked by the winner, 1lb lower now, and quicker than Able Astra's division carrying more weight.",
              against: "That race was run 3s slow of the course median and he has only 4 runs." },
            { rank: 2, horse: "Able Astra", prob: 0.13, finish: "-", confidence: "low",
              reason: "C&D 3rd beaten 2.75L 11 days ago, 1lb lower now; Cox runners place 60% of the time at Southwell.",
              against: "Slower than Sonbelievable on the same night; 0 wins from 6; no frank found." },
            { rank: 3, horse: "Leia Antilles", prob: 0.12, finish: "-", confidence: "low",
              reason: "Kempton 7f 2nd beaten 2L off 45, a better time figure than either C&D 3rd, and only 1lb higher.",
              against: "Trainer 0 from 10 and rider 1 from 32 at Southwell; 0 wins from 9; no frank found." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Re-ranked. Southwell 7f draw is neutral on the larger sample (211 races with 8+ runners: low third 10.7%, mid 9.7%, high 9.3% winners), so the small mark against the high-drawn picks is removed. Sonbelievable up from 18% to 20%: his C&D 3rd is franked (the winner Distillate has won since). Able Astra up to 2nd (12% to 13%; Clive Cox runners place 60% of the time here). Leia Antilles drops to 3rd (14% to 12%): Henry Candy is 0 from 10 and Nicola Currie 1 from 32 at Southwell, and her Kempton form has no frank found. Demetris Mouflon up to 8% (her Leicester 2nd is franked by the winner and 3rd); Neat And Tidy down to 9%, Twilight Dawn down to 5% (trainer 0 from 18 here). Rest: Thestral 11%, Neat And Tidy 9%, Demetris Mouflon 8%, Twilight Dawn 5%, Whazzimo 5%, Mariselle 5%, Savvi Row 5%, Yesnia 4%, Honey Dale 3%."
        },
        {
          time: "19:00", name: "Midnite A Next Generation Betting App Novice Stakes (GBB Race)", type: "novice", distance: "6f16y",
          going: "Standard", runners: 10, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1900_6f-class-4-novice-stakes.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Big Money", prob: 0.36, finish: "-", confidence: "medium",
              reason: "Course 2nd beaten 3.75L by an 83-rated winner, ahead of a 79-rated horse: the best exposed form here (about 76-79).",
              against: "Drops from 7f to 6f after both runs at 7f; no frank found yet." },
            { rank: 2, horse: "Darkwing", prob: 0.17, finish: "-", confidence: "low",
              reason: "RPR 77 from two 2025 runs, both now franked by later winners, and a 5lb fillies' allowance.",
              against: "370 days off and a new yard (O'Meara 7 from 92 here); never closer than 4.3L." },
            { rank: 3, horse: "Valor's Call", prob: 0.13, finish: "-", confidence: "low",
              reason: "Night Of Thunder newcomer (pedigree confirmed on Racing Post) for George Scott, 6 from 40 at Southwell.",
              against: "Unraced (rule E: pedigree is not evidence); first-time hood." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Same order. Darkwing up from 15% to 17%: both her 2025 runs are franked (the Newbury winner Calendar Girl and 3rd Box Clever have won since, and the Yarmouth 3rd Fractional has won since). Big Money down from 38% to 36%: his Southwell 2nd has no frank found (neither Cloud Forest nor Hozam has run since). Court Alert down to 11% (Eve Johnson Houghton 2 from 44 here); Prosewriter up to 9% (Archie Watson runners place 49% of the time here). Newcomers' sires and dams confirmed on the Racing Post card: Valor's Call (Night Of Thunder - Evolica), Prosewriter (St Mark's Basilica - Rime A Rien), Nando Tornado (Nando Parrado - Miami Breeze). Sale prices still come only from the Sporting Life comment. Rest: Court Alert 11%, Prosewriter 9%, Nando Tornado 6%, Flag Of Nations 3%, Katie Louise 2%, Manjaros Express 1.5%, Aurora's Doublesix 1.5%."
        },
        {
          time: "19:30", name: "AWC Season 14 Has Begun Fillies' Handicap", type: "handicap", distance: "6f16y",
          going: "Standard", runners: 11, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1930_6f-class-4-fillies-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Fantasy Obsessor", prob: 0.19, finish: "-", confidence: "low",
              reason: "Two C&D runs in contention give the best repeated figures in the field (+17, +24), and she carries 7-10lb less than in either.",
              against: "Up from Class 5 to Class 4, no win in her last 6, not franked, and Overbudget beat her last time." },
            { rank: 2, horse: "Lady Roxby", prob: 0.14, finish: "-", confidence: "low",
              reason: "Most consistent 6f filly here (4 of 6 within 2L, three 2nds), with form in better races, for an 18% course trainer.",
              against: "Carries 9-12, Powdering is level with her on the weights, and her Yarmouth 2nd is not franked." },
            { rank: 3, horse: "Angel Love", prob: 0.12, finish: "-", confidence: "low",
              reason: "AW 6f winner last time (Newcastle, fig +6) and placed in 4 of her last 6; trainer 19% at Southwell.",
              against: "Up 2lb, beaten 4.5L and 6.2L in her other AW handicaps this year, her win is not franked, and her rider is 1 from 32 here." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Same order. Fantasy Obsessor down from 20% to 19% and Angel Love down from 13% to 12%: neither key run is franked (Fantasy Obsessor's 31 Aug conqueror Classy Clarets has placed since; Angel Love's Newcastle win has had one of the first three run since without placing), and Nicola Currie is 1 from 32 at Southwell. Handle With Care up from 10% to 11% (her Lingfield race is franked; Botti 17% here). Arabian Leopard up from 5% to 6% (both her key runs are franked). Lady Roxby stays at 14%: Herrington runners win 18% here, but her Yarmouth 2nd is not franked. Rest: Handle With Care 11%, Courageous Sioux 11%, Powdering 8%, Encore 8%, Arabian Leopard 6%, Lunar Melody 6%, Zooella 3%, Anaisa 2%."
        },
        {
          time: "20:00", name: "Midnite: Built For 2026 Not 2006 Handicap", type: "handicap", distance: "6f16y",
          going: "Standard", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/2000_6f-class-5-3yo-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Horace Wallace", prob: 0.26, finish: "-", confidence: "medium",
              reason: "Three AW 6f figures (+8, +15, +16) earned in contention, his Wolverhampton win franked and his C&D 2nd partly franked; only 2lb higher.",
              against: "Up 9lb since 1 Sep; has not won off a mark above 69; trainer and jockey under 10% at Southwell." },
            { rank: 2, horse: "Overbudget", prob: 0.17, finish: "-", confidence: "low",
              reason: "Won both her last two over C&D and carries 8-13 off a 4lb higher mark.",
              against: "Her winning figures (+5, +13) are below Horace Wallace's, the latest win is not franked, and her earlier turf form was poor." },
            { rank: 3, horse: "Cosmic Clarets", prob: 0.12, finish: "-", confidence: "low",
              reason: "Two fast AW 6f figures (+15, +25) earned finishing 2nd, the Newcastle one franked, and a falling mark with 8-10 to carry.",
              against: "0 wins from 12 (5 places); the Dixon yard is 4% at Southwell." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Same order. Wording corrected: Horace Wallace's C&D 2nd is partly franked, not franked: the winner New Image placed 3rd off 83 next time, having won over C&D the week before. His Wolverhampton win is franked (the 4th has won since). Horace Wallace down from 27% to 26% (Fahey 9% and Egan 7% at Southwell). Overbudget down from 18% to 17%: her latest C&D win is not franked. Riley Rocks up from 10% to 11% (Dylan Cunha 13 from 66, 20%, here). Cosmic Clarets stays at 12%: his Newcastle 2nd is franked (Pivotal Terms and Taaklam have won since), but the Dixon yard is 4% here. Rest: Riley Rocks 11%, Kinnalargy 9%, Rumble Ruby 8%, Hallandale Beach 7%, Tip Foster 5%, Dark Angel Light 5%."
        },
        {
          time: "20:30", name: "AW Trials Day - Lingfield 2nd Jan 2027 Handicap (GBBPlus Race)", type: "handicap", distance: "2m102y",
          going: "Standard", runners: 6, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/2030_2m-class-4-handicap.md", updated: "20:26 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Benvoy", prob: 0.32, finish: "-", confidence: "medium",
              reason: "Both AW staying runs in contention (won Kempton 2m cosily, 2nd beaten 1L at Lingfield 2m); only 5lb higher.",
              against: "Up 5lb, untried at Southwell, held up (hold-up horses win 6.6% over 2m here), no frank found, and two pulled-up hurdle runs this year." },
            { rank: 2, horse: "Tarbat Ness", prob: 0.21, finish: "-", confidence: "low",
              reason: "Placed in 5 of his last 6 at about 2m, including two 2nds off today's mark of 72.",
              against: "A placer (6 wins from 50) and his Ripon 2nd is not franked." },
            { rank: 3, horse: "Vaguely Royal", prob: 0.15, finish: "-", confidence: "low",
              reason: "Won at York 2m off 69 in July and stays well.",
              against: "Beaten 7L+ three times since, and no AW run in his last 6." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Updated 20:26 Sun 25 Oct: franks for every runner, Southwell draw/pace (1134 races) and course trainer/jockey records added. Same order. Benvoy down from 33% to 32%: his Kempton win has no frank found, and Jo Davis has had no Southwell AW runners in two years. Tarbat Ness down from 22% to 21%: his Ripon 2nd is not franked. Solar Pass up from 11% to 13%: her Goodwood 2nd is franked (the winner Arc Zoosve has won since); Balding 14% here. Draw is neutral at 2m on the larger sample (25 races, 8+ runners); leaders win 16.7%, which suits Solar Pass (prominent in most recent runs) more than the held-up Benvoy; Tarbat Ness and Charging Thunder have raced both handily and held up. Rest: Charging Thunder 14%, Solar Pass 13%, Shadow Dance 5%."
        }
      ]
    }
  ]
});
