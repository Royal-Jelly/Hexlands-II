onEvent('item.registry', function (event) {
    const barkItems = [
      // Minecraft
      'bark_acacia',
      'bark_birch',
      'bark_dark_oak',
      'bark_oak',
      'bark_jungle',
      'bark_spruce',
      'bark_crimson',
      'bark_warped',

      // Twilightforest
      /*
      'bark_twilight_oak',
      'bark_canopy',
      'bark_mangrove',
      'bark_dark',
      'bark_time',
      'bark_transformation',
      'bark_mining',
      'bark_sorting',
      */
      'bark_rosewood',
      'bark_morado',
      'bark_yucca',
      'bark_kousa',
      'bark_aspen',
      'bark_watchful_aspen',
      'bark_grimwood',

      'bark_cypress',
      // Upgrade Aquatic
      'bark_driftwood',
      'bark_river',

      'bark_maple',
      'bark_sappy_maple',

      'bark_jacaranda',
      'bark_redbud',
      // Environmental
      'bark_cherry',
      'bark_willow',
      'bark_wisteria'

    ];

    const rawhideItems = [
      'hide_cleaned',
      'hide_washed',
      'hide_creosote',
      'hide_treated',

      'rawhide_cow',
      'rawhide_donkey',
      'rawhide_horse',
      'rawhide_llama',
      'rawhide_mule',
      'rawhide_mooshroom',
      'rawhide_pig',
      'rawhide_polarbear',
      'rawhide_sheep',
      'rawhide_wolf',

      'rawhide_moobloom',

      'rawhide_deer',

      //'rawhide_boar',
      //'rawhide_kobold',

      'rawhide_yak'
    ];

    const miscItems = [
      'terrastone',
      'mold_ingot',

      'conveyor_belt',
      'rubber',
      'rubber_mix',
      'vulcanizing_agents'//,
      //'lumber_salvage'
    ];

    barkItems.forEach((item) => {
        event.create(item).group('Immersive-SawMilling').texture(`kubejs:item/${item}`);
    });
    rawhideItems.forEach((item) => {
        event.create(item).group('Immersive-Rawhide').texture(`kubejs:item/${item}`);
    });
    miscItems.forEach((item) => {
        event.create(item).group('Immersive-Misc').texture(`kubejs:item/${item}`);
    });
});
