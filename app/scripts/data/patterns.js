module.exports =  [
  {
    id: "colors",
    name: "Colors",
    category: "colors",
    weight: 0,
    description: "These are the colors in use.",
    url: "These are the colors in use."
  },
  {
    id: "buttons",
    name: "Buttons",
    category: "objects",
    weight: 0,
    description: "Default button style",
    code: "<button>Button</button>",
    usedIn: [
      "river"
    ]
  },
  {
    id: "profile",
    name: "Profile",
    category: "teasers",
    weight: 0,
    description: "User profile",
    uri: "teasers/profile.html",
    usedIn: [
      "teaser",
      "expanded-teaser"
    ],
  },
  {
    id: "teaser",
    name: "Teaser",
    category: "teasers",
    weight: 0,
    uri: "teasers/teaser.html",
    description: "Generic article teaser",
    usedIn: [
      "river",
    ],
    uses: [
      "profile",
      "dateline",
    ],
  },
  {
    id: "river",
    name: "River of News",
    category: "collections",
    weight: 0,
    uri: "collections/river.html",
    description: "Generic list of articles.",
    uses: [
      "teaser",
    ],
  }
];
