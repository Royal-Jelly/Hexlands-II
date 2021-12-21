//priority: 1000

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',
    'abundance:jacaranda',
    'abundance:redbud',
    'abundance:flowering_redbud',
    'atmospheric:rosewood',
    'atmospheric:morado',
    'atmospheric:yucca',
    'atmospheric:kousa',
    'atmospheric:aspen',
    'atmospheric:watchful_aspen',
    'atmospheric:crustose',
    'atmospheric:grimwood',
    'autumnity:maple',
    'autumnity:sappy_maple',
    'bayou_blues:cypress',
    'environmental:cherry',
    'environmental:willow',
    'environmental:wisteria',
    //Infernal expansion Luminous fungus has no plank blocks
    //'infernalexp:luminous',
    //'twilightforest:twilight_oak',
    //'twilightforest:canopy',
    //'twilightforest:mangrove',
    //'twilightforest:dark',
    //'twilightforest:time',
    //'twilightforest:trans',
    //'twilightforest:mine',
    //'twilightforest:sort',
    'upgrade_aquatic:driftwood',
    'upgrade_aquatic:river'
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
    var logType = splitVariant[1];
    var logType, logSuffix, woodSuffix, gateSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock, stairBlock, doorBlock, trapdoorBlock, fenceBlock, gateBlock, signBlock, woodBark;

    //suffix exceptions
    switch (logType) {
        case 'warped':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            gateSuffix = '_fence_gate';
            break;
        case 'crimson':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            gateSuffix = '_fence_gate';
            break;
        case 'crustose':
            logType = 'aspen';
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_fence_gate';
            break;
        case 'watchful_aspen':
            logType = 'aspen';
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_fence_gate';
            break;
        case 'sappy_maple':
            logType = 'maple';
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_fence_gate';
            break;
        case 'flowering_redbud':
            logType = 'redbud';
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_fence_gate';
            break;
        /*
        case 'twilight_oak':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        case 'canopy':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        case 'mangrove':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        case 'dark':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        case 'time':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        case 'trans':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        case 'mine':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        case 'sort':
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_gate';
            break;
        */
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
            gateSuffix = '_fence_gate';
            break;
    }

    logBlock = modId + ':' + logType + logSuffix;
    woodBlock = modId + ':' + logType + woodSuffix;
    logBlockStripped = modId + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix;

    plankBlock = modId + ':' + logType + '_planks';
    slabBlock = modId + ':' + logType + '_slab';
    stairBlock = modId + ':' + logType + '_stairs';

    doorBlock = modId + ':' + logType + '_door';
    trapdoorBlock = modId + ':' + logType + '_trapdoor';

    fenceBlock = modId + ':' + logType + '_fence';
    gateBlock = modId + ':' + logType + gateSuffix;

    signBlock = modId + ':' + logType + '_sign';

    strippedBark = 'kubejs:' + 'bark_' + logType;

    // Overrides & Execptions
    switch (logType) {
        case 'driftwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'grimwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'rosewood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break
        /*
        case 'dark':
            signBlock = modId + ':darkwood_sign';
            break;
        case 'trans':
            logBlock = modId + ':transformation_log';
            woodBlock = modId + ':transformation_wood';
            logBlockStripped = modId + ':stripped_transformation_log';
            woodBlockStripped = modId + ':stripped_transformation_wood';
            strippedBark = 'kubejs:bark_transformation';
            break;
        case 'mine':
            logBlock = modId + ':mining_log';
            woodBlock = modId + ':mining_wood';
            logBlockStripped = modId + ':stripped_mining_log';
            woodBlockStripped = modId + ':stripped_mining_wood';
            strippedBark = 'kubejs:bark_mining';
            break;
        case 'sort':
            logBlock = modId + ':sorting_log';
            woodBlock = modId + ':sorting_wood';
            logBlockStripped = modId + ':stripped_sorting_log';
            woodBlockStripped = modId + ':stripped_sorting_wood';
            strippedBark = 'kubejs:bark_sorting';
            break;
        */
        default:
            break;
    }

    var woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock,
        stairBlock: stairBlock,
        doorBlock: doorBlock,
        trapdoorBlock: trapdoorBlock,
        fenceBlock: fenceBlock,
        gateBlock: gateBlock,
        signBlock: signBlock,
        strippedBark: strippedBark

    };

    buildWoodVariants.push(woodVariant);
});
