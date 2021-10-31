onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                type: 'immersivepetroleum:hydrotreater',
                time: 5,
                energy: 512,
                result: { fluid: 'immersivepetroleum:lubricant', amount: 30 },
                input: { tag: 'forge:lubricant_sulfur', amount: 35 },
                secondary_input: { tag: 'minecraft:water', amount: 35 },
                secondary_result: { item: 'immersiveengineering:dust_sulfur', chance: '0.02' },
                id: 'lubricant_sulfur'
            },
            {
                type: 'immersivepetroleum:hydrotreater',
                time: 1,
                energy: 512,
                result: { fluid: 'immersivepetroleum:diesel', amount: 7 },
                input: { tag: 'forge:diesel_sulfur', amount: 7 },
                secondary_input: { tag: 'minecraft:water', amount: 7 },
                secondary_result: { item: 'immersiveengineering:dust_sulfur', chance: '0.02' },
                id: 'diesel_sulfur'
            },
            {
                type: 'immersivepetroleum:hydrotreater',
                time: 1,
                energy: 512,
                result: { fluid: 'immersivepetroleum:gasoline', amount: 7 },
                input: { tag: 'forge:gasoline_sulfur', amount: 7 },
                secondary_input: { tag: 'minecraft:water', amount: 7 },
                secondary_result: { item: 'immersiveengineering:dust_sulfur', chance: '0.02' },
                id: 'gasoline_sulfur'
            },
            {
                type: 'immersivepetroleum:hydrotreater',
                time: 1,
                energy: 512,
                result: { fluid: 'kubejs:naptha', amount: 7 },
                input: { tag: 'forge:naptha_sulfur', amount: 7 },
                secondary_input: { tag: 'minecraft:water', amount: 7 },
                secondary_result: { item: 'immersiveengineering:dust_sulfur', chance: '0.02' },
                id: 'naptha_sulfur'
            },
            {
                type: 'immersivepetroleum:hydrotreater',
                time: 1,
                energy: 512,
                result: { fluid: 'kubejs:water_sulfur', amount: 1 },
                input: { tag: 'forge:liquid_resin', amount: 10 },
                secondary_input: { tag: 'forge:water_sulfur', amount: 10 },
                secondary_result: { item: 'kubejs:rubber_mix', chance: '0.02' },
                id: 'liquid_resin'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:hydrotreater';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersivepetroleum:hydrotreater/${recipe.id}`);
        }
    });
});
