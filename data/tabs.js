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
    "label": "Sports",
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

   A value that isn't listed here just keeps the tab's own
   accent, so adding a team is one line and removing one is safe.
   Sampled from Adam's own Inferno artwork: #744499 and #FD5F24.
   ============================================================ */

const FILTER_THEMES = {
  "Perth Inferno": { a: "274 42% 46%", b: "16 95% 55%", accent: "276 70% 68%" }

  /* To add a team later, copy the line above and change the name to
     match the chip text exactly. F1 teams work the same way, e.g.
       "Ferrari": { a: "0 90% 42%", b: "45 95% 55%", accent: "0 85% 64%" },
       "McLaren": { a: "30 100% 50%", b: "199 95% 45%", accent: "30 95% 60%" },
     A value that isn't listed keeps the tab's own accent. */
};
