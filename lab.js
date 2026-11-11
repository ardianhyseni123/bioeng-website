(function(){
  const L = window.BIOENG_LAB; if(!L) return;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ë/g,"e").replace(/ç/g,"c");
  const parse = (t,c) => typeof t === "string" ? {n:t} : {n:t[0],w:t[1],r:t[2],y:t[3],h:t[4],l:t[5],x:t[6],e:t[7],s:t[8]||c.sample,p:t[9]||c.prep,full:true};
  const grid = document.getElementById("labGrid"), dlg = document.getElementById("labDialog"), body = document.getElementById("labBody"), title = document.getElementById("labTitle");
  grid.innerHTML = L.categories.map(c => `<button class="lab-tile" data-cat="${c.id}"><span class="service-icon" aria-hidden="true">${c.icon}</span><h3>${esc(c.title)}</h3><p>${c.tests.length} analiza</p><span class="card-link">Hap listën →</span></button>`).join("");
  const cat = id => L.categories.find(c => c.id === id);
  let current = null;
  function showList(c, q){
    current = c; title.textContent = c.title;
    const items = c.tests.map(t => parse(t,c)), nq = norm(q || "");
    const shown = items.filter(t => norm(t.n).includes(nq));
    body.innerHTML = `<input class="lab-search" type="search" placeholder="Kërko analizën…" value="${esc(q||"")}" aria-label="Kërko analizën"><p class="lab-count">${shown.length} analiza · kliko për detaje</p><div class="lab-list">${shown.map(t => `<button class="lab-item" data-i="${items.indexOf(t)}">${esc(t.n)}${t.full ? '<i>detaje</i>' : ""}</button>`).join("") || "<p>Nuk u gjet asnjë analizë.</p>"}</div>`;
    const s = body.querySelector(".lab-search");
    s.addEventListener("input", () => { const p = s.selectionStart; showList(c, s.value); const n = body.querySelector(".lab-search"); n.focus(); n.setSelectionRange(p,p); });
    body.querySelectorAll(".lab-item").forEach(b => b.addEventListener("click", () => showTest(c, items[+b.dataset.i])));
    body.scrollTop = 0;
  }
  function showTest(c, t){
    title.textContent = t.n;
    const sec = (h, v) => v ? `<section class="lab-sec"><h4>${h}</h4><p>${esc(v)}</p></section>` : "";
    body.innerHTML = `<button class="lab-back">← ${esc(c.title)}</button>` + (t.full ? `
      ${sec("Çfarë është dhe çfarë mat", t.w)}${sec("Roli biologjik në organizëm", t.r)}${sec("Pse kërkohet dhe kur përdoret", t.y)}
      <div class="lab-two"><section class="lab-sec up"><h4>↑ Rezultat i rritur</h4><p>${esc(t.h)}</p></section><section class="lab-sec down"><h4>↓ Rezultat i ulur</h4><p>${esc(t.l)}</p></section></div>
      ${sec("Mostra biologjike", t.s)}${sec("Përgatitja e pacientit", t.p)}${sec("Faktorët që ndikojnë në rezultat", t.x)}${sec("Informacione shtesë", t.e)}` :
      `<section class="lab-sec"><p>Kartela e detajuar e kësaj analize po plotësohet. Për informata rreth qëllimit, përgatitjes dhe disponueshmërisë, kontaktoni poliklinikën.</p></section>${sec("Mostra e zakonshme", t.s)}${sec("Përgatitja e zakonshme", t.p)}`) +
      `<p class="lab-note">${esc(window.BIOENG_LAB.disclaimer)}<br>Vlerat e referencës ndryshojnë sipas laboratorit, moshës dhe gjinisë.</p><a class="button button-primary" href="#kontakti" id="labContact">Kontaktoni poliklinikën</a>`;
    body.querySelector(".lab-back").addEventListener("click", () => showList(c));
    body.querySelector("#labContact").addEventListener("click", () => dlg.close());
    body.scrollTop = 0;
  }
  grid.addEventListener("click", e => { const b = e.target.closest(".lab-tile"); if(!b) return; showList(cat(b.dataset.cat)); dlg.showModal(); });
  document.getElementById("labClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if(e.target === dlg) dlg.close(); });
})();
