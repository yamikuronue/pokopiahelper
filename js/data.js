/**
 * Pokopia Companion — static game data
 * Foods / flavors: Serebii Pokopia flavors list (+ community Mosslax notes).
 * Fossils: 22 pieces across 9 museum displays (community museum guides).
 */
window.POKOPIA_DATA = {
  flavors: [
    {
      id: "neutral",
      name: "Neutral",
      color: "#7eb8a2",
      mosslax: "Bond with Pokémon faster (comfort / friendship).",
    },
    {
      id: "sweet",
      name: "Sweet",
      color: "#e89bb8",
      mosslax: "More Ancient Artifact glow spots (fossils, relics, slates).",
    },
    {
      id: "spicy",
      name: "Spicy",
      color: "#e07a5f",
      mosslax: "Pokémon appear more often in habitats (great for the Pokédex).",
    },
    {
      id: "dry",
      name: "Dry",
      color: "#c4a574",
      mosslax: "Ho-Oh & Lugia more likely to drop Mysterious Feathers.",
    },
    {
      id: "bitter",
      name: "Bitter",
      color: "#6b8f71",
      mosslax: "Better chance of finding rare items.",
    },
    {
      id: "sour",
      name: "Sour",
      color: "#e9c46a",
      mosslax: "Trade shops more likely to stock good items.",
    },
  ],

  foods: [
    // Neutral
    { id: "leppa-berry", name: "Leppa Berry", flavor: "neutral", kind: "Berry", note: "Berry trees" },
    { id: "lum-berry", name: "Lum Berry", flavor: "neutral", kind: "Berry", note: "Berry trees" },
    { id: "fresh-water", name: "Fresh Water", flavor: "neutral", kind: "Drink", note: "Environment / vending" },
    { id: "bruised-berry", name: "Bruised Berry", flavor: "neutral", kind: "Other", note: "From Chef Dente" },
    { id: "simple-salad", name: "Simple Salad", flavor: "neutral", kind: "Cooked", note: "Ordinary leaf salad" },
    { id: "simple-soup", name: "Simple Soup", flavor: "neutral", kind: "Cooked", note: "Fresh Water soup" },
    { id: "simple-bread", name: "Simple Bread", flavor: "neutral", kind: "Cooked", note: "Ordinary wheat bread" },
    { id: "simple-hamburger", name: "Simple Hamburger Steak", flavor: "neutral", kind: "Cooked", note: "Bean hamburger" },
    { id: "vibrant-hamburger", name: "Vibrant Hamburger Steak", flavor: "neutral", kind: "Cooked", note: "Lots of ingredients" },
    { id: "curry-and-rice", name: "Curry and Rice", flavor: "neutral", kind: "Cooked", note: "Party meal with other Pokémon" },

    // Sweet
    { id: "pecha-berry", name: "Pecha Berry", flavor: "sweet", kind: "Berry", note: "Berry trees" },
    { id: "bean", name: "Bean", flavor: "sweet", kind: "Veggie", note: "Plant & harvest" },
    { id: "moomoo-coffee", name: "Moomoo Milk Coffee", flavor: "sweet", kind: "Drink", note: "Shop / vending" },
    { id: "common-candy", name: "Common Candy", flavor: "sweet", kind: "Other", note: "From Chef Dente" },
    { id: "rare-candy", name: "Rare Candy", flavor: "sweet", kind: "Other", note: "From Chef Dente" },
    { id: "watermelon-slice", name: "Watermelon Slice", flavor: "sweet", kind: "Veggie", note: "DLC / special harvest" },
    { id: "leppa-salad", name: "Leppa Salad", flavor: "sweet", kind: "Cooked", note: "Salad with Leppa Berries" },
    { id: "fluffy-bread", name: "Fluffy Bread", flavor: "sweet", kind: "Cooked", note: "Pecha Berry bread" },
    { id: "watermelon-bread", name: "Watermelon Bread", flavor: "sweet", kind: "Cooked", note: "Watermelon bread" },
    { id: "potato-hamburger", name: "Potato Hamburger Steak", flavor: "sweet", kind: "Cooked", note: "Sweet hamburger steak" },
    { id: "leppa-smoothie", name: "Leppa Smoothie", flavor: "sweet", kind: "Drink", note: "Powers up Surf" },
    { id: "watermelon-smoothie", name: "Watermelon Smoothie", flavor: "sweet", kind: "Drink", note: "Powers up Surf" },

    // Spicy
    { id: "fresh-carrot", name: "Fresh Carrot", flavor: "spicy", kind: "Veggie", note: "Pull leaves from the ground" },
    { id: "chili-sauce", name: "Chili Sauce", flavor: "spicy", kind: "Drink", note: "Shop / vending" },
    { id: "crouton-salad", name: "Crouton Salad", flavor: "spicy", kind: "Cooked", note: "Crunchy salad" },
    { id: "electrifying-soup", name: "Electrifying Soup", flavor: "spicy", kind: "Cooked", note: "Shockingly spicy" },
    { id: "healthy-soup", name: "Healthy Soup", flavor: "spicy", kind: "Cooked", note: "Aromatic bean flavor" },
    { id: "carrot-bread", name: "Carrot Bread", flavor: "spicy", kind: "Cooked", note: "Intense carrot flavor" },
    { id: "bread-bowl", name: "Bread Bowl", flavor: "spicy", kind: "Cooked", note: "Good even when burnt" },
    { id: "explosive-hamburger", name: "Explosive Hamburger Steak", flavor: "spicy", kind: "Cooked", note: "Very spicy hamburger" },
    { id: "red-hot-smoothie", name: "Red-hot Smoothie", flavor: "spicy", kind: "Drink", note: "Powers up Surf" },

    // Dry
    { id: "chesto-berry", name: "Chesto Berry", flavor: "dry", kind: "Berry", note: "Berry trees" },
    { id: "wheat", name: "Wheat", flavor: "dry", kind: "Veggie", note: "Plant & harvest (edible raw)" },
    { id: "cave-mushrooms", name: "Cave Mushrooms", flavor: "dry", kind: "Veggie", note: "Caves & shady spots" },
    { id: "roserade-tea", name: "Roserade Tea", flavor: "dry", kind: "Drink", note: "Shop / vending" },
    { id: "crushed-berry-salad", name: "Crushed-berry Salad", flavor: "dry", kind: "Cooked", note: "Crushed Chesto Berries" },
    { id: "mushroom-soup", name: "Mushroom Soup", flavor: "dry", kind: "Cooked", note: "Mushroom broth" },
    { id: "mushroom-hamburger", name: "Mushroom Hamburger Steak", flavor: "dry", kind: "Cooked", note: "Dry mushroom flavor" },
    { id: "sea-grape-smoothie", name: "Sea Grape Smoothie", flavor: "dry", kind: "Drink", note: "Powers up Surf" },

    // Bitter
    { id: "rawst-berry", name: "Rawst Berry", flavor: "bitter", kind: "Berry", note: "Berry trees" },
    { id: "potato", name: "Potato", flavor: "bitter", kind: "Veggie", note: "Plant & harvest" },
    { id: "seaweed", name: "Seaweed", flavor: "bitter", kind: "Veggie", note: "Washed ashore on beaches" },
    { id: "sea-grapes", name: "Sea Grapes", flavor: "bitter", kind: "Veggie", note: "Ocean / DLC" },
    { id: "seaweed-salad", name: "Seaweed Salad", flavor: "bitter", kind: "Cooked", note: "Bitter seaweed salad" },
    { id: "popping-salad", name: "Popping Salad", flavor: "bitter", kind: "Cooked", note: "Made with sea grapes" },
    { id: "seaweed-soup", name: "Seaweed Soup", flavor: "bitter", kind: "Cooked", note: "Bitter seaweed soup" },
    { id: "popping-soup", name: "Popping Soup", flavor: "bitter", kind: "Cooked", note: "Smells of the sea" },
    { id: "recycled-bread", name: "Recycled Bread", flavor: "bitter", kind: "Cooked", note: "Reused bread" },
    { id: "bitter-hamburger", name: "Bitter Hamburger Steak", flavor: "bitter", kind: "Cooked", note: "Topped with leaves" },
    { id: "coffee-parfait-smoothie", name: "Coffee Parfait Smoothie", flavor: "bitter", kind: "Drink", note: "Powers up Surf" },

    // Sour
    { id: "aspear-berry", name: "Aspear Berry", flavor: "sour", kind: "Berry", note: "Berry trees" },
    { id: "tomato", name: "Tomato", flavor: "sour", kind: "Veggie", note: "Plant & harvest" },
    { id: "soda-pop", name: "Soda Pop", flavor: "sour", kind: "Drink", note: "Shop / vending" },
    { id: "shredded-salad", name: "Shredded Salad", flavor: "sour", kind: "Cooked", note: "Finely chopped leaves" },
    { id: "flavourful-soup", name: "Flavourful Soup", flavor: "sour", kind: "Cooked", note: "Bursting with flavor" },
    { id: "leppa-bread", name: "Leppa Bread", flavor: "sour", kind: "Cooked", note: "Leppa Berry jam bread" },
    { id: "tomato-hamburger", name: "Tomato Hamburger Steak", flavor: "sour", kind: "Cooked", note: "Sour tomato flavor" },
    { id: "refreshing-soda-smoothie", name: "Refreshing Soda Smoothie", flavor: "sour", kind: "Drink", note: "Powers up Surf" },
  ],

  fossilSets: [
    {
      id: "wing",
      pokemon: "Aerodactyl",
      display: "Wing Fossil Display",
      pieces: [
        { id: "wing-head", name: "Wing Fossil (Head)" },
        { id: "wing-right", name: "Wing Fossil (Right Wing)" },
        { id: "wing-left", name: "Wing Fossil (Left Wing)" },
        { id: "wing-body", name: "Wing Fossil (Body)" },
        { id: "wing-tail", name: "Wing Fossil (Tail)" },
      ],
    },
    {
      id: "skull",
      pokemon: "Cranidos",
      display: "Skull Fossil Display",
      pieces: [{ id: "skull", name: "Skull Fossil" }],
    },
    {
      id: "headbutt",
      pokemon: "Rampardos",
      display: "Headbutt Fossil Display",
      pieces: [
        { id: "headbutt-head", name: "Headbutt Fossil (Head)" },
        { id: "headbutt-body", name: "Headbutt Fossil (Body)" },
        { id: "headbutt-tail", name: "Headbutt Fossil (Tail)" },
      ],
    },
    {
      id: "armor",
      pokemon: "Shieldon",
      display: "Armor Fossil Display",
      pieces: [{ id: "armor", name: "Armor Fossil" }],
    },
    {
      id: "shield",
      pokemon: "Bastiodon",
      display: "Shield Fossil Display",
      pieces: [
        { id: "shield-head", name: "Shield Fossil (Head)" },
        { id: "shield-body", name: "Shield Fossil (Body)" },
        { id: "shield-tail", name: "Shield Fossil (Tail)" },
      ],
    },
    {
      id: "jaw",
      pokemon: "Tyrunt",
      display: "Jaw Fossil Display",
      pieces: [{ id: "jaw", name: "Jaw Fossil" }],
    },
    {
      id: "despot",
      pokemon: "Tyrantrum",
      display: "Despot Fossil Display",
      pieces: [
        { id: "despot-head", name: "Despot Fossil (Head)" },
        { id: "despot-body", name: "Despot Fossil (Body)" },
        { id: "despot-legs", name: "Despot Fossil (Legs)" },
        { id: "despot-tail", name: "Despot Fossil (Tail)" },
      ],
    },
    {
      id: "sail",
      pokemon: "Amaura",
      display: "Sail Fossil Display",
      pieces: [{ id: "sail", name: "Sail Fossil" }],
    },
    {
      id: "tundra",
      pokemon: "Aurorus",
      display: "Tundra Fossil Display",
      pieces: [
        { id: "tundra-head", name: "Tundra Fossil (Head)" },
        { id: "tundra-body", name: "Tundra Fossil (Body)" },
        { id: "tundra-legs", name: "Tundra Fossil (Legs)" },
      ],
    },
  ],

  /**
   * Dream Islands — doll → materials → legendary (if any).
   * Sources: Serebii focus list; Thonky / Games Wiki / Polygon for legendaries.
   * Legendaries are a chance find (often in caves), not guaranteed each visit.
   */
  dreamIslands: [
    {
      id: "eevee",
      doll: "Eevee Doll",
      island: "Wasteland Dream Island",
      biome: "Withered Wasteland",
      materials: ["Leppa Berry", "Vine Rope", "Glowing Mushrooms"],
      legendary: "Suicune",
      legendaryNote: "Search deep caves / ice room — chance spawn.",
    },
    {
      id: "pikachu",
      doll: "Pikachu Doll",
      island: "Ocean Dream Island",
      biome: "Bleak Beach",
      materials: ["Twine", "Sea Glass Fragments", "Seashell"],
      legendary: "Raikou",
      legendaryNote: "Cave room with metal blocks — may need story encounter first.",
    },
    {
      id: "clefairy",
      doll: "Clefairy Doll",
      island: "Rock Peak Dream Island",
      biome: "Rocky Ridges (exterior)",
      materials: ["Cave Mushrooms", "Copper Ore", "Limestone"],
      legendary: null,
      legendaryNote: "No legendary confirmed — materials / cave run.",
    },
    {
      id: "arcanine",
      doll: "Arcanine Doll",
      island: "Volcanic Dream Island",
      biome: "Rocky Ridges (interior)",
      materials: ["Iron Ore", "Gold Ore", "Glowing Stone"],
      legendary: "Entei",
      legendaryNote: "Cave room surrounded by lava rocks — chance spawn.",
    },
    {
      id: "dragonite",
      doll: "Dragonite Doll",
      island: "Sky Dream Island",
      biome: "Sparkling Skylands",
      materials: ["Wastepaper", "PokéMetal", "Crystal Fragment"],
      legendary: "Mewtwo",
      legendaryNote: "Building-like cave room — may need story encounter first.",
    },
    {
      id: "starmie",
      doll: "Starmie Doll",
      island: "Basin Dream Island",
      biome: "Water / basin",
      materials: ["Sea Grapes", "Small Coral", "Grubby Pearl"],
      legendary: "Phione",
      legendaryNote: "Underwater ruins — chance spawn.",
    },
    {
      id: "ditto",
      doll: "Ditto Doll",
      island: "Random Dream Island",
      biome: "Varies",
      materials: ["Random (any island’s materials)"],
      legendary: "Random",
      legendaryNote: "Rolls a random unlocked island — can include legendaries.",
    },
    {
      id: "substitute",
      doll: "Substitute Doll",
      island: "Random Dream Island",
      biome: "Varies",
      materials: ["Random (any island’s materials)"],
      legendary: "Random",
      legendaryNote: "Same as Ditto Doll — random destination each visit.",
    },
  ],
};
