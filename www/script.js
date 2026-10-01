/* ========================================================
   COTW GRIND TRACKER
======================================================== */


/* ========================================================
   GREAT ONE DATA
======================================================== */

const greatOneData = {

    "Whitetail Deer": {
        racks: [
            "Cluster",
            "Short Rack",
            "Droptine",
            "Blade",
            "Big Rack",
            "Typical",
            "50/50"
        ],
        furs: [
            "Brown",
            "Dark Brown",
            "Tan",
            "Fabled Piebald"
        ]
    },

    "Red Deer": {
        furs: [
            "Fabled Spotted"
        ]
    },

    "Black Bear": {
        furs: [
            "Fabled Chestnut",
            "Fabled Cream",
            "Fabled Glacier",
            "Fabled Spirit",
            "Fabled Spotted"
        ]
    },

    "Moose": {
        racks: [
            "Spider Rack",
            "Typical Rack",
            "Quad Paddle Rack",
            "Cluster Rack",
            "50/50"
        ],
        furs: [
            "Fabled Ashen",
            "Fabled Spruce",
            "Fabled Birch",
            "Fabled Oak",
            "Fabled Two Tone",
            "Fabled Speckled"
        ]
    },

    "Fallow Deer": {
        racks: [
            "Typical Rack",
            "Irish Elk Rack",
            "Spoon Rack",
            "Blade Rack"
        ],
        furs: [
            "Fabled Golden",
            "Fabled Hooded",
            "Fabled Mocha",
            "Fabled Painted",
            "Painted Silver"
        ]
    },

    "Himalayan Tahr": {
        furs: [
            "Fabled Gold",
            "Fabled Grey",
            "Fabled Half",
            "Fabled Latte",
            "Fabled Scar",
            "Fabled Snow",
            "Fabled Skull"
        ],
        furLabel: "Fur"
    },

    "Ring-Necked Pheasant": {
        furs: [
            "Fabled Citrine",
            "Fabled Emerald",
            "Fabled Garnet",
            "Fabled Morganite",
            "Fabled Obsidian",
            "Fabled Pearl",
            "Fabled Ruby",
            "Fabled Sapphire"
        ],
        furLabel: "Plumage"
    },

    "Red Fox": {
        furs: [
            "Fabled Blood Moon",
            "Fabled Candycane",
            "Fabled Cherry Blossom",
            "Fabled Licorice",
            "Fabled Midnight Poppy",
            "Fabled Mystic Snowdrop",
            "Fabled Peppermint",
            "Fabled Rosebud Frost",
            "Fabled Scarlet Nightshade"
        ]
    },

    "Mule Deer": {
        racks: [
            "Typical Rack",
            "Atypical Rack",
            "Droptine Rack",
            "Heart Rack",
            "Velvet Rack",
            "Corkscrew Rack"
        ],
        furs: [
            "Fabled Cinnamon Stripes",
            "Fabled Cobweb Enigma",
            "Fabled Dripple Drizzle",
            "Fabled Dusky Drift",
            "Fabled Milky Way",
            "Fabled Petal Puff"
        ]
    },

    "Gray Wolf": {
        furs: [
            "Fabled Battlethorn",
            "Fabled Dawnbreak",
            "Fabled Frostbite",
            "Fabled Gravehide",
            "Fabled Hollow",
            "Fabled Razorwind",
            "Fabled Scarborne",
            "Fabled Twinsoul",
            "Fabled Vanguard"
        ]
    },

    "Wild Boar": {
        furs: [
            "Fabled Ash",
            "Fabled Brindle",
            "Fabled Butterscotch",
            "Fabled Chalk",
            "Fabled Cinder",
            "Fabled Scorch",
            "Fabled Smolder",
            "Fabled Stipple",
            "Fabled Stitch"
        ]
    },

    "Roe Deer": {
        furs: [
            "Fabled Ghostveil",
            "Fabled Kindledawn",
            "Fabled Mistbound",
            "Fabled Moonmakred",
            "Fabled Rustveil",
            "Fabled Wildfire"
        ]
    },

    "Jaguar": {
        furs: [
            "Fabled Guiltdusk",
            "Fabled Ivorybark",
            "Fabled Porcelain",
            "Fabled Rosewash",
            "Fabled Tapestry",
            "Fabled Umbrafade",
            "Fabled Vellum"
        ]
    },

    "Taruca": {
        furs: [
            "Fabled Cirrus",
            "Fabled Stormcloak",
            "Fabled Eclipse",
            "Fabled Starthistle",
            "Fabled Saffronglow"
        ]
    }

};


/* ========================================================
   MAP DATA
======================================================== */

const speciesMaps = {

    "Canada Goose": ["Hirschfelden Hunting Reserve","Yukon Valley","Revontuli Coast","Askiy Ridge Hunting Preserve"],
    "European Rabbit": ["Hirschfelden Hunting Reserve","Te Awaroa National Park","Revontuli Coast","Salzwiesen Park"],
    "Ring-Necked Pheasant": ["Hirschfelden Hunting Reserve","Cuatro Colinas Game Reserve","Rancho del Arroyo","New England Mountains","Salzwiesen Park","Askiy Ridge Hunting Preserve","Tòrr nan Sìthean Hunting Reserve"],
    "Red Fox": ["Hirschfelden Hunting Reserve","Yukon Valley","New England Mountains","Emerald Coast","Salzwiesen Park","Tòrr nan Sìthean Hunting Reserve"],
    "Roe Deer": ["Hirschfelden Hunting Reserve","Cuatro Colinas Game Reserve","Tòrr nan Sìthean Hunting Reserve"],
    "Fallow Deer": ["Hirschfelden Hunting Reserve","Te Awaroa National Park","Emerald Coast","Tòrr nan Sìthean Hunting Reserve"],
    "Wild Boar": ["Hirschfelden Hunting Reserve","Medved-Taiga National Park","Cuatro Colinas Game Reserve","Tòrr nan Sìthean Hunting Reserve"],
    "Red Deer": ["Hirschfelden Hunting Reserve","Parque Fernando","Cuatro Colinas Game Reserve","Te Awaroa National Park","Emerald Coast","Tòrr nan Sìthean Hunting Reserve"],
    "European Bison": ["Hirschfelden Hunting Reserve"],
    "Mallard": ["Layton Lake District","Te Awaroa National Park","Revontuli Coast","New England Mountains","Salzwiesen Park","Askiy Ridge Hunting Preserve"],
    "Merriam Turkey": ["Layton Lake District","Silver Ridge Peaks","Te Awaroa National Park"],
    "White Tailed Jackrabbit": ["Layton Lake District"],
    "Coyote": ["Layton Lake District","Rancho del Arroyo","New England Mountains"],
    "Blacktail Deer": ["Layton Lake District"],
    "Whitetail Deer": ["Layton Lake District","Rancho del Arroyo","Mississippi Acres Preserve","Revontuli Coast","New England Mountains","Askiy Ridge Hunting Preserve","Intisuyu Hunting Reserve"],
    "Black Bear": ["Layton Lake District","Silver Ridge Peaks","Mississippi Acres Preserve","New England Mountains","Askiy Ridge Hunting Preserve"],
    "Roosevelt Elk": ["Layton Lake District"],
    "Moose": ["Layton Lake District","Medved-Taiga National Park","Yukon Valley","Revontuli Coast","New England Mountains","Askiy Ridge Hunting Preserve"],
    "Western Capercallie": ["Medved-Taiga National Park","Revontuli Coast","Tòrr nan Sìthean Hunting Reserve"],
    "Siberian Musk Deer": ["Medved-Taiga National Park"],
    "Eurasian Lynx": ["Medved-Taiga National Park","Revontuli Coast"],
    "Gray Wolf": ["Medved-Taiga National Park","Yukon Valley","Askiy Ridge Hunting Preserve"],
    "Mountain Reindeer": ["Medved-Taiga National Park"],
    "Brown Bear": ["Medved-Taiga National Park","Revontuli Coast"],
    "Eurasian Wigeon": ["Vurhonga Savanna Reserve","Revontuli Coast","Salzwiesen Park","Tòrr nan Sìthean Hunting Reserve"],
    "Scrub Hare": ["Vurhonga Savanna Reserve"],
    "Side Striped Jackal": ["Vurhonga Savanna Reserve"],
    "Springbok": ["Vurhonga Savanna Reserve"],
    "Lesser Kudu": ["Vurhonga Savanna Reserve"],
    "Warthog": ["Vurhonga Savanna Reserve"],
    "Blue Wildbeest": ["Vurhonga Savanna Reserve"],
    "Gemsbok": ["Vurhonga Savanna Reserve"],
    "Cape Buffalo": ["Vurhonga Savanna Reserve"],
    "Lion": ["Vurhonga Savanna Reserve"],
    "Cinnamon Teal": ["Parque Fernando","Intisuyu Hunting Reserve"],
    "Axis Deer": ["Parque Fernando","Emerald Coast"],
    "Blackbuck": ["Parque Fernando","Sundarpatan Hunting Reserve"],
    "Collared Peccary": ["Parque Fernando","Rancho del Arroyo","Intisuyu Hunting Reserve"],
    "Mule Deer": ["Parque Fernando","Silver Ridge Peaks","Rancho del Arroyo","Askiy Ridge Hunting Preserve"],
    "Puma": ["Parque Fernando","Intisuyu Hunting Reserve"],
    "Water Buffalo": ["Parque Fernando","Sundarpatan Hunting Reserve"],
    "Harlequin Duck": ["Yukon Valley"],
    "Grant Caribou": ["Yukon Valley"],
    "Grizzly Bear": ["Yukon Valley"],
    "Plains Bison": ["Yukon Valley","Silver Ridge Peaks"],
    "European Hare": ["Cuatro Colinas Game Reserve"],
    "Beceite Ibex": ["Cuatro Colinas Game Reserve"],
    "Gredos Ibex": ["Cuatro Colinas Game Reserve"],
    "Iberian Mouflon": ["Cuatro Colinas Game Reserve"],
    "Ronda Ibex": ["Cuatro Colinas Game Reserve"],
    "Southeastern Spanish Ibex": ["Cuatro Colinas Game Reserve"],
    "Iberian Wolf": ["Cuatro Colinas Game Reserve"],
    "Pronghorn": ["Silver Ridge Peaks","Rancho del Arroyo","Askiy Ridge Hunting Preserve"],
    "Mountain Goat": ["Silver Ridge Peaks","Askiy Ridge Hunting Preserve"],
    "Mountain Lion": ["Silver Ridge Peaks"],
    "Rocky Mountain Bighorn Sheep": ["Silver Ridge Peaks","Askiy Ridge Hunting Preserve"],
    "Rocky Mountain Elk": ["Silver Ridge Peaks"],
    "Chamois": ["Te Awaroa National Park"],
    "Feral Goat": ["Te Awaroa National Park","Emerald Coast","Tòrr nan Sìthean Hunting Reserve"],
    "Himalayan Tahr": ["Te Awaroa National Park","Sundarpatan Hunting Reserve"],
    "Sika Deer": ["Te Awaroa National Park","Tòrr nan Sìthean Hunting Reserve"],
    "Feral Pig": ["Te Awaroa National Park","Emerald Coast"],
    "Antelope Jackrabbit": ["Rancho del Arroyo"],
    "Rio Grande Turkey": ["Rancho del Arroyo"],
    "Mexican Bobcat": ["Rancho del Arroyo"],
    "Desert Bighorn Sheep": ["Rancho del Arroyo"],
    "Bobwhite Quail": ["Mississippi Acres Preserve","New England Mountains"],
    "Eastern Cottontail Rabbit": ["Mississippi Acres Preserve","New England Mountains"],
    "Eastern Wild Turkey": ["Mississippi Acres Preserve","New England Mountains"],
    "Green-Winged Teal": ["Mississippi Acres Preserve","New England Mountains"],
    "Common Raccoon": ["Mississippi Acres Preserve","New England Mountains","Salzwiesen Park"],
    "Gray Fox": ["Mississippi Acres Preserve","New England Mountains"],
    "Wild Hog": ["Mississippi Acres Preserve"],
    "American Alligator": ["Mississippi Acres Preserve"],
    "Black Grouse": ["Revontuli Coast","Salzwiesen Park","Tòrr nan Sìthean Hunting Reserve"],
    "Eurasian Teal": ["Revontuli Coast","Salzwiesen Park"],
    "Goldeneye": ["Revontuli Coast","New England Mountains","Salzwiesen Park"],
    "Greylag Goose": ["Revontuli Coast","Sundarpatan Hunting Reserve","Salzwiesen Park"],
    "Hazel Grouse": ["Revontuli Coast"],
    "Mountain Hare": ["Revontuli Coast","Tòrr nan Sìthean Hunting Reserve"],
    "Rock Ptarmigan": ["Revontuli Coast"],
    "Tufted Duck": ["Revontuli Coast","Salzwiesen Park"],
    "Tundra Bean Goose": ["Revontuli Coast","Salzwiesen Park"],
    "Raccoon Dog": ["Revontuli Coast","Salzwiesen Park"],
    "Magpie Goose": ["Emerald Coast"],
    "Stubble Quail": ["Emerald Coast"],
    "Hog Deer": ["Emerald Coast"],
    "Eastern Gray Kangaroo": ["Emerald Coast"],
    "Javan Rusa": ["Emerald Coast"],
    "Sambar": ["Emerald Coast"],
    "Saltwater Crocodile": ["Emerald Coast"],
    "Banteng": ["Emerald Coast"],
    "Graylag Goose": ["Sundarpatan Hunting Reserve","Salzwiesen Park"],
    "Wooly Hare": ["Sundarpatan Hunting Reserve"],
    "Northern Red Muntjac": ["Sundarpatan Hunting Reserve"],
    "Tibetan Fox": ["Sundarpatan Hunting Reserve"],
    "Blue Sheep": ["Sundarpatan Hunting Reserve"],
    "Snow Leopard": ["Sundarpatan Hunting Reserve"],
    "Barasingha": ["Sundarpatan Hunting Reserve"],
    "Nilgai": ["Sundarpatan Hunting Reserve"],
    "Bengal Tiger": ["Sundarpatan Hunting Reserve"],
    "Wild Yak": ["Sundarpatan Hunting Reserve"],
    "Ferruginous Duck": ["Salzwiesen Park"],
    "Gadwall": ["Salzwiesen Park"],
    "Dusky Grouse": ["Askiy Ridge Hunting Preserve"],
    "Northern Pintail": ["Askiy Ridge Hunting Preserve"],
    "Snow Goose": ["Askiy Ridge Hunting Preserve"],
    "Wood Duck": ["Askiy Ridge Hunting Preserve"],
    "North American Beaver": ["Askiy Ridge Hunting Preserve"],
    "Woodland Caribou": ["Askiy Ridge Hunting Preserve"],
    "Manitoban Elk": ["Askiy Ridge Hunting Preserve"],
    "Wood Bison": ["Askiy Ridge Hunting Preserve"],
    "American Mink": ["Tòrr nan Sìthean Hunting Reserve"],
    "Eurasian Pine Marten": ["Tòrr nan Sìthean Hunting Reserve"],
    "Eurasian Woodcock": ["Tòrr nan Sìthean Hunting Reserve"],
    "Red Grouse": ["Tòrr nan Sìthean Hunting Reserve"],
    "European Badger": ["Tòrr nan Sìthean Hunting Reserve"],
    "Greater Grison": ["Intisuyu Hunting Reserve"],
    "Western Mountain Coati": ["Intisuyu Hunting Reserve"],
    "Ocelot": ["Intisuyu Hunting Reserve"],
    "Taruca": ["Intisuyu Hunting Reserve"],
    "Vicuna": ["Intisuyu Hunting Reserve"],
    "Capybara": ["Intisuyu Hunting Reserve"],
    "Jaguar": ["Intisuyu Hunting Reserve"],
    "South American Tapir": ["Intisuyu Hunting Reserve"],
    "Spectacled Bear": ["Intisuyu Hunting Reserve"],
    "Black Caiman": ["Intisuyu Hunting Reserve"]

};

