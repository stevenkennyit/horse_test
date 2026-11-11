// At The Races racecard extractor — run in the built-in browser with javascript_tool while the
// ATR race page is open (https://m.attheraces.com/racecard/<Course>/<DD-Month-YYYY>/<HHMM>).
// Returns per runner: jockey (with claim), trainer, form, age, weight, OR, ATR flags
// (C/D/G/HG/Cl/Hcp/BF: form/suitability markers, not wins), headgear, days since run, plus ATR's pace chart (forecast + each
// runner's early-pace bar, 100% = most forward). Prices, tips and "popular bets" are dropped.
// ATR horse-form pages (wind surgery / new yard markers) block script fetches: open them by
// navigation if needed. Smart Stats: /racecards/<Course>/<date>/SmartStats (navigate).
(async () => {
  const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
  const noOdds = (s) => s.replace(/\b(at|when|of) \d{1,3}-\d{1,2}( ?j?fav)?\b/gi, '$1 [price]').replace(/\b\d{1,3}\/\d{1,2}\b|\b\d+\.\d+\b|\bevens\b|\bevs\b/gi, '').replace(/\s+/g, ' ').trim();
  const out = [`[At The Races card, read ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })} UK] ${location.pathname}`];
  const head = document.body.innerText.match(/\d\d:\d\d [^\n]+ \d+ \w+ \d{4}\n+([^\n]+)\n+([^\n]+)/);
  if (head) out.push(head[1] + ' | ' + head[2]);
  out.push('No | Horse | Days | Jockey (claim) | Trainer | Form Age Wt OR Hg | ATR flags | Pace bar | Expert view');
  const pace = {};
  let forecast = '';
  const paceLink = [...document.querySelectorAll('a')].find((a) => a.textContent.trim() === 'Pace');
  if (paceLink) {
    const pd = new DOMParser().parseFromString(await (await fetch(paceLink.getAttribute('href'))).text(), 'text/html');
    forecast = (pd.body.textContent.match(/Pace \(Forecast: ([^)]+)\)/) || [])[1] || '';
    pd.querySelectorAll('.card-entry').forEach((e) => {
      const name = txt(e.querySelector('h6, h5'));
      const bar = e.querySelector('.card-pace-track__bar');
      if (name) pace[name] = bar ? bar.getAttribute('data-width') : '-';
    });
  }
  document.querySelectorAll('.card-entry').forEach((e) => {
    const name = txt(e.querySelector('.title .flex__item, h5, h6')).replace(/\s+\d+$/, '');
    const no = txt(e.querySelector('.no-draw__no'));
    const days = txt(e.querySelector('.title .flex__item:nth-child(2)'));
    const people = [...e.querySelectorAll('.icon-text__t')].map(txt);
    const formRow = [...e.querySelectorAll('.flex')].map(txt).find((s) => /^\S+ \d+ \d+-\d+/.test(s)) || '';
    const pills = [...e.querySelectorAll('.flex__item:last-child .text-pill')].map(txt).filter((p) => /^[A-Za-z]{1,3}$/.test(p)).join(' ');
    const groups = e.querySelectorAll('.horse-summary__group');
    const expert = groups.length > 1 ? txt(groups[groups.length - 1]).replace(/^\d+\s*/, '').replace(/\s*Jockey Form Trainer Form Full Horse Form\s*$/, '') : '';
    const nr = e.classList.contains('card-entry--non-runner') ? ' NR' : '';
    out.push([no, name + nr, days, people[0] || '-', people[1] || '-', noOdds(formRow.replace(pills, '')), pills || '-', (Object.entries(pace).find(([k]) => name.replace(/\s*\(\w+\)$/, '').startsWith(k.replace(/\s*\(\w+\)$/, ''))) || [])[1] || '-', noOdds(expert)].join(' | '));
  });
  out.push('', 'Pace forecast: ' + (forecast || 'n/a'), 'ATR flags are suitability/form markers, NOT wins (a maiden can carry C). Likely C course, D distance, G going, HG heavy/hurdle?, Cl class, Hcp handicap form, BF beaten favourite last time: unverified, treat as asserted.');
  return out.join('\n');
})()
