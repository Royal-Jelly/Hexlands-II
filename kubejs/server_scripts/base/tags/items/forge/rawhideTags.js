onEvent('item.tags', (event) => {
    var rawhideLarge = 'forge:rawhide_large';
    var rawhideMedium = 'forge:rawhide_medium';
    var rawhideSmall = 'forge:rawhide_small';

    event.add(rawhideLarge, [
        'kubejs:rawhide_horse',
        'kubejs:rawhide_polarbear',
        'kubejs:rawhide_cow',
        'kubejs:rawhide_mooshroom',
        'kubejs:rawhide_horse',
        'kubejs:rawhide_mule',
        'iceandfire:troll_leather_forest',
        'iceandfire:troll_leather_frost',
        'iceandfire:troll_leather_mountain'
    ]);

    event.add(rawhideMedium, [
      'kubejs:rawhide_pig',
      'alexsmobs:kangaroo_hide',
      'nethers_delight:hoglin_hide',
      'endergetic:booflo_hide',
      //'kubejs:rawhide_boar',
      'kubejs:rawhide_deer',
      'kubejs:rawhide_wolf',
      'kubejs:rawhide_llama'
    ]);

    event.add(rawhideSmall, [
        'minecraft:rabbit_hide'
    ]);
});
