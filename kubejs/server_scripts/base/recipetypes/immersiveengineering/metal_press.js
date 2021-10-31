onEvent('recipes', (event) => {
  const recipes = [
            {
                input: Item.of('#forge:dusts/hop_graphite', 8),
                output: '#forge:ingots/hop_graphite',
                mold: Item.of('kubejs:mold_ingot')
            },
            {
                input: Item.of('#forge:dusts/hop_graphite', 32),
                output: Item.of('immersiveengineering:graphite_electrode', {Damage:0}),
                mold: Item.of('immersiveengineering:mold_rod')
            }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id)
            : event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    });
});
