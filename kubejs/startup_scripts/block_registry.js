
onEvent('block.registry', function (event) {
  
    const items = [
      'gilded_sandstone'
    ];

    items.forEach((item) => {
        event.create(`${item}`).material("rock").type("basic");
        event.create(`${item}_slab`).material("rock").type("slab");
        event.create(`${item}_stairs`).material("rock").type("stairs");
        event.create(`${item}_pillar`).material("rock").type("basic");
    });
});
