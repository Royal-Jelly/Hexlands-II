//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            //Default trees
            {
                sapling: 'minecraft:acacia_sapling',
                trunk: 'minecraft:acacia_log',
                leaf: 'minecraft:acacia_leaves',
                fruit: 'alexsmobs:acacia_blossom',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                trunk: 'minecraft:jungle_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'alexsmobs:banana',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            // Quark Compat
            /*
            {
                sapling: 'quark:blue_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:blue_blossom_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:lavender_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:lavender_blossom_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:orange_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:orange_blossom_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:pink_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:pink_blossom_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:red_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:red_blossom_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:yellow_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:yellow_blossom_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },*/
            // Atmospheric
            {
                sapling: 'atmospheric:rosewood_sapling',
                trunk: 'atmospheric:rosewood_log',
                leaf: 'atmospheric:rosewood_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:morado_sapling',
                trunk: 'atmospheric:morado_log',
                leaf: 'atmospheric:morado_leaves',
                extraDecoration: 'atmospheric:flowering_morado_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:yucca_sapling',
                trunk: 'atmospheric:yucca_log',
                leaf: 'atmospheric:yucca_leaves',
                fruit: 'atmospheric:yucca_bundle',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:kousa_sapling',
                trunk: 'atmospheric:kousa_log',
                leaf: 'atmospheric:kousa_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:aspen_sapling',
                trunk: 'atmospheric:aspen_log',
                leaf: 'atmospheric:aspen_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            // Bayou Blues
            {
                sapling: 'bayou_blues:cypress_sapling',
                trunk: 'bayou_blues:cypress_log',
                leaf: 'bayou_blues:cypress_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 50, dead: 6 }
            },
            // Upgrade Aquatic
            {
                sapling: 'upgrade_aquatic:river_sapling',
                trunk: 'upgrade_aquatic:river_log',
                leaf: 'upgrade_aquatic:river_leaves',
                fruit: 'upgrade_aquatic:mulberry',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            // Autumnity
            {
                sapling: 'autumnity:red_maple_sapling',
                trunk: 'autumnity:maple_log',
                leaf: 'autumnity:red_maple_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'autumnity:orange_maple_sapling',
                trunk: 'autumnity:maple_log',
                leaf: 'autumnity:orange_maple_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'autumnity:yellow_maple_sapling',
                trunk: 'autumnity:maple_log',
                leaf: 'autumnity:yellow_maple_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            // Abundance
            {
                sapling: 'abundance:jacaranda_sapling',
                trunk: 'abundance:jacaranda_log',
                leaf: 'abundance:jacaranda_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'abundance:redbud_sapling',
                trunk: 'abundance:redbud_log',
                leaf: 'abundance:redbud_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'abundance:flowering_redbud_sapling',
                trunk: 'abundance:flowering_redbud_log',
                leaf: 'abundance:flowering_redbud_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            // Environmental
            {
                sapling: 'environmental:white_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:white_wisteria_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:purple_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:purple_wisteria_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:blue_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:blue_wisteria_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:pink_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:pink_wisteria_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:cherry_sapling',
                trunk: 'environmental:cherry_log',
                leaf: 'environmental:cherry_leaves',
                fruit: 'environmental:cherries',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:willow_sapling',
                trunk: 'environmental:willow_log',
                leaf: 'environmental:willow_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            }/*,
            // Twilightforest
            {
                sapling: 'twilightforest:twilight_oak_sapling',
                trunk: 'twilightforest:twilight_oak_log',
                leaf: 'twilightforest:twilight_oak_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'twilightforest:canopy_sapling',
                trunk: 'twilightforest:canopy_log',
                leaf: 'twilightforest:canopy_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'twilightforest:mangrove_sapling',
                trunk: 'twilightforest:mangrove_log',
                leaf: 'twilightforest:mangrove_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'twilightforest:darkwood_sapling',
                trunk: 'twilightforest:dark_log',
                leaf: 'twilightforest:dark_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'twilightforest:time_sapling',
                trunk: 'twilightforest:time_log',
                leaf: 'twilightforest:time_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'twilightforest:transformation_sapling',
                trunk: 'twilightforest:transformation_log',
                leaf: 'twilightforest:transformation_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'twilightforest:sorting_sapling',
                trunk: 'twilightforest:sorting_log',
                leaf: 'twilightforest:sorting_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'twilightforest:mining_sapling',
                trunk: 'twilightforest:mining_log',
                leaf: 'twilightforest:mining_leaves',
                substrate: 'dirt',
                sap: 'kubejs:liquid_resin',
                rate: { living: 25, dead: 4 }
            }*/
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mycelium'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mycelium'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                substrate: 'warped_nylium'
            },
            // Infernal Expansion - may need update to new substrate
            {
                sapling: 'infernalexp:luminous_fungus',
                trunk: 'infernalexp:luminous_stem',
                leaf: 'infernalexp:luminous_wart_block',
                substrate: 'mycelium'
            }/*,
            {
                sapling: 'quark:glowshroom',
                trunk: 'quark:glowshroom_stem',
                leaf: 'quark:glowshroom_block',
                substrate: 'glowcelium'
            }*/
        ]
    }
];
