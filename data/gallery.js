/* ============================================================
   AB PHOTOGRAPHY — GALLERY DATA
   ------------------------------------------------------------
   The ONLY file you need to edit to add or change photos.

   TO ADD A PHOTO
   Save the image at the "src" path, then copy a block below and
   change the values. Until a real file exists at that path the
   site shows a placeholder tile — nothing ever looks broken.

   FIELDS
     src    (required) path to the image, relative to index.html
     title  (required) shown under the tile and in the lightbox
     cats   (required) "wildlife" | "sports" | "motorsport" | "architecture"
                       — a photo can sit in more than one tab
     tag    (required) the filter chip it belongs to
     loc    optional   where it was shot
     year   optional   small chip under the title
     exif   optional   { cam, lens, set }
     feat   optional   true = taller 3:4 tile. PORTRAIT shots only —
                       it will crop the sides off a landscape frame.
     alt    optional   accessibility description
   ============================================================ */

const GALLERY = [

  /* ===== REAL — Wanneroo Raceway, 17 May 2026, Sony A7R IV ===== */

  { src: "images/motorsport/motorbike-01.jpg", title: "Honda #79, Full Lean",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "359mm · f/11 · 1/250s · ISO 125" } },

  { src: "images/motorsport/motorbike-02.jpg", title: "Sidecar #56, Three Wheels Working",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "329mm · f/11 · 1/350s · ISO 200" } },

  { src: "images/motorsport/motorbike-03.jpg", title: "The Number One Plate",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "541mm · f/11 · 1/125s · ISO 100" } },

  { src: "images/motorsport/motorbike-04.jpg", title: "Fluoro and Carbon, #32",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "368mm · f/11 · 1/350s · ISO 200" } },

  { src: "images/motorsport/motorbike-05.jpg", title: "Ducati Perth, #19",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "452mm · f/11 · 1/125s · ISO 100" } },

  { src: "images/motorsport/motorbike-06.jpg", title: "Blue and White, #53",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "512mm · f/11 · 1/125s · ISO 100" } },

  { src: "images/motorsport/motorbike-07.jpg", title: "Yellow #597, Clean Line",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "295mm · f/9.5 · 1/200s · ISO 200" } },

  { src: "images/motorsport/motorbike-08.jpg", title: "Repsol Colours, #956",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "400mm · f/9.5 · 1/200s · ISO 200" } },

  { src: "images/motorsport/motorbike-09.jpg", title: "Ninja #371 Over the Kerb",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "318mm · f/11 · 1/125s · ISO 125" } },

  { src: "images/motorsport/motorbike-10.jpg", title: "Tucked In, #52",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "506mm · f/11 · 1/200s · ISO 100" } },

  { src: "images/motorsport/motorbike-11.jpg", title: "Shooting the Shooter",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Wanneroo Raceway, WA", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "489mm · f/11 · 1/350s · ISO 200" } },

  /* ===== REAL — Kuala Lumpur, 1 October 2026, Sony A7R IV ===== */

  { src: "images/architecture/architecture-01.jpg", title: "Crown of the Tower",
    cats: ["architecture"], tag: "Towers", loc: "Kuala Lumpur, Malaysia", year: "2026", 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "161mm · f/4 · 1/2000s · ISO 6400" } },

  { src: "images/architecture/architecture-02.jpg", title: "Skybridge",
    cats: ["architecture"], tag: "Towers", loc: "Kuala Lumpur, Malaysia", year: "2026", feat: true, 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "70mm · f/4 · 1/500s · ISO 10000" } },

  { src: "images/architecture/architecture-03.jpg", title: "Steel and Geometry",
    cats: ["architecture"], tag: "Towers", loc: "Kuala Lumpur, Malaysia", year: "2026", feat: true, 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "89mm · f/4 · 1/500s · ISO 10000" } },

  { src: "images/architecture/architecture-04.jpg", title: "Twin Spires",
    cats: ["architecture"], tag: "Towers", loc: "Kuala Lumpur, Malaysia", year: "2026", 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "70mm · f/4 · 1/500s · ISO 10000" } },

  { src: "images/architecture/architecture-05.jpg", title: "Under the Skybridge",
    cats: ["architecture"], tag: "Towers", loc: "Kuala Lumpur, Malaysia", year: "2026", feat: true, 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "70mm · f/4 · 1/125s · ISO 5000" } },

  { src: "images/architecture/architecture-06.jpg", title: "KLCC Fountains",
    cats: ["architecture"], tag: "Cityscape", loc: "Kuala Lumpur, Malaysia", year: "2026", 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "70mm · f/4 · 1/350s · ISO 10000" } },

  { src: "images/architecture/architecture-07.jpg", title: "Fountains, Towers Behind",
    cats: ["architecture"], tag: "Cityscape", loc: "Kuala Lumpur, Malaysia", year: "2026", feat: true, 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "70mm · f/4 · 1/350s · ISO 10000" } },

  { src: "images/architecture/architecture-08.jpg", title: "Petronas, Full Height",
    cats: ["architecture"], tag: "Towers", loc: "Kuala Lumpur, Malaysia", year: "2026", feat: true, 
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "70mm · f/4 · 1/350s · ISO 10000" } },

  /* ===== PLACEHOLDERS — no image files yet. Titles and settings
     below are invented filler to show the layout. Replace as real
     photos come in. ===== */

  /* ---------- WILDLIFE ---------- */
  { src: "images/wildlife/wildlife-01.jpg", title: "Wedge-tailed Eagle, Rising",
    cats: ["wildlife"], tag: "Birds", year: "2025", feat: true },

  { src: "images/wildlife/wildlife-02.jpg", title: "Red Kangaroo at First Light",
    cats: ["wildlife"], tag: "Mammals", year: "2025" },

  { src: "images/wildlife/wildlife-03.jpg", title: "Humpback Breach",
    cats: ["wildlife"], tag: "Marine", year: "2024" },

  { src: "images/wildlife/wildlife-04.jpg", title: "Splendid Fairywren",
    cats: ["wildlife"], tag: "Birds", year: "2026" },

  { src: "images/wildlife/wildlife-05.jpg", title: "Dingo, Dusk Patrol",
    cats: ["wildlife"], tag: "Mammals", year: "2025" },

  { src: "images/wildlife/wildlife-06.jpg", title: "Dragonfly, Wings Frozen",
    cats: ["wildlife"], tag: "Macro", year: "2024" },

  /* ---------- SPORTS ---------- */
  { src: "images/sports/sports-01.jpg", title: "Faceoff — Puck Drop",
    cats: ["sports"], tag: "Ice Hockey", year: "2026", feat: true },

  { src: "images/sports/sports-02.jpg", title: "Glove Save, Third Period",
    cats: ["sports"], tag: "Ice Hockey", year: "2026" },

  { src: "images/sports/sports-03.jpg", title: "Boards Check",
    cats: ["sports"], tag: "Ice Hockey", year: "2025" },

  { src: "images/sports/sports-04.jpg", title: "Pit Wall, Lights Out",
    cats: ["sports", "motorsport"], tag: "Formula 1", year: "2026" },

  { src: "images/sports/sports-05.jpg", title: "Celebration, Final Whistle",
    cats: ["sports"], tag: "Action", year: "2025" },

  /* ---------- MOTORSPORT (other classes) ---------- */
  { src: "images/motorsport/supercars-01.jpg", title: "Supercar Drift, Turn 1",
    cats: ["motorsport"], tag: "Supercars", year: "2025" },

  { src: "images/motorsport/rally-01.jpg", title: "Gravel Flight",
    cats: ["motorsport"], tag: "Rally", year: "2024" },

  { src: "images/motorsport/f1-01.jpg", title: "Panned at 300km/h",
    cats: ["motorsport"], tag: "Formula 1", year: "2026" },

];

/* ------------------------------------------------------------
   TABS + FILTER CHIPS
   "accent" is the colour the whole site shifts to for that tab.
   ------------------------------------------------------------ */
const TABS = [
  { id: "wildlife",     label: "Wildlife",     blurb: "Patience, long glass and cold mornings.",
    accent: "150 80% 52%", chips: ["All", "Birds", "Mammals", "Marine", "Macro"] },
  { id: "sports",       label: "Sports",       blurb: "Ice hockey, F1 and everything at full tilt.",
    accent: "199 95% 58%", chips: ["All", "Ice Hockey", "Formula 1", "Action"] },
  { id: "motorsport",   label: "Motorsport",   blurb: "Bikes, Supercars and F1 — speed made still.",
    accent: "14 95% 58%",  chips: ["All", "Motorbikes", "Formula 1", "Supercars", "Rally"] },
  { id: "architecture", label: "Architecture", blurb: "Cities after dark, from the ground up.",
    accent: "265 90% 68%", chips: ["All", "Towers", "Cityscape"] },
];
