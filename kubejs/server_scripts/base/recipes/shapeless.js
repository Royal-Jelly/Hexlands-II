onEvent('recipes', (event) => {
    var recipes = [
        // Botania
        shapelessRecipe('botania:enchanted_soil', ['minecraft:grass_block', 'botania:overgrowth_seed']),

        // Coins
        shapelessRecipe('9x coins:coin_copper', ['coins:coin_pile_copper']),
        shapelessRecipe('9x coins:coin_iron', ['coins:coin_pile_iron']),
        shapelessRecipe('9x coins:coin_gold', ['coins:coin_pile_gold']),
        shapelessRecipe('9x coins:coin_platinum', ['coins:coin_pile_platinum']),
        shapelessRecipe('9x coins:coin_diamond', ['coins:coin_pile_diamond']),

        shapelessRecipe('9x coins:coin_pile_copper', ['coins:coin_iron']),
        shapelessRecipe('9x coins:coin_pile_iron', ['coins:coin_gold']),
        shapelessRecipe('9x coins:coin_pile_gold', ['coins:coin_platinum']),
        shapelessRecipe('9x coins:coin_pile_platinum', ['coins:coin_diamond']),

        shapelessRecipe('coins:coin_iron', ['9x coins:coin_pile_copper']),
        shapelessRecipe('coins:coin_gold', ['9x coins:coin_pile_iron']),
        shapelessRecipe('coins:coin_platinum', ['9x coins:coin_pile_gold']),
        shapelessRecipe('coins:coin_diamond', ['9x coins:coin_pile_platinum']),

        shapelessRecipe('coins:coin_pile_copper', ['9x coins:coin_copper']),
        shapelessRecipe('coins:coin_pile_iron', ['9x coins:coin_iron']),
        shapelessRecipe('coins:coin_pile_gold', ['9x coins:coin_gold']),
        shapelessRecipe('coins:coin_pile_platinum', ['9x coins:coin_platinum']),
        shapelessRecipe('coins:coin_pile_diamond', ['9x coins:coin_diamond']),

        // Immersive Engineering
        shapelessRecipe('immersiveengineering:conveyor_basic', ['kubejs:conveyor_belt','immersiveengineering:component_steel','#forge:rods/steel','#forge:plates/steel']),
        shapelessRecipe('immersiveengineering:conveyor_vertical', ['immersiveengineering:conveyor_basic','#forge:plates/iron']),
        shapelessRecipe('immersiveengineering:conveyor_splitter', ['immersiveengineering:conveyor_basic','#forge:ingots/iron']),

        // KubeJS
        shapelessRecipe('kubejs:vulcanizing_agents', ['#forge:dusts/sulfur','#forge:bitumen']),

        shapelessRecipe('3x kubejs:hide_cleaned', ['minecraft:flint','#forge:rawhide_large']),
        shapelessRecipe('2x kubejs:hide_cleaned', ['minecraft:flint','#forge:rawhide_medium']),
        shapelessRecipe('kubejs:hide_cleaned', ['minecraft:flint','#forge:rawhide_small']),

        //shapelessRecipe({"item": "immersiveengineering:blueprint", "nbt": {"blueprint": "jellytest"}}, ['coins:coin_gold','#forge:rawhide_small']),


        // Minecraft
        //shapelessRecipe('1x minecraft:bone_meal', ['#forge:bone/small']),
        //shapelessRecipe('2x minecraft:bone_meal', ['#forge:bone/medium']),
        //shapelessRecipe('4x minecraft:bone_meal', ['#forge:bone/large']),

        //shapelessRecipe('9x minecraft:bone_meal', ['#forge:bone/storage']),

        shapelessRecipe('minecraft:sticky_piston', ['minecraft:piston', '#forge:slimeballs']),
        shapelessRecipe('minecraft:flint', ['#forge:gravel', '#forge:gravel', '#forge:gravel']),
        shapelessRecipe('minecraft:chest', ['#forge:chests/wooden']),
        shapelessRecipe('minecraft:wheat_seeds', ['minecraft:wheat']),

        // Quark
        //shapelessRecipe('quark:root', ['minecraft:vine', '#forge:dyes/brown'])
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shapeless(recipe.result, recipe.ingredients).id(recipe.id);
        } else {
            event.shapeless(recipe.result, recipe.ingredients);
        }
    });
    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'farmersdelight:tree_bark', '#forge:stripped_bark')
});
