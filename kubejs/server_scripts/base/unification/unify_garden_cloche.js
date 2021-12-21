//priority: 900
onEvent('recipes', (event) => {

    cropRegistry.forEach((cropCategories) => {
        var type = cropCategories.type;
        cropCategories.crops.forEach((crop) => {
            crops_immersiveengineering_cloche(event, type, crop);
        });
    });

    treeRegistry.forEach((treeCategories) => {
        var type = treeCategories.type;
        treeCategories.trees.forEach((tree) => {
            trees_immersiveengineering_cloche(event, tree);
        });
    });
});

function crops_immersiveengineering_cloche(event, type, crop) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 800;

    var primaryCount = 1,
        secondaryCount = 1,
        plantSecondary,
        growthTicks = baseGrowthTicks,
        growthModifier = 1.0,
        renderBlock = crop.render,
        renderType = 'generic';

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }

    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit,
            crop_gourd, crop_grain, crop_leafy, crop_legume,
            crop_melon, crop_root, crop_seed, crop_vine, flower,
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'cactus':
            growthModifier = 1.5;
            renderType = 'stacking';
            break;
        case 'cane_like':
            renderType = 'stacking';
            break;
        case 'coral':
            //disabled
            break;
        case 'crop_fiber':
            primaryCount = 1;
            secondaryCount = 2;
            break;
        case 'crop_grain':
            growthModifier = 0.8;
            break;
        case 'crop_legume':
            growthModifier = 0.7;
            break;
        case 'crop_vine':
            growthModifier = 0.7;
            break;
        case 'crop_leafy':
            growthModifier = 0.6;
            break;
        case 'crop_melon':
            growthModifier = 1.5;
            break;
        case 'crop_gourd':
            growthModifier = 1.5;
            break;
        case 'flower':
            growthModifier = 0.5;
            break;
        case 'grass_like':
            growthModifier = 0.5;
            break;
        case 'shroom':
            growthModifier = 0.7;
            plantSecondary = crop.plant;
            break;
        case 'kelp_like':
            //disabled
            return;
        case 'lily_like':
            //disabled
            return;
        case 'vine':
            //disabled
            return;
        default:
        //default
    }
    var substrate = crop.substrate;
    switch (substrate) {
        case 'crimson_nylium':
            substrate = 'minecraft:crimson_nylium';
            break;
        case 'end_stone':
            substrate = 'minecraft:end_stone';
            break;
        case 'grass':
            substrate = 'minecraft:grass_block';
            break;
        case 'mycelium':
            substrate = 'minecraft:mycelium';
            break;
        case 'nether':
            substrate = 'minecraft:netherrack';
            break;
        case 'sand':
            substrate = 'minecraft:sand';
            break;
        case 'soul_sand':
            substrate = 'minecraft:soul_sand';
            break;
        case 'warped_nylium':
            substrate = 'minecraft:warped_nylium';
            break;
        case 'tube_coral':
            substrate = 'minecraft:tube_coral_block';
            break;
        case 'brain_coral':
            substrate = 'minecraft:brain_coral_block';
            break;
        case 'bubble_coral':
            substrate = 'minecraft:bubble_coral_block';
            break;
        case 'fire_coral':
            substrate = 'minecraft:fire_coral_block';
            break;
        case 'horn_coral':
            substrate = 'minecraft:horn_coral_block';
            break;
        case 'acan_coral':
            substrate = 'upgrade_aquatic:acan_coral_block';
            break;
        case 'water':
            //disabled
            return;
        default:
            substrate = 'minecraft:dirt';
    }

    var input = crop.seed,
        outputs = [Item.of(crop.plant, primaryCount)];

    if (type.includes('crop_')) {
        //add seeds to crop type output
        outputs.push(Item.of(crop.seed, secondaryCount));
        renderType = 'crop';
    }

    if (crop.plant.includes('kenaf') || crop.plant.includes('hemp')) {
        //override render type
        renderType = 'hemp';
    }

    if (type == 'crop_gourd' || crop.plant == 'minecraft:melon') {
        renderType = 'stem';
    }

    if (plantSecondary && crop.plantSecondaryRate != 'low') {
        //add any secondary
        outputs.push(Item.of(plantSecondary, secondaryCount));
    }
    event.recipes.immersiveengineering
        .cloche(outputs, input, substrate, {
            type: renderType,
            block: renderBlock
        })
        .time(growthTicks * growthModifier);
}

function trees_immersiveengineering_cloche(event, tree) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 800,
        growthModifier = 6;

    var saplingRate = 1,
        trunkRate = 3,
        leafRate = 4,
        extraDecorationRate = 1,
        fruitRate = 1,
        renderBlock = tree.sapling,
        renderType = 'generic';

    var input = tree.sapling,
        outputs = [Item.of(tree.sapling, saplingRate), Item.of(tree.trunk, trunkRate), Item.of(tree.leaf, leafRate)];

    var substrate = tree.substrate;
    switch (substrate) {
        case 'crimson_nylium':
            substrate = 'minecraft:crimson_nylium';
            break;
        case 'end_stone':
            substrate = 'minecraft:end_stone';
            break;
        case 'mycelium':
            substrate = 'minecraft:mycelium';
            break;
        case 'nether':
            substrate = 'minecraft:netherrack';
            break;
        case 'warped_nylium':
            substrate = 'minecraft:warped_nylium';
            break;
        default:
            substrate = 'minecraft:dirt';
    }

    if (tree.fruit) {
        //add any fruits
        outputs.push(Item.of(tree.fruit, fruitRate));
    }

    if (tree.extraDecoration) {
        //add any extra decorations
        outputs.push(Item.of(tree.extraDecoration, extraDecorationRate));
    }
    event.recipes.immersiveengineering
        .cloche(outputs, input, substrate, {
            type: renderType,
            block: renderBlock
        })
        .time(baseGrowthTicks * growthModifier);
}