/* ========================================================
   RARE DATA
======================================================== */

const rareData = {

    "Canada Goose": ["Albino","Brown Hybrid","Light Grey Leucistic","Melanistic","White Hybrid"],
    "European Rabbit": ["Albino","Leucistic","Light Grey","Melanistic"],
    "Ring-Necked Pheasant": ["Albino","Leucistic","Melanistic"],
    "Red Fox": ["Albino","Melanistic","Piebald"],
    "Roe Deer": ["Albino","Leucistic","Melanistic","Piebald"],
    "Fallow Deer": ["Albino","Melanistic","Acromelanistic","Erythristic","Leucistic","Piebald"],
    "Wild Boar": ["Albino","Melanistic","Black Gold","Purple Grey"],
    "Red Deer": ["Albino","Erythristic","Leucistic","Melanistic","Piebald"],
    "European Bison": ["Albino","Melanistic","Piebald"],
    "Mallard": ["Melanistic","Leucistic","Blonde"],
    "Merriam Turkey": ["Albino","Melanistic","Leucistic"],
    "White Tailed Jackrabbit": ["Albino"],
    "Coyote": ["Albino","Melanistic","Piebald"],
    "Blacktail Deer": ["Albino","Melanistic","Piebald"],
    "Whitetail Deer": ["Albino","Melanistic","Piebald"],
    "Black Bear": ["Blonde","Brown","Cinnamon"],
    "Roosevelt Elk": ["Albino","Melanistic","Piebald"],
    "Moose": ["Acromelanistic","Albino","Melanistic","Piebald","Mosaic"],
    "Western Capercallie": ["Leucistic","Pale"],
    "Siberian Musk Deer": ["Albino","Melanistic","Piebald"],
    "Eurasian Lynx": ["Albino","Melanistic","Piebald"],
    "Gray Wolf": ["Acromelanistic","Albino","Melanistic","Melanistic Charcoal","Dark Grey","Egg White","Red Brown"],
    "Mountain Reindeer": ["Albino","Melanistic","Leucistic","Piebald"],
    "Brown Bear": ["Albino","Melanistic"],
    "Eurasian Wigeon": ["Leucistic","Hybrid","Eclipse","Dark"],
    "Scrub Hare": ["Light Gray"],
    "Side Striped Jackal": ["Albino","Melanistic"],
    "Springbok": ["Albino"],
    "Lesser Kudu": ["Albino","Melanistic","Red Brown","Dark Brown"],
    "Warthog": ["Albino","Red"],
    "Blue Wildbeest": ["Albino","Crowned"],
    "Gemsbok": ["Beige","Dark","Gold"],
    "Cape Buffalo": ["Albino","Leucistic"],
    "Lion": ["Albino","Blonde","Dark Brown"],
    "Cinnamon Teal": ["Melanistic","Beige"],
    "Axis Deer": ["Albino","Melanistic","Piebald"],
    "Blackbuck": ["Albino","Leucistic","Melanistic","Piebald"],
    "Collared Peccary": ["Albino","Melanistic","Leucistic"],
    "Mule Deer": ["Albino","Erythristic Isabelline","Erythristic Red","Leucistic","Melanistic","Mosaic","Piebald","Dilute"],
    "Puma": ["Albino","Melanistic"],
    "Water Buffalo": ["Albino","Orange"],
    "Harlequin Duck": ["Albino","Melanistic","Grey","Dark"],
    "Grant Caribou": ["Albino","Leucistic","Melanistic","Piebald"],
    "Grizzly Bear": ["Albino","Melanistic","Brown"],
    "Plains Bison": ["Albino","Leucistic","Melanistic"],
    "European Hare": ["Albino","Melanistic"],
    "Beceite Ibex": ["Albino","Melanistic"],
    "Gredos Ibex": ["Albino","Melanistic"],
    "Iberian Mouflon": ["Albino","Melanistic","Grey"],
    "Ronda Ibex": ["Albino","Melanistic"],
    "Southeastern Spanish Ibex": ["Albino","Melanistic"],
    "Iberian Wolf": ["Albino","Melanistic","Olive","Pristine","Winter"],
    "Pronghorn": ["Albino","Leucistic","Melanistic","Piebald"],
    "Mountain Goat": ["Albino","Melanistic"],
    "Mountain Lion": ["Albino","Melanistic"],
    "Rocky Mountain Bighorn Sheep": ["Albino","Melanistic","Leucistic","Piebald"],
    "Rocky Mountain Elk": ["Albino","Piebald"],
    "Chamois": ["Albino","Melanistic","Leucistic"],
    "Feral Goat": ["Albino","Black","Mixed"],
    "Himalayan Tahr": ["Albino","Red","White","Black","Dark Brown","Dark Red"],
    "Sika Deer": ["Albino","Red Spotted"],
    "Feral Pig": ["Pink","Albino"],
    "Antelope Jackrabbit": ["Albino","Melanistic"],
    "Rio Grande Turkey": ["Albino","Melanistic","Leucistic"],
    "Mexican Bobcat": ["Albino","Melanistic","Blue"],
    "Desert Bighorn Sheep": ["Albino","Melanistic","Leucistic","Piebald","Erythristic","Mosaic"],
    "Bobwhite Quail": ["Albino"],
    "Eastern Cottontail Rabbit": ["Albino","Melanistic","Leucistic"],
    "Eastern Wild Turkey": ["Albino","Melanistic","Leucistic"],
    "Green-Winged Teal": ["Piebald","Albino"],
    "Common Raccoon": ["Albino","Melanistic","Piebald Blonde","Piebald Grey"],
    "Gray Fox": ["Albino","Melanistic","Leucistic","Piebald"],
    "Wild Hog": ["Pink","Albino"],
    "American Alligator": ["Albino","Melanistic","Piebald"],
    "Black Grouse": ["Melanistic","Leucistic","Gold","Orange"],
    "Eurasian Teal": ["Leucistic","Blue Hybrid","Green Hybrid"],
    "Goldeneye": ["Leucistic","Hybrid","Eclipse","Dark"],
    "Greylag Goose": ["Hybrid","Leucistic"],
    "Hazel Grouse": ["Pale","Hybrid","Dark"],
    "Mountain Hare": ["White","Albino","Molting"],
    "Rock Ptarmigan": ["White"],
    "Tufted Duck": ["Leucistic","Albino","Eclipse","Cream"],
    "Tundra Bean Goose": ["Leucistic"],
    "Raccoon Dog": ["Albino","Piebald","Dark Brown","Orange"],
    "Magpie Goose": ["Melanistic","Leucistic","Piebald"],
    "Stubble Quail": ["Albino","Dark Brown"],
    "Hog Deer": ["Leucistic","Piebald"],
    "Eastern Gray Kangaroo": ["Albino","Melanistic","Leucistic"],
    "Javan Rusa": ["Leucistic","Piebald","Albino"],
    "Sambar": ["Albino","Leucistic","Piebald"],
    "Saltwater Crocodile": ["Albino","Leucistic","Light Brown","Melanistic","Piebald"],
    "Banteng": ["Albino","Melanistic"],
    "Graylag Goose": ["Hybrid","Leucistic"],
    "Wooly Hare": ["Albino","White"],
    "Northern Red Muntjac": ["Albino","Melanistic","Leucistic"],
    "Tibetan Fox": ["Albino","Leucistic","Melanistic","Sand","Smoke"],
    "Blue Sheep": ["Albino","Leucistic","Melanistic"],
    "Snow Leopard": ["Albino","Leucistic","Melanistic"],
    "Barasingha": ["Albino","Melanistic","Leucistic","Piebald"],
    "Nilgai": ["Piebald"],
    "Bengal Tiger": ["Albino","Melanistic","Gold","White","White Stripeless","Pseudo Melanistic","Pseudo Melanistic White"],
    "Wild Yak": ["Albino","Gold","Leucistic"],
    "Ferruginous Duck": ["Albino","Leucistic","Melanistic"],
    "Gadwall": ["Albino","Leucistic"],
    "Dusky Grouse": ["Albino","Leucistic","Melanistic"],
    "Northern Pintail": ["Albino","Erythristic","Leucistic","Melanistic","Piebald"],
    "Snow Goose": ["Albino","Melanistic","Blue Morph","Hybrid","Intermediate Morph"],
    "Wood Duck": ["Albino","Dilute Silver","Erythristic Golden","Leucistic","Melanistic","Piebald"],
    "North American Beaver": ["Albino","Leucistic","Melanistic","Piebald"],
    "Woodland Caribou": ["Albino","Leucistic","Melanistic","Piebald"],
    "Manitoban Elk": ["Albino","Leucistic","Melanistic","Piebald"],
    "Wood Bison": ["Albino","Leucistic","Melanistic","Dark Brown","Piebald"],
    "American Mink": ["Albino","Leucistic","Melanistic","Silver","Piebald","Black"],
    "Eurasian Pine Marten": ["Albino","Leucistic","Piebald","Melanistic","Tawny"],
    "Eurasian Woodcock": ["Albino","Melanistic","Leucistic","Dark Brown"],
    "Red Grouse": ["Albino","Melanistic","Leucistic","Piebald"],
    "European Badger": ["Albino","Leucistic","Melanistic","Piebald","Dilute","Erythristic Red"],
    "Greater Grison": ["Albino","Erythristic Chocolate","Leucistic","Melanistic","Piebald"],
    "Western Mountain Coati": ["Albino","Leucistic","Melanistic","Piebald"],
    "Ocelot": ["Albino","Leucistic","Melanistic","Melanistic Charcoal","Piebald","Pseudo Melanistic","Erythristic Red","Erythristic Isabelline"],
    "Taruca": ["Albino","Erythristic","Leucistic","Piebald","Melanistic"],
    "Vicuna": ["Albino","Dilute Silver","Erythristic Isabelline","Leucistic","Melanistic","Piebald"],
    "Capybara": ["Albino","Leucistic","Melanistic","Piebald"],
    "Jaguar": ["Albino","Leucistic","Piebald","Pseudo Melanistic"],
    "South American Tapir": ["Albino","Erythristic","Melanistic","Leucistic","Piebald"],
    "Spectacled Bear": ["Albino","Erythristic Isabelline","Erythristic Red","Leucistic","Melanistic","Piebald","Blond Faced","No Markings"],
    "Black Caiman": ["Albino","Melanistic","Leucistic","Piebald"]

};

