onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                ores: [
                    { chance: 0.4, output: { item: 'minecraft:gravel' } },
                    { chance: 0.1, output: { item: 'minecraft:sand' } },
                    { chance: 0.1, output: { item: 'alexsmobs:bone_serpent_tooth' } },
                    { chance: 0.4, output: { item: 'minecraft:ancient_debris' } }
                ],
                dimensions: ['minecraft:the_nether'],
                weight: 8,
                fail_chance: 0.7,
                sample_background: 'minecraft:netherrack',
                id: 'ancient_debris'
            },
            {
                ores: [
                    { chance: 0.6, output: { item: 'minecraft:quartz' } },
                    { chance: 0.2, output: { item: 'minecraft:nether_quartz_ore' } },
                    { chance: 0.2, output: { item: 'immersiveengineering:dust_sulfur' } }
                ],
                dimensions: ['minecraft:the_nether'],
                weight: 20,
                fail_chance: 0.15,
                sample_background: 'minecraft:netherrack',
                id: 'mephitic_quarzite'
            },
            {
                ores: [
                    { chance: 0.75, output: { item: 'immersiveengineering:ore_copper' } },
                    { chance: 0.25, output: { item: 'minecraft:gold_ore'} }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 30,
                fail_chance: 0.1,
                sample_background: 'minecraft:stone',
                id: 'auricupride'
            },
            {
                ores: [
                    { chance: 0.45, output: { item: 'minecraft:prismarine' } },
                    { chance: 0.05, output: { item: 'quark:elder_prismarine' } },
                    { chance: 0.05, output: { item: 'tetra:pristine_emerald' } },
                    { chance: 0.25, output: { item: 'minecraft:emerald' } }
                    //{ chance: 0.25, output: { item: 'forge:gems/aquamarine' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 5,
                fail_chance: 0.2,
                sample_background: 'minecraft:prismarine',
                id: 'beryl'
            },
            {
                ores: [
                    { chance: 0.7, output: { item: 'minecraft:coal' } },
                    { chance: 0.1, output: { item: 'immersiveengineering:dust_sulfur' } },
                    { chance: 0.2, output: { item: 'immersivepetroleum:bitumen' } }
                ],
                dimensions: ['minecraft:overworld' ],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:andesite',
                id: 'bituminous_coal'
            },
            {
                ores: [
                    { chance: 0.35, output: { item: 'minecraft:iron_ingot'} },
                    { chance: 0.35, output: { item: 'immersiveengineering:ore_copper' } },
                    { chance: 0.3, output: { item: 'immersiveengineering:dust_sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'quark:jasper',
                id: 'chalcopyrite'
            },
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:redstone' } },
                    { chance: 0.2, output: { item: 'minecraft:redstone_ore' } },
                    { chance: 0.1, output: { item: 'immersiveengineering:dust_sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 15,
                fail_chance: 0.1,
                sample_background: 'minecraft:granite',
                id: 'cinnabar'
            },
            {
                ores: [
                    { chance: 0.4, output: { item: 'immersiveengineering:ore_lead'} },
                    { chance: 0.2, output: { item: 'immersiveengineering:ore_silver'} },
                    { chance: 0.4, output: { item: 'immersiveengineering:dust_sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 15,
                fail_chance: 0.05,
                sample_background: 'quark:slate',
                id: 'galena'
            },
            {
                ores: [
                    { chance: 0.3, output: { item: 'minecraft:granite' } },
                    { chance: 0.3, output: { item: 'minecraft:diorite' } },
                    { chance: 0.3, output: { item: 'minecraft:andesite' } },
                    { chance: 0.1, output: { item: 'minecraft:obsidian' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'igneous_rock'
            },
            {
                ores: [
                    { chance: 0.2, output: { item: 'botania:metamorphic_swamp_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_fungal_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_plains_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_forest_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_taiga_cobblestone' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'vivacious_metamorphic_rock'
            },
            {
                ores: [
                    { chance: 0.33, output: { item: 'botania:metamorphic_mesa_cobblestone' } },
                    { chance: 0.33, output: { item: 'botania:metamorphic_mountain_cobblestone' } },
                    { chance: 0.33, output: { item: 'botania:metamorphic_desert_cobblestone' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'arid_metamorphic_rock'
            },
            {
                ores: [
                    { chance: 0.1, output: { item: 'quark:red_crystal' } },
                    { chance: 0.1, output: { item: 'quark:orange_crystal' } },
                    { chance: 0.1, output: { item: 'quark:yellow_crystal' } },
                    { chance: 0.1, output: { item: 'quark:green_crystal' } },
                    { chance: 0.1, output: { item: 'quark:blue_crystal' } },
                    { chance: 0.1, output: { item: 'quark:indigo_crystal' } },
                    { chance: 0.1, output: { item: 'quark:violet_crystal' } },
                    { chance: 0.1, output: { item: 'quark:white_crystal' } },
                    { chance: 0.1, output: { item: 'quark:black_crystal' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 5,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'prismatic_corundum_cluster'
            },
            {
                ores: [
                    { chance: 0.7, output: { item: 'immersiveengineering:ore_aluminum'} },
                    { chance: 0.2, output: { item: 'minecraft:iron_ingot'} }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'laterite'
            },
            {
                ores: [
                    { chance: 0.35, output: { item: 'minecraft:iron_ingot'} },
                    { chance: 0.35, output: { item: 'immersiveengineering:ore_nickel'} },
                    { chance: 0.3, output: { item: 'immersiveengineering:dust_sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'quark:jasper',
                id: 'pentlandite'
            },
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:clay' } },
                    { chance: 0.3, output: { item: 'minecraft:sand' } },
                    { chance: 0.2, output: { item: 'minecraft:gravel' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:clay',
                id: 'silt'
            },
            {
                ores: [
                    { chance: 0.7, output: { item: 'immersiveengineering:ore_uranium' } },
                    { chance: 0.3, output: { item: 'immersiveengineering:ore_lead'} }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.15,
                sample_background: 'quark:limestone',
                id: 'uraninite'
            },
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:bone_block' } },
                    { chance: 0.125, output: { item: 'alexsmobs:cachalot_whale_tooth' } },
                    { chance: 0.125, output: { item: 'alexsmobs:shark_tooth' } },
                    { chance: 0.125, output: { item: 'upgrade_aquatic:thrasher_tooth' } },
                    { chance: 0.125, output: { item: 'upgrade_aquatic:embedded_ammonite' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.15,
                sample_background: 'minecraft:smooth_sandstone',
                id: 'thymarian_fossil_bed'
            },
            {
                ores: [
                    { chance: 0.25, output: { item: 'minecraft:basalt' } },
                    { chance: 0.25, output: { item: 'minecraft:diamond' } },
                    { chance: 0.05, output: { item: 'tetra:pristine_diamond' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 5,
                fail_chance: 0.7,
                sample_background: 'minecraft:basalt',
                id: 'kimberlite'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:mineral_mix';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersiveengineering:mineral/${recipe.id}`);
        }
    });
});
