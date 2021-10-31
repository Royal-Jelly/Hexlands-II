//priority: 900
onEvent('recipes', (event) => {
    dyeSources.forEach((recipe) => {
        botania_dye_pestle_mortar(event, recipe);
        immersiveengineering_dye_crusher(event, recipe);
    });
});

//dye normalization functions
function botania_dye_pestle_mortar(event, recipe) {
    if (recipe.type == 'petal') {
        return;
    }

    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    if(recipe.primary == 'minecraft:bone_meal') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        inputs = [recipe.input, 'botania:pestle_and_mortar'];

    event.shapeless(output, inputs);
}
function immersiveengineering_dye_crusher(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        extras = [
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.immersiveengineering.crusher(output, input, extras);
}
function integrateddynamics_dye_squeezing(event, recipe) {
    var baseCount = 2,
        multiplier = 1;

    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier;

    event.custom({
        type: 'integrateddynamics:squeezer',
        item: {
            item: recipe.input
        },
        result: {
            items: [
                {
                    item: {
                        item: recipe.primary,
                        count: count
                    }
                },
                {
                    item: {
                        item: recipe.secondary,
                        count: count
                    },
                    chance: 0.25
                },
                {
                    item: {
                        item: recipe.tertiary
                    },
                    chance: 0.05
                }
            ]
        }
    });
}
