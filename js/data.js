/**
 * Pokopia Companion — static game data
 * Foods / Mosslax: Nintendo Life Mosslax buff guide (+ cooking notes).
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
    { id: "leppa-berry", name: "Leppa Berry", flavor: "neutral", kind: "Berry", note: "Berry trees" },
    { id: "lum-berry", name: "Lum Berry", flavor: "neutral", kind: "Berry", note: "Berry trees" },
    { id: "fresh-water", name: "Fresh Water", flavor: "neutral", kind: "Drink", note: "Environment / vending" },
    { id: "simple-salad", name: "Simple Salad", flavor: "neutral", kind: "Cooked", note: "Leaf + any" },
    { id: "simple-soup", name: "Simple Soup", flavor: "neutral", kind: "Cooked", note: "Fresh Water + any ×2" },
    { id: "simple-bread", name: "Simple Bread", flavor: "neutral", kind: "Cooked", note: "Basic bread recipe" },
    { id: "simple-hamburger", name: "Simple Hamburger Steak", flavor: "neutral", kind: "Cooked", note: "Basic hamburger recipe" },

    { id: "pecha-berry", name: "Pecha Berry", flavor: "sweet", kind: "Berry", note: "Berry trees" },
    { id: "bean", name: "Bean", flavor: "sweet", kind: "Veggie", note: "Plant & harvest" },
    { id: "moomoo-coffee", name: "Moomoo Milk Coffee", flavor: "sweet", kind: "Drink", note: "Shop / vending" },
    { id: "common-candy", name: "Common Candy", flavor: "sweet", kind: "Other", note: "Found / gifted" },
    { id: "leppa-salad", name: "Leppa Salad", flavor: "sweet", kind: "Cooked", note: "Leaf + Leppa Berry" },
    { id: "fluffy-bread", name: "Fluffy Bread", flavor: "sweet", kind: "Cooked", note: "Cooked bread" },
    { id: "potato-hamburger", name: "Potato Hamburger Steak", flavor: "sweet", kind: "Cooked", note: "Hamburger + potato" },

    { id: "carrot", name: "Carrot / Fresh Carrot", flavor: "spicy", kind: "Veggie", note: "Tug leaves in the ground" },
    { id: "chili-sauce", name: "Chili Sauce", flavor: "spicy", kind: "Drink", note: "Shop / vending" },
    { id: "crouton-salad", name: "Crouton Salad", flavor: "spicy", kind: "Cooked", note: "Leaf + Bread" },
    { id: "electrifying-soup", name: "Electrifying Soup", flavor: "spicy", kind: "Cooked", note: "Needs Generate specialty" },
    { id: "healthy-soup", name: "Healthy Soup", flavor: "spicy", kind: "Cooked", note: "Fresh Water + Bean + Leaf" },
    { id: "carrot-bread", name: "Carrot Bread", flavor: "spicy", kind: "Cooked", note: "Cooked bread" },
    { id: "bread-bowl", name: "Bread Bowl", flavor: "spicy", kind: "Cooked", note: "Cooked specialty dish" },

    { id: "chesto-berry", name: "Chesto Berry", flavor: "dry", kind: "Berry", note: "Berry trees" },
    { id: "wheat", name: "Wheat", flavor: "dry", kind: "Veggie", note: "Plant & harvest" },
    { id: "cave-mushrooms", name: "Cave Mushrooms", flavor: "dry", kind: "Veggie", note: "Pluck in caves" },
    { id: "roserade-tea", name: "Roserade Tea", flavor: "dry", kind: "Drink", note: "Shop / vending" },
    { id: "crushed-berry-salad", name: "Crushed-berry Salad", flavor: "dry", kind: "Cooked", note: "Leaf + Chesto; needs Crush" },
    { id: "mushroom-soup", name: "Mushroom Soup", flavor: "dry", kind: "Cooked", note: "Fresh Water + Cave Mushrooms" },
    { id: "mushroom-hamburger", name: "Mushroom Hamburger Steak", flavor: "dry", kind: "Cooked", note: "Hamburger + mushrooms" },

    { id: "rawst-berry", name: "Rawst Berry", flavor: "bitter", kind: "Berry", note: "Berry trees" },
    { id: "potato", name: "Potato", flavor: "bitter", kind: "Veggie", note: "Plant & harvest" },
    { id: "seaweed", name: "Seaweed", flavor: "bitter", kind: "Veggie", note: "Beaches / Dream Islands" },
    { id: "seaweed-salad", name: "Seaweed Salad", flavor: "bitter", kind: "Cooked", note: "Leaf + Seaweed" },
    { id: "seaweed-soup", name: "Seaweed Soup", flavor: "bitter", kind: "Cooked", note: "Fresh Water + Seaweed" },
    { id: "recycled-bread", name: "Recycled Bread", flavor: "bitter", kind: "Cooked", note: "Cooked bread" },
    { id: "bitter-hamburger", name: "Bitter Hamburger Steak", flavor: "bitter", kind: "Cooked", note: "Hamburger specialty" },

    { id: "aspear-berry", name: "Aspear Berry", flavor: "sour", kind: "Berry", note: "Berry trees" },
    { id: "tomato", name: "Tomato", flavor: "sour", kind: "Veggie", note: "Plant & harvest" },
    { id: "soda-pop", name: "Soda Pop", flavor: "sour", kind: "Drink", note: "Shop / vending" },
    { id: "shredded-salad", name: "Shredded Salad", flavor: "sour", kind: "Cooked", note: "Leaf + any; needs Chop" },
    { id: "flavourful-soup", name: "Flavourful Soup", flavor: "sour", kind: "Cooked", note: "Aspear / hamburger variants" },
    { id: "leppa-bread", name: "Leppa Bread", flavor: "sour", kind: "Cooked", note: "Cooked bread" },
    { id: "tomato-hamburger", name: "Tomato Hamburger Steak", flavor: "sour", kind: "Cooked", note: "Hamburger + tomato" },
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
        { id: "tundra-tail", name: "Tundra Fossil (Tail)" },
      ],
    },
  ],
};
