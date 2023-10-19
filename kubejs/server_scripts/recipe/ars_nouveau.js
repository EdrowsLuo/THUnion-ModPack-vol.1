
ServerEvents.recipes(event => {
    event.remove({ output: ars_nouveau.volcanic_sourcelink })
    event.remove({ output: ars_nouveau.agronomic_sourcelink })
    event.remove({ output: ars_nouveau.ritual_flight })
    event.remove({ output: ars_nouveau.mob_jar })
    event.remove({ output: ars_nouveau.warp_scroll })

    event.remove({ type: "ars_nouveau:book_upgrade" })

    event.custom({
        "type": "ars_nouveau:book_upgrade",
        "ingredients": [
            {
                "item": "ars_nouveau:apprentice_spell_book"
            },
            {
                "item": "minecraft:nether_star"
            },
            {
                "item": ars_nouveau.ritual_flight
            },
            {
                "item": "minecraft:emerald"
            },
            {
                "item": mekanism.teleportation_core
            },
            {
                "item": kubejs.treasure_core
            },
            {
                "item": kubejs.life_core
            },
            {
                "item": "minecraft:totem_of_undying"
            }
        ],
        "result": {
            "item": "ars_nouveau:archmage_spell_book"
        }
    })
    event.custom({
        "type": "ars_nouveau:book_upgrade",
        "pattern": [
            "   ",
            " y ",
            "   "
        ],
        "key": {
            "y": {
                "item": "ars_nouveau:spell_book"
            }
        },
        "ingredients": [
            {
                "item": "ars_nouveau:novice_spell_book"
            },
            {
                "item": "minecraft:obsidian"
            },
            {
                "item": botania.mana_diamond
            },
            {
                "item": minecraft.diamond_block
            },
            {
                "item": "minecraft:quartz_block"
            },
            {
                "item": "minecraft:quartz_block"
            },
            {
                "item": "minecraft:blaze_rod"
            },
            {
                "item": "minecraft:blaze_rod"
            }
        ],
        "result": {
            "item": "ars_nouveau:apprentice_spell_book"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "ars_nouveau:purple_archwood_log"
            },
            {
                "item": "ars_nouveau:wilden_wing"
            },
            {
                "item": kubejs.flight_core
            },
            {
                "item": ars_nouveau.wilden_tribute
            },
            {
                "item": mekanism.teleportation_core
            }
        ],
        "result": {
            "item": "ars_nouveau:ritual_flight"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "x": {
                "tag": "forge:glass"
            },
            "y": {
                "item": "ars_nouveau:archwood_slab"
            },
            "z": {
                "item": kubejs.life_core
            }
        },
        "pattern": [
            "yyy",
            "xzx",
            "xxx"
        ],
        "result": {
            "item": "ars_nouveau:mob_jar"
        }
    })

    event.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "tag": "forge:gems/lapis"
        },
        {
          "tag": "forge:gems/lapis"
        },
        {
          "tag": "forge:gems/lapis"
        },
        {
          "tag": "forge:gems/lapis"
        },
        {
          "item": "ars_nouveau:blank_parchment"
        },
        {
          "item": mekanism.teleportation_core
        },
        {
          "tag": "forge:gems/source"
        },
        {
          "tag": "forge:gems/source"
        },
        {
          "tag": "forge:gems/source"
        }
      ],
      "result": {
        "item": "ars_nouveau:warp_scroll",
        "count": 4
      }
    })
    
})


MoreJSEvents.villagerTrades((event) => {
    removeTradeWithOutput(event, "shady_wizard", 2, ars_nouveau.warp_scroll)
    removeTradeWithOutput(event, "shady_wizard", 3, ars_nouveau.ritual_flight)
    removeTradeWithOutput(event, "shady_wizard", 3, ars_nouveau.ritual_warping)
});