/* ========================================================
   SPECIES NAME COMPATIBILITY
======================================================== */

greatOneData["Pheasant"] =
    greatOneData["Ring-Necked Pheasant"];

greatOneData["Tahr"] =
    greatOneData["Himalayan Tahr"];

rareData["Pheasant"] =
    rareData["Ring-Necked Pheasant"];

rareData["Tahr"] =
    rareData["Himalayan Tahr"];


/* ========================================================
   DOM ELEMENTS
======================================================== */

const emptyState =
    document.getElementById("emptyState");

const grindPage =
    document.getElementById("grindPage");

const activeGrinds =
    document.getElementById("activeGrinds");

const completedGrinds =
    document.getElementById("completedGrinds");

const newGrindButton =
    document.getElementById("newGrindButton");

const emptyNewGrindButton =
    document.getElementById("emptyNewGrindButton");

const newGrindModal =
    document.getElementById("newGrindModal");

const closeModalButton =
    document.getElementById("closeModalButton");

const speciesSelect =
    document.getElementById("speciesSelect");

const mapSelect =
    document.getElementById("mapSelect");

const createGrindButton =
    document.getElementById("createGrindButton");

const grindSpecies =
    document.getElementById("grindSpecies");

const grindMap =
    document.getElementById("grindMap");

const killsCounter =
    document.getElementById("killsCounter");

const diamondsCounter =
    document.getElementById("diamondsCounter");

const diamondRateCounter =
    document.getElementById("diamondRateCounter");

const rareRateCounter =
    document.getElementById("rareRateCounter");

const trollsCounter =
    document.getElementById("trollsCounter");

const raresCounter =
    document.getElementById("raresCounter");

const superRaresCounter =
    document.getElementById("superRaresCounter");

const greatOnesCounter =
    document.getElementById("greatOnesCounter");

const rareToggle =
    document.getElementById("rareToggle");

const rareBreakdown =
    document.getElementById("rareBreakdown");

const greatOneNameInput =
    document.getElementById("greatOneNameInput");

const greatOneSpecies =
    document.getElementById("greatOneSpecies");

const furLabel =
    document.getElementById("furLabel");

const furSelect =
    document.getElementById("furSelect");

const rackField =
    document.getElementById("rackField");

const rackSelect =
    document.getElementById("rackSelect");

const whitetail5050Field =
    document.getElementById("whitetail5050Field");

const whitetail5050Input =
    document.getElementById("whitetail5050Input");

const weightInput =
    document.getElementById("weightInput");

const weightUnit =
    document.getElementById("weightUnit");

const scoreInput =
    document.getElementById("scoreInput");

const logGreatOneButton =
    document.getElementById("logGreatOneButton");

const greatOneRecords =
    document.getElementById("greatOneRecords");

const greatOneSection =
    document.getElementById("greatOneSection");

const authModal =
    document.getElementById("authModal");

const authOpenButton =
    document.getElementById("authOpenButton");

const closeAuthModalButton =
    document.getElementById("closeAuthModalButton");

const googleAuthButton =
    document.getElementById("googleAuthButton");

const authEmailInput =
    document.getElementById("authEmailInput");

const authEmailButton =
    document.getElementById("authEmailButton");

const authStatus =
    document.getElementById("authStatus");

const authSignOutButton =
    document.getElementById("authSignOutButton");

const metricButton =
    document.getElementById("metricButton");

const imperialButton =
    document.getElementById("imperialButton");

const settingsButton =
    document.getElementById("settingsButton");

const menuButton =
    document.getElementById("menuButton");

const desktopMenuButton =
    document.getElementById("desktopMenuButton");

const sidebar =
    document.querySelector(".sidebar");

const settingsModal =
    document.getElementById("settingsModal");

const closeSettingsButton =
    document.getElementById("closeSettingsButton");

const accentColorInput =
    document.getElementById("accentColorInput");

const backgroundColorInput =
    document.getElementById("backgroundColorInput");

const cardColorInput =
    document.getElementById("cardColorInput");

const textSizeSelect =
    document.getElementById("textSizeSelect");

const resetSettingsButton =
    document.getElementById("resetSettingsButton");


/* ========================================================
   STATE
======================================================== */

let grinds = [];

let currentGrindId = null;

let currentUnit = "metric";

let cloudSyncTimer = null;
let suppressCloudSync = false;
let currentUser = null;

const SUPABASE_URL =
    "https://qfldvmxoandrvoyzvwhy.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_N8Uwp92hNBwNWcBATyvRwA_RpNf4YsZ";

const supabaseClient =
    window.supabase?.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

let settings = {

    accentColor: "#6a00ff",

    backgroundColor: "#000000",

    cardColor: "#111111",

    textSize: "medium",

    deletedGrindIds: [],

    keybinds: {

        addKill: "K",

        removeKill: "Shift+K",

        addDiamond: "D",

        removeDiamond: "Shift+D",

        addTroll: "T",

        removeTroll: "Shift+T",

        addRare: "R",

        addSuperRare: "S",

        logGreatOne: "G",

        newGrind: "N"

    }

};


/* ========================================================
   LOCAL STORAGE
======================================================== */

const GRINDS_STORAGE_KEY =
    "cotwGrinds";

const SETTINGS_STORAGE_KEY =
    "cotwSettings";

const UNIT_STORAGE_KEY =
    "cotwUnit";

const DELETED_GRINDS_STORAGE_KEY =
    "cotwDeletedGrinds";


function saveGrinds() {

    localStorage.setItem(
        DELETED_GRINDS_STORAGE_KEY,
        JSON.stringify(settings.deletedGrindIds || [])
    );

    const currentGrind = getCurrentGrind();

    if (currentGrind) {
        currentGrind.updatedAt =
            new Date().toISOString();
    }

    localStorage.setItem(
        GRINDS_STORAGE_KEY,
        JSON.stringify(grinds)
    );

    scheduleCloudSync();

}


function saveSettings() {

    localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(settings)
    );

    scheduleCloudSync();

}


function loadSettings() {

    const saved =
        localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (!saved) {
        return;
    }

    try {

        const parsed =
            JSON.parse(saved);

        settings = {

            ...settings,
            ...parsed,

            keybinds: {
                ...settings.keybinds,
                ...(parsed.keybinds || {})
            }

        };

    } catch (error) {

        console.error(
            "Could not load settings:",
            error
        );

    }

}


