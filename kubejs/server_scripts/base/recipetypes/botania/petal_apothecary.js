onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
              { tag: 'botania:petals/cyan' },
              { tag: 'botania:petals/cyan' },
              { tag: 'botania:petals/light_blue' },
              { tag: 'botania:petals/light_blue' },
              { tag: 'botania:petals/blue' },
              { tag: 'botania:petals/blue' },
              { tag: 'botania:runes/summer' },
              { tag: 'botania:runes/water' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:bubbell' },
            id: 'bubbell'
        },
        {
            inputs: [
              { tag: 'botania:petals/magenta' },
              { tag: 'botania:petals/magenta' },
              { tag: 'botania:petals/purple' },
              { tag: 'botania:petals/pink' },
              { tag: 'botania:runes/wrath' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:heisei_dream' },
            id: 'heisei_dream'
        },
        {
            inputs: [
              { tag: 'botania:petals/white' },
              { tag: 'botania:petals/white' },
              { tag: 'botania:petals/orange' },
              { tag: 'botania:petals/orange' },
              { tag: 'botania:petals/brown' },
              { tag: 'botania:petals/brown' },
              { tag: 'botania:runes/gluttony' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:kekimurus' },
            id: 'kekimurus'
        },
        {
            inputs: [
              { tag: 'botania:petals/yellow' },
              { tag: 'botania:petals/yellow' },
              { tag: 'botania:petals/blue' },
              { tag: 'botania:petals/white' },
              { tag: 'botania:petals/black' },
              { tag: 'botania:runes/autumn' },
              { item: 'botania:redstone_root' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:labellia' },
            id: 'labellia'
        },
        {
            inputs: [
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/gray' },
              { tag: 'botania:runes/sloth' },
              { tag: 'botania:runes/gluttony' },
              { tag: 'botania:runes/envy' },
              { item: 'botania:redstone_root' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:loonium' },
            id: 'loonium'
        },
        {
            inputs: [
              { tag: 'botania:petals/gray' },
              { tag: 'botania:petals/gray' },
              { tag: 'botania:petals/yellow' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/red' },
              { tag: 'botania:runes/pride' },
              { tag: 'botania:runes/greed' },
              { item: 'botania:redstone_root' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:orechid' },
            id: 'orechid'
        },
        {
            inputs: [
              { tag: 'botania:petals/red' },
              { tag: 'botania:petals/red' },
              { tag: 'botania:petals/white' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/pink' },
              { tag: 'botania:runes/pride' },
              { tag: 'botania:runes/greed' },
              { item: 'botania:redstone_root' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:orechid_ignem' },
            id: 'orechid_ignem'
        },
        {
            inputs: [
              { tag: 'botania:petals/purple' },
              { tag: 'botania:petals/purple' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/black' },
              { tag: 'botania:runes/earth' },
              { tag: 'botania:runes/pride' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:rafflowsia' },
            id: 'rafflowsia'
        },
        {
            inputs: [
              { tag: 'botania:petals/white' },
              { tag: 'botania:petals/white' },
              { tag: 'botania:petals/light_gray' },
              { tag: 'botania:petals/light_gray' },
              { tag: 'botania:petals/cyan' },
              { tag: 'botania:runes/envy' },
              { tag: 'botania:runes/water' },
              { item: 'botania:redstone_root' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:spectranthemum' },
            id: 'spectranthemum'
        },
        {
            inputs: [
              { tag: 'botania:petals/red' },
              { tag: 'botania:petals/red' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/green' },
              { tag: 'botania:petals/blue' },
              { tag: 'botania:petals/blue' },
              { tag: 'botania:petals/white' },
              { tag: 'botania:petals/white' },
              { tag: 'botania:runes/winter' },
              { tag: 'botania:runes/air' },
              { item: 'botania:redstone_root' },
              { tag: 'forge:dusts/pixie' }
            ],
            output: { item: 'botania:spectrolus' },
            id: 'spectrolus'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:petal_apothecary',
            output: recipe.output,
            ingredients: recipe.inputs
        });
        if (recipe.id) {
            re.id('botania:petal_apothecary/' + recipe.id);

        }
    });
});
