ServerEvents.recipes(event => {
    event.remove({ output: powah.dielectric_casing })
    event.remove({ id: "powah:energizing/energized_steel" })
    event.remove({ id: "powah:energizing/nitro_crystal" })
    event.remove({ id: "powah:energizing/ender_core" })
    event.remove({ id: "powah:energizing/niotic_crystal" })

    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ihi",
            "vCv",
            "ihi"
        ],
        "key": {
            "v": {
                "item": "powah:dielectric_rod"
            },
            "h": {
                "item": "powah:dielectric_rod_horizontal"
            },
            "i": {
                "item": "minecraft:iron_ingot"
            },
            "C": {
                "item": bigreactors.basic_reactorcasing
            }
        },
        "result": {
            "item": "powah:dielectric_casing"
        }
    })
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {
                "item": mekanism.ingot_steel
            },
            {
                "item": "minecraft:gold_ingot"
            }
        ],
        "energy": 10000,
        "result": {
            "item": "powah:steel_energized",
            "count": 2
        }
    })
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {
                "item": extendedcrafting.ender_star
            },
            {
                "item": "minecraft:redstone_block"
            },
            {
                "item": "minecraft:redstone_block"
            },
            {
                "item": "powah:blazing_crystal_block"
            },
            {
                "item": ars_nouveau.wilden_tribute
            },
            {
                "item": l2complements.resonant_feather
            }
        ],
        "energy": 20000000,
        "result": {
            "item": "powah:crystal_nitro",
            "count": 16
        }
    })
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {
                "item": mekanism.teleportation_core
            },
            {
                "item": "powah:dielectric_casing"
            },
            {
                "item": "powah:capacitor_basic_tiny"
            }
        ],
        "energy": 50000,
        "result": {
            "item": "powah:ender_core",
            "count": 2
        }
    })
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            {
                "item": botania.mana_diamond
            }
        ],
        "energy": 300000,
        "result": {
            "item": "powah:crystal_niotic"
        }
    })
})