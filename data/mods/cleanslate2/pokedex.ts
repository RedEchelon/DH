export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	weezinggalar: {
		inherit: true,
		name: "Weezing-Galar",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 69, atk: 103, def: 178, spa: 116, spd: 92, spe: 87},
		abilities: {0: "Neutralizing Gas", H: "Misty Surge"},
		prevo: "",
	},
	orbeetle: {
		inherit: true,
		name: "Orbeetle",
		types: ["Psychic", "Electric"],
		baseStats: {hp: 72, atk: 52, def: 150, spa: 69, spd: 164, spe: 123},
		abilities: {0: "Swarm", 1: "Frisk", H: "Trace"},
		prevo: "",
	},
	stonjourner: {
		inherit: true,
		name: "Stonjourner",
		types: ["Rock", "Ghost"],
		baseStats: {hp: 120, atk: 145, def: 155, spa: 20, spd: 20, spe: 100},
		abilities: {0: "Power Spot"},
	},
	cherrimsunshine: {
		num: 421,
		name: "Cherrim-Sunshine",
		baseSpecies: "Cherrim",
		forme: "Sunshine",
		types: ["Grass", "Fire"],
		baseStats: {hp: 60, atk: 60, def: 60, spa: 140, spd: 80, spe: 130},
		abilities: {0: "Drought"},
		height: 0.5,
		weightkg: 9.3,
		color: "Pink",
		eggGroups: ["Fairy", "Grass"],
	},
	zacian: {
		inherit: true,
		name: "Zacian",
		types: ["Fighting", "Fairy"],
		baseStats: {hp: 92, atk: 130, def: 105, spa: 80, spd: 105, spe: 118},
		abilities: {0: "Intimidate"},
	},
	dubwool: {
		inherit: true,
		name: "Dubwool",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 105, def: 120, spa: 115, spd: 120, spe: 55},
		abilities: {0: "Steadfast", 1: "Cotton Down"},
	},
	gumshoos: {
		num: 735,
		name: "Gumshoos",
		types: ["Normal", "Ground"],
		baseStats: {hp: 100, atk: 140, def: 90, spa: 75, spd: 110, spe: 85},
		abilities: {0: "Stakeout", 1: "Adaptability"},
		height: 0.7,
		weightkg: 14.2,
		eggGroups: ["Field"],
	},
	seismitoad: {
		num: 537,
		name: "Seismitoad",
		types: ["Ground", "Water"],
		baseStats: {hp: 140, atk: 85, def: 95, spa: 110, spd: 95, spe: 85},
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Flare Boost"},
		height: 1.5,
		weightkg: 62,
		eggGroups: ["Water1"],
	},
	snorlaxgmax: {
		num: 143,
		name: "Snorlax-Gmax",
		types: ["Grass", "Ground"],
		baseStats: {hp: 150, atk: 115, def: 100, spa: 105, spd: 100, spe: 40},
		abilities: {0: "Harvest", 1: "Ripen", H: "Thick Fat"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 2.1,
		weightkg: 460,
	},
	snorlax: {
		num: 143,
		name: "Snorlax",
		types: ["Grass", "Ground"],
		baseStats: {hp: 150, atk: 115, def: 100, spa: 105, spd: 100, spe: 40},
		abilities: {0: "Harvest", 1: "Ripen", H: "Thick Fat"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 2.1,
		weightkg: 460,
	},
	walrein: {
		num: 365,
		name: "Walrein",
		types: ["Water", "Steel"],
		baseStats: {hp: 133, atk: 122, def: 126, spa: 89, spd: 91, spe: 54},
		abilities: {0: "Iron Barbs", 1: "Strong Jaw", H: "Thick Fat"},
		height: 1.4,
		weightkg: 150.6,
		prevo: "",
		eggGroups: ["Water1", "Field"],
	},
	dhelmise: {
		num: 781,
		name: "Dhelmise",
		types: ["Ghost", "Steel"],
		gender: "N",
		baseStats: {hp: 90, atk: 131, def: 131, spa: 89, spd: 99, spe: 65},
		abilities: {0: "Sap Sipper", 1: "Water Absorb", H: "Drizzle"},
		height: 3.9,
		weightkg: 210,
		eggGroups: ["Mineral"],
	},
	togekiss: {
		num: 468,
		name: "Togekiss",
		types: ["Flying", "Electric"],
		baseStats: {hp: 110, atk: 70, def: 100, spa: 120, spd: 100, spe: 90},
		abilities: {0: "Immunity", 1: "Cloud Nine", H: "Competitive"},
		height: 1.5,
		weightkg: 38,
		prevo: "",
		eggGroups: ["Flying", "Fairy"],
	},
	scolipede: {
		num: 545,
		name: "Scolipede",
		types: ["Bug", "Poison"],
		baseStats: {hp: 90, atk: 120, def: 89, spa: 65, spd: 89, spe: 122},
		abilities: {0: "Swarm", 1: "Poison Point", H: "Poison Touch"},
		height: 2.5,
		weightkg: 200.5,
		prevo: "",
		eggGroups: ["Bug"],
	},
	cursola: {
		inherit: true,
		name: "Cursola",
		types: ["Ghost"],
		baseStats: {hp: 80, atk: 95, def: 80, spa: 95, spd: 220, spe: 30},
		abilities: {0: "Cloud Nine", 1: "Cursed Body", H: "Natural Cure"},
		prevo: "",
	},
	torkoal: {
		inherit: true,
		name: "Torkoal",
		types: ["Fire", "Water"],
		baseStats: {hp: 90, atk: 130, def: 120, spa: 95, spd: 100, spe: 70},
		abilities: {0: "Humidifier"},
	},
	gligar: {
		inherit: true,
		name: "Gligar",
		types: ["Poison", "Dark"],
		baseStats: {hp: 78, atk: 94, def: 117, spa: 67, spd: 65, spe: 59},
		abilities: {0: "Hyper Cutter", 1: "Sticky Hold", H: "Prankster"},
	},
	octillery: {
		inherit: true,
		name: "Octillery",
		types: ["Ice", "Electric"],
		baseStats: {hp: 88, atk: 91, def: 91, spa: 118, spd: 118, spe: 114},
		abilities: {0: "Super Luck", 1: "Filter", H: "Neuroforce"},
		prevo: "",
	},
	necrozma: {
		inherit: true,
		name: "Necrozma",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 97, atk: 113, def: 113, spa: 113, spd: 113, spe: 101},
		abilities: {0: "Prism Armor", H: "Magic Bounce"},
	},
	dunsparce: {
		inherit: true,
		name: "Dunsparce",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 100, atk: 108, def: 75, spa: 98, spd: 125, spe: 70},
		abilities: {0: "Poison Heal", 1: "Serene Grace", H: "Natural Cure"},
	},
	victreebel: {
		inherit: true,
		name: "Victreebel",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 100, atk: 135, def: 80, spa: 130, spd: 80, spe: 95},
		abilities: {0: "Chlorophyll", 1: "Mold Breaker", H: "Malware"},
	},
	runerigus: {
		inherit: true,
		name: "Runerigus",
		types: ["Rock", "Electric"],
		baseStats: {hp: 80, atk: 70, def: 105, spa: 145, spd: 105, spe: 110},
		abilities: {0: "Grounding", 1: "Heatproof", H: "Lightning Rod"},
		prevo: "",
	},
	aerodactyl: {
		inherit: true,
		name: "Aerodactyl",
		types: ["Rock", "Flying"],
		baseStats: {hp: 100, atk: 135, def: 105, spa: 60, spd: 105, spe: 110},
		abilities: {0: "Sand Stream", 1: "Pressure", H: "Sand Force"},
	},
	unown: {
		inherit: true,
		name: "Unown",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Punk Rock", 1: "Sheer Force", H: "Magic Guard"},
		weightkg: 5,
		cosmeticFormes: ["unownm", "unowns", "unownp"],
		otherFormes: ["unownm", "unowns", "unownp"],
	},
	unownm: {
		num: 201,
		name: "Unown-M",
		baseForme: "M",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 115, def: 140, spa: 70, spd: 115, spe: 70},
		abilities: {0: "Magic Guard"},
		otherFormes: ["unownp", "unowns", "unown"],
		cosmeticFormes: null,
		heightm: 0.5,
		weightkg: 5,
		gender: "N",
	},
	unownp: {
		num: 201,
		name: "Unown-P",
		forme: "P",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 70, def: 115, spa: 140, spd: 70, spe: 115},
		abilities: {0: "Punk Rock"},
		otherFormes: ["unownm", "unowns", "unown"],
		cosmeticFormes: null,
		heightm: 0.5,
		weightkg: 5,
		gender: "N",
	},
	unowns: {
		num: 201,
		name: "Unown-S",
		forme: "S",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 115, def: 115, spa: 70, spd: 70, spe: 140},
		abilities: {0: "Sheer Force"},
		otherFormes: ["unownm", "unownp", "unown"],
		cosmeticFormes: null,
		heightm: 0.5,
		weightkg: 5,
		gender: "N",
	},
	shaymin: {
		inherit: true,
		types: ["Grass", "Fairy"],
		baseStats: {hp: 100, atk: 99, def: 97, spa: 100, spd: 104, spe: 100},
		abilities: {0: "Natural Cure", H: "Regenerator"},
	},
	shayminsky: {
		inherit: true,
		types: ["Grass", "Flying"],
		baseStats: {hp: 80, atk: 120, def: 80, spa: 80, spd: 100, spe: 140},
		abilities: {0: "Magic Guard"},
		requiredItem: "Flying Memory",
	},
	scrafty: {
		inherit: true,
		baseStats: {hp: 115, atk: 140, def: 105, spa: 65, spd: 95, spe: 80},
		abilities: {0: "Mold Breaker", 1: "Intimidate", H: "Scrappy"},
	},
	salamence: {
		inherit: true,
		name: "Salamence",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 95, atk: 110, def: 135, spa: 100, spd: 80, spe: 80},
		abilities: {0: "Rock Head", 1: "Intimidate", H: "Gluttony"},
		prevo: "",
	},
	centiskorch: {
		inherit: true,
		name: "Centiskorch",
		types: ["Fire", "Bug"],
		baseStats: {hp: 117, atk: 100, def: 75, spa: 85, spd: 145, spe: 113},
		abilities: {0: "Rough Skin", 1: "Sticky Hold", H: "Flash Fire"},
	},
	weavile: {
		inherit: true,
		name: "Weavile",
		types: ["Dark", "Ice"],
		baseStats: {hp: 105, atk: 140, def: 85, spa: 75, spd: 85, spe: 125},
		abilities: {0: "Pressure", 1: "Merciless", H: "Pickpocket"},
	},
	vivillon: {
		inherit: true,
		name: "Vivillon",
		types: ["Flying"],
		baseStats: {hp: 60, atk: 60, def: 120, spa: 125, spd: 90, spe: 115},
		abilities: {0: "Migration", 1: "Compound Eyes", H: "Weak Armor"},
		otherFormes: ["vivillonsun", "vivillonpolar", "vivillonsandstorm", "vivillonmarine"],
	},
	abomasnow: {
		inherit: true,
		name: "Abomasnow",
		types: ["Ice", "Ground"],
		baseStats: {hp: 120, atk: 90, def: 120, spa: 130, spd: 120, spe: 60},
		abilities: {0: "Snow Warning", H: "Soundproof"},
	},
	duraludon: {
		inherit: true,
		name: "Duraludon",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 104, atk: 112, def: 98, spa: 116, spd: 113, spe: 32},
		abilities: {0: "Berserk", 1: "Light Metal", H: "Bulletproof"},
	},
	cobalion: {
		inherit: true,
		name: "Cobalion",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 85, atk: 105, def: 110, spa: 115, spd: 120, spe: 112},
		abilities: {0: "Lightning Rod", 1: "Iron Barbs"},
	},
	naganadel: {
		inherit: true,
		name: "Naganadel",
		types: ["Poison", "Ground"],
		baseStats: {hp: 103, atk: 79, def: 103, spa: 139, spd: 103, spe: 103},
		abilities: {0: "Mold Breaker", 1: "Beast Boost"},
	},
	regieleki: {
		inherit: true,
		name: "Regieleki",
		types: ["Electric"],
		baseStats: {hp: 80, atk: 120, def: 50, spa: 50, spd: 100, spe: 200},
		abilities: {0: "Storm Drain", 1: "Sturdy", H:"Regenerator"},
	},
	starmie: {
		inherit: true,
		name: "Starmie",
		types: ["Water", "Psychic"],
		baseStats: {hp: 65, atk: 75, def: 125, spa: 111, spd: 125, spe: 109},
		abilities: {0: "Analytic", 1: "Regenerator", H:"Abyssal Light"},
	},
	coalossal: {
		inherit: true,
		prevo: null,
		name: "Coalossal",
		types: ["Rock", "Fire"],
		baseStats: {hp: 125, atk: 135, def: 140, spa: 110, spd: 110, spe: 30},
		abilities: {0: "Steam Engine", 1: "Rock Head", H:"Water Absorb"},
	},
	armaldo: {
		inherit: true,
		name: "Armaldo",
		types: ["Bug", "Steel"],
		baseStats: {hp: 95, atk: 130, def: 110, spa: 60, spd: 100, spe: 95},
		abilities: {0: "Water Veil", 1: "Scrappy", H:"Sand Rush"},
	},
};