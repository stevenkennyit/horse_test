// AI agent picks and results: JUMPS. One object per meeting.
// Loaded by ../../dashboard.html alongside flat/data/results.js; each file adds its meetings to window.AGENT_DATA.
// Add a new meeting object to `meetings` after each race day; set `status: "pending"` until the result is in.
// The agent ranks picks only; it does not recommend bets or check prices. The user decides how to bet.
//
// Field notes
//   picks[].role      "win" | "ew" (each-way) | "danger" - the selection's job (current format, since 27 Oct 2026).
//                     Win = most likely winner (scored as a win bet); EW = best each-way proposition on our own
//                     numbers (scored as an each-way bet); Danger = chief threat, not staked (coverage only).
//   picks[].prob      agent's stated WIN probability (0-1) at analysis time (fair price = 1/prob, shown by the dashboard)
//   picks[].placeProb agent's stated chance (0-1) the horse finishes within the each-way places for the field size
//   picks[].finish    official finishing position, or "F", "PU", "UR", "BD", "R"; "-" while pending
//   picks[].sp        starting price (fractional, e.g. "5/2", "Evens"), added at review from the result page
//   picks[].confidence, .reason, .against   "low"|"medium"|"high"; one-line case for and against (shown on upcoming.html)
//   picks[].rank      LEGACY ordering (1,2,3) used by meetings before 27 Oct 2026; .danger true marked the danger.
//                     The dashboard maps legacy rows: rank 1 -> Win, rank 2 -> Each-Way, danger -> Danger.
//   writeup, updated  race write-up path; when the picks were last checked (e.g. "17:50 Sun 25 Oct")
//   winner.agentProb  probability the agent stated for the eventual winner; null if the winner was not rated
//   grade             "held" | "mixed" | "failed" | "pending" - judged on the reasoning, not the result
//   errors            judgement-error codes from `errorTypes`
//   source            "full" = full agent analysis; "verified" = user-supplied picks checked by the agent
//
// Legacy fields (25 Oct 2026 Galway only; no longer recorded): picks[].price = best price seen at analysis time;
//   bets[] = paper bets from the old recommended bet slip (stake/returned in points). The dashboard ignores both.

//
// FILE SPLIT (token economy, added 3 Nov 2026): this live file holds only meetings that still have a
//   race with status "pending" (plus the errorTypes definitions). Fully-settled meetings are moved to
//   results-archive.js by /review once all their races are settled. The dashboard loads both files;
//   upcoming.html loads only this one. /analyse appends new pending meetings here and reads only this file.

