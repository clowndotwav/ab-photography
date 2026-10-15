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
     team   F1 only    Ferrari, McLaren, ... plus "Safety Car" / "Medical Car"
     track  F1 only    circuit name — drives the Track filter row
     session F1 only   FP1/FP2/FP3/Sprint/Qualifying/Race. NOT a filter any more,
                       but still shown in the full-screen viewer
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

  /* ===== REAL — Formula 1 =====
     Silverstone frames are 4-6 July 2025 (EXIF timestamps are on Perth time;
     converted they land exactly on the British GP weekend's session times).
     CONFIRM the circuit with Adam before this goes in front of anyone. */

  { src: "images/f1/f1-01.jpg", title: "Ferrari, Friday Running",
    cats: ["f1"], team: "Ferrari", session: "FP2", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "481mm · f/6.7 · 1/1000s · ISO 50" } },

  { src: "images/f1/f1-02.jpg", title: "Ferrari on the White Line",
    cats: ["f1"], team: "Ferrari", session: "FP2", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "236mm · f/5.6 · 1/1000s · ISO 50" } },

  { src: "images/f1/f1-03.jpg", title: "Stake Sauber, Saturday Morning",
    cats: ["f1"], team: "Sauber", session: "FP3", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "489mm · f/6.3 · 1/1500s · ISO 320" } },

  { src: "images/f1/f1-04.jpg", title: "McLaren, Qualifying",
    cats: ["f1"], team: "McLaren", session: "Qualifying", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "576mm · f/6.3 · 1/1500s · ISO 400" } },

  { src: "images/f1/f1-05.jpg", title: "Ferrari, Qualifying",
    cats: ["f1"], team: "Ferrari", session: "Qualifying", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "448mm · f/5.6 · 1/1500s · ISO 640" } },

  { src: "images/f1/f1-06.jpg", title: "Ferrari, Race Day",
    cats: ["f1"], team: "Ferrari", session: "Race", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "318mm · f/6.3 · 1/1000s · ISO 800" } },

  { src: "images/f1/f1-07.jpg", title: "Ferrari at Full Chat",
    cats: ["f1"], team: "Ferrari", session: "Race", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "397mm · f/6.3 · 1/1000s · ISO 800" } },

  { src: "images/f1/f1-08.jpg", title: "Safety Car, Recovery Underway",
    cats: ["f1"], team: "Safety Car", session: "Safety Car", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "565mm · f/6.3 · 1/1500s · ISO 400" } },

  { src: "images/f1/f1-09.jpg", title: "Safety Car on Track",
    cats: ["f1"], team: "Safety Car", session: "Safety Car", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "459mm · f/6.3 · 1/1000s · ISO 320" } },

  { src: "images/f1/f1-10.jpg", title: "Safety Car, Malaysia",
    cats: ["f1"], team: "Safety Car", session: "Safety Car", track: "Sepang", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "200mm · f/10 · 1/320s · ISO 500" } },

  { src: "images/f1/f1-11.jpg", title: "Stake Sauber, Rooster Tail",
    cats: ["f1"], team: "Sauber", session: "Race", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "456mm · f/6.3 · 1/1000s · ISO 800" } },

  { src: "images/f1/f1-12.jpg", title: "Haas in the Wet",
    cats: ["f1"], team: "Haas", session: "Race", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "391mm · f/6.3 · 1/1000s · ISO 400" } },

  { src: "images/f1/f1-13.jpg", title: "McLaren, Friday Running",
    cats: ["f1"], team: "McLaren", session: "FP2", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "394mm · f/5.6 · 1/1000s · ISO 50" } },

  { src: "images/f1/f1-14.jpg", title: "Ferrari in the Spray",
    cats: ["f1"], team: "Ferrari", session: "Race", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "481mm · f/6.3 · 1/1000s · ISO 800" } },

  { src: "images/f1/f1-15.jpg", title: "Haas, Clean Air",
    cats: ["f1"], team: "Haas", session: "Race", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "353mm · f/6.3 · 1/1000s · ISO 640" } },

  { src: "images/f1/f1-16.jpg", title: "Ferrari, Friday Afternoon",
    cats: ["f1"], team: "Ferrari", session: "FP2", track: "Silverstone", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "211mm · f/5.6 · 1/1000s · ISO 50" } },

  /* ===== REAL — Ice Hockey, Perth Ice Arena =====
     Redhawks v West Coast Flyers, D3, 21 March 2026 (from the folder name). */

  { src: "images/sports/hockey-01.jpg", title: "Eyes on the Puck",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "200mm · f/6.3 · 1/640s · ISO 10000" } },

  { src: "images/sports/hockey-02.jpg", title: "Winding Up",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "200mm · f/6.3 · 1/640s · ISO 10000" } },

  { src: "images/sports/hockey-03.jpg", title: "Driving the Blue Line",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026", feat: true,
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "218mm · f/6.3 · 1/640s · ISO 10000" } },

  { src: "images/sports/hockey-04.jpg", title: "Battle for the Puck",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "200mm · f/6.3 · 1/640s · ISO 10000" } },

  { src: "images/sports/hockey-05.jpg", title: "Contact in the Corner",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "200mm · f/6.3 · 1/640s · ISO 10000" } },

  { src: "images/sports/hockey-06.jpg", title: "Breaking Out",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "200mm · f/6.3 · 1/640s · ISO 10000" } },

  { src: "images/sports/hockey-07.jpg", title: "Between Shifts",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "200mm · f/6.3 · 1/640s · ISO 10000" } },

  { src: "images/sports/hockey-08.jpg", title: "Flyers Blue",
    cats: ["sports"], tag: "Ice Hockey", fixture: "Redhawks v Flyers", loc: "Perth Ice Arena",
    year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "169mm · f/6.3 · 1/640s · ISO 12800" } },

  /* ===== REAL — Wildlife, Woburn Safari Park, 11 December 2025 =====
     Species names below are MY identifications from the photos, not Adam's.
     Worth him checking before anyone else reads them. */

  { src: "images/wildlife/wildlife-01.jpg", title: "Lioness",
    cats: ["wildlife"], tag: "Mammals", loc: "Woburn Safari Park", year: "2025", feat: true,
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "200mm · f/4 · 1/640s · ISO 400" } },

  { src: "images/wildlife/wildlife-02.jpg", title: "Otter, Whiskers Lit",
    cats: ["wildlife"], tag: "Mammals", loc: "Woburn Safari Park", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "112mm · f/4 · 1/640s · ISO 500" } },

  { src: "images/wildlife/wildlife-03.jpg", title: "Macaque",
    cats: ["wildlife"], tag: "Mammals", loc: "Woburn Safari Park", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "70mm · f/4 · 1/250s · ISO 400" } },

  { src: "images/wildlife/wildlife-04.jpg", title: "Grey Squirrel",
    cats: ["wildlife"], tag: "Mammals", loc: "Woburn Safari Park", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "174mm · f/4 · 1/320s · ISO 400" } },

  { src: "images/wildlife/wildlife-05.jpg", title: "Giant Tortoise",
    cats: ["wildlife"], tag: "Reptiles", loc: "Woburn Safari Park", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "200mm · f/4 · 1/400s · ISO 320" } },

  { src: "images/wildlife/wildlife-06.jpg", title: "Penguin, Mid-Call",
    cats: ["wildlife"], tag: "Birds", loc: "Woburn Safari Park", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "200mm · f/4 · 1/400s · ISO 200" } },

  { src: "images/wildlife/wildlife-07.jpg", title: "Ostrich in the Dark",
    cats: ["wildlife"], tag: "Birds", loc: "Woburn Safari Park", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "200mm · f/4 · 1/400s · ISO 100" } },

  { src: "images/wildlife/wildlife-08.jpg", title: "Zebra in Profile",
    cats: ["wildlife"], tag: "Mammals", loc: "Woburn Safari Park", year: "2025",
    exif: { cam: "Sony A7R IV", lens: "FE 70-200mm f/4 G", set: "200mm · f/4 · 1/1250s · ISO 250" } },

  /* ===== REAL — Supercars / Trans Am, 31 July 2026 =====
     Circuit not recorded in the files — add loc: "..." once confirmed. */

  { src: "images/motorsport/supercars-01.jpg", title: "Castrol Mustang, Panned",
    cats: ["motorsport"], tag: "Supercars", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "270mm · f/11 · 1/125s · ISO 50" } },

  { src: "images/motorsport/supercars-02.jpg", title: "TotalEnergies Camaro",
    cats: ["motorsport"], tag: "Supercars", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "236mm · f/11 · 1/125s · ISO 50" } },

  { src: "images/motorsport/supercars-03.jpg", title: "Supra Through the Chicane",
    cats: ["motorsport"], tag: "Supercars", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "344mm · f/11 · 1/125s · ISO 50" } },

  { src: "images/motorsport/supercars-04.jpg", title: "Trans Am, Off and Digging",
    cats: ["motorsport"], tag: "Trans Am", year: "2026",
    exif: { cam: "Sony A7R IV", lens: "FE 200-600mm f/5.6-6.3 G", set: "600mm · f/11 · 1/200s · ISO 125" } },

  /* ===== PLACEHOLDERS — no image files yet. Titles and settings
     below are invented filler to show the layout. Replace as real
     photos come in. ===== */

  /* ---------- WILDLIFE ---------- */
  /* ---------- SPORTS ---------- */
  /* ---------- MOTORSPORT (other classes) ---------- */
];

