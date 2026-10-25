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
    }
  ]
});
