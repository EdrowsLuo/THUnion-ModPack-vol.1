ServerEvents.recipes(event => {
    event.replaceInput({ mod: "modularrouters" }, minecraft.iron_ingot, mekanism.ingot_steel)
    event.replaceInput({ output: modularrouters.blank_module }, minecraft.redstone, kubejs.distribution_core)
    event.replaceInput({ output: modularrouters.blank_upgrade }, minecraft.lapis_lazuli, kubejs.distribution_core)
    event.remove({ output: modularrouters.modular_router})

    event.custom({
      "type": "minecraft:crafting_shaped",
      "key": {
        "B": {
          "item": "minecraft:iron_bars"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "M": {
          "item": "modularrouters:blank_module"
        }
      },
      "pattern": [
        "IBI",
        "MMM",
        "IBI"
      ],
      "result": {
        "item": "modularrouters:modular_router"
      }
    })
})