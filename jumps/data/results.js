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
      "date": "2026-11-04",
      "course": "Chepstow",
      "country": "Wales",
      "code": "jumps",
      "playbook": "jumps/AGENTS-jumps.md",
      "going": "Hurdle: good to soft (soft in places); Chase: good to good-to-firm in places (SL/ATR feed, checked 07:25 Wed 4 Nov)",
      "dataErrors": [],
      "races": [
        {
          "time": "12:20",
          "name": "Lords Taverners Conditional Jockeys' Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "2m 7f 136y",
          "going": "Good to good-to-firm in places",
          "runners": 5,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "5-runner conditional jockeys' handicap chase; 2 places. Jockey claims verified (SL card + Racing Post card, 08:05): only Gingerbred's rider claims (6lb, rides ~10-10); the other four carry their listed (raw, pre-claim) weights. No pick change.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1220_lords-taverners-conditional-handicap-chase.md",
          "updated": "08:05 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Roe And Co", "prob": 0.33, "placeProb": 0.60, "finish": "-", "confidence": "medium", "reason": "Only C&D winner (Chepstow 2m7f136y, Nov 2025, good/g-firm); all three chase wins at 2m6f-2m7f (3/3 complete), both chase PUs only when stepped to 3m1f; ideal trip and ground, fit off two hurdle 3rds.", "against": "About 8lb higher than his 2m7f winning marks and back over fences after two hurdle runs; small-field upset risk." },
            { "role": "ew", "horse": "Ballynaheer", "prob": 0.17, "placeProb": 0.47, "finish": "-", "confidence": "medium", "reason": "Won off today's exact mark (104) at 2m7f191y in April, stays well, 18/19 chase completions, races prominently - strong place shout at a longer price.", "against": "Form has tailed off since April and he gives about 13lb to Gingerbred." },
            { "role": "danger", "horse": "Gingerbred", "prob": 0.25, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Won last time and far the lightest via the 6lb claim; but a soft-ground 3m+ stayer dropping to 2m7f on sound ground and a keen-goer - ground/trip mismatch caps him to Danger." }
          ]
        },
        {
          "time": "14:30",
          "name": "Lysaght Cup Novices' Limited Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "2m 16y",
          "going": "Good to good-to-firm in places",
          "runners": 5,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "5-runner Class-3 novice limited handicap chase; 2 places. No jockey claims (verified). Four of five have just one completed chase start; Rula Bula (0.23) is a co-danger. Chase going good to good-to-firm.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1430_lysaght-cup-novices-limited-handicap-chase.md",
          "updated": "07:55 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Black Hawk Eagle", "prob": 0.28, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Verified winner of this exact C&D (Chepstow 2m16y, made all, won going away) off a similar fresh break; back to his ideal 2m trip on suitable ground - the only strong proven C&D form in the race.", "against": "172 days off at 8yo with two poor runs since (a fall when keen-leading and a 44L-beaten 4th, both at 2m4f) and a likely duel for the lead with Desertmore News." },
            { "role": "ew", "horse": "Tour Ovalie", "prob": 0.12, "placeProb": 0.30, "finish": "-", "confidence": "low", "reason": "Bottom weight, 6-time winner at ~2m, stayed on into 3rd on her chase debut beaten only 4.75L; held-up style suits if the two front-runners duel - genuine quarter-odds place value at a price.", "against": "Jumped right / hung left on her one chase start - a worry reverting to a left-handed track - and is below the proven rivals on form (place play, not a win call)." },
            { "role": "danger", "horse": "Desertmore News", "prob": 0.25, "placeProb": 0.47, "finish": "-", "confidence": "medium", "reason": "Progressive front-runner, fitter for his first run back (21d), completed chase debut cleanly, good ground to suit; chief threat but stamina up the Chepstow hill and the pace clash are doubts." }
          ]
        },
        {
          "time": "12:51",
          "name": "Free Tips On attheraces.com Maiden Hurdle (GBB Race)",
          "type": "maiden hurdle",
          "distance": "2m 3f 100y",
          "going": "Good to soft (soft in places)",
          "runners": 15,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "13 of 15 are hurdle debutants; ranked on bumper/point ability, stamina for a stiff 2m3f and trainer skill with first-time hurdlers. Point/Irish-point form from SL card commentary (SL profiles omit point runs) - unverified on quality.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1251_free-tips-maiden-hurdle.md",
          "updated": "07:45 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Red Acres Max", "prob": 0.28, "placeProb": 0.55, "finish": "-", "confidence": "medium", "reason": "Strongest verified racecourse profile - won at Carlisle (forged clear), battling 2nd on heavy at Fontwell, plus a point win; hot Snowden yard, G Sheehan.", "against": "Hurdle debutant (jumping on trust), bumper win was a 4-runner race, 227 days off." },
            { "role": "ew", "horse": "Cool Customer", "prob": 0.12, "placeProb": 0.40, "finish": "-", "confidence": "medium", "reason": "Only course winner (won his bumper here), 3/3 placed on soft/gd-sf, stamina sire - genuine place chance at a longer price than the Win.", "against": "Modest Class 5 bumper level, 234 days off, hurdles unknown." },
            { "role": "danger", "horse": "New Rules", "prob": 0.18, "placeProb": 0.42, "finish": "-", "confidence": "medium", "reason": "Nicholls' EUR105k, Walk In The Park, unbeaten in points, Sam Twiston-Davies; chief threat but 11-month absence and a single career run keep him a danger not the win." }
          ]
        },
        {
          "time": "13:25",
          "name": "LSL Racing 'National Hunt' Maiden Hurdle (GBB Race) (Div 1)",
          "type": "maiden hurdle",
          "distance": "2m 16y",
          "going": "Good to soft (soft in places)",
          "runners": 13,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "No runner has won over hurdles; mostly hurdle debutants on bumper/point form. Ranked on bumper/point class, stamina for the stiff 2m and trainer conversion. Point form and claim amounts from card commentary - unverified; does not change the order.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1325_lsl-national-hunt-maiden-hurdle-div1.md",
          "updated": "07:45 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Order On Time", "prob": 0.30, "placeProb": 0.58, "finish": "-", "confidence": "medium", "reason": "Only proven course-and-distance winner (won an 11-runner bumper here over this exact 2m16y, going clear; EUR200k; Nicholls/S Twiston-Davies).", "against": "Hurdle jumping unproven, 216 days off, and St James's Finest won in a higher grade." },
            { "role": "ew", "horse": "Plan De Stan", "prob": 0.09, "placeProb": 0.32, "finish": "-", "confidence": "low", "reason": "Twice runner-up at 2m in bumpers (staying-on, good and soft), stays the stiff track, Quinn's claim gives relief - best proven place form at the trip at a price.", "against": "Never jumped a hurdle, 179 days off, 0 wins from 3 (placed-not-won)." },
            { "role": "danger", "horse": "St James's Finest", "prob": 0.24, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Sole Class-2 bumper winner (best bumper grade), ran here 4th on debut, bred to stay, Skelton/H Skelton; held below the Win on Order On Time's more recent C&D win and shorter layoff." }
          ]
        },
        {
          "time": "13:58",
          "name": "LSL Racing 'National Hunt' Maiden Hurdle (GBB Race) (Div 2)",
          "type": "maiden hurdle",
          "distance": "2m 16y",
          "going": "Good to soft (soft in places)",
          "runners": 12,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "Weak maiden; exposed hurdle form modest, so unexposed point/bumper recruits favoured. No F/U/P/R in the field; no jockey claims (verified). Point-win manner from SL spotlight - unverified on quality.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1358_lsl-national-hunt-maiden-hurdle-div2.md",
          "updated": "07:45 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "A Sight To Sea", "prob": 0.33, "placeProb": 0.60, "finish": "-", "confidence": "medium", "reason": "EUR190k Irish point winner, Skelton/Harry Skelton, Timeform 5* and card top-ranked, hurdle debut - the archetype that lands weak maidens; stays 2m easily.", "against": "346-day layoff AND hurdle debut at once - two unknowns, with only one point run as evidence." },
            { "role": "ew", "horse": "The Lightmaker", "prob": 0.13, "placeProb": 0.50, "finish": "-", "confidence": "low", "reason": "Most reliable form (2nd in a Chepstow 2m16y bumper over this exact C&D, then 3rd), prominent, proven ground; genuine place at a longer price.", "against": "Never jumped a hurdle, small yard (Dan Horsford) - the jumping is the whole question." },
            { "role": "danger", "horse": "Jerry The Dreamer", "prob": 0.18, "placeProb": 0.45, "finish": "-", "confidence": "medium", "reason": "Other expensive point-winning Rules debutant (won 2nd of 2 Irish points, TF4*, Mulholland), 283 days off; chief threat if A Sight To Sea's layoff tells." }
          ]
        },
        {
          "time": "15:05",
          "name": "DragonBet Handicap Chase (GBB Race)",
          "type": "handicap chase",
          "distance": "2m 3f 98y",
          "going": "Good to good-to-firm in places",
          "runners": 11,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "11-runner handicap chase with three chase debutants (all Step-13 capped); Win held under the ~25% ceiling and probability spread wide. Course form not found for the top two; jockey claims only partly cross-checked. Bahtiyar ran yesterday (1-day turnaround).",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1505_dragonbet-handicap-chase.md",
          "updated": "07:50 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Mr Mcwhinny", "prob": 0.23, "placeProb": 0.52, "finish": "-", "confidence": "medium", "reason": "Form horse (141112, 4 of last 6 incl a chase hat-trick), 6/6 chase completions in 2026, travels strongly, trip and good/good-to-firm ground ideal, in-form Tom Ellis yard.", "against": "Every win was Class 5 off 78-90; now 24lb higher (OR 102) in his first Class-4 handicap chase - the handicapper may have caught up." },
            { "role": "ew", "horse": "Two To Tango", "prob": 0.16, "placeProb": 0.50, "finish": "-", "confidence": "medium", "reason": "Placed 4 of last 5, won over today's exact trip (2m3f98y Stratford), sound jumper (21/22 completions), good-to-firm proven - strong place chance at a longer price than the Win.", "against": "Chronic non-winner (one win amid many placings); his trip win was at sharp, flat Stratford, not stiff undulating Chepstow (course unproven)." },
            { "role": "danger", "horse": "Great Dance", "prob": 0.10, "placeProb": 0.35, "finish": "-", "confidence": "low", "reason": "Highest ability on hurdle form (OR 112, listed-placed), shaped well on C&D return - but a chase debut off top weight 12-2 caps her to Danger not Win." }
          ]
        },
        {
          "time": "15:40",
          "name": "Floyds Turfcare & Weed Solutions Handicap Hurdle",
          "type": "handicap hurdle",
          "distance": "2m 3f 100y",
          "going": "Good to soft (soft in places)",
          "runners": 18,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "18-runner Class-5 handicap hurdle; 4 each-way places, Win diluted to the 16+ ceiling. Fitness is the structural edge - only V Power, Midnight Pass (24d) and I Heard A Rumour (28d) are race-fit; everything else is 105-724 days off. Jockey claims verified from SL (Dodd -5 on Highbury Hill, Clarke -7 on Nowherenearmilan).",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1540_floyds-handicap-hurdle.md",
          "updated": "08:00 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Highbury Hill", "prob": 0.21, "placeProb": 0.50, "finish": "-", "confidence": "medium", "reason": "Well-in (carries 11-8 after Dodd's 5lb claim vs the OR98 she won this exact C&D off in Jan; also 3rd-of-16 here on good-to-soft), 11/11 clean jumper, ran 2nd on her last seasonal reappearance.", "against": "205 days off is longer than any gap she has returned from before, and she relies on a 5lb-claiming conditional." },
            { "role": "ew", "horse": "V Power", "prob": 0.12, "placeProb": 0.42, "finish": "-", "confidence": "medium", "reason": "Best each-way value - race-fit (24d) and the only fit runner with a strong recent C&D line (2nd of 13 here on good-to-soft on 11 Oct, beat today's Midnight Pass receiving 5lb); stays, likely a big price.", "against": "Still beaten 5L by a facile winner that day and is largely a modest summer flat handicapper - OR87 may be near his ceiling." },
            { "role": "danger", "horse": "Isabella Islay", "prob": 0.10, "placeProb": 0.38, "finish": "-", "confidence": "low", "reason": "Progressive lightly-raced 4yo who won at today's trip and was a close 3rd next time; chief improver threat, held off the EW slot by 175 days off and only 4 career runs." }
          ]
        },
        {
          "time": "16:10",
          "name": "Dunraven Open NH Flat Race (GBB Race)",
          "type": "NH flat (bumper)",
          "distance": "2m 16y",
          "going": "Good to soft",
          "runners": 15,
          "source": "full",
          "status": "pending",
          "grade": "pending",
          "errors": [],
          "notes": "15 runners, 11 unraced; Win drawn from the raced group per bumper discipline. Confidence low throughout. Point form for raced horses rests on Timeform card commentary (SL profiles 404) - unverified on quality.",
          "winner": null,
          "writeup": "jumps/analyses/2026-11-04_chepstow/1610_dunraven-open-nh-flat-race.md",
          "updated": "07:40 Wed 4 Nov",
          "picks": [
            { "role": "win", "horse": "Uncle Cc", "prob": 0.17, "placeProb": 0.42, "finish": "-", "confidence": "low", "reason": "Only runner with a winning racecourse line (won sole Irish point, Mar 2026); Tizzard yard in top form.", "against": "Single point win on softer/longer; unproven at 2m round a stiff track, 234 days off; fancied newcomers could overrun him." },
            { "role": "ew", "horse": "Bears Socks", "prob": 0.08, "placeProb": 0.30, "finish": "-", "confidence": "low", "reason": "Runner-up on both point-bumper starts (most consistent raced profile); likely a bigger price with a genuine place chance.", "against": "325-day layoff, unexposed modest point form, small yard without newcomer firepower." },
            { "role": "danger", "horse": "Magimax", "prob": 0.14, "placeProb": 0.40, "finish": "-", "confidence": "low", "reason": "EUR125k, 2nd on sole Irish point, Cobden booked, Lavelle good with bumper types; chief threat but placed not won." }
          ]
        }
      ]
    }
  ]
});
