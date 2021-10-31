onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
              { item: 'minecraft:skeleton_skull' },
              { tag: 'forge:dusts/pixie' },
              { item: 'minecraft:prismarine_crystals' },
              { item: 'minecraft:name_tag' },
              { item: 'minecraft:golden_apple' }
            ],
            output: { item: 'minecraft:player_head' },
            mana: 22500,
            id: 'player_head'
        },
        {
            inputs: [
              { item: 'minecraft:skeleton_skull' },
              { tag: 'forge:dusts/pixie' },
              { tag: 'botania:petals/pink' },
              { item: 'minecraft:name_tag' },
              { item: 'iceandfire:pixie_wings' },
              { item: 'minecraft:golden_apple' }
            ],
            output: {
              nbt: { 'SkullOwner': 'Vazkii' },
              item: 'minecraft:player_head'
            },
            mana: 22500,
            id: 'vazkii_head'
        },
        {
            inputs: [
              { item: 'minecraft:skeleton_skull' },
              { tag: 'forge:dusts/pixie' },
              { item: 'minecraft:blaze_powder' },
              { item: 'minecraft:name_tag' },
              { item: 'minecraft:ender_pearl' },
              { item: 'minecraft:golden_apple' }
            ],
            output: {
              nbt: { 'SkullOwner': 'King_Royal_Jelly' },
              item: 'minecraft:player_head'
            },
            mana: 22500,
            id: 'player_head'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:runic_altar_head',
            output: recipe.output,
            ingredients: recipe.inputs,
            mana: recipe.mana

        });
        if (recipe.id) {
            re.id('botania:runic_altar/' + recipe.id);

        }
    });
});
