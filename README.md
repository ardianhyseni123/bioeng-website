# Poliklinika Bioeng – website publik

Website statik në HTML, CSS dhe JavaScript, i përshtatshëm për publikim falas në GitHub Pages. Nuk përdor server, databazë apo abonim.

## Skedarët
- `index.html` – struktura dhe seksionet e faqes.
- `style.css` – dizajni, ngjyrat dhe përshtatja për telefon/tabletë/kompjuter.
- `content.js` – përmbajtja që mund të ndryshohet lehtë: telefoni, adresa, emaili, orari, shërbimet dhe profilet e mjekëve.
- `script.js` – shfaqja e përmbajtjes dhe funksionimi i menusë.
- `assets/` – logoja origjinale e përdorur, fotografia e laboratorit dhe fotografitë e specialistëve.

## Si të ndryshoni përmbajtjen
1. Hapni `content.js` në një redaktues teksti.
2. Ndryshoni vlerat brenda `window.BIOENG_CONTENT` pa fshirë thonjëzat, presjet ose kllapat.
3. Për të ndryshuar fotografinë e një mjeku, vendosni fotografinë e re në `assets/` dhe ndryshoni vlerën `photo` me rrugën përkatëse, p.sh. `assets/foto-e-re.jpg`.
4. Ruajeni skedarin dhe ngarkojeni versionin e ri në GitHub.

**Shënim për shërbimet:** lista në website paraqet kategori të përgjithshme. Konfirmoni me poliklinikën cilat analiza/shërbime kryhen realisht para se t'i publikoni si të disponueshme. Orari fillestar është vendosur si udhëzim për të kontaktuar poliklinikën, derisa të konfirmohet orari i saktë.

## Publikimi në GitHub Pages
1. Hyni në repository-n ku do të mbahet website-i.
2. Ngarkoni përmbajtjen e dosjes `bioeng-website` në rrënjën e repository-t. `index.html` duhet të jetë në rrënjë, jo brenda një dosjeje tjetër.
3. Hapni **Settings → Pages**.
4. Te **Build and deployment**, zgjidhni **Deploy from a branch**, branch `main` dhe folder `/ (root)`, pastaj ruani.
5. Prisni përfundimin e publikimit dhe përdorni URL-në që shfaq GitHub Pages.
6. Testoni faqen në telefon, kontrolloni menynë, telefonatën, emailin, hartën dhe fotografitë.

## QR kodi
Mos krijoni QR kod përpara se GitHub Pages të ketë publikuar URL-në përfundimtare. Përdorni URL-në e saktë të faqes, pastaj testojeni QR kodin me disa telefona para printimit.

## Kufizimet e administrimit
Ky është website statik. `content.js` e bën përmbajtjen të lehtë për t'u redaktuar, por nuk është panel administrimi online dhe nuk ruan ndryshimet nga një formular në faqe. Për redaktim pa prekur skedarët, nevojitet një CMS i veçantë me konfigurim dhe autentikim.
