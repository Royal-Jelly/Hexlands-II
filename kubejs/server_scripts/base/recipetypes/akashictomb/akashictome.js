onEvent('recipes', e => {
  e.remove({ id: 'akashictome:tome' })

  e.shapeless(
    Item.of('akashictome:tome', {
      'akashictome:is_morphing': 1,
      'akashictome:data': {
        tetra:{
          id:"tetra:holo",
          Count: 1,
          tag:{
            'akashictome:displayName': {
              text: 'Holosphere'
            },
            'holo/core_material':'frame/dim',
            'holo/frame':'holo/frame',
            'holo/core':'holo/core',
            'holo/frame_material':'core/ancient'
          }
        },
        alexsmobs: {
          id: 'alexsmobs:animal_dictionary',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Animal Dictionary'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}'
            }
          }
        },
        sereneseasons: {
          id: 'sereneseasons:calendar',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Calendar'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Calendar"}]}'
            }
          }
        },
        iceandfire: {
          id: 'iceandfire:bestiary',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Beastiary'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Beastiary"}]}'
            }
          }
        },
        resourcefulbees: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Fifty Shades of Bees'
            },
            'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Fifty Shades of Bees"}]}'
            }
          }
        },
        immersiveengineering: {
          id: 'immersiveengineering:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: "Engineer's Manual"
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\\\'s Manual"}]}'
            }
          }
        },
        botania: {
          id: 'botania:lexicon',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Lexica Botania'
            },
            'botania:elven_unlock': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}'
            },
            'akashictome:is_morphing': 1
          }
        },
        solcarrot: {
          id: 'solcarrot:food_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Food Book'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Food Book"}]}'
            }
          }
        },
        twilightforest: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'twilightforest:guide',
            'akashictome:displayName': {
              text: "Traveller's Logbook"
            }
          }
        }
      }
    }),
    '#forge:bookshelves'
  ).id(`kubejs:akashik_tome`)
})
