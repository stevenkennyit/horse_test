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
          writeup: "flat/analyses/2026-10-26_kempton/1645_7f-class-3-2yo-novice-stakes-div-1.md", updated: "19:15 Sun 25 Oct",
          picks: [
            { rank: 1, horse: "Red Wizard", prob: 0.28, finish: "-", confidence: "low",
              reason: "Best course form (5th of 8 over C&D, 4L), about 1.8s faster than Stytch over C&D at the same weight, and franked: the 2nd and 4th have both run 2nd since (OR85, OR86).",
              against: "Never closer than 4 lengths and outpaced 2f out over C&D; only 2 runs, and the collateral rating leans on later marks." },
            { rank: 2, horse: "Stytch", prob: 0.17, finish: "-", confidence: "low",
              reason: "About 2L behind OR79 Gold Army at Salisbury (about 75), RPR 71 level with Red Wizard's, and a first-time hood to settle him.",
              against: "Keen and held up in both runs (held up last time wins about 10% here); his C&D run was 12L back and about 1.8s slower than Red Wizard's." },
            { rank: 3, horse: "Idealise", prob: 0.16, finish: "-", confidence: "low",
              reason: "Balding/Murphy Frankel newcomer, dam a half-sister to Chaldean; the raced form he meets is modest.",
              against: "Unraced: newcomers win 6% of Kempton 7f 2yo novices and Balding's Kempton newcomers are 3 from 35; pedigree is not evidence." },
            { rank: 4, horse: "Rattenbury", prob: 0.08, finish: "-", confidence: "low", danger: true,
              reason: "Beaten 7L on debut by Final Objective, since a Group 1 winner; green and slowly away that day.",
              against: "147 days off, up from 6f to 7f, slow start may recur, RPR only 57." }
          ],
          winner: null,
          grade: "pending", errors: [],
          notes: "Written 19:15 25 Oct. 2yo Class 3 novice, 4 debutants. Red Wizard preferred on C&D time and franked collateral (~76-78); Stytch ~68-75 with a recurring keen/held-up doubt; Idealise below the raced pair on evidence. Rest: King Gamrah 8%, India's Ridge 7%, Sequoiadendron 6%, St Peter's Cross 4%, Clink 3%, Boy's Slipper 3%."
        }
      ]
    }
  ]
});
