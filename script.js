(function(){
  const data = window.BIOENG_CONTENT || {};
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  document.querySelectorAll("[data-phone-link]").forEach(a => a.href = "tel:" + (data.phoneLink || ""));
  document.querySelectorAll("[data-phone-text]").forEach(a => { a.textContent = data.phoneDisplay || ""; a.href = "tel:" + (data.phoneLink || ""); });
  document.getElementById("addressText").textContent = data.address || "";
  const hoursText = document.getElementById("hoursText");
  if (hoursText) hoursText.textContent = data.hours || "Ju lutemi na kontaktoni për orarin aktual.";
  const emailLink = document.getElementById("emailLink");
  emailLink.textContent = data.email || "";
  emailLink.href = "mailto:" + (data.email || "");
  document.getElementById("mapsLink").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(data.mapQuery || data.address || "Poliklinika Bioeng Gjilan");
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll("img").forEach(img => { img.addEventListener("error", () => { img.classList.add("image-error"); }, { once: true }); });

  const serviceGrid = document.getElementById("serviceGrid");
  serviceGrid.innerHTML = (data.services || []).map(s => `
    <article class="service-card">
      <div class="service-icon" aria-hidden="true">${esc(s.icon || "✚")}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.description)}</p>
      ${s.items && s.items.length ? `<ul>${s.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
      ${s.doctor ? `<a class="card-link" href="#specialistet">${esc(s.doctor)} →</a>` : ""}
    </article>`).join("");

  const doctorGrid = document.getElementById("doctorGrid");
  doctorGrid.innerHTML = (data.doctors || []).map(d => `
    <article class="doctor-card">
      <div class="doctor-photo">
        ${d.photo ? `<img src="${esc(d.photo)}" alt="${esc(d.name)}" loading="lazy">` : `<div class="photo-placeholder">Fotoja e mjekut<br><small>Shto rrugën e fotos te content.js</small></div>`}
      </div>
      <div class="doctor-info">
        <span class="doctor-dept">${esc(d.department)}</span>
        <h3>${esc(d.name)}</h3>
        <p class="doctor-role">${esc(d.role)}</p>
        <p>${esc(d.description)}</p>
        <a class="button button-secondary" href="#kontakti">Informata dhe termine</a>
      </div>
    </article>`).join("");

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
})();