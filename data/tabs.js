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
          "Safety Car",
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