function normalizeGreatOneNames() {

    let changed = false;

    const highestNumbers = {};


    /*
       First find the highest automatic name number
       already being used for every species.
    */

    grinds.forEach(grind => {

        if (!Array.isArray(grind.greatOneRecords)) {
            grind.greatOneRecords = [];
            changed = true;
        }

        grind.greatOneRecords.forEach(record => {

            if (!record.species) {
                record.species = grind.species;
                changed = true;
            }

            if (
                typeof record.name === "string" &&
                record.name.trim()
            ) {

                const match =
                    record.name.trim().match(
                        /^(.+?) #(\d+)$/
                    );

                if (
                    match &&
                    match[1] === record.species
                ) {

                    const number =
                        Number(match[2]);

                    if (
                        !highestNumbers[record.species] ||
                        number > highestNumbers[record.species]
                    ) {

                        highestNumbers[record.species] =
                            number;

                    }

                }

            }

        });

    });


    /*
       Then give legacy unnamed records the next
       available automatic name.
    */

    grinds.forEach(grind => {

        grind.greatOneRecords.forEach(record => {

            if (
                typeof record.name !== "string" ||
                !record.name.trim()
            ) {

                const species =
                    record.species || grind.species;

                if (!highestNumbers[species]) {
                    highestNumbers[species] = 0;
                }

                highestNumbers[species]++;

                record.name =
                    `${species} #${highestNumbers[species]}`;

                changed = true;

            }

        });

    });


    return changed;
}


function loadGrinds() {

    const saved =
        localStorage.getItem(GRINDS_STORAGE_KEY);

    if (saved) {

        try {

            grinds =
                JSON.parse(saved);

            if (!Array.isArray(grinds)) {
                grinds = [];
            }

        } catch (error) {

            console.error(
                "Could not load grinds:",
                error
            );

            grinds = [];

        }

    }


    let needsSave = false;


    /*
       Make sure older saved grinds have all the
       properties the current version expects.
    */

    grinds.forEach(grind => {

        if (!grind.counters) {

            grind.counters = {

                kills: 0,
                diamonds: 0,
                trolls: 0,
                rares: 0,
                superRares: 0,
                greatOnes: 0

            };

            needsSave = true;

        }

        grind.counters.kills =
            Number(grind.counters.kills) || 0;

        grind.counters.diamonds =
            Number(grind.counters.diamonds) || 0;

        grind.counters.trolls =
            Number(grind.counters.trolls) || 0;

        grind.counters.rares =
            Number(grind.counters.rares) || 0;

        grind.counters.superRares =
            Number(grind.counters.superRares) || 0;

        grind.counters.greatOnes =
            Number(grind.counters.greatOnes) || 0;


        if (!grind.rareBreakdown) {

            grind.rareBreakdown = {};

            needsSave = true;

        }


        /*
           New rare system flag.

           Old grinds that already have rare breakdown
           information are treated as initialized.

           Old grinds that only have the old total rare
           counter keep that total until the user starts
           using the individual rare controls.
        */

        if (
            typeof grind.rareBreakdownInitialized !==
            "boolean"
        ) {

            const hasBreakdownData =
                Object.values(
                    grind.rareBreakdown
                ).some(
                    value =>
                        Number(value) > 0
                );

            grind.rareBreakdownInitialized =
                hasBreakdownData;

            needsSave = true;

        }


        if (!Array.isArray(grind.greatOneRecords)) {

            grind.greatOneRecords = [];

            needsSave = true;

        }


        if (typeof grind.completed !== "boolean") {

            grind.completed = false;

            needsSave = true;

        }

    });


    /* Never reload a grind that this device has explicitly deleted. */
    const deletedIds = new Set(
        Array.isArray(settings.deletedGrindIds)
            ? settings.deletedGrindIds.map(id => String(id))
            : []
    );

    const filteredGrinds = grinds.filter(
        grind => !deletedIds.has(String(grind.id))
    );

    if (filteredGrinds.length !== grinds.length) {
        grinds = filteredGrinds;
        needsSave = true;
    }

    if (normalizeGreatOneNames()) {
        needsSave = true;
    }


    if (needsSave) {
        saveGrinds();
    }

    if (!currentGrindId && grinds.length) {
        const firstActive =
            grinds.find(grind => !grind.completed);

        currentGrindId =
            firstActive?.id ||
            grinds[grinds.length - 1].id;
    }

}


function loadUnit() {

    const saved =
        localStorage.getItem(UNIT_STORAGE_KEY);

    if (
        saved === "metric" ||
        saved === "imperial"
    ) {

        currentUnit = saved;

    }

}


/* ========================================================
   CURRENT GRIND
======================================================== */

function getCurrentGrind() {

    return grinds.find(
        grind => grind.id === currentGrindId
    ) || null;

}


function selectGrind(id) {

    currentGrindId = id;

    updatePage();

    updateSidebar();

    /*
       On mobile, selecting a grind should immediately close
       the drawer after the selected grind has been rendered.
    */
    if (window.innerWidth <= 760) {
        setMobileNavigation(false);
    }

}


function deleteGrind(grindId) {

    const grind =
        grinds.find(item => item.id === grindId);

    if (!grind) {
        return;
    }

    const grindStatus =
        grind.completed ? "logged" : "active";

    const confirmed =
        confirm(
            `Delete the ${grindStatus} grind for ${grind.species} on ${grind.map}? This cannot be undone.`
        );

    if (!confirmed) {
        return;
    }

    grinds =
        grinds.filter(item => item.id !== grindId);

    if (!Array.isArray(settings.deletedGrindIds)) {
        settings.deletedGrindIds = [];
    }

    if (!settings.deletedGrindIds.includes(grindId)) {
        settings.deletedGrindIds.push(grindId);
    }

    if (currentGrindId === grindId) {
        const replacement =
            grinds.find(item => !item.completed) ||
            grinds[grinds.length - 1] ||
            null;

        currentGrindId =
            replacement ? replacement.id : null;
    }

    saveGrinds();

    /* Push deletions immediately so a quick refresh cannot
       let an older cloud copy resurrect the deleted grind. */
    if (currentUser) {
        void syncToCloud();
    }

    updateAll();

}


/* ========================================================
   CREATE GRIND
======================================================== */

function populateSpeciesSelect() {

    speciesSelect.innerHTML =
        `<option value="">Select Species</option>`;

    Object.keys(speciesMaps)
        .sort()
        .forEach(species => {

            const option =
                document.createElement("option");

            option.value = species;
            option.textContent = species;

            speciesSelect.appendChild(option);

        });

}


function updateMapSelect() {

    const species =
        speciesSelect.value;

    mapSelect.innerHTML = "";

    if (!species) {

        mapSelect.disabled = true;

        mapSelect.innerHTML =
            `<option value="">Select a species first</option>`;

        return;

    }


    mapSelect.disabled = false;

    const maps =
        speciesMaps[species] || [];

    mapSelect.innerHTML =
        `<option value="">Select Map</option>`;


    maps.forEach(map => {

        const option =
            document.createElement("option");

        option.value = map;
        option.textContent = map;

        mapSelect.appendChild(option);

    });

}


function openNewGrindModal() {

    speciesSelect.value = "";

    mapSelect.innerHTML =
        `<option value="">Select a species first</option>`;

    mapSelect.disabled = true;

    newGrindModal.classList.remove("hidden");

}


function closeNewGrindModal() {

    newGrindModal.classList.add("hidden");

}


function createGrind() {

    const species =
        speciesSelect.value;

    const map =
        mapSelect.value;


    if (!species) {

        alert("Please select a species.");

        return;

    }


    if (!map) {

        alert("Please select a map.");

        return;

    }


    const grind = {

        id:
            Date.now().toString() +
            Math.random()
                .toString(36)
                .slice(2),

        species,

        map,

        counters: {

            kills: 0,
            diamonds: 0,
            trolls: 0,
            rares: 0,
            superRares: 0,
            greatOnes: 0

        },

        rareBreakdown: {},

        /*
           This grind uses the individual rare
           counters as the source of truth immediately.
        */

        rareBreakdownInitialized: true,

        greatOneRecords: [],

        completed: false,

        createdAt:
            new Date().toISOString()

    };


    grinds.push(grind);

    saveGrinds();

    currentGrindId = grind.id;

    closeNewGrindModal();

    updateAll();

initializeCloudSync();

}


/* ========================================================
   DIRECT COUNTER EDITING
======================================================== */

function makeCounterEditable(element, counter) {
    element.classList.add("editable-counter");
    element.title = "Click to edit";

    element.addEventListener("click", event => {
        event.stopPropagation();

        const grind = getCurrentGrind();
        if (!grind || grind.completed) return;
        if (!Object.prototype.hasOwnProperty.call(grind.counters, counter)) return;
        if (element.querySelector("input")) return;

        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "1";
        input.inputMode = "numeric";
        input.className = "counter-edit-input";
        input.value = String(Math.max(0, Number(grind.counters[counter]) || 0));
        input.setAttribute("aria-label", "Edit " + counter);

        element.textContent = "";
        element.appendChild(input);
        input.focus();
        input.select();

        let finished = false;

        const finish = () => {
            if (finished) return;
            finished = true;

            let value = Number(input.value);
            if (!Number.isFinite(value)) value = 0;
            value = Math.max(0, Math.floor(value));

            grind.counters[counter] = value;
            saveGrinds();
            updateCounterDisplays();
            updateSidebar();
        };

        input.addEventListener("keydown", e => {
            if (e.key === "Enter") {
                e.preventDefault();
                finish();
            } else if (e.key === "Escape") {
                e.preventDefault();
                finished = true;
                updateCounterDisplays();
            }
        });

        input.addEventListener("blur", finish);
    });
}


/* ========================================================
   COUNTERS
======================================================== */

function changeCounter(counter, amount) {

    const grind =
        getCurrentGrind();

    if (!grind || grind.completed) {
        return;
    }


    if (
        !Object.prototype.hasOwnProperty.call(
            grind.counters,
            counter
        )
    ) {
        return;
    }


    /*
       Rares are controlled by their individual
       rare counters, not by the generic counter.
    */

    if (counter === "rares") {

        const species =
            grind.species;

        const rares =
            rareData[species] || [];

        if (rares.length) {

            changeRareCount(
                rares[0],
                amount
            );

            return;

        }

    }


    grind.counters[counter] += amount;


    if (grind.counters[counter] < 0) {
        grind.counters[counter] = 0;
    }


    saveGrinds();

    updateCounterDisplays();

    updateSidebar();

}


function updateCounterDisplays() {

    const grind =
        getCurrentGrind();

    if (!grind) {
        return;
    }


    /*
       Once the individual rare counters are being
       used, the main RARES counter is always their
       combined total.
    */

    if (grind.rareBreakdownInitialized) {
        syncRareTotal(grind);
    }


    const counters =
        grind.counters;


    killsCounter.textContent =
        counters.kills;

    diamondsCounter.textContent =
        counters.diamonds;

    trollsCounter.textContent =
        counters.trolls;

    raresCounter.textContent =
        counters.rares;

    superRaresCounter.textContent =
        counters.superRares;

    greatOnesCounter.textContent =
        counters.greatOnes;


    /*
       Diamond Rate:
       Total Kills ÷ Diamonds

       Example:
       20 kills / 1 diamond = 1 : 20.00
    */

    if (counters.diamonds > 0) {

        const rate =
            counters.kills /
            counters.diamonds;

        diamondRateCounter.textContent =
            `1 : ${rate.toFixed(2)}`;

    } else {

        diamondRateCounter.textContent =
            "—";

    }


    if (counters.rares > 0) {

        const rate =
            counters.kills /
            counters.rares;

        rareRateCounter.textContent =
            `1 : ${rate.toFixed(2)}`;

    } else {

        rareRateCounter.textContent =
            "—";

    }


    renderRareBreakdown();

    updateGreatOneButton();

}


