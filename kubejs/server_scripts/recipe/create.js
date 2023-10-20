ServerEvents.recipes(event => {
    event.remove({ output: create.crushing_wheel})

    event.replaceInput({ output: create.empty_blaze_burner }, minecraft.netherrack, ars_nouveau.ritual_containment)
    event.replaceInput({ output: create.steam_engine }, create.andesite_alloy, kubejs.mechanical_core)

    event.custom({
      "type": "create:mechanical_crafting",
      "acceptMirrored": false,
      "key": {
        "A": {
          "item": mekanism.ingot_steel
        },
        "P": {
          "tag": "minecraft:planks"
        },
        "S": {
          "item": l2complements.explosion_shard
        }
      },
      "pattern": [
        " AAA ",
        "AAPAA",
        "APSPA",
        "AAPAA",
        " AAA "
      ],
      "result": {
        "count": 4,
        "item": "create:crushing_wheel"
      }
    })
})