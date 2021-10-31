onEvent('item.tags', (event) => {
    var strippedBark = 'forge:stripped_bark';
    var stickysapBark = 'forge:sticky_sap_bark';
    var stickysapLogs = 'forge:sticky_sap_logs';
    var resinBark = 'forge:resin_bark';
    var resinLogs = 'forge:resin_logs';

    event.add(strippedBark, [
        'kubejs:bark_acacia',
        'kubejs:bark_birch',
        'kubejs:bark_oak',
        'kubejs:bark_jungle',
        'kubejs:bark_spruce',
        'kubejs:bark_dark_oak',
        'kubejs:bark_crimson',
        'kubejs:bark_warped',
        //'kubejs:bark_twilight_oak',
        //'kubejs:bark_canopy',
        //'kubejs:bark_mangrove',
        //'kubejs:bark_dark',
        //'kubejs:bark_time',
        //'kubejs:bark_transformation',
        //'kubejs:bark_mining',
        //'kubejs:bark_sorting',
        'kubejs:bark_rosewood',
        'kubejs:bark_morado',
        'kubejs:bark_yucca',
        'kubejs:bark_kousa',
        'kubejs:bark_aspen',
        'kubejs:bark_watchful_aspen',
        'kubejs:bark_morado',
        //'kubejs:bark_crustose',
        'kubejs:bark_grimwood',
        'kubejs:bark_driftwood',
        'kubejs:bark_river',
        'kubejs:bark_maple',
        'kubejs:bark_sappy_maple',
        'kubejs:bark_cypress'
    ]);

    event.add(stickysapBark, [ 'kubejs:bark_sappy_maple' ]);
    //event.add(stickysapLogs, []);
    event.add('forge:sticky_sap_logs', '#autumnity:maple_logs');
    event.add('forge:sticky_sap_logs', '#minecraft:spruce_logs');
    event.add(resinBark, [ 'kubejs:bark_jungle' ]);
    event.add(resinLogs, [ 'minecraft:jungle_log' ]);
    event.add('forge:resin_logs', '#minecraft:jungle_logs');
});