/* ========================================================
   RARE BREAKDOWN
======================================================== */

function syncRareTotal(grind) {

    if (!grind) {
        return;
    }


    if (!grind.rareBreakdown) {
        grind.rareBreakdown = {};
    }


    const species =
        grind.species;

    const rares =
        rareData[species] || [];


    let total = 0;


    rares.forEach(rare => {

        const count =
            Number(
                grind.rareBreakdown[rare]
            ) || 0;

        total +=
            Math.max(0, count);

    });


    grind.counters.rares =
        total;

}


function changeRareCount(
    rare,
    amount
) {

    const grind =
        getCurrentGrind();

    if (!grind || grind.completed) {
        return;
    }


    const species =
        grind.species;

    const rares =
        rareData[species] || [];


    /*
       Make sure this rare actually belongs to
       the current species.
    */

    if (!rares.includes(rare)) {
        return;
    }


    if (!grind.rareBreakdown) {
        grind.rareBreakdown = {};
    }


    const current =
        Number(
            grind.rareBreakdown[rare]
        ) || 0;


    const newCount =
        Math.max(
            0,
            current + amount
        );


    if (newCount === 0) {

        delete grind.rareBreakdown[rare];

    } else {

        grind.rareBreakdown[rare] =
            newCount;

    }


    /*
       From this point forward, the individual
       rare counters control the total.
    */

    grind.rareBreakdownInitialized =
        true;


    syncRareTotal(grind);

    saveGrinds();

    updateCounterDisplays();

    updateSidebar();

}


function renderRareBreakdown() {

    const grind =
        getCurrentGrind();

    if (!grind) {

        rareBreakdown.innerHTML = "";

        return;

    }


    const species =
        grind.species;

    const rares =
        rareData[species] || [];


    if (!rares.length) {

        rareBreakdown.innerHTML =
            `<div class="no-records">
                No rare data available.
            </div>`;

        return;

    }


    if (!grind.rareBreakdown) {
        grind.rareBreakdown = {};
    }


    rareBreakdown.innerHTML = "";


    rares.forEach(rare => {

        const count =
            Number(
                grind.rareBreakdown[rare]
            ) || 0;


        const row =
            document.createElement("div");

        row.className =
            "rare-breakdown-row";


        const name =
            document.createElement("span");

        name.className =
            "rare-breakdown-name";

        name.textContent =
            rare;


        /*
           Controls:
           −   count   +
        */

        const controls =
            document.createElement("div");

        controls.style.display =
            "flex";

        controls.style.alignItems =
            "center";

        controls.style.gap =
            "6px";


        const minus =
            document.createElement("button");

        minus.className =
            "record-action-button";

        minus.textContent =
            "−";

        minus.title =
            `Remove ${rare}`;


        if (count <= 0) {

            minus.disabled =
                true;

            minus.style.opacity =
                "0.4";

            minus.style.cursor =
                "not-allowed";

        }


        minus.addEventListener(
            "click",
            () => {

                changeRareCount(
                    rare,
                    -1
                );

            }
        );


        const number =
            document.createElement("span");

        number.className =
            "rare-breakdown-count";

        number.textContent =
            count;

        number.style.minWidth =
            "24px";

        number.style.textAlign =
            "center";

        number.style.color =
            "var(--accent-color, #6a00ff)";


        const plus =
            document.createElement("button");

        plus.className =
            "record-action-button";

        plus.textContent =
            "+";

        plus.title =
            `Add ${rare}`;


        plus.addEventListener(
            "click",
            () => {

                changeRareCount(
                    rare,
                    1
                );

            }
        );


        controls.appendChild(minus);

        controls.appendChild(number);

        controls.appendChild(plus);


        row.appendChild(name);

        row.appendChild(controls);


        rareBreakdown.appendChild(row);

    });

}


function addRare() {

    const grind =
        getCurrentGrind();

    if (!grind || grind.completed) {
        return;
    }


    const species =
        grind.species;

    const rares =
        rareData[species] || [];


    /*
       If the species has no individual rare list,
       retain the old generic counter behavior.
    */

    if (!rares.length) {

        grind.counters.rares =
            (Number(grind.counters.rares) || 0) + 1;

        saveGrinds();

        updateCounterDisplays();

        return;

    }


    /*
       The keyboard shortcut needs a specific rare.
       Since there is no selected rare setting, it
       uses the first rare as the fallback.

       The individual + buttons in Rare Breakdown
       let you choose exactly which rare to track.
    */

    changeRareCount(
        rares[0],
        1
    );

}


function toggleRareBreakdown() {

    rareBreakdown.classList.toggle(
        "hidden"
    );


    rareToggle.textContent =
        rareBreakdown.classList.contains("hidden")
            ? "▼ Rare Breakdown"
            : "▲ Rare Breakdown";

}


/* ========================================================
   GREAT ONE FORM
======================================================== */

function populateGreatOneForm() {

    const grind =
        getCurrentGrind();

    if (!grind) {
        return;
    }

    const species =
        grind.species;

    const isGreatOneSpecies =
        hasGreatOne(species);

    const data =
        isGreatOneSpecies
            ? (greatOneData[species] || {})
            : {
                furs: rareData[species] || [],
                furLabel: "Rare Fur"
            };

    greatOneSpecies.value =
        species;

    const formSectionTitle =
        greatOneSection?.querySelector(".section-title h2");

    const formSectionDescription =
        greatOneSection?.querySelector(".section-title p");

    const historyTitle =
        greatOneSection?.querySelector(".great-one-records-section h2");

    const historyDescription =
        greatOneSection?.querySelector(".history-description");

    if (isGreatOneSpecies) {
        if (formSectionTitle) formSectionTitle.textContent = "Great One Details";
        if (formSectionDescription) formSectionDescription.textContent =
            "Record the details of your Great One. Logging it will complete this grind.";
        if (historyTitle) historyTitle.textContent = "Great One History";
        if (historyDescription) historyDescription.textContent =
            "Your logged Great Ones and their custom names are saved here.";
        greatOneNameInput.closest(".form-field")?.classList.remove("hidden");
    } else {
        if (formSectionTitle) formSectionTitle.textContent = "Super Rare Details";
        if (formSectionDescription) formSectionDescription.textContent =
            "Record the rare fur, weight, and score of the Super Rare. Logging it will complete this grind.";
        if (historyTitle) historyTitle.textContent = "Super Rare History";
        if (historyDescription) historyDescription.textContent =
            "Your logged Super Rares and their details are saved here.";
        greatOneNameInput.closest(".form-field")?.classList.add("hidden");
    }

    furLabel.textContent =
        data.furLabel || (isGreatOneSpecies ? "Fur" : "Rare Fur");

    furSelect.innerHTML =
        '<option value="">Select ' +
        escapeHtml(data.furLabel || (isGreatOneSpecies ? "Fur" : "Rare Fur")) +
        '</option>';

    (data.furs || []).forEach(fur => {
        const option = document.createElement("option");
        option.value = fur;
        option.textContent = fur;
        furSelect.appendChild(option);
    });

    rackSelect.innerHTML =
        '<option value="">Select Rack</option>';

    (data.racks || []).forEach(rack => {
        const option = document.createElement("option");
        option.value = rack;
        option.textContent = rack;
        rackSelect.appendChild(option);
    });

    if (isGreatOneSpecies && (data.racks || []).length) {
        rackField.classList.remove("hidden");
    } else {
        rackField.classList.add("hidden");
    }

    whitetail5050Field.classList.add("hidden");
    whitetail5050Input.value = "";

    greatOneNameInput.value = "";
    furSelect.value = "";
    rackSelect.value = "";
    weightInput.value = "";
    scoreInput.value = "";

    updateRackRequirements();

}


function updateRackRequirements() {

    const grind =
        getCurrentGrind();

    if (!grind) {
        return;
    }


    if (
        grind.species === "Whitetail Deer" &&
        rackSelect.value === "50/50"
    ) {

        whitetail5050Field.classList.remove(
            "hidden"
        );

    } else {

        whitetail5050Field.classList.add(
            "hidden"
        );

        whitetail5050Input.value = "";

    }

}


/* ========================================================
   GREAT ONE NAMING
======================================================== */

function getNextGreatOneNumber(
    species,
    excludeRecordId = null
) {

    let highest =
        0;


    grinds.forEach(grind => {

        (grind.greatOneRecords || [])
            .forEach(record => {

                if (
                    excludeRecordId &&
                    record.id === excludeRecordId
                ) {
                    return;
                }


                if (
                    record.species !== species
                ) {
                    return;
                }


                if (
                    typeof record.name !== "string"
                ) {
                    return;
                }


                const match =
                    record.name
                        .trim()
                        .match(
                            /^(.+?) #(\d+)$/
                        );


                if (
                    match &&
                    match[1] === species
                ) {

                    const number =
                        Number(match[2]);


                    if (number > highest) {
                        highest = number;
                    }

                }

            });

    });


    return highest + 1;

}


function getGreatOneName(
    species,
    enteredName
) {

    const customName =
        String(
            enteredName || ""
        ).trim();


    if (customName) {
        return customName;
    }


    const number =
        getNextGreatOneNumber(
            species
        );


    return `${species} #${number}`;

}


/* ========================================================
   GREAT ONE VALIDATION
======================================================== */

function validateGreatOneForm() {

    const grind =
        getCurrentGrind();

    if (!grind) {

        alert("No grind selected.");

        return null;

    }


    if (grind.completed) {

        alert(
            "This grind is already completed."
        );

        return null;

    }


    const fur =
        furSelect.value.trim();


    const rack =
        rackSelect.value.trim();


    const enteredWeight =
        parseFloat(
            weightInput.value
        );


    const score =
        scoreInput.value.trim();


    if (!fur) {

        alert(
            hasGreatOne(grind.species)
                ? "Please select a Great One fur."
                : "Please select a rare fur type."
        );

        return null;

    }


    const data =
        greatOneData[grind.species] || {};


    if (
        Array.isArray(data.racks) &&
        data.racks.length > 0 &&
        !rack
    ) {

        alert(
            "Please select a Great One rack."
        );

        return null;

    }


    if (
        grind.species === "Whitetail Deer" &&
        rack === "50/50" &&
        !whitetail5050Input.value.trim()
    ) {

        alert(
            "Please enter the details for the Whitetail 50/50 rack."
        );

        return null;

    }


    if (
        !Number.isFinite(enteredWeight) ||
        enteredWeight <= 0
    ) {

        alert(
            "Please enter a valid weight."
        );

        return null;

    }


    let weightKg;


    if (currentUnit === "metric") {

        weightKg =
            enteredWeight;

    } else {

        weightKg =
            enteredWeight /
            2.2046226218;

    }


    return {

        fur,

        rack:
            rack || null,

        whitetail5050:
            grind.species === "Whitetail Deer" &&
            rack === "50/50"
                ? whitetail5050Input.value.trim()
                : null,

        weightKg,

        score:
            score || null

    };

}


