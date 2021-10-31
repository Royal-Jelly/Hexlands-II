onEvent('recipes', function (event) {
    var recipes = [
        shapedRecipe('kubejs:conveyor_belt', ['LLL', 'LRL', 'LLL'], {
            L: 'kubejs:rubber',
            R: '#forge:rods/wooden'
        }),
        shapedRecipe('kubejs:conveyor_belt', ['CLC', 'LRL', 'CLC'], {
            L: 'immersiveengineering:hemp_fabric',
            C: 'kubejs:rubber',
            R: '#forge:rods/wooden'
        }),
        shapedRecipe('kubejs:conveyor_belt', ['LCL', 'CRC', 'LCL'], {
            L: 'immersiveengineering:hemp_fabric',
            C: 'kubejs:rubber',
            R: '#forge:rods/wooden'
        }),
        shapedRecipe('kubejs:conveyor_belt', ['CLC', 'LRL', 'CLC'], {
            L: 'kubejs:hide_treated',
            C: 'kubejs:rubber',
            R: '#forge:rods/wooden'
        }),
        shapedRecipe('kubejs:conveyor_belt', ['LCL', 'CRC', 'LCL'], {
            L: 'kubejs:hide_treated',
            C: 'kubejs:rubber',
            R: '#forge:rods/wooden'
        }),
        // Botania
        shapedRecipe('botania:natura_pylon', [' L ', 'RCR', ' L '], {
            L: 'botania:glimmering_livingwood',
            C: 'kubejs:terrastone',
            R: 'botania:terrasteel_ingot'
        }),
        shapedRecipe('botania:gaia_pylon', [' L ', 'RCR', ' L '], {
            L: '#forge:ingots/elementium',
            C: 'botania:dragonstone',
            R: '#forge:dusts/pixie'
        }),
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.result, recipe.pattern, recipe.key);
        }
    });
});
