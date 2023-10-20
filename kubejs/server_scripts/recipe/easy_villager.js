ServerEvents.recipes(event => {
    event.remove({ output: easy_villagers.auto_trader })
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
})