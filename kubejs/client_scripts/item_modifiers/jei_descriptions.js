onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['farmersdelight:brown_mushroom_colony', 'minecraft:brown_mushroom'],
            description: [
                'Plant a Brown Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['farmersdelight:red_mushroom_colony', 'minecraft:red_mushroom'],
            description: [
                'Plant a Red Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['autumnity:sap_bottle', 'autumnity:sappy_maple_log', 'autumnity:sappy_maple_wood'],
            description: [
                'Right-clicking a sappy maple log or sappy maple wood with a glass battle will turn the block into its stripped variant and fill the bottle with sap.'
            ]
        },
        {
            items: ['minecraft:nautilus_shell'],
            description: ['Obtained by killing Nautilus, found in Oceans.']
        },
        {
            items: [/upgrade_aquatic:\w+_coralstone$/],
            description: ['Obtained by placing Coralstone next to living coral.']
        },
        {
            items: ['upgrade_aquatic:coralstone'],
            description: ['Place next to living coral to infuse.']
        },
        {
            items: [/quark:\w+_crystal$/],
            description: [
                'Will grow up to four blocks tall if placed deep underground. Will emit particles while growing.'
            ]
        },
        {
            items: ['quark:bottled_cloud'],
            description: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: ['quark:root_item'],
            description: ['Drops occasionally when breaking Cave Roots.']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Hexlands II issue tracker."
        );
    });
});