/* ========================================================
   LOG GREAT ONE
======================================================== */

function logGreatOne() {

    const grind =
        getCurrentGrind();

    if (!grind) {
        alert("No grind selected.");
        return;
    }

    if (grind.completed) {
        alert("This grind is already completed.");
        return;
    }

    if (!hasGreatOne(grind.species)) {
        logSuperRare();
        return;
    }

    const details =
        validateGreatOneForm();

    if (!details) {
        return;
    }

    const name =
        getGreatOneName(
            grind.species,
            greatOneNameInput.value
        );

    const record = {
        id:
            Date.now().toString() +
            Math.random().toString(36).slice(2),
        name,
        species: grind.species,
        fur: details.fur,
        rack: details.rack,
        whitetail5050: details.whitetail5050,
        weightKg: details.weightKg,
        score: details.score,
        createdAt: new Date().toISOString()
    };

    if (!Array.isArray(grind.greatOneRecords)) {
        grind.greatOneRecords = [];
    }

    grind.greatOneRecords.push(record);
    grind.counters.greatOnes =
        grind.greatOneRecords.length;
    grind.completed = true;

    saveGrinds();
    resetGreatOneForm();
    renderGreatOneRecords();
    updateCounterDisplays();
    updateSidebar();
    updateGreatOneButton();

    alert("Great One logged! The grind has been moved to Grind Logs.");

}


function logSuperRare() {

    const grind =
        getCurrentGrind();

    if (!grind) {
        alert("No grind selected.");
        return;
    }

    if (grind.completed) {
        alert("This grind is already completed.");
        return;
    }

    const details =
        validateGreatOneForm();

    if (!details) {
        return;
    }

    const record = {
        id:
            Date.now().toString() +
            Math.random().toString(36).slice(2),
        species: grind.species,
        fur: details.fur,
        weightKg: details.weightKg,
        score: details.score,
        createdAt: new Date().toISOString()
    };

    if (!Array.isArray(grind.superRareRecords)) {
        grind.superRareRecords = [];
    }

    grind.superRareRecords.push(record);

    grind.counters.superRares =
        (Number(grind.counters.superRares) || 0) + 1;

    grind.completed = true;

    saveGrinds();
    resetGreatOneForm();
    renderGreatOneRecords();
    updateCounterDisplays();
    updateSidebar();
    updateGreatOneButton();

    alert("Super Rare logged! The grind has been moved to Grind Logs.");

}


/* ========================================================
   GREAT ONE BUTTON STATE
======================================================== */

function hasGreatOne(species) {
    return Object.prototype.hasOwnProperty.call(greatOneData, species);
}


function updateGreatOneUI() {
    const grind = getCurrentGrind();
    if (!grind) return;

    const isGreatOneSpecies = hasGreatOne(grind.species);

    greatOnesCounter.closest(".counter-card")?.classList.toggle(
        "hidden",
        !isGreatOneSpecies
    );

    logGreatOneButton.textContent = isGreatOneSpecies
        ? "Log Great One & Complete Grind"
        : "Log Super Rare & Complete Grind";

    if (typeof greatOneSection !== "undefined" && greatOneSection) {
        greatOneSection.classList.remove("hidden");
    }
}


function updateGreatOneButton() {

    const grind =
        getCurrentGrind();

    if (!grind) {
        return;
    }


    const isGreatOneSpecies = hasGreatOne(grind.species);

    if (grind.completed) {

        logGreatOneButton.textContent =
            isGreatOneSpecies
                ? "Great One Logged — Grind Complete"
                : "Super Rare Logged — Grind Complete";

        logGreatOneButton.disabled =
            true;

    } else {

        logGreatOneButton.textContent =
            hasGreatOne(grind.species)
                ? "Log Great One & Complete Grind"
                : "Log Super Rare & Complete Grind";

        logGreatOneButton.disabled =
            false;

    }

}


/* ========================================================
   GREAT ONE HISTORY
======================================================== */

function renderGreatOneRecords() {

    const grind =
        getCurrentGrind();

    if (!grind) {

        greatOneRecords.innerHTML = "";

        return;

    }


    const isGreatOneSpecies =
        hasGreatOne(grind.species);

    const records =
        isGreatOneSpecies
            ? (Array.isArray(grind.greatOneRecords)
                ? grind.greatOneRecords
                : [])
            : (Array.isArray(grind.superRareRecords)
                ? grind.superRareRecords
                : []);


    if (!records.length) {

        greatOneRecords.innerHTML =
            `<div class="no-records">
                No Great Ones logged yet.
            </div>`;

        return;

    }


    greatOneRecords.innerHTML = "";


    records.forEach(record => {

        const card =
            document.createElement("div");

        card.className =
            "great-one-record";


        const header =
            document.createElement("div");

        header.className =
            "great-one-record-header";


        const name =
            document.createElement("div");

        name.className =
            "great-one-record-name";

        name.textContent =
            isGreatOneSpecies
                ? (record.name || record.species + " #1")
                : "Super Rare";


        const actions =
            document.createElement("div");

        actions.className =
            "great-one-record-actions";


        const renameButton =
            document.createElement("button");

        renameButton.className =
            "record-action-button";

        renameButton.textContent =
            "Rename";

        renameButton.addEventListener(
            "click",
            () => renameGreatOne(record.id)
        );

        if (!isGreatOneSpecies) {
            renameButton.classList.add("hidden");
        }


        const deleteButton =
            document.createElement("button");

        deleteButton.className =
            "record-action-button delete";

        deleteButton.textContent =
            "Delete";

        deleteButton.addEventListener(
            "click",
            () => deleteGreatOne(record.id)
        );


        actions.appendChild(renameButton);

        actions.appendChild(deleteButton);

        header.appendChild(name);

        header.appendChild(actions);


        const details =
            document.createElement("div");

        details.className =
            "great-one-record-details";


        addGreatOneDetail(
            details,
            "Species",
            record.species
        );


        addGreatOneDetail(
            details,
            isGreatOneSpecies ? "Fur" : "Rare Fur",
            record.fur
        );

        if (!isGreatOneSpecies) {
            if (Number.isFinite(Number(record.weightKg))) {
                const displayedWeight =
                    currentUnit === "metric"
                        ? Number(record.weightKg).toFixed(2) + " kg"
                        : (Number(record.weightKg) * 2.2046226218).toFixed(2) + " lb";

                addGreatOneDetail(
                    details,
                    "Weight",
                    displayedWeight
                );
            }

            if (record.score != null && String(record.score).trim()) {
                addGreatOneDetail(
                    details,
                    "Score",
                    record.score
                );
            }
        }


        if (record.rack) {

            addGreatOneDetail(
                details,
                "Rack",
                record.rack
            );

        }


        if (record.whitetail5050) {

            addGreatOneDetail(
                details,
                "50/50",
                record.whitetail5050
            );

        }


        if (
            Number.isFinite(
                Number(record.weightKg)
            )
        ) {

            const displayedWeight =
                currentUnit === "metric"
                    ? `${Number(record.weightKg).toFixed(2)} kg`
                    : `${(
                        Number(record.weightKg) *
                        2.2046226218
                    ).toFixed(2)} lb`;


            addGreatOneDetail(
                details,
                "Weight",
                displayedWeight
            );

        }


        if (
            record.score !== null &&
            record.score !== undefined &&
            String(record.score).trim()
        ) {

            addGreatOneDetail(
                details,
                "Score",
                record.score
            );

        }


        card.appendChild(header);

        card.appendChild(details);

        greatOneRecords.appendChild(card);

    });

}


function addGreatOneDetail(
    container,
    label,
    value
) {

    const detail =
        document.createElement("div");

    detail.className =
        "great-one-detail";


    const strong =
        document.createElement("strong");

    strong.textContent =
        `${label}: `;


    detail.appendChild(strong);

    detail.appendChild(
        document.createTextNode(
            String(value)
        )
    );


    container.appendChild(detail);

}


function renameGreatOne(recordId) {

    const grind =
        getCurrentGrind();

    if (!grind) {
        return;
    }


    const record =
        grind.greatOneRecords.find(
            item => item.id === recordId
        );


    if (!record) {
        return;
    }


    const newName =
        prompt(
            "Enter a new name for this Great One:",
            record.name || ""
        );


    if (newName === null) {
        return;
    }


    const trimmed =
        newName.trim();


    if (!trimmed) {

        alert(
            "The name cannot be blank."
        );

        return;

    }


    record.name =
        trimmed;


    saveGrinds();

    renderGreatOneRecords();

}


function deleteGreatOne(recordId) {

    const grind =
        getCurrentGrind();

    if (!grind) {
        return;
    }


    const recordIndex =
        grind.greatOneRecords.findIndex(
            record => record.id === recordId
        );


    if (recordIndex === -1) {
        return;
    }


    const record =
        grind.greatOneRecords[recordIndex];


    const confirmed =
        confirm(
            `Delete "${record.name || "this Great One"}"?`
        );


    if (!confirmed) {
        return;
    }


    grind.greatOneRecords.splice(
        recordIndex,
        1
    );


    grind.counters.greatOnes =
        grind.greatOneRecords.length;


    /*
       If the only Great One record was deleted
       from a completed grind, keep the grind
       completed. This prevents accidentally
       reopening a finished grind.
    */

    saveGrinds();

    renderGreatOneRecords();

    updateCounterDisplays();

    updateSidebar();

}


/* ========================================================
   RESET GREAT ONE FORM
======================================================== */

function resetGreatOneForm() {

    greatOneNameInput.value = "";

    furSelect.value = "";

    rackSelect.value = "";

    whitetail5050Input.value = "";

    weightInput.value = "";

    scoreInput.value = "";

    whitetail5050Field.classList.add(
        "hidden"
    );

}


/* ========================================================
   UNITS
======================================================== */

function setUnit(unit) {

    if (
        unit !== "metric" &&
        unit !== "imperial"
    ) {
        return;
    }


    currentUnit =
        unit;


    localStorage.setItem(
        UNIT_STORAGE_KEY,
        unit
    );

    scheduleCloudSync();


    updateUnitButtons();

    updateWeightUnit();

    renderGreatOneRecords();

}


function updateUnitButtons() {

    metricButton.classList.toggle(
        "active",
        currentUnit === "metric"
    );

    imperialButton.classList.toggle(
        "active",
        currentUnit === "imperial"
    );

}


function updateWeightUnit() {

    weightUnit.textContent =
        currentUnit === "metric"
            ? "kg"
            : "lb";

}


/* ========================================================
   SIDEBAR
======================================================== */

