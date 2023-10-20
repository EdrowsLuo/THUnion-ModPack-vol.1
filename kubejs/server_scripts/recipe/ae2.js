ServerEvents.recipes(event => {
    createFlavorInscriber(event)
    
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