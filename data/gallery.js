/* ============================================================
   AB PHOTOGRAPHY — GALLERY DATA
   ------------------------------------------------------------
   This is the ONLY file you need to edit to add or change photos.

   HOW TO ADD A PHOTO
   Until a real image exists at the "src" path below, the site shows a
   styled placeholder tile automatically — nothing breaks, nothing looks
   broken. To make a photo appear, just save the file at that exact path,
   e.g.  images/wildlife/wildlife-01.jpg  — then refresh. That's it.

   To add MORE photos, copy any block below and change the values.

   FIELDS
     src    (required) path to the image, relative to index.html
     title  (required) shown in the lightbox and on hover
     cats   (required) any of "wildlife" | "sports" | "motorsport"
                       — a photo can appear in more than one tab
     tag    (required) the filter chip it sits under, e.g. "Formula 1"
     loc    optional   where it was shot
     year   optional   shown as a small chip
     exif   optional   { cam, lens, set }  — camera / lens / settings
     feat   optional   true = give it extra height in the grid
     alt    optional   accessibility description (falls back to title)
   ============================================================ */

const GALLERY = [

  /* ↓ REAL PHOTO. Everything below is still a placeholder —
       titles, locations and camera settings are invented and
       need replacing with AB's real captions. */
  { src: "images/motorsport/motorsport-01.jpg", title: "Safety Car, Recovery Lap",
    cats: ["motorsport", "sports"], tag: "Formula 1", feat: true,
    alt: "The F1 Mercedes-AMG safety car on track during a recovery" },

  /* ---------- WILDLIFE ---------- */
  { src: "images/wildlife/wildlife-01.jpg", title: "Wedge-tailed Eagle, Rising",
    cats: ["wildlife"], tag: "Birds", loc: "Darling Range, WA", year: "2025", feat: true,
    exif: { cam: "Canon R5", lens: "RF 100-500mm f/4.5-7.1", set: "1/2500s · f/7.1 · ISO 640" } },

  { src: "images/wildlife/wildlife-02.jpg", title: "Red Kangaroo at First Light",
    cats: ["wildlife"], tag: "Mammals", loc: "Nullarbor, WA", year: "2025",
    exif: { cam: "Canon R5", lens: "RF 400mm f/2.8", set: "1/1600s · f/2.8 · ISO 400" } },

  { src: "images/wildlife/wildlife-03.jpg", title: "Humpback Breach",
    cats: ["wildlife"], tag: "Marine", loc: "Ningaloo Reef", year: "2024",
    exif: { cam: "Canon R5", lens: "RF 100-500mm", set: "1/3200s · f/8 · ISO 800" } },

  { src: "images/wildlife/wildlife-04.jpg", title: "Splendid Fairywren",
    cats: ["wildlife"], tag: "Birds", loc: "Perth Hills", year: "2026",
    exif: { cam: "Canon R5", lens: "RF 600mm f/4", set: "1/1250s · f/4 · ISO 1250" } },

  { src: "images/wildlife/wildlife-05.jpg", title: "Dingo, Dusk Patrol",
    cats: ["wildlife"], tag: "Mammals", loc: "Kimberley", year: "2025",
    exif: { cam: "Canon R5", lens: "RF 100-500mm", set: "1/800s · f/6.3 · ISO 3200" } },

  { src: "images/wildlife/wildlife-06.jpg", title: "Dragonfly, Wings Frozen",
    cats: ["wildlife"], tag: "Macro", loc: "Swan Valley", year: "2024",
    exif: { cam: "Canon R5", lens: "RF 100mm Macro", set: "1/4000s · f/5.6 · ISO 800" } },

  /* ---------- SPORTS ---------- */
  { src: "images/sports/sports-01.jpg", title: "Faceoff — Puck Drop",
    cats: ["sports"], tag: "Ice Hockey", loc: "Perth Ice Arena", year: "2026", feat: true,
    exif: { cam: "Canon R3", lens: "RF 70-200mm f/2.8", set: "1/1000s · f/2.8 · ISO 5000" } },

  { src: "images/sports/sports-02.jpg", title: "Glove Save, Third Period",
    cats: ["sports"], tag: "Ice Hockey", loc: "Perth Ice Arena", year: "2026",
    exif: { cam: "Canon R3", lens: "RF 24-70mm f/2.8", set: "1/1250s · f/2.8 · ISO 6400" } },

  { src: "images/sports/sports-03.jpg", title: "Boards Check",
    cats: ["sports"], tag: "Ice Hockey", loc: "Perth Ice Arena", year: "2025",
    exif: { cam: "Canon R3", lens: "RF 70-200mm f/2.8", set: "1/1000s · f/2.8 · ISO 5000" } },

  { src: "images/sports/sports-04.jpg", title: "Pit Wall, Lights Out",
    cats: ["sports", "motorsport"], tag: "Formula 1", loc: "Albert Park", year: "2026",
    exif: { cam: "Canon R3", lens: "RF 400mm f/2.8", set: "1/160s · f/8 · ISO 100" } },

  { src: "images/sports/sports-05.jpg", title: "Celebration, Final Whistle",
    cats: ["sports"], tag: "Action", loc: "Perth", year: "2025",
    exif: { cam: "Canon R3", lens: "RF 70-200mm f/2.8", set: "1/800s · f/3.2 · ISO 3200" } },

  /* ---------- MOTORSPORT ---------- */
  { src: "images/motorsport/motorsport-02.jpg", title: "Supercar Drift, Turn 1",
    cats: ["motorsport"], tag: "Supercars", loc: "Wanneroo Raceway", year: "2025",
    exif: { cam: "Canon R3", lens: "RF 100-500mm", set: "1/125s · f/13 · ISO 100" } },

  { src: "images/motorsport/motorsport-03.jpg", title: "Knee Down",
    cats: ["motorsport"], tag: "Motorbikes", loc: "Barbagallo", year: "2025",
    exif: { cam: "Canon R3", lens: "RF 70-200mm f/2.8", set: "1/250s · f/8 · ISO 200" } },

  { src: "images/motorsport/motorsport-04.jpg", title: "Night Pit Stop",
    cats: ["motorsport"], tag: "Supercars", loc: "Adelaide", year: "2025",
    exif: { cam: "Canon R3", lens: "RF 24-70mm f/2.8", set: "1/500s · f/2.8 · ISO 6400" } },

  { src: "images/motorsport/motorsport-05.jpg", title: "Gravel Flight",
    cats: ["motorsport"], tag: "Rally", loc: "Busselton", year: "2024",
    exif: { cam: "Canon R3", lens: "RF 100-500mm", set: "1/1600s · f/5.6 · ISO 400" } },

  { src: "images/motorsport/motorsport-06.jpg", title: "Panned at 300km/h",
    cats: ["motorsport"], tag: "Formula 1", loc: "Albert Park", year: "2026",
    exif: { cam: "Canon R3", lens: "RF 400mm f/2.8", set: "1/80s · f/16 · ISO 100" } },

];

/* ------------------------------------------------------------
   TABS + FILTER CHIPS
   Edit the labels or add chips here. "accent" drives the colour
   the whole site shifts to when that tab is active.
   ------------------------------------------------------------ */
const TABS = [
  { id: "wildlife",   label: "Wildlife",   blurb: "Patience, long glass and cold mornings.",
    accent: "150 80% 52%", chips: ["All", "Birds", "Mammals", "Marine", "Macro"] },
  { id: "sports",     label: "Sports",     blurb: "Ice hockey, F1 and everything at full tilt.",
    accent: "199 95% 58%", chips: ["All", "Ice Hockey", "Formula 1", "Action"] },
  { id: "motorsport", label: "Motorsport", blurb: "F1, Supercars, bikes — speed made still.",
    accent: "14 95% 58%",  chips: ["All", "Formula 1", "Supercars", "Motorbikes", "Rally"] },
];