(function (data) {
  const D = (window.AGENT_DATA = window.AGENT_DATA || { errorTypes: {}, meetings: [] });
  Object.assign(D.errorTypes, data.errorTypes || {});
  D.meetings.push(...data.meetings);
})({
  "errorTypes": {
    "A": "Early-career ground runs held against an improved horse",
    "B": "Recorded jumping doubt overridden by price",
    "C": "Keen-goer made top pick in a weak pace",
    "D": "Forecasts in a 10+ runner handicap (retired: bets no longer recommended)",
    "E": "Unraced newcomer rated above raced rivals on price, pedigree or booking",
    "F": "A standout figure or low mark ranked above the pick's own stated current-form, layoff or stable-form warning",
    "G": "A jumping debutant (unproven at the code) ranked above a proven, reliable completer at that code",
    "H": "Non-fatal jumping-fluency comments ('not fluent'/'mistake') over-weighted to write off a horse with a clean completion record",
    "I": "Win probability and confidence over-concentrated on a pick carrying its own recorded jumping or riding (amateur claim) doubts",
    "J": "A well-handicapped, well-backed horse left unranked (or downgraded) purely on a run of recent non-completions (PU/F) treated as proof it 'won't complete'"
  },
  "meetings": [
    {
      "date": "2026-11-05",
      "course": "Newbury",
      "country": "GB",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdle course good to soft, soft in places (GoingStick 4.6) - official raceday reading checked 08:47 Thu 5 Nov; no chases today (hurdles and NH flat on the flat/round course)",
      "dataErrors": [],
      "races": [
        {
          "time": "15:33",
          "name": "British Horse Society Open National Hunt Flat Race (Category 1 Elimination) (GBB Race) (Div I)",
          "type": "NH flat (bumper)",
          "distance": "2m69y",
          "going": "Good to soft (provisional)",
          "runners": 11,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "New-season bumper of newcomers: only 3 of 11 have any race form (single points), the rest unraced under Rules. Provisional overnight going; re-check going + non-runners AM 5 Nov.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-05_newbury/1533_bhs-open-nh-flat-div1.md",
          "updated": "22:10 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Wordfromhome", "prob": 0.28, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Only confirmed race-winner in the field (won 4yo geldings maiden point, Monksgrange 29 Mar 2026); now Nicholls/S Twiston-Davies, EUR65k Derby Sale; galloping stayers' track suits a point winner.", "against": "Point-to-bumper translation unproven, 221 days off and a Rules debut, against well-bred fresh newcomers from Henderson, Fry, Skelton and Greatrex." },
            { "role": "ew", "horse": "He's Happy", "prob": 0.08, "placeProb": 0.30, "finish": "-", "confidence": "low", "reason": "The only other raced runner (2nd in a point) and the field's only 5yo, so most mature; a placed pointer is a sounder each-way basis at a long price than the unraced newcomers.", "against": "Small yard (Syd Hosie), a single placed point with venue/margin not found, ~271-day absence and a bumper debut." },
            { "role": "danger", "horse": "Block Flight", "prob": 0.14, "placeProb": 0.38, "finish": "-", "confidence": "medium", "reason": "Henderson/de Boinville elite newcomer combo on a track that suits the type; chief threat but UNRACED, so capped per Step 14 (not Win, not above 30%)." }
          ]
        },
        {
          "time": "13:52",
          "name": "Grahame Church Memorial Mares' Novices' Hurdle (GBB Race)",
          "type": "mares' novices' hurdle",
          "distance": "2m69y",
          "going": "Good to soft (provisional)",
          "runners": 10,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Open mares' novice. Princess Day is the field's only C/D winner over today's exact 2m69y (bumper); The Flaggy Shore the only hurdle winner (carries 5lb penalty) but off 169d. First-pass Win (Flaggy Shore) revised in the gap pass to Princess Day after Flaggy Shore's hurdle form was corrected to a single Class 4 win, not Class 1 placings. Provisional going; re-check going + non-runners AM 5 Nov.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-05_newbury/1352_grahame-church-memorial-mares-novices-hurdle.md",
          "updated": "22:10 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Princess Day", "prob": 0.24, "placeProb": 0.55, "finish": "-", "confidence": "medium", "reason": "Course-and-distance winner over today's exact Newbury 2m69y (bumper), race-fit (25d), consistent (1110-2, three bumper wins), top RPR 120; the drop from 2m3f to 2m69y answers her one-paced hurdle debut.", "against": "Beaten 3.75L as the 4/6 fav on her only hurdle run; her proven class is in bumpers, not over hurdles." },
            { "role": "ew", "horse": "Connells Cross", "prob": 0.15, "placeProb": 0.48, "finish": "-", "confidence": "medium", "reason": "At 16/1 finished 3rd at Chepstow (11 Oct) only 0.5L behind 4/6 fav Princess Day despite a jumping error she rallied from; race-fit, RPR 119, drops to a sharper trip - the longer-priced each-way value on the same line.", "against": "Maiden over hurdles with a recorded jumping error - novice risk on a stiff track." },
            { "role": "danger", "horse": "The Flaggy Shore", "prob": 0.22, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "The field's only hurdle winner (5lb penalty confirms it) and a bold front-running 12L all-the-way Class 4 winner whose style suits galloping Newbury; chief threat, but one hurdle run only, a 169-day reappearance and concedes 5lb to all." }
          ]
        },
        {
          "time": "12:42",
          "name": "OLBG Conditional Jockeys' Handicap Hurdle",
          "type": "handicap hurdle",
          "distance": "2m69y",
          "going": "Good to soft, soft in places",
          "runners": 16,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Class 3 (0-125) conditional jockeys' handicap, 16 runners. Conditional claims are material and verified against both the RP card and Sporting Life's jockey_claim field (10/8/6lb values legitimate on the GB conditional scale with the employer's extra 3lb): Faivoir carries 11-4 off OR124 (-10), Dakota Star 10-11 (-8), Non Stop 10-10 (-6), Colegram 10-3 (-7). Provisional going confirmed good to soft (soft in places); re-check non-runners near the off.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-05_newbury/1242_olbg-conditional-jockeys-handicap-hurdle.md",
          "updated": "08:50 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Treasure Planet", "prob": 0.22, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Only pick with both a very recent win (Chepstow Cl2, 25d) and course-and-distance form (2nd here over exact 2m69y, btn 0.75L); 9/9 completions, progressive 4yo carrying 11-6 after the 3lb claim; hold-up style suits a stiff galloping track with a genuine pace.", "against": "Up 3lb to a career-high mark and a 4yo v seasoned handicappers; the LTO win got a soft passage ('left in second'), so the bare form may flatter." },
            { "role": "ew", "horse": "Faivoir", "prob": 0.11, "placeProb": 0.40, "finish": "-", "confidence": "medium", "reason": "The 10lb conditional claim leaves him 11-4 off OR124, effectively racing well below a mark he was placed off last season (3rd Greatwood off 134); Newbury course winner, hold-up style suited to the stiff track and honest pace - best each-way value on own numbers.", "against": "11yo whose seasonal reappearance was poor (6th, weakened before 2 out); pace- and luck-dependent hold-up type." },
            { "role": "danger", "horse": "General Briar", "prob": 0.11, "placeProb": 0.38, "finish": "-", "confidence": "medium", "reason": "The field's one winner over today's EXACT course and distance (Newbury 2m69y off 116 in Jan), now off just 117 and back in Class 3 after two pull-ups that came only in much hotter Class 2 races; bold-jumping prominent style suits. Risk: 214d off and a contested lead could compromise a front-runner." }
          ]
        },
        {
          "time": "16:05",
          "name": "BetVictor Open National Hunt Flat Race (Category 1 Elimination) (GBB Race) (Div II)",
          "type": "NH flat (bumper)",
          "distance": "2m69y",
          "going": "Good to soft, soft in places",
          "runners": 11,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Div II bumper of 4yos, level weights 11-2 bar filly Twin Horns (10-9, 7lb mares' allowance). Only 4 of 11 have point form (Newgrove won, Mister Realistic 2nd, Geissler 4th, Power Of Authority fell); the other 7 confirmed unraced via the Sporting Life race API, so no unraced horse is rated above 30% (Step 14). Provisional going confirmed good to soft (soft in places); re-check non-runners near the off.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-05_newbury/1605_betvictor-open-nh-flat-div2.md",
          "updated": "08:50 Thu 5 Nov",
          "picks": [
            { "role": "win", "horse": "Newgrove", "prob": 0.29, "placeProb": 0.58, "finish": "-", "confidence": "medium", "reason": "Only point-to-point winner in the field (won sole Irish point at Tyrella, survived a late error); now the red-hot Skelton yard with Harry Skelton, trainer says 'sharper than your average pointer, ready for a bumper'; galloping stayers' track suits.", "against": "Still green (visible late point mistake), newcomer bumpers are high-variance and a well-bred unraced rival from a top yard can beat a short point winner." },
            { "role": "ew", "horse": "Geissler", "prob": 0.14, "placeProb": 0.40, "finish": "-", "confidence": "low", "reason": "Placed (4th) in an Irish point, now a Henderson/de Boinville debutant (EUR95k, 'yard good record in this'); behind Mister Realistic's point run so should go off a longer price with a genuine place chance - better each-way expectation.", "against": "Wears a first-time hood (quirk/keenness hint) and was only 4th in his point; unproven under Rules." },
            { "role": "danger", "horse": "Mister Realistic", "prob": 0.18, "placeProb": 0.47, "finish": "-", "confidence": "medium", "reason": "Best point line of the raced horses (2nd on sole Irish point), half-brother to a bumper winner, in-form Sean Bowen booked; chief threat to Newgrove if the favourite misfires." }
          ]
        }
      ]
    }
  ]
});
