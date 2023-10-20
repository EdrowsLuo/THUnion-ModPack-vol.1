ServerEvents.recipes(event => {
    // 将一些使用铁质工具的配方改成使用魔力钢工具
    const iron2mana = (iron, mana) => {
        event.replaceInput(
            [
                {
                    type: "minecraft:crafting_shapeless",
                    input: iron
                },
                {
                    type: "minecraft:crafting_shaped",
                    input: iron
                },
            ],
            iron,
            mana
        )
    }

    iron2mana(minecraft.iron_axe, botania.manasteel_axe)
    iron2mana(minecraft.iron_pickaxe, botania.manasteel_pick)
    iron2mana(minecraft.iron_shovel, botania.manasteel_shovel)
    iron2mana(minecraft.iron_sword, botania.manasteel_sword)

    event.remove({ output: botania.orechid })
    event.remove({ output: botania.entropinnyum })
    event.remove({ output: botania.gaia_pylon })
    event.remove({ output: botania.mana_pylon })

    event.recipes.botania.petal_apothecary(
        botania.orechid,
        [
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/white"
            },
            {
                "tag": "botania:petals/white"
            },
            {
                "tag": "botania:petals/pink"
            },
            {
                "item": "botania:rune_pride"
            },
            {
                "item": "botania:rune_greed"
            },
            {
                "item": "botania:redstone_root"
            },
            {
                "item": "botania:pixie_dust"
            },
            {
                "item": kubejs.ore_core
            }
        ]
    )

    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "D": {
                "item": "botania:pixie_dust"
            },
            "E": {
                "tag": "botania:elementium_ingots"
            },
            "P": {
                "item": "botania:mana_pylon"
            },
            "T": {
                "item": ars_nouveau.wilden_tribute
            },
            "N": {
                "item": l2complements.eternium_nugget
            },
            "S": {
                "item": kubejs.treasure_core
            },
            "L": {
                "item": kubejs.life_core
            }
        },
        "pattern": [
            "SDL",
            "EPE",
            "TDN"
        ],
        "result": {
            "item": "botania:gaia_pylon"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "E": {
                "tag": "botania:mana_diamond_gems"
            },
            "G": {
                "item": "minecraft:gold_ingot"
            },
            "M": {
                "tag": "botania:manasteel_ingots"
            },
            "D": {
                "item": ars_nouveau.source_gem_block
            },
            "B": {
                "item": ars_nouveau.magebloom_fiber
            }
        },
        "pattern": [
            "DGD",
            "MEM",
            "BGB"
        ],
        "result": {
            "item": "botania:mana_pylon"
        }
    })
})