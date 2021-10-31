onEvent('item.tooltip', (event) => {
    const recipes = [
        {
            items: ['akashictome:tome'],
            text: [
                Text.of(
                    'RTFM ... please read me.'
                )
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
