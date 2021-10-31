onEvent('item.tags', (event) => {
    var storageBlocks = 'forge:storage_blocks';
    event.add(storageBlocks, [
        'minecraft:glowstone',
        'immersiveengineering:storage_aluminum',
        'immersiveengineering:storage_lead',
        'immersiveengineering:storage_silver',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:storage_uranium',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:coke'
    ]);

    event.get(storageBlocks + '/glowstone').add('minecraft:glowstone');

    event.add('forge:vulcanizing_agents', 'kubejs:vulcanizing_agents');
    event.add('forge:ingots/gaia', 'botania:gaia_ingot');

    event.add('forge:dusts', 'botania:pixie_dust');
    event.add('forge:dusts', 'iceandfire:pixie_dust');
    event.add('forge:dusts/pixie', 'botania:pixie_dust');
    event.add('forge:dusts/pixie', 'iceandfire:pixie_dust');

});
