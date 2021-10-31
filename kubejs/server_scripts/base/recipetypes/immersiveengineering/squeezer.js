onEvent('recipes', (event) => {
    const resinRecipes = [
        { inputs: [ 'forge:resin_bark' ], value: 20 },
        { inputs: [ 'forge:resin_logs'], value: 40 }
    ];
    const sapRecipes = [
        { inputs: [ 'forge:sticky_sap_bark' ], value: 20 },
        { inputs: [ 'forge:sticky_sap_logs'], value: 40 }
    ];

    resinRecipes.forEach((input) => {
        input.inputs.forEach((seed) => {
            event.custom({
                type: 'immersiveengineering:squeezer',
                fluid: {
                    fluid: 'kubejs:liquid_resin',
                    amount: input.value
                },
                input: {
                    tag: seed
                },
                energy: 6400
            });
        });
    });
    sapRecipes.forEach((input) => {
        input.inputs.forEach((seed) => {
            event.custom({
                type: 'immersiveengineering:squeezer',
                fluid: {
                    fluid: 'kubejs:sticky_sap',
                    amount: input.value
                },
                input: {
                    tag: seed
                },
                energy: 6400
            });
        });
    });
});