/* ------------------------------------------------------------
   TABS + FILTER CHIPS
   "accent" is the colour the whole site shifts to for that tab.
   ------------------------------------------------------------ */
const TABS = [
  { id: "wildlife",     label: "Wildlife",     blurb: "Patience, long glass and cold mornings.",
    accent: "150 80% 52%",
    filters: [
      { key: "tag",  label: "Subject", order: ["Mammals", "Birds", "Reptiles", "Marine", "Macro"] },
      { key: "loc",  label: "Where" },
      { key: "year", label: "Year" }
    ] },

  { id: "sports",       label: "Sports",       blurb: "Ice hockey, under the arena lights.",
    accent: "199 95% 58%",
    filters: [
      { key: "tag",     label: "Sport" },
      { key: "fixture", label: "Fixture" },
      { key: "year",    label: "Year" }
    ] },

  { id: "f1",           label: "Formula 1",    blurb: "Every team, every weekend, trackside.",
    accent: "0 85% 58%",
    filters: [
      { key: "team",  label: "Team",
        order: ["Ferrari", "McLaren", "Mercedes", "Red Bull", "Aston Martin", "Alpine",
                "Williams", "Haas", "Sauber", "Racing Bulls", "Safety Car", "Medical Car"] },
      { key: "track", label: "Track" },
      { key: "year",  label: "Year" }
    ] },

  { id: "motorsport",   label: "Motorsport",   blurb: "Bikes, Supercars and anything with a racing line.",
    accent: "14 95% 58%",
    filters: [{ key: "tag", label: "Class", order: ["Motorbikes", "Supercars", "Trans Am"] }, { key: "year", label: "Year" }] },

  { id: "architecture", label: "Architecture", blurb: "Cities after dark, from the ground up.",
    accent: "265 90% 68%",
    filters: [{ key: "tag", label: "Subject" }] },
];
