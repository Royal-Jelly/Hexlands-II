onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
              fluid: { "amount": 1000, "tag": 'minecraft:water' },
              inputs: [{ "tag": 'forge:dusts/sulfur' }],
              result: { "amount": 1000, "fluid": 'kubejs:water_sulfur' },
              energy: 1024,
              id: 'sulferized_water'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'immersiveengineering:mixer',
            fluid: recipe.fluid,
            inputs: recipe.inputs,
            result: recipe.result,
            energy: recipe.energy
        });

        if (recipe.id) {
            re.id('immersivepetroleum:mixer/' + recipe.id);
        }
    });
});
