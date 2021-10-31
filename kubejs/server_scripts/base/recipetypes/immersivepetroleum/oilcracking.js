onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                type: 'immersivepetroleum:distillation',
                byproducts: [{ item: 'immersivepetroleum:bitumen', chance: '0.05' },{ item: 'immersiveengineering:dust_sulfur', chance: '0.025' }],
                results: [
                    { fluid: 'kubejs:lubricant_sulfur', amount: 10 },
                    { fluid: 'immersivepetroleum:diesel_sulfur', amount: 20 },
                    { fluid: 'kubejs:gasoline_sulfur', amount: 30 },
                    { fluid: 'kubejs:naptha_sulfur', amount: 15 }
                ],
                input: { tag: 'forge:crude_oil', amount: 100 },
                time: 1,
                energy: 2048,
                id: 'crude_oil'
            },
            {
                type: 'immersivepetroleum:distillation',
                byproducts: [{ item: 'immersivepetroleum:bitumen', chance: '0.05' },{ item: 'immersiveengineering:dust_sulfur', chance: '0.020' }],
                results: [
                    { fluid: 'kubejs:lubricant_sulfur', amount: 5 },
                    { fluid: 'immersivepetroleum:diesel_sulfur', amount: 10 },
                    { fluid: 'kubejs:gasoline_sulfur', amount: 35 },
                    { fluid: 'kubejs:naptha_sulfur', amount: 25 }
                ],
                input: { tag: 'forge:crude_oil_light', amount: 100 },
                time: 1,
                energy: 2048,
                id: 'crude_oil_light'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersivepetroleum:distillation/${recipe.id}`);
        }
    });
});
