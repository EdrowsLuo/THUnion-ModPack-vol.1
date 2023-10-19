ServerEvents.recipes(event => {
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