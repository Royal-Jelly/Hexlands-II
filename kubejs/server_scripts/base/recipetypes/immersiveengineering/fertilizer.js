onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'botania:fertilizer',
                growthModifier: 1.5
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.fertilizer(recipe.input).growthModifier(recipe.growthModifier);
    });
});
