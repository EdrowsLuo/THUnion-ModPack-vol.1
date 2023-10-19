ServerEvents.recipes(event => {
    // 将一些使用末影珍珠和末影之眼的配方改成使用传送核心
    enderPearlRelated(event)
})

ServerEvents.tags("item", event => {
    event.get('tombstone:enchanted_grave_key_ingredients')
        .removeAll()
        .add(mekanism.teleportation_core)
})


function enderPearlRelated(event) {
    const teleportation_core_replace = [
        minecraft.ender_chest,
        modularrouters.vacuum_module,
        modularrouters.sender_module_2,
        modularrouters.puller_module_2,
        ae2.quantum_entangled_singularity,
        ae2.fluix_pearl,
        fluxnetworks.flux_configurator,
        fluxnetworks.flux_core,
        powah.aerial_pearl,
        powah.ender_core,
        l2complements.fragile_warp_stone,
        entangled.block,
        entangled.item,
        waystones.warp_dust,
        waystones.warp_plate,
        waystones.warp_scroll,
        waystones.bound_scroll,
        travelanchors.travel_anchor,
        travelanchors.travel_staff,
    ]

    teleportation_core_replace.forEach(e => {
        const flt = typeof e === 'string' ? { output: Ingredient.of(e) } : e
        event.replaceInput(
            flt,
            minecraft.ender_eye,
            mekanism.teleportation_core)

        event.replaceInput(
            flt,
            { tag: "forge:ender_pearls" },
            mekanism.teleportation_core)
    })

    event.remove({ id: "ae2:transform/entangled_singularity" })
    event.remove({ id: "ae2:transform/entangled_singularity_from_pearl" })

    event.remove({ mod: "enderstorage" })

    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {
                "item": "ae2:singularity"
            },
            {
                "item": mekanism.teleportation_core
            }
        ],
        "result": {
            "count": 2,
            "item": "ae2:quantum_entangled_singularity"
        }
    })

    event.custom({
        "type": "enderstorage:create_recipe",
        "result": {
            "item": "enderstorage:ender_chest"
        },
        "pattern": [
            "BWB",
            "OCO",
            "BPB"
        ],
        "key": {
            "P": {
                "item": mekanism.teleportation_core
            },
            "O": {
                "tag": "forge:obsidian"
            },
            "C": {
                "tag": "forge:chests/wooden"
            },
            "B": {
                "item": "minecraft:blaze_rod"
            },
            "W": {
                "tag": "forge:wool"
            }
        }
    })
    event.custom({
        "type": "enderstorage:create_recipe",
        "result": {
            "item": "enderstorage:ender_tank"
        },
        "pattern": [
            "BWB",
            "OCO",
            "BPB"
        ],
        "key": {
            "P": {
                "item": mekanism.teleportation_core
            },
            "O": {
                "tag": "forge:obsidian"
            },
            "C": {
                "item": "minecraft:cauldron"
            },
            "B": {
                "item": "minecraft:blaze_rod"
            },
            "W": {
                "tag": "forge:wool"
            }
        }
    })
    event.custom({
        "type": "enderstorage:create_recipe",
        "result": {
            "item": "enderstorage:ender_pouch"
        },
        "pattern": [
            "BLB",
            "LPL",
            "BWB"
        ],
        "key": {
            "P": {
                "item": mekanism.teleportation_core
            },
            "L": {
                "tag": "forge:leather"
            },
            "B": {
                "item": "minecraft:blaze_powder"
            },
            "W": {
                "tag": "forge:wool"
            }
        }
    })
}