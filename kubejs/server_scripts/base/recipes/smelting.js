onEvent('recipes', function (event) {
    event.smelting('minecraft:leather', 'kubejs:hide_washed').id('kubejs:hide_leather');
    event.smelting('kubejs:rubber', 'kubejs:rubber_mix').id('kubejs:mix_rubber');
    event.smelting('kubejs:hide_treated', 'kubejs:hide_creosote').id('kubejs:hide_treated');
});
