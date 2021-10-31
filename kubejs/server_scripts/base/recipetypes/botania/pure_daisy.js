onEvent('recipes', (event) => {
    var data = {
        recipes: [
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'botania:pure_daisy',
            input: {
                type: 'block',
                block: recipe.input
            },
            output: {
                name: recipe.output
            }
        });
    });
});
