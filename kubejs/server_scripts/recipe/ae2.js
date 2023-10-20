ServerEvents.recipes(event => {
    createFlavorInscriber(event)

    event.remove({ output: ae2.controller })
    event.remove({ output: ae2.crafting_unit })
    event.remove({ output: ae2.molecular_assembler })
    event.remove({ output: ae2.me_p2p_tunnel })

    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "item": "ae2:smooth_sky_stone_block"
            },
            "b": {
                "item": "ae2:fluix_crystal"
            },
            "c": {
                "item": "ae2:engineering_processor"
            },
            "d": {
                "item": kubejs.craft_core
            },
            "e": {
                "item": ars_nouveau.bookwyrm_charm
            },
            "f": {
                "item": ars_nouveau.wixie_charm
            }
        },
        "pattern": [
            "abd",
            "ecf",
            "dba"
        ],
        "result": {
            "item": "ae2:controller"
        }
    })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "tag": "forge:ingots/iron"
            },
            "b": {
                "item": "ae2:calculation_processor"
            },
            "c": {
                "item": "ae2:fluix_glass_cable"
            },
            "d": {
                "item": "ae2:logic_processor"
            },
            "e": {
                "item": kubejs.craft_core
            }
        },
        "pattern": [
            "abe",
            "cdc",
            "eba"
        ],
        "result": {
            "item": "ae2:crafting_unit"
        }
    })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "tag": "forge:ingots/iron"
            },
            "b": {
                "item": ars_nouveau.wixie_charm
            },
            "c": {
                "item": "ae2:annihilation_core"
            },
            "d": {
                "item": "minecraft:crafting_table"
            },
            "e": {
                "item": "ae2:formation_core"
            },
            "f": {
                "item": kubejs.craft_core
            }
        },
        "pattern": [
            "abf",
            "cde",
            "fba"
        ],
        "result": {
            "item": "ae2:molecular_assembler",
            "count": 2
        }
    })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "tag": "forge:ingots/iron"
            },
            "b": {
                "item": "ae2:engineering_processor"
            },
            "c": {
                "tag": "ae2:all_fluix"
            },
            "d": {
                "item": mekanism.teleportation_core
            }
        },
        "pattern": [
            " a ",
            "aba",
            "cdc"
        ],
        "result": {
            "item": "ae2:me_p2p_tunnel",
            "count": 2
        }
    })
})

function createFlavorInscriber(event) {
    // 魔改ae2压印器，改为机械动力的方式
    ban(event, [ae2.inscriber, ae2things.advanced_inscriber])
    event.remove({ type: "ae2:inscriber" })

    let rebuildInscriber = (type, input) => {
        event.recipes.create.deploying([AE2(type + '_press')], [mekanism.block_steel, AE2(type + '_press')]).keepHeldItem()
        event.recipes.create.deploying([AE2('printed_' + type)], [input, AE2(type + '_press')]).keepHeldItem()
    }

    rebuildInscriber('silicon', AE2('silicon'))
    rebuildInscriber('logic_processor', MC('gold_ingot'))
    rebuildInscriber('engineering_processor', botania.mana_diamond)
    rebuildInscriber('calculation_processor', AE2('certus_quartz_crystal'))

    let processors = ['logic_processor', 'engineering_processor', 'calculation_processor']
    processors.forEach(e => {
        let inter = KJ('crafting_' + e)
        event.recipes.createSequencedAssembly(
            [AE2(e)],
            MC("redstone"),
            [
                event.recipes.createDeploying(inter, [inter, AE2('printed_' + e)]),
                event.recipes.createDeploying(inter, [inter, AE2('printed_silicon')]),
            ]
        )
            .transitionalItem(inter)
            .loops(1)
            .id('kubejs:assembly_' + e)
    })
}