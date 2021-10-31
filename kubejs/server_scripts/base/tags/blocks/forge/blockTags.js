onEvent('item.tags', (event) => {
    event.add('forge:ores/amethyst', 'iceandfire:amythest_ore');
    event.add('forge:ores/sapphire', 'iceandfire:sapphire_ore');

    event.add('forge:planks/maple', [
        'autumnity:maple_planks',
        'autumnity:vertical_maple_planks'
    ]);
    event.add('forge:planks/cherry', [
        'environmental:cherry_planks',
        'environmental:vertical_cherry_planks'
    ]);

});
