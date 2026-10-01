/* =========================================================
   Rendering
   ========================================================= */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const years = Math.floor((Date.now() - new Date(CAREER_START)) / (365.25*864e5));
$('years').textContent = years;
document.querySelectorAll('.yrs').forEach(n => n.textContent = years);
$('yr').textContent = new Date().getFullYear();

const set = '<div class="ticker__set">' + TICKER.map(t => `<span>${esc(t)}<i>✓</i></span>`).join('') + '</div>';
$('ticker').innerHTML = set + set;
$('chips').innerHTML = CHIPS.map(c => `<span>${esc(c)}</span>`).join('');

function renderCards(items, gridId, countId, emptyText, noun) {
  const grid = $(gridId);
  if (!items.length) {
    $(countId).textContent = 'Coming soon';
    grid.innerHTML = [0,1,2].map(i => `<div class="card card--slot">
        <span class="slot__mark">${i === 0 ? 'pending…' : '&nbsp;'}</span>
        ${i === 0 ? `<p class="label">${emptyText}</p>` : ''}
      </div>`).join('');
    return;
  }
  $(countId).textContent = `${items.length} ${noun}${items.length === 1 ? '' : 's'}`;
  grid.innerHTML = items.map(it => {
    const inner = `<span class="card__kind">${esc(it.kind || '')}</span>
      <h3>${esc(it.title)}</h3>
      ${it.description ? `<p>${esc(it.description)}</p>` : ''}
      <div class="card__tags">${(it.tags||[]).map(t => `<span>${esc(t)}</span>`).join('')}</div>`;
    return it.url
      ? `<a class="card" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
      : `<article class="card">${inner}</article>`;
  }).join('');
}
renderCards(GROWTH, 'growthGrid', 'growthCount', 'New certifications and courses will show up here.', 'credential');
renderCards(BUILD, 'buildGrid', 'buildCount', 'Frameworks, test suites and tools will show up here.', 'project');

$('stackGrid').innerHTML = STACK.map(g => `<div class="stack__cat"><h4>${esc(g.name)}</h4><ul>${g.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('');

$('roles').innerHTML = ROLES.map(r => `<div class="role">
  <div class="when"><strong>${esc(r.start)} – ${esc(r.end)}</strong>${esc(r.org.split('·')[1] || '')}</div>
  <div><h3>${esc(r.title)}<span>${esc(r.org.split('·')[0])}</span></h3>
  <ul class="points">${r.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div></div>`).join('');

$('projects').innerHTML = PROJECTS.map(p => `<div class="proj">
  <div class="proj__meta">${esc(p.when)}<br><span class="tag">${esc(p.role)}</span></div>
  <div><h4>${esc(p.name)}</h4><p class="proj__sum">${esc(p.summary)}</p>
  <div class="proj__stack">${p.stack.map(s => `<span>${esc(s)}</span>`).join('')}</div>
  <details><summary>What I did</summary><ul class="points">${p.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul></details></div></div>`).join('');

/* live clock in Haridwar */
const clock = $('clock');
const tick = () => { clock.textContent = new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true,timeZone:'Asia/Kolkata'}).format(new Date()) + ' IST'; };
tick(); setInterval(tick, 30000);

/* header goes solid after the hero */
const chrome = $('chrome');
addEventListener('scroll', () => chrome.classList.toggle('stuck', scrollY > 40), {passive:true});

/* mobile menu */
const btn = $('menuBtn'), nav = $('nav');
btn.addEventListener('click', () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });
