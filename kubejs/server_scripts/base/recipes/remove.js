onEvent('recipes', (event) => {
    var outputRemovals = [
        'akashictome:tome',
        'coins:coin_copper',
        'coins:coin_iron',
        'coins:coin_gold',
        'coins:coin_platinum',
        'coins:coin_diamond',
        'coins:coin_pile_copper',
        'coins:coin_pile_iron',
        'coins:coin_pile_gold',
        'coins:coin_pile_platinum',
        'coins:coin_pile_diamond',
        'environmental:sawmill'//,
        //'twilightforest:cooked_venison'
    ];

    var idRemovals = [
        // Aquaculture
        'aquaculture:brown_mushroom_from_fish',
        'aquaculture:gold_nugget_from_blasting',
        'aquaculture:gold_nugget_from_gold_fish',
        'aquaculture:gold_nugget_from_smelting',
        'aquaculture:iron_nugget_from_blasting',
        'aquaculture:iron_nugget_from_smelting',
        'aquaculture:neptunium_ingot_from_blasting',
        'aquaculture:neptinium_ingot_from_blasting',
        'aquaculture:planks_from_driftwood',
        'aquaculture:red_mushroom_from_red_shrooma',

        // Botania
        'botania:fertilizer_dye',
        'botania:natura_pylon',
        'botania:gaia_pylon',
        'botania:petal_apothecary/vazkii_head',

        // Immersive Engineering
        'immersiveengineering:crafting/conveyor_basic',
        'immersiveengineering:crafting/conveyor_vertical',
        'immersiveengineering:metalpress/electrode',

        // Immersive Petroleum
        'immersivepetroleum:cooking/petcoke',
        'immersivepetroleum:distillationtower/oilcracking',
        'immersivepetroleum:hydrotreater/sulfur_recovery',

        //Quark
        'quark:building/crafting/tallow_from_block',
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });
    event.remove({ input: '#forge:fillet_knife', output: 'aquaculture:fish_fillet_raw' });
    event.remove({ input: 'immersiveengineering:hammer', output: '#forge:dusts' });

    event.remove({ type: 'environmental:sawmill'});
    //event.remove({ type: 'farmersdelight:cutting', input: '#forge:tools/axes' })
    event.remove({ type: 'immersiveengineering:sawmill' });
    event.remove({ type: 'immersiveengineering:cloche' });
    event.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });
});
