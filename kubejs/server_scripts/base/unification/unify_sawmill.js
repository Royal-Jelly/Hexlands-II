onEvent('recipes', (event) => {
    buildWoodVariants.forEach((variant) => {
        var sawDust = 'immersiveengineering:dust_wood';

        immersiveengineering_sawing(event, variant, sawDust);
    });
});

function immersiveengineering_sawing(event, variant, sawDust) {

      event.recipes.immersiveengineering
          .sawmill(Item.of(variant.plankBlock, 1), variant.signBlock, [
              {
                  stripping: false,
                  output: sawDust
              }
          ])
          .energy(800);

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 1), variant.gateBlock, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 1), variant.fenceBlock, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 1), variant.trapdoorBlock, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 1), variant.doorBlock, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.slabBlock, 2), variant.plankBlock, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 6), variant.logBlockStripped, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 6), variant.woodBlockStripped, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(
            Item.of(variant.plankBlock, 6),
            [variant.logBlock],
            [
                {
                    stripping: true,
                    output: variant.strippedBark
                },
                {
                    stripping: false,
                    output: sawDust
                }
            ],
            variant.logBlockStripped
        )
        .energy(1600);

    event.recipes.immersiveengineering
        .sawmill(
            Item.of(variant.plankBlock, 6),
            [variant.woodBlock],
            [
                {
                    stripping: true,
                    output: variant.strippedBark
                },
                {
                    stripping: false,
                    output: sawDust
                }
            ],
            variant.woodBlockStripped
        )
        .energy(1600);
}
