onEvent('recipes', (event) => {
    event.replaceInput({mod: 'botania'}, 'botania:pixie_dust', '#forge:dusts/pixie');
    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'farmersdelight:tree_bark', '#forge:stripped_bark')

});
