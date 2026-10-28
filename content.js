/*
  PËRDITËSIMI I PËRMBAJTJES:
  Ndryshoni tekstet, telefonin, adresën, emailin, fotot dhe shërbimet këtu.
  Fotot vendosen brenda dosjes assets/ dhe te "photo" shkruhet rruga përkatëse.
*/
window.BIOENG_CONTENT = {
  phoneDisplay: "044 369 264",
  phoneLink: "+38344369264",
  address: "Rr. Sadulla Brestovci nr. 100, Gjilan, Kosovë",
  email: "laboratoribioeng@gmail.com",
  hours: "Ju lutemi na kontaktoni për orarin aktual.",
  services: [
    {
      icon: "⌕",
      title: "Laborator mjekësor",
      description: "Analiza laboratorike për mbështetjen e vlerësimit dhe përcjelljes së gjendjes shëndetësore.",
      items: ["Analiza biokimike", "Analiza hematologjike", "Analiza hormonale", "Analiza imunologjike", "Analiza të koagulimit", "Analiza të urinës", "Analiza reumatologjike", "Markues tumoralë", "Analiza serologjike dhe të tjera të konfirmuara"]
    },
    {
      icon: "♧",
      title: "Pulmologji",
      description: "Kujdes specialistik për shëndetin e sistemit respirator. Për shërbimet specifike dhe termine, ju lutemi kontaktoni poliklinikën.",
      items: ["Konsultë pulmologjike", "Vlerësim i simptomave respiratore", "Përcjellje specialistike"],
      doctor: "Dr. Refik Sylaj"
    },
    {
      icon: "♡",
      title: "Kardiologji",
      description: "Kujdes specialistik për zemrën dhe sistemin kardiovaskular.",
      items: ["Konsultë kardiologjike", "Vlerësim i shëndetit të zemrës", "Përcjellje specialistike"],
      doctor: "Dr. Rilind Sylaj"
    },
    {
      icon: "✚",
      title: "Stomatologji",
      description: "Shërbime stomatologjike për kujdesin dhe mirëmbajtjen e shëndetit oral.",
      items: ["Kontroll stomatologjik", "Konsultë dhe plan trajtimi", "Kujdes për shëndetin oral"],
      doctor: "Dr. Fatbardha Sylaj"
    }
  ],
  doctors: [
    {
      name: "Dr. Refik Sylaj",
      department: "Pulmologji",
      role: "Pulmolog",
      photo: "assets/pulmolog-foto.jpg",
      description: "Kujdes specialistik për shëndetin e sistemit respirator. Për shërbimet specifike dhe termine, ju lutemi kontaktoni poliklinikën."
    },
    {
      name: "Dr. Rilind Sylaj",
      department: "Kardiologji",
      role: "Kardiolog",
      photo: "assets/kardiolog-foto.jpeg",
      description: "Kujdes specialistik për shëndetin kardiovaskular. Për shërbimet specifike dhe termine, ju lutemi kontaktoni poliklinikën."
    },
    {
      name: "Dr. Fatbardha Sylaj",
      department: "Stomatologji",
      role: "Stomatologe",
      photo: "assets/stomatologe-foto.jpeg",
      description: "Kujdes stomatologjik dhe këshillim për shëndetin oral. Për shërbimet specifike dhe termine, ju lutemi kontaktoni poliklinikën."
    }
  ],
  mapQuery: "Poliklinika Bioeng, Rr. Sadulla Brestovci nr. 100, Gjilan, Kosovo"
};
