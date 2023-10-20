ServerEvents.recipes(event => {
    event.remove({ output: easy_villagers.auto_trader })
    event.remove({ output: easy_villagers.iron_farm })
    event.remove({ output: easy_villagers.converter })
    ban(event, [easy_villagers.farmer])

    event.replaceInput({ output: easy_villagers.trader }, minecraft.redstone, ars_nouveau.mob_jar)

    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "GCG",
            "GRG",
            "INI"
        ],
        "key": {
            "G": {
                "tag": "forge:glass_panes/colorless"
            },
            "I": {
                "tag": "forge:ingots/iron"
            },
            "R": {
                "item": easy_villagers.trader
            },
            "N": {
                "tag": "forge:ingots/netherite"
            },
            "C": {
                "item": kubejs.ore_core
            }
        },
        "result": {
            "item": "easy_villagers:auto_trader"
        }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "GCG",
        "GLG",
        "ISI"
      ],
      "key": {
        "G": {
          "tag": "forge:glass_panes/colorless"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "S": {
          "item": easy_villagers.trader
        },
        "L": {
          "item": "minecraft:lava_bucket"
        },
        "C": {
            "item": kubejs.ore_core
        }
      },
      "result": {
        "item": "easy_villagers:iron_farm"
      }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "GGG",
        "GFG",
        "ICI"
      ],
      "key": {
        "G": {
          "tag": "forge:glass_panes/colorless"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "F": {
          "item": minecraft.zombie_spawn_egg
        },
        "C": {
          "item": "minecraft:mossy_cobblestone"
        }
      },
      "result": {
        "item": "easy_villagers:converter"
      }
    })
})