function updateSidebar() {

    activeGrinds.innerHTML = "";

    completedGrinds.innerHTML = "";


    grinds.forEach(grind => {

        const button =
            document.createElement("button");

        button.className =
            "grind-list-item";


        if (grind.id === currentGrindId) {

            button.classList.add(
                "active"
            );

        }


        const species =
            document.createElement("div");

        species.className =
            "grind-list-species";

        species.textContent =
            grind.species;


        const map =
            document.createElement("div");

        map.className =
            "grind-list-map";

        map.textContent =
            grind.map;


        const info =
            document.createElement("div");

        info.className =
            "grind-list-info";

        info.appendChild(species);
        info.appendChild(map);

        button.appendChild(info);


        button.addEventListener(
            "click",
            () => selectGrind(grind.id)
        );

        const deleteButton =
            document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className = "grind-delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.title = grind.completed
            ? "Delete this logged grind"
            : "Delete this active grind";

        deleteButton.addEventListener(
            "click",
            event => {
                event.stopPropagation();
                deleteGrind(grind.id);
            }
        );

        button.appendChild(deleteButton);


        if (grind.completed) {

            completedGrinds.appendChild(
                button
            );

        } else {

            activeGrinds.appendChild(
                button
            );

        }

    });


    if (!activeGrinds.children.length) {

        const empty =
            document.createElement("div");

        empty.className =
            "grind-list-map";

        empty.textContent =
            "No active grinds.";

        activeGrinds.appendChild(empty);

    }


    if (!completedGrinds.children.length) {

        const empty =
            document.createElement("div");

        empty.className =
            "grind-list-map";

        empty.textContent =
            "No completed grinds.";

        completedGrinds.appendChild(empty);

    }

}


/* ========================================================
   PAGE UPDATE
======================================================== */

function updatePage() {

    const grind =
        getCurrentGrind();


    if (!grind) {

        emptyState.classList.remove(
            "hidden"
        );

        grindPage.classList.add(
            "hidden"
        );

        return;

    }


    emptyState.classList.add(
        "hidden"
    );

    grindPage.classList.remove(
        "hidden"
    );


    grindSpecies.textContent =
        grind.species;

    grindMap.textContent =
        grind.map;


    updateCounterDisplays();

    updateGreatOneUI();

    populateGreatOneForm();

    renderGreatOneRecords();

    updateGreatOneButton();

}


function updateAll() {

    updateSidebar();

    updatePage();

}


/* ========================================================
   SETTINGS
======================================================== */

function applySettings() {

    document.documentElement.style.setProperty(
        "--accent-color",
        settings.accentColor
    );

    document.documentElement.style.setProperty(
        "--background-color",
        settings.backgroundColor
    );

    document.documentElement.style.setProperty(
        "--card-color",
        settings.cardColor
    );


    document.body.classList.remove(
        "text-small",
        "text-medium",
        "text-large"
    );


    document.body.classList.add(
        `text-${settings.textSize}`
    );


    accentColorInput.value =
        settings.accentColor;

    backgroundColorInput.value =
        settings.backgroundColor;

    cardColorInput.value =
        settings.cardColor;

    textSizeSelect.value =
        settings.textSize;


    document
        .querySelectorAll(".keybind-input")
        .forEach(input => {

            const keybind =
                input.dataset.keybind;

            input.value =
                settings.keybinds[keybind] || "";

        });

}


function openSettings() {

    applySettings();

    settingsModal.classList.remove(
        "hidden"
    );

}


function closeSettings() {

    settingsModal.classList.add(
        "hidden"
    );

}


function resetSettings() {

    const confirmed =
        confirm(
            "Reset all customization and keybind settings?"
        );


    if (!confirmed) {
        return;
    }


    settings = {

        accentColor: "#6a00ff",

        backgroundColor: "#000000",

        cardColor: "#111111",

        textSize: "medium",

        deletedGrindIds: [],

        keybinds: {

            addKill: "K",

            removeKill: "Shift+K",

            addDiamond: "D",

            removeDiamond: "Shift+D",

            addTroll: "T",

            removeTroll: "Shift+T",

            addRare: "R",

            addSuperRare: "S",

            logGreatOne: "G",

            newGrind: "N"

        }

    };


    saveSettings();

    applySettings();

}


/* ========================================================
   KEYBINDS
======================================================== */

function normalizeKeyEvent(event) {

    let key =
        event.key;


    if (key === " ") {
        key = "Space";
    }


    if (key.length === 1) {
        key = key.toUpperCase();
    }


    const parts = [];


    if (event.ctrlKey) {
        parts.push("Ctrl");
    }

    if (event.altKey) {
        parts.push("Alt");
    }

    if (event.shiftKey) {
        parts.push("Shift");
    }


    parts.push(key);


    return parts.join("+");

}


function isTypingTarget(element) {

    if (!element) {
        return false;
    }


    const tag =
        element.tagName;


    return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT"
    );

}


function handleKeybinds(event) {

    if (isTypingTarget(event.target)) {
        return;
    }


    const key =
        normalizeKeyEvent(event);


    const bind =
        settings.keybinds;


    if (key === bind.addKill) {

        changeCounter(
            "kills",
            1
        );

        event.preventDefault();

    }

    else if (key === bind.removeKill) {

        changeCounter(
            "kills",
            -1
        );

        event.preventDefault();

    }

    else if (key === bind.addDiamond) {

        changeCounter(
            "diamonds",
            1
        );

        event.preventDefault();

    }

    else if (key === bind.removeDiamond) {

        changeCounter(
            "diamonds",
            -1
        );

        event.preventDefault();

    }

    else if (key === bind.addTroll) {

        changeCounter(
            "trolls",
            1
        );

        event.preventDefault();

    }

    else if (key === bind.removeTroll) {

        changeCounter(
            "trolls",
            -1
        );

        event.preventDefault();

    }

    else if (key === bind.addRare) {

        addRare();

        event.preventDefault();

    }

    else if (key === bind.addSuperRare) {

        changeCounter(
            "superRares",
            1
        );

        event.preventDefault();

    }

    else if (key === bind.logGreatOne) {

        logGreatOne();

        event.preventDefault();

    }

    else if (key === bind.newGrind) {

        openNewGrindModal();

        event.preventDefault();

    }

}


/* ========================================================
   KEYBIND EDITING
======================================================== */

document
    .querySelectorAll(".keybind-input")
    .forEach(input => {

        input.addEventListener(
            "keydown",
            event => {

                event.preventDefault();

                const key =
                    normalizeKeyEvent(event);


                const keybind =
                    input.dataset.keybind;


                settings.keybinds[keybind] =
                    key;


                input.value =
                    key;


                saveSettings();

            }
        );

    });


/* ========================================================
   COLOR / SETTINGS EVENTS
======================================================== */

accentColorInput.addEventListener(
    "input",
    () => {

        settings.accentColor =
            accentColorInput.value;

        applySettings();

        saveSettings();

    }
);


backgroundColorInput.addEventListener(
    "input",
    () => {

        settings.backgroundColor =
            backgroundColorInput.value;

        applySettings();

        saveSettings();

    }
);


cardColorInput.addEventListener(
    "input",
    () => {

        settings.cardColor =
            cardColorInput.value;

        applySettings();

        saveSettings();

    }
);


textSizeSelect.addEventListener(
    "change",
    () => {

        settings.textSize =
            textSizeSelect.value;

        applySettings();

        saveSettings();

    }
);


/* ========================================================
   EVENT LISTENERS
======================================================== */

const mobileNavBackdrop =
    document.getElementById("mobileNavBackdrop");

function setMobileNavigation(open) {
    if (!sidebar || !menuButton) return;

    sidebar.classList.toggle("mobile-open", open);
    sidebar.classList.toggle("collapsed", !open);

    if (mobileNavBackdrop) {
        mobileNavBackdrop.classList.toggle("visible", open);
        mobileNavBackdrop.setAttribute("aria-hidden", String(!open));
    }

    menuButton.setAttribute("aria-expanded", String(open));
}

if (sidebar) {
    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            sidebar.classList.remove("mobile-open");
            sidebar.classList.remove("collapsed");
            mobileNavBackdrop?.classList.remove("visible");
            mobileNavBackdrop?.setAttribute("aria-hidden", "true");
            menuButton?.setAttribute("aria-expanded", "false");
        } else if (!sidebar.classList.contains("mobile-open")) {
            sidebar.classList.add("collapsed");
        }
    });

    if (window.innerWidth <= 760) {
        sidebar.classList.add("collapsed");
    }
}
newGrindButton.addEventListener(
    "click",
    openNewGrindModal
);


emptyNewGrindButton.addEventListener(
    "click",
    openNewGrindModal
);


closeModalButton.addEventListener(
    "click",
    closeNewGrindModal
);


createGrindButton.addEventListener(
    "click",
    createGrind
);


speciesSelect.addEventListener(
    "change",
    updateMapSelect
);


rareToggle.addEventListener(
    "click",
    toggleRareBreakdown
);


rackSelect.addEventListener(
    "change",
    updateRackRequirements
);


logGreatOneButton.addEventListener(
    "click",
    logGreatOne
);


metricButton.addEventListener(
    "click",
    () => setUnit("metric")
);


imperialButton.addEventListener(
    "click",
    () => setUnit("imperial")
);


settingsButton.addEventListener(
    "click",
    openSettings
);


closeSettingsButton.addEventListener(
    "click",
    closeSettings
);


resetSettingsButton.addEventListener(
    "click",
    resetSettings
);

if (authOpenButton) {
    authOpenButton.addEventListener("click", openAuthModal);
}

if (closeAuthModalButton) {
    closeAuthModalButton.addEventListener("click", closeAuthModal);
}

if (googleAuthButton) {
    googleAuthButton.addEventListener("click", () => signInWithProvider("google"));
}


if (authEmailButton) {
    authEmailButton.addEventListener("click", sendMagicLink);
}

if (authSignOutButton) {
    authSignOutButton.addEventListener("click", signOutUser);
}

if (authEmailInput) {
    authEmailInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMagicLink();
        }
    });
}


window.addEventListener(
    "keydown",
    handleKeybinds
);


/* ========================================================
   CLOSE MODALS BY CLICKING OUTSIDE
======================================================== */

newGrindModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            newGrindModal
        ) {

            closeNewGrindModal();

        }

    }
);


settingsModal.addEventListener(
    "click",
    event => {
        if (event.target === settingsModal) {
            closeSettings();
        }
    }
);

authModal?.addEventListener(
    "click",
    event => {
        if (event.target === authModal) {
            closeAuthModal();
        }
    }
);


/* ========================================================
   ESCAPE KEY
======================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        if (
            !newGrindModal.classList.contains(
                "hidden"
            )
        ) {

            closeNewGrindModal();

        }


        if (
            !settingsModal.classList.contains("hidden")
        ) {
            closeSettings();
        }

        if (
            authModal &&
            !authModal.classList.contains("hidden")
        ) {
            closeAuthModal();
        }

    }
);


/* ========================================================
   HTML ESCAPING
======================================================== */

