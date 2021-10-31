onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { item: 'minecraft:emerald' },
                { item: 'botania:mana_pearl' },
                { item: 'botania:quartz_mana' }
            ],
            output: {
                item: 'kubejs:terrastone'
            },
            mana: 500000
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs,
            result: recipe.output,
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
