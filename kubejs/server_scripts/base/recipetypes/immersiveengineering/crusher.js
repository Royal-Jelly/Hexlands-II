onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'atmospheric:arid_sandstone',
                output: Item.of('atmospheric:arid_sand', 2),
                secondary: [Item.of('immersiveengineering:dust_saltpeter').chance(0.5)],
                id: 'immersiveengineering:crusher/arid_sandstone'
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: Item.of('atmospheric:red_arid_sand', 2),
                secondary: [Item.of('immersiveengineering:dust_saltpeter').chance(0.5)],
                id: 'immersiveengineering:crusher/red_arid_sandstone'
            },
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2),
                secondary: [Item.of('minecraft:sugar').chance(0.1)]
            },
            {
                input: '#forge:stripped_bark',
                output: Item.of('immersiveengineering:dust_wood', 1),
                secondary: [Item.of('immersiveengineering:dust_wood').chance(0.1)]
            },
            {
                input: '#forge:ores/amethyst',
                output: Item.of('iceandfire:amythest_gem', 1),
                secondary: [Item.of('iceandfire:amythest_gem', 1)]

            },
            {
                input: '#forge:ores/sapphire',
                output: Item.of('iceandfire:sapphire_gem', 1),
                secondary: [Item.of('iceandfire:sapphire_gem', 1)]
            },
            {
                input: 'botania:pixie_dust',
                output: Item.of('iceandfire:pixie_dust', 1),
                secondary: [Item.of('iceandfire:pixie_dust').chance(0.1)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
