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
          writeup: "flat/analyses/2026-10-26_kempton/1610_7f-class-4-novice-stakes.md", updated: "18:06 Sun 25 Oct",
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
          writeup: "flat/analyses/2026-10-26_kempton/1645_7f-class-3-2yo-novice-stakes-div-1.md", updated: "19:45 Sun 25 Oct",
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
          writeup: "flat/analyses/2026-10-26_southwell/1630_5f-class-6-apprentice-handicap-div-1.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Stash The Cash", prob: 0.21, finish: "-", confidence: "low",
              reason: "Best C&D record (2 close 2nds in 4 runs, figures -5/-6 at about today's weight) and beat Bishop's Glory over C&D, now 2lb better off.",
              against: "181 days off and first run for a new yard; his other two C&D runs this year were 6th, beaten 5.1L and 9.7L." },
            { rank: 2, horse: "Fancy Dancer", prob: 0.18, finish: "-", confidence: "low",
              reason: "Three 2nds at 5f in her last 6, and a 5lb claim puts her on 9-0, 12lb better off with Tomarlo than when 4L behind him.",
              against: "Beaten 8.75L last time; her AW 5f figures (-25, -12) are modest and she has never run at Southwell; first-time blinkers unproven." },
            { rank: 3, horse: "Midnight Lir", prob: 0.14, finish: "-", confidence: "low",
              reason: "C&D 6th beaten 2.25L when denied a clear run, turf 5f figures of +1 to +9 off higher marks, and his mark has fallen to 54.",
              against: "No place in his last 6 and 2 wins from 37; a recurring non-winner." },
            { rank: 4, horse: "Tomarlo", prob: 0.13, finish: "-", confidence: "low", danger: true,
              reason: "Made all to win at Wolverhampton in July; first-time cheekpieces and a front-running style on a sharp 5f.",
              against: "Still on the mark he was beaten 5.65L off over C&D last time." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Weak Class 6 sprint. Nobody has a clearly better time figure: the near-trip AW figures earned in contention range only from -25 to -1 (Beautiful Rumour's +2 came when beaten 12L), so course-and-distance form, the head-to-head and consistency separate them. Rest: Bishop's Glory 10%, Timebar 7%, Mister Moet 5%, Beautiful Rumour 5%, Ten Cuidado 4%, Lil Wade 3%."
        },
        {
          time: "17:00", name: "All-Weather Championship Is Back Apprentice Handicap (Div 2)", type: "handicap", distance: "4f214y",
          going: "Standard", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1700_5f-class-6-apprentice-handicap-div-2.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Pivotal Terms", prob: 0.22, finish: "-", confidence: "low",
              reason: "Won at Southwell last time and her 7lb claim offsets the 2lb rise; already 7L clear of Beach Partee on that run.",
              against: "Drops from 6f to 5f; three of her four 5f runs this year were beaten 5.5L or more, and she is keen and held up." },
            { rank: 2, horse: "Kipp Kelly", prob: 0.20, finish: "-", confidence: "low",
              reason: "Most consistent 5f AW form in the race: 5 of his last 6 within 2L, including a win off 47 and a 2nd off 50 (today's mark).",
              against: "216 days off; consistent but modest figures (-10 to +2), a placer profile with 1 win from 28." },
            { rank: 3, horse: "Beach Partee", prob: 0.17, finish: "-", confidence: "low",
              reason: "Placed in 4 of his last 6 at 5f-6f, including a C&D 4th (figure -3).",
              against: "Beaten 7.1L by Pivotal Terms 9 days ago, and only 4lb better off now." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Another weak Class 6 sprint. Pivotal Terms is the only runner who won last time (Southwell 6f). Kipp Kelly has the most consistent 5f AW form in the race but returns from a long break. Rest: Bridget's Baby 12%, Anglesey Lad 7%, Coast 6%, Great Success 6%, Auradue 5%, Petes Diamond 5%."
        },
        {
          time: "17:30", name: "AWC Finals Day At Newcastle 26th March Maiden Fillies' Stakes (GBB/GBBPlus Race)", type: "maiden", distance: "1m3f23y",
          going: "Standard", runners: 6, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1730_1m3f-class-3-maiden-fillies-stakes.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Peace Belle", prob: 0.42, finish: "-", confidence: "medium",
              reason: "Rated 96 from placings in Listed and Group staying races, about 14lb clear of the rated 3yos even after giving 5lb.",
              against: "Drops to 1m3f, where she has been beaten twice; slowly away in 2 of her last 3, a doubt in a small, possibly tactical race." },
            { rank: 2, horse: "Yamnah", prob: 0.32, finish: "-", confidence: "medium",
              reason: "Beaten 1.5L at Kempton over almost the same trip, the best near-trip AW figure in the race, and 7L clear of Hatta Romance.",
              against: "Two runs, no win; her RPR 84 is still well short of Peace Belle's level." },
            { rank: 3, horse: "Cracking Beauty", prob: 0.12, finish: "-", confidence: "low",
              reason: "Nose 2nd off 72 in a 1m4f handicap and 3rd at Kempton over this sort of trip.",
              against: "OR 74 sets her about 22lb below Peace Belle on ratings; 59 days off." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Six-runner fillies' maiden. Peace Belle is rated 96 from placings in Listed and Group staying races but drops from 1m6f-2m+ to 1m3f. Yamnah has the best near-trip AW run in the race. Rest: Hatta Romance 8%, Tempestra 4%, Littleferry 2%."
        },
        {
          time: "18:00", name: "Midnite Ain't Your Grandads Bookie Handicap", type: "handicap", distance: "1m13y",
          going: "Standard", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1800_1m-class-5-3yo-handicap.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Sterling Fortune", prob: 0.26, finish: "-", confidence: "medium",
              reason: "Won by 6L over C&D last week (about 10lb) in a good time, so the 6lb penalty still leaves her ahead on that form; she makes the running.",
              against: "One big run after a tailed-off effort, now up from Class 5 to a deeper race on 7 days' rest; her earlier level was about 68-70." },
            { rank: 2, horse: "Mo Anam Chara", prob: 0.16, finish: "-", confidence: "low",
              reason: "Placed in 4 of her last 6, a 7f winner off 67 and a 1m AW 2nd at Dundalk.",
              against: "Now 7lb above her last winning mark and beaten 4.5L off this mark last time." },
            { rank: 3, horse: "Yimmna", prob: 0.15, finish: "-", confidence: "low",
              reason: "Haggas handicap debutant whose Kempton 3rd is the best AW figure earned in contention in the race.",
              against: "Four runs and no win, mark dropped from 76 to 73, and only one run at 1m." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Sterling Fortune won easily over C&D a week ago and runs under a 6lb penalty. Most of the rest are exposed handicappers rated 69-74 with modest figures. Rest: Galba 12%, Toastmaster 11%, Starlight Sami 7%, New Bay Star 5%, Mr Keble 5%, Vincenzo Bellini 3%."
        },
        {
          time: "18:30", name: "Midnite Are Upping The Betting Game Handicap", type: "handicap", distance: "7f14y",
          going: "Standard", runners: 12, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1830_7f-class-6-3yo-handicap.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Sonbelievable", prob: 0.18, finish: "-", confidence: "low",
              reason: "C&D 3rd beaten 1.25L on his handicap debut, 1lb lower now, and quicker than Able Astra's division carrying more weight.",
              against: "That race was run 3s slow of the course median, he has only 4 runs, and he is drawn 10 of 12." },
            { rank: 2, horse: "Leia Antilles", prob: 0.14, finish: "-", confidence: "low",
              reason: "Kempton 7f 2nd beaten 2L off 45, a better time figure than either C&D 3rd, and only 1lb higher.",
              against: "Drawn 11 and her other recent runs were well beaten; 0 wins from 9." },
            { rank: 3, horse: "Able Astra", prob: 0.12, finish: "-", confidence: "low",
              reason: "C&D 3rd beaten 2.75L 11 days ago, 1lb lower now.",
              against: "Slower than Sonbelievable on the same night; 0 wins from 6." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Weak 12-runner 3yo handicap. Nobody has won more than once; the best recent form is two C&D 3rds run 15 Oct in divisions of the same race, both in slow times. Rest: Thestral 11%, Neat And Tidy 10%, Demetris Mouflon 7%, Twilight Dawn 6%, Whazzimo 5%, Mariselle 5%, Savvi Row 5%, Yesnia 4%, Honey Dale 3%."
        },
        {
          time: "19:00", name: "Midnite A Next Generation Betting App Novice Stakes (GBB Race)", type: "novice", distance: "6f16y",
          going: "Standard", runners: 10, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1900_6f-class-4-novice-stakes.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Big Money", prob: 0.38, finish: "-", confidence: "medium",
              reason: "Course 2nd beaten 3.75L by an 83-rated winner, ahead of a 79-rated horse: the best exposed form here (about 76-79).",
              against: "Drops from 7f to 6f after both his runs at 7f; the form is not yet franked." },
            { rank: 2, horse: "Darkwing", prob: 0.15, finish: "-", confidence: "low",
              reason: "RPR 77 from her two 2025 runs and a 5lb fillies' allowance.",
              against: "370 days off and a new yard; never closer than 4.3L." },
            { rank: 3, horse: "Valor's Call", prob: 0.13, finish: "-", confidence: "low",
              reason: "Expensive Night of Thunder newcomer from a sprinting family.",
              against: "Unraced (rule E: pedigree is not evidence); first-time hood." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Big Money's course 2nd behind an 83-rated winner is the best form on offer. Three unraced newcomers, plus a filly from a good family returning after a year. Rest: Court Alert 12%, Prosewriter 8%, Nando Tornado 6%, Flag Of Nations 3%, Katie Louise 2%, Manjaros Express 1.5%, Aurora's Doublesix 1.5%."
        },
        {
          time: "19:30", name: "AWC Season 14 Has Begun Fillies' Handicap", type: "handicap", distance: "6f16y",
          going: "Standard", runners: 11, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/1930_6f-class-4-fillies-handicap.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Fantasy Obsessor", prob: 0.20, finish: "-", confidence: "low",
              reason: "Two C&D runs in contention give the best repeated figures in the field (+17, +24), and she carries 7-10lb less than in either.",
              against: "Steps up from Class 5 to Class 4; no win in her last 6 (a recurring 2nd/3rd), and Overbudget beat her last time." },
            { rank: 2, horse: "Lady Roxby", prob: 0.14, finish: "-", confidence: "low",
              reason: "Most consistent 6f filly here (4 of 6 within 2L, three 2nds), with form in better races.",
              against: "Carries 9-12, and on the weights Powdering is now level with her; 2 wins from 20." },
            { rank: 3, horse: "Angel Love", prob: 0.13, finish: "-", confidence: "low",
              reason: "AW 6f winner last time (Newcastle, fig +6) and placed in 4 of her last 6.",
              against: "Up 2lb, and beaten 4.5L and 6.2L in her two other AW handicaps this year." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Competitive fillies' handicap. Fantasy Obsessor has the best repeated figures at today's weights, from two C&D runs in contention. The more highly rated fillies carry 9-8 to 9-13. Rest: Courageous Sioux 11%, Handle With Care 10%, Powdering 8%, Encore 8%, Lunar Melody 6%, Arabian Leopard 5%, Zooella 3%, Anaisa 2%."
        },
        {
          time: "20:00", name: "Midnite: Built For 2026 Not 2006 Handicap", type: "handicap", distance: "6f16y",
          going: "Standard", runners: 9, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/2000_6f-class-5-3yo-handicap.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Horace Wallace", prob: 0.27, finish: "-", confidence: "medium",
              reason: "Three AW 6f figures (+8, +15, +16) all earned in contention, including a franked C&D 2nd, and he is only 2lb higher.",
              against: "Up 9lb since 1 Sep; has not won off a mark above 69." },
            { rank: 2, horse: "Overbudget", prob: 0.18, finish: "-", confidence: "low",
              reason: "Won both her last two over C&D and carries 8-13 off a 4lb higher mark.",
              against: "Her winning figures (+5, +13) are below Horace Wallace's, and her earlier turf form was poor." },
            { rank: 3, horse: "Cosmic Clarets", prob: 0.12, finish: "-", confidence: "low",
              reason: "Two fast AW 6f figures (+15, +25) earned finishing 2nd, and a falling mark with 8-10 to carry.",
              against: "0 wins from 12 (5 places); a recurring placer." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Horace Wallace has three fast AW 6f figures, all earned in contention, and has only gone up 2lb. Overbudget is a dual C&D winner on a low weight. Rest: Riley Rocks 10%, Kinnalargy 9%, Rumble Ruby 8%, Hallandale Beach 7%, Tip Foster 5%, Dark Angel Light 4%."
        },
        {
          time: "20:30", name: "AW Trials Day - Lingfield 2nd Jan 2027 Handicap (GBBPlus Race)", type: "handicap", distance: "2m102y",
          going: "Standard", runners: 6, source: "full", status: "pending",
          writeup: "flat/analyses/2026-10-26_southwell/2030_2m-class-4-handicap.md", updated: "19:53 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Benvoy", prob: 0.33, finish: "-", confidence: "medium",
              reason: "Both AW staying runs in contention (won Kempton 2m cosily, 2nd beaten 1L at Lingfield 2m); only 5lb higher.",
              against: "Up 5lb for a cosy win and untried at Southwell; his hurdles form this year includes two pulled-up runs." },
            { rank: 2, horse: "Tarbat Ness", prob: 0.22, finish: "-", confidence: "low",
              reason: "Placed in 5 of his last 6 at the trip, including two 2nds off today's mark of 72.",
              against: "A placer: 6 wins from 50 and beaten in his last four." },
            { rank: 3, horse: "Vaguely Royal", prob: 0.15, finish: "-", confidence: "low",
              reason: "Won at York 2m off 69 in July and stays well.",
              against: "Beaten 7L+ three times since, and no AW run in his last 6." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:53 Sun 25 Oct. Six-runner staying handicap. Per the playbook, times at 2m on AW separate little, so this leans on beaten distances and consistency at the trip. Benvoy's two AW staying runs (a win and a 2nd) are the best recent form. Rest: Charging Thunder 14%, Solar Pass 11%, Shadow Dance 5%."
        }
      ]
    }
  ]
});
