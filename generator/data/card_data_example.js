var card_data_example = [
  {
    "count": 1,
    "color": "Navy",
    "title": "Alliance Battlecruiser",
    "icon": "battleship",
    "contents": [
      "subtitle | Large, Capital, Surface | 175pts",
      "smallruler",
      "shipstats | 2/8 | 7 | 7/4 | 6 |12 | 4",
      "smallruler",
      "weapon | Heavy Gun Battery | Gunnery  | FPS  | 11(5) | 7(3) | 5(2)",
      "weapon | Heavy Gun Battery | Gunnery  | APS  | 11(5) | 7(3) | 5(2)",
      "weapon | Gun Battery | Gunnery  | FPS  | 7(4) | 5(2) | -",
      "weapon | Heavy Broadside | Fusillade | P&S  | 12(6) | 10(5) | 8(4)",
      "weapon | Torpedo Turret | Sub, Torpedo  | FP  | - | 6(3) | 6(3)",
      "weapon | Torpedo Turret | Sub, Torpedo  | FS  | - | 6(3) | 6(3)",
      "smallruler",
      "text | Turning Limit, Conscripted Crew",
      "fill"
    ],
    "tags": [
      "large",
      "capital",
      "surface",
      "battle-ready"
    ]
  },
  {
    "count": 1,
    "color": "DarkRed",
    "title": "Alliance Battlecruiser (Crippled)",
    "icon": "battleship",
    "contents": [
      "subtitle | Large, Capital, Surface | 175pts",
      "smallruler",
      "shipstats | <strong>2/5</strong> | <strong>6</strong> | <strong>3/2</strong> | 6 |12 | 4",
      "smallruler",
      "weapon | Heavy Gun Battery | Gunnery  | FPS | <strong>7(3)</strong> | <strong>5(2)</strong>  | <strong>3(1)</strong>",
      "weapon | Heavy Gun Battery | Gunnery  | APS  | <strong>7(3)</strong> | <strong>5(2)</strong>  | <strong>3(1)</strong>",
      "weapon | Gun Battery | Gunnery  | FPS  | <strong>5(3)</strong> | <strong>3(1)</strong> | -",
      "weapon | Heavy Broadside | Fusillade | P&S  | <strong>8(4)</strong> | <strong>7(3)</strong>  | <strong>5(3)</strong>",
      "weapon | Torpedo Turret | Sub, Torpedo  | FP  | - | <strong>4(2)</strong>  | <strong>4(2)</strong>",
      "weapon | Torpedo Turret | Sub, Torpedo  | FS  | - | <strong>4(2)</strong>  | <strong>4(2)</strong>",
      "smallruler",
      "text | Turning Limit, Conscripted Crew"
    ],
    "tags": [
      "large",
      "capital",
      "surface",
      "Crippled"
    ]
  },
  {
    "count": 1,
    "title": "Heat Lance",
    "contents": [
      "subtitle | Weapon, Alliance only | +20pts",
      "property | Replaces:| Heavy gun battery",
      "",
      "smallruler",
      "weapon | Battle-ready || | 11(5)| 7(3) | 5(2)",
      "weapon | Crippled || | <strong>7(3)</strong> | <strong>5(2)</strong> | <strong>3(1)</strong>",
      "smallruler",
      "description| Piercing | The Initial Target receives a Critical Hit if it suffers one of more points of damage. ",
      "description| Gunnery | Attacks against models with the Small trait confer the Obscured Condition",
      "description| Hazardous | Should the Initial Target suffer a Critical Hit from this weapon it also gains the Hazard Condition. ",
      ""
    ],
    "tags": [
      "outfitting",
      "weapon"
    ],
    "color": "DimGray",
    "icon": "artillery-shell"
  },
  {
    "count": 1,
    "title": "Heavy Mortar Battery",
    "contents": [
      "subtitle | Weapon | +10pts",
      "property | Replaces:| Heavy gun battery",
      "",
      "smallruler",
      "weapon | Battle-ready || | 4(2)|8(4)|8(4)",
      "weapon | Crippled || | <strong>2(1)</strong>|<strong>5(3)</strong>|<strong>5(3)</strong>",
      "smallruler",
      "description|Indirect| May select any non-Aerial enemy Unit in range and Fire Arc as an Initial Target without Line of Sight, and confers the Obscured Condition.",
      "description|Extreme Range | Treats the Long Range Band as 20”-40”.",
      "description|Blast|Results are applied to every model under a circular Blast Template placed over any part of the Initial Target.",
      ""
    ],
    "tags": [
      "outfitting",
      "weapon"
    ],
    "color": "DimGray",
    "icon": "artillery-shell"
  },
  {
    "count": 1,
    "title": "Fury Generator",
    "contents": [
      "subtitle | Generator | +20pts",
      "property | Replaces:| N/A",
      "",
      "smallruler",
      "text|While Powered Up, this Generator gives the model +1 to its Speed and Fray Attributes and the <b>Agressive Crew</b> Common Rule.",
      "smallruler",
      "description|Agressive Crew| This Unit may re-roll Blanks when acting as an Assaulting Model. "
    ],
    "tags": [
      "outfitting",
      "generator"
    ],
    "color": "DimGray",
    "icon": "power-generator"
  },
  {
    "count": 1,
    "title": "Covenant Advisor",
    "contents": [
      "subtitle | Crew| +10pts",
      "property | Replaces:| N/A",
      "",
      "smallruler",
      "text|This model gains the <b>Enlightened Science</b> special Rule.",
      "smallruler",
      "description| Enlightened Science | This Unit may count Blanks as successes when Powering Up their Generators."
    ],
    "tags": [
      "outfitting",
      "crew"
    ],
    "color": "DimGray",
    "icon": "stahlhelm"
  },
  {
    "count": 1,
    "title": "Advanced Command Cogitator",
    "contents": [
      "subtitle | Systems | +10pts",
      "property | Replaces:| N/A",
      "",
      "smallruler",
      "text|This model gains the <b>Command and Control</b> special Rule.",
      "smallruler",
      "description| Command and Control |  This Unit allows all friendly Models 10” to re-roll the Action Die when attempting to Power Up their Generators or Repair Critical Damage. If either this Model or an affected Model moves out of Range, the benefit is lost."
    ],
    "tags": [
      "outfitting",
      "systems"
    ],
    "color": "DimGray",
    "icon": "cog"
  },
  {
    "count": 1,
    "title": "Weapon Qualities",
    "contents": [
      "description| Gunnery | Attacks against models with the Small trait confer the Obscured Condition.",
      "description| Fusillade| Attacks at Point Blank Range may re-roll Blanks.",
      "description| Submerged| Cannot target Aerial. Target may use Submerged Defenses. Ignore Shield Generators.",
      "description| Torpedo| Can only target Surface or Submerged. Ignore Obscured Condition.",
      "description| Piercing | Target receives a Critical Hit if it suffers one of more points of damage.",
      "description| Hazardous | Target gains the Hazard Condition on Critical Hit."
    ],
    "tags": [
      "rules",
      "weapon"
    ],
    "color": "",
    "icon": "open-book"
  },
  {
    "count": 1,
    "title": "Unit Special Rules",
    "contents": [
      "description| Turning Limit | After a turn, must move an inch in a straight line before making another turn.",
      "description| Lumbering| Can only turn up to two Navigation Points during its activation (Not including the start of the turn).",
      "description| Conscripted Crew| Does not count any Light Hits or Light Counters as success during Assault."
    ],
    "tags": [
      "rules",
      "weapon"
    ],
    "color": "",
    "icon": "open-book"
  }
]