function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ========================================================
   ENABLE DIRECT COUNTER EDITING
======================================================== */

makeCounterEditable(killsCounter, "kills");
makeCounterEditable(diamondsCounter, "diamonds");
makeCounterEditable(trollsCounter, "trolls");
makeCounterEditable(superRaresCounter, "superRares");


/* ========================================================
   SUPABASE AUTH + CLOUD SYNC
======================================================== */

function updateAuthUI() {

    if (!authStatus || !authOpenButton || !authSignOutButton) {
        return;
    }

    if (currentUser) {
        const email = currentUser.email || "Signed in";
        authStatus.textContent = email;
        authOpenButton.classList.add("hidden");
        authSignOutButton.classList.remove("hidden");
        if (authModal) authModal.classList.add("hidden");
    } else {
        authStatus.textContent = "Not signed in";
        authOpenButton.classList.remove("hidden");
        authSignOutButton.classList.add("hidden");
    }

}


function openAuthModal() {
    if (authModal) authModal.classList.remove("hidden");
    authEmailInput?.focus();
}


function closeAuthModal() {
    if (authModal) authModal.classList.add("hidden");
}


async function signInWithProvider(provider) {

    if (!supabaseClient) {
        alert("Account sign-in is not available right now.");
        return;
    }

    const redirectTo =
        window.location.origin + window.location.pathname;

    const { error } =
        await supabaseClient.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo
            }
        });

    if (error) {
        console.error("OAuth sign-in failed:", error);
        alert(
            "Could not start " +
            (provider === "google" ? "Google" : "Apple") +
            " sign-in: " +
            error.message
        );
    }

}


function scheduleCloudSync() {

    if (
        !currentUser ||
        suppressCloudSync ||
        !supabaseClient
    ) {
        return;
    }

    clearTimeout(cloudSyncTimer);

    cloudSyncTimer = setTimeout(
        syncToCloud,
        500
    );

}


/*
   Merge grinds from both the device and cloud.

   This is intentionally additive: a grind that exists on
   either side is kept. For the same grind ID, prefer the
   version that has a later updatedAt timestamp when one is
   available. Legacy grinds without updatedAt keep the
   local version when it contains data, which prevents an
   empty/new device from replacing an existing grind.
*/
function mergeGrinds(localGrinds, cloudGrinds, deletedGrindIds = []) {

    const local = Array.isArray(localGrinds)
        ? localGrinds
        : [];

    const cloud = Array.isArray(cloudGrinds)
        ? cloudGrinds
        : [];

    const byId = new Map();

    cloud.forEach(grind => {
        if (grind?.id != null) {
            byId.set(String(grind.id), grind);
        }
    });

    local.forEach(grind => {
        if (grind?.id == null) {
            return;
        }

        const key = String(grind.id);
        const existing = byId.get(key);

        if (!existing) {
            byId.set(key, grind);
            return;
        }

        const localTime =
            Date.parse(grind.updatedAt || grind.createdAt || "") || 0;

        const cloudTime =
            Date.parse(existing.updatedAt || existing.createdAt || "") || 0;

        if (localTime >= cloudTime) {
            byId.set(key, grind);
        }
    });

    const deleted = new Set(
        Array.isArray(deletedGrindIds)
            ? deletedGrindIds.map(id => String(id))
            : []
    );

    return Array.from(byId.values())
        .filter(grind => !deleted.has(String(grind.id)));
}


async function syncToCloud() {

    if (
        !currentUser ||
        suppressCloudSync ||
        !supabaseClient
    ) {
        return;
    }

    const payload = {

        user_id:
            currentUser.id,

        grinds,

        current_grind_id:
            currentGrindId,

        current_unit:
            currentUnit,

        settings,

        updated_at:
            new Date().toISOString()

    };

    const { error } =
        await supabaseClient
            .from("user_grinds")
            .upsert(
                payload,
                { onConflict: "user_id" }
            );

    if (error) {
        console.error(
            "Cloud sync failed:",
            error
        );

        if (authStatus) {
            authStatus.textContent =
                "Cloud sync error";
        }

        return;
    }

    updateAuthUI();

}


async function loadCloudData(user) {

    if (!supabaseClient || !user) {
        return;
    }

    const { data, error } =
        await supabaseClient
            .from("user_grinds")
            .select(
                "grinds,current_grind_id,current_unit,settings"
            )
            .eq("user_id", user.id)
            .maybeSingle();

    if (error) {
        console.error(
            "Could not load cloud data:",
            error
        );
        return;
    }

    /*
       IMPORTANT:
       Do not call Supabase from inside the auth-state
       callback while it is still running. Supabase currently
       documents a deadlock risk for async API calls there.
    */
    suppressCloudSync = true;

    try {

        if (data) {

            const localGrinds = Array.isArray(grinds)
                ? grinds
                : [];

            const cloudGrinds = Array.isArray(data.grinds)
                ? data.grinds
                : [];

            const localDeleted = Array.isArray(settings.deletedGrindIds)
                ? settings.deletedGrindIds
                : [];

            const cloudDeleted = Array.isArray(data.settings?.deletedGrindIds)
                ? data.settings.deletedGrindIds
                : [];

            const mergedDeletedGrindIds = Array.from(
                new Set([
                    ...localDeleted,
                    ...cloudDeleted
                ])
            );

            settings.deletedGrindIds = mergedDeletedGrindIds;

            const mergedGrinds =
                mergeGrinds(
                    localGrinds,
                    cloudGrinds,
                    mergedDeletedGrindIds
                );

            /*
               If this device has the user's existing local
               grinds and the cloud row is empty/new, keep the
               local grinds and upload the merged result.
            */
            grinds = mergedGrinds;

            if (
                data.current_grind_id &&
                grinds.some(
                    grind =>
                        grind.id === data.current_grind_id
                )
            ) {
                currentGrindId =
                    data.current_grind_id;
            }

            if (!currentGrindId && grinds.length) {

                const firstActive =
                    grinds.find(
                        grind => !grind.completed
                    );

                currentGrindId =
                    firstActive?.id ||
                    grinds[grinds.length - 1].id;

            }

            if (
                data.current_unit === "metric" ||
                data.current_unit === "imperial"
            ) {
                currentUnit =
                    data.current_unit;

                localStorage.setItem(
                    UNIT_STORAGE_KEY,
                    currentUnit
                );
            }

            if (
                data.settings &&
                typeof data.settings === "object"
            ) {

                settings = {
                    ...settings,
                    ...data.settings,
                    keybinds: {
                        ...settings.keybinds,
                        ...(data.settings.keybinds || {})
                    },
                    deletedGrindIds: mergedDeletedGrindIds
                };

                localStorage.setItem(
                    SETTINGS_STORAGE_KEY,
                    JSON.stringify(settings)
                );

            }

            localStorage.setItem(
                GRINDS_STORAGE_KEY,
                JSON.stringify(grinds)
            );

            localStorage.setItem(
                DELETED_GRINDS_STORAGE_KEY,
                JSON.stringify(settings.deletedGrindIds || [])
            );

            if (normalizeGreatOneNames()) {
                localStorage.setItem(
                    GRINDS_STORAGE_KEY,
                    JSON.stringify(grinds)
                );
            }

        } else {

            /*
               First sign-in on any device:
               the local tracker becomes the initial
               cloud copy instead of being discarded.
            */
            localStorage.setItem(
                GRINDS_STORAGE_KEY,
                JSON.stringify(grinds)
            );

        }

    } finally {

        suppressCloudSync = false;

    }

    /*
       Upload after merging. This is the part the old code
       was missing: syncToCloud() was called while
       suppressCloudSync was still true, so it immediately
       returned and never created the user's cloud row.
    */
    if (data) {
        await syncToCloud();
    } else {
        await syncToCloud();
    }

    applySettings();
    updateUnitButtons();
    updateWeightUnit();
    updateAll();
}


async function sendMagicLink() {

    if (!supabaseClient || !authEmailInput) {
        alert("Account sign-in is not available right now.");
        return;
    }

    const email = authEmailInput.value.trim();

    if (!email) {
        alert("Enter your email address first.");
        return;
    }

    if (authEmailButton) {
        authEmailButton.disabled = true;
        authEmailButton.textContent = "Sending…";
    }

    const { error } =
        await supabaseClient.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo:
                    window.location.origin + window.location.pathname
            }
        });

    if (authEmailButton) {
        authEmailButton.disabled = false;
        authEmailButton.textContent = "Continue";
    }

    if (error) {
        console.error("Email sign-in failed:", error);
        alert("Could not send the sign-in email: " + error.message);
        return;
    }

    if (authStatus) {
        authStatus.textContent = "Check your email for the sign-in link.";
    }

    if (authModal) {
        const help = authModal.querySelector(".auth-help");
        if (help) help.textContent = "Check your inbox for your secure sign-in link.";
    }

}


async function signOutUser() {

    if (!supabaseClient) {
        return;
    }

    await supabaseClient.auth.signOut();

    currentUser = null;

    updateAuthUI();

}


async function initializeCloudSync() {

    if (!supabaseClient) {
        updateAuthUI();
        return;
    }

    const { data } =
        await supabaseClient.auth.getSession();

    if (data.session?.user) {

        currentUser =
            data.session.user;

        await loadCloudData(
            currentUser
        );

    }

    updateAuthUI();

    supabaseClient.auth.onAuthStateChange(
        (_event, session) => {

            const user =
                session?.user || null;

            currentUser =
                user;

            if (user) {
                /*
                   Defer the cloud request until after the
                   auth callback returns to avoid Supabase's
                   documented auth-state deadlock.
                */
                setTimeout(() => {
                    loadCloudData(user);
                }, 0);
            } else {
                updateAuthUI();
            }

        }
    );

}


/* ========================================================
   MOBILE SIDEBAR ITEM CLOSE
   Let the grind's normal click handler finish first, then
   close the drawer. This prevents the drawer from swallowing
   the grind selection.
======================================================== */

/* ========================================================
   INITIALIZE
======================================================== */

loadSettings();

loadGrinds();

loadUnit();

populateSpeciesSelect();

applySettings();

updateUnitButtons();

updateWeightUnit();

updateAll();

initializeCloudSync();

/* ========================================================
   FINAL NAVIGATION CONTROLLER
   Uses event delegation so desktop and mobile menu buttons
   cannot lose their click handlers because of other scripts.
======================================================== */
document.addEventListener("pointerdown", event => {
    const target = event.target.closest(
        "#menuButton, #desktopMenuButton, #mobileNavBackdrop"
    );

    if (!target || !sidebar) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (target.id === "mobileNavBackdrop") {
        if (window.innerWidth <= 760) {
            setMobileNavigation(false);
        }
        return;
    }

    if (window.innerWidth <= 760 && target.id === "menuButton") {
        setMobileNavigation(!sidebar.classList.contains("mobile-open"));
        return;
    }

    if (window.innerWidth > 760 && target.id === "desktopMenuButton") {
        sidebar.classList.toggle("collapsed");
    }
}, true);

