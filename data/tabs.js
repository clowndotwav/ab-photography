/* ============================================================
   AB PHOTOGRAPHY — TAB + FILTER DEFINITIONS
   ------------------------------------------------------------
   The five tabs and the filter rows each one shows.
   Chip VALUES are read from the photos themselves, so you only
   touch this file to add a whole new tab or a new filter row.
   "order" just fixes the left-to-right order of the chips; a
   value not listed there still appears, at the end.
   ============================================================ */

const TABS = [
  {
    "id": "wildlife",
    "label": "Wildlife",
    "blurb": "Patience, long glass and cold mornings.",
    "accent": "150 80% 52%",
    "filters": [
      {
        "key": "tag",
        "label": "Subject",
        "order": [
          "Mammals",
          "Birds",
          "Reptiles",
          "Marine",
          "Macro"
        ]
      },
      {
        "key": "loc",
        "label": "Where"
      },
      {
        "key": "year",
        "label": "Year"
      }
    ]
  },
  {
    "id": "sports",
    "label": "Ice Hockey",
    "blurb": "Ice hockey, under the arena lights.",
    "accent": "199 95% 58%",
    "filters": [
      {
        "key": "comp",
        "label": "Competition",
        "order": [
          "Perth Inferno",
          "Perth Womens Ice Hockey League",
          "IHWA Winter Season",
          "Monday Night Scratch Games"
        ]
      },
      {
        "key": "team",
        "label": "Team",
        "always": true,
        "order": [
          "Wolves",
          "Scouts",
          "Hellcats",
          "Moose",
          "Pandas",
          "Bears",
          "Rampage"
        ]
      },
      {
        "key": "year",
        "label": "Year"
      }
    ]
  },
  {
    "id": "f1",
    "label": "Formula 1",
    "blurb": "Every team, every weekend, trackside.",
    "accent": "0 85% 58%",
    "filters": [
      {
        "key": "series",
        "label": "Series",
        "order": [
          "F1",
          "F2",
          "F3",
          "Historic F1",
          "Safety Car"
        ]
      },
      {
        "key": "team",
        "label": "Team",
        "order": [
          "Ferrari",
          "McLaren",
          "Mercedes",
          "Red Bull",
          "Aston Martin",
          "Alpine",
          "Williams",
          "Haas",
          "Sauber",
          "Racing Bulls",
          "Cadillac",
          "Medical Car"
        ]
      },
      {
        "key": "driver",
        "label": "Driver",
        "order": [
          "Leclerc",
          "Hamilton",
          "Norris",
          "Piastri",
          "Russell",
          "Antonelli",
          "Verstappen",
          "Tsunoda",
          "Alonso",
          "Stroll",
          "Gasly",
          "Colapinto",
          "Albon",
          "Sainz",
          "Ocon",
          "Bearman",
          "Hulkenberg",
          "Bortoleto",
          "Hadjar",
          "Lawson"
        ]
      },
      {
        "key": "track",
        "label": "Track"
      },
      {
        "key": "year",
        "label": "Year"
      }
    ]
  },
  {
    "id": "motorsport",
    "label": "Motorsport",
    "blurb": "Bikes, Supercars and anything with a racing line.",
    "accent": "14 95% 58%",
    "filters": [
      {
        "key": "tag",
        "label": "Class",
        "order": [
          "Supercars",
          "Trans Am",
          "Super Utes",
          "Radicals",
          "Motorbikes",
          "Sidecars"
        ]
      },
      {
        "key": "loc",
        "label": "Where"
      },
      {
        "key": "year",
        "label": "Year"
      }
    ]
  },
  {
    "id": "architecture",
    "label": "Architecture",
    "blurb": "Cities after dark, from the ground up.",
    "accent": "265 90% 68%",
    "filters": [
      {
        "key": "tag",
        "label": "Subject"
      }
    ]
  }
];

/* ============================================================
   TEAM COLOURS
   ------------------------------------------------------------
   Pick a filter chip whose value is listed here and the page
   chrome takes that team's colours: a slow gradient wash behind
   the filter rows and a gradient fill on the active chips.
   The photos themselves are never tinted.

     a      gradient start  (hsl components, no commas)
     b      gradient end
     accent the readable UI colour — borders, counts, links.
            Keep it light enough to sit on a near-black page.
     embers true adds a slow drift of flakes in the team's two colours.
     shape  what those flakes are cut from — "ember" for tumbling
            slivers, "paws" for paw prints and bones. Keep novelty
            shapes for teams the motif actually belongs to.

   A value that isn't listed here just keeps the tab's own
   accent, so adding a team is one line and removing one is safe.
   Sampled from Adam's own Inferno artwork: #744499 and #FD5F24.
   ============================================================ */

const FILTER_THEMES = {
  // AWIHL
  "Perth Inferno": { a: "274 42% 46%", b: "16 95% 55%", accent: "276 70% 68%",
                     embers: true, shape: "ember" },

  // PWIHL — colours as Jas described them. Teams appear as chips only
  // once photos are tagged with them, so this list can run ahead of
  // the gallery without putting a dead chip on the page.
  "Wolves":   { a: "220 48% 30%", b: "48 95% 55%",  accent: "48 88% 62%",
                embers: true, shape: "ember" },
  "Scouts":   { a: "186 68% 38%", b: "199 88% 62%", accent: "192 82% 66%",
                embers: true, shape: "paws" },
  "Hellcats": { a: "222 62% 26%", b: "22 100% 54%", accent: "24 95% 62%",
                embers: true, shape: "ember" },
  "Moose":    { a: "330 82% 46%", b: "320 95% 64%", accent: "328 90% 70%",
                embers: true, shape: "ember" },
  "Pandas":   { a: "0 88% 44%",   b: "26 95% 52%",  accent: "0 88% 64%",
                embers: true, shape: "ember" },
  "Bears":    { a: "268 55% 40%", b: "286 72% 58%", accent: "278 72% 68%",
                embers: true, shape: "ember" },
  "Rampage":  { a: "152 68% 32%", b: "172 85% 46%", accent: "162 76% 56%",
                embers: true, shape: "ember" }

  /* To add a team later, copy the line above and change the name to
     match the chip text exactly. F1 teams work the same way, e.g.
       "Ferrari": { a: "0 90% 42%", b: "45 95% 55%", accent: "0 85% 64%" },
       "McLaren": { a: "30 100% 50%", b: "199 95% 45%", accent: "30 95% 60%" },
     A value that isn't listed keeps the tab's own accent. */
};
