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
})