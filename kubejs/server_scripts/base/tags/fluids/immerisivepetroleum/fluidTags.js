onEvent('fluid.tags', (event) => {
    var flarestackBurn = 'immersivepetroleum:burnable_in_flarestack';
    event.add(flarestackBurn, [
        'immersivepetroleum:oil',
        'kubejs:crude_oil_light',
        'kubejs:lubricant_sulfur',
        'kubejs:gasoline_sulfur',
        'kubejs:naptha_sulfur',
        'kubejs:naptha'
    ]);
});
