onEvent('recipes', (event) => {
    const recipes = [
        {
            input0: {"tag":"forge:creosote", amount: 8},
            input1: {"tag":"forge:naptha", amount: 2},
            result: { fluid:"kubejs:liquid_resin", amount: 10 },
            id: 'liquid_resin'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'immersiveengineering:refinery',
            input0: recipe.input0,
            input1: recipe.input1,
            result: recipe.result,
            energy: 80
        });
        if (recipe.id) {
            re.id(`immersiveengineering:refinery/${recipe.id}`);
            re.id(recipe.id);
        }
    });
});
