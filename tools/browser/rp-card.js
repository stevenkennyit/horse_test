// Racing Post racecard extractor — run in the built-in browser with javascript_tool while the
// RP race page is open (https://www.racingpost.com/racecards/<courseId>/<course>/<date>/<raceId>).
// Reads the page's own __NEXT_DATA__ plus RP's form API for each runner (same requests the
// site makes when you open a profile). Returns compact text. Odds and tips are left out to save
// tokens; current prices come from `node tools/sl.js card` (context only).
// Anonymous RP form = last ~5-6 runs only; use Sporting Life (tools/sl.js) for full careers.
(async () => {
  const P = JSON.parse(document.getElementById('__NEXT_DATA__').textContent).props.pageProps.initialState.racePage.data;
  const race = P.race || {};
  const st = (lb) => lb == null ? '-' : `${Math.floor(lb / 14)}-${lb % 14}`;
  const pick = (o, ks) => ks.map((k) => o[k]).find((v) => v != null && v !== '');
  const out = [];
  out.push(`[Racing Post card, read ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })} UK] ${location.pathname}`);
  out.push([pick(race, ['raceTitle', 'raceInstanceTitle', 'title']), pick(race, ['distanceFull', 'distance', 'distanceShort']), 'Class ' + pick(race, ['raceClass']), pick(race, ['going', 'goingDescription'])].filter(Boolean).join(' | '));
  out.push('No | Horse (RP id) | Age sex | Wt listed | Claim | Wt after claim | OR | RPR | TS | Days | Hg (1st?) | Wind op | Jockey (1st?) | Trainer | NR | RP comment');
  for (const r of P.runners) {
    const claim = r.weightAllowanceLbs || 0;
    out.push([r.startNumber, `${r.horseName} (${r.horseId})`, `${r.age} ${r.colorSex}`, st(r.weightCarried), claim ? claim + 'lb' : '-', st(r.weightCarried - claim),
      r.officialRatingToday ?? '-', r.rpPostmark ?? '-', r.rpTopspeed ?? '-', r.daysSinceLastRun ?? '-',
      (r.horseHeadGear || '-') + (r.horseHeadGearFirstTime ? ' (1st)' : ''), r.windSurgery || '-', r.jockeyName + (r.jockeyFirstTime ? ' (1st)' : ''),
      r.trainerName + (r.newTrainerRacesCount != null ? ` (new yard, ${r.newTrainerRacesCount} runs)` : ''), r.nonRunner ? 'NR' : '', (r.diomed || '') + (r.spotlight ? ' / ' + r.spotlight : '')].join(' | '));
  }
  out.push('', 'RP recent form (anonymous view; pos/ran | btn | wt carried (claim) | OR | TS | RPR | close-up comment):');
  for (const r of P.runners) {
    try {
      const j = await (await fetch('/api/horse-profile/form?horseId=' + r.horseId)).json();
      const f = Object.values(j.form || {}).sort((a, b) => b.race_datetime.localeCompare(a.race_datetime));
      out.push(`### ${r.horseName} — ${f.length} runs shown`);
      for (const x of f) out.push([x.race_datetime.slice(0, 10), x.course_rp_abbrev_3, x.race_type_code, (x.distance_furlong ? x.distance_furlong + 'f' : x.distance_yard + 'y'), x.going_type_services_desc, 'C' + x.race_class,
        x.race_group_desc || '', `${x.race_outcome_code}/${x.no_of_runners}`, x.distance_to_winner ?? x.winning_distance ?? '', st(x.weight_carried_lbs) + (x.weight_allowance_lbs ? ` (${x.weight_allowance_lbs})` : ''),
        'OR' + (x.official_rating_ran_off ?? '-'), 'TS' + (x.rp_topspeed ?? '-'), 'RPR' + (x.rp_postmark ?? '-'), (x.horse_head_gear || '') + (x.first_time_headgear ? '1' : ''),
        x.jockey_short_name, 'rp' + x.race_instance_uid, '— ' + (x.rp_close_up_comment || '')].join(' | '));
    } catch (e) { out.push(`### ${r.horseName}: form fetch failed (${e.message})`); }
  }
  return out.join('\n');
})()
