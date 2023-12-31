ServerEvents.recipes(event => {
    event.remove({ type: "mekanism:metallurgic_infusing", output: mekanism.dust_steel })
    event.remove({ type: "mekanism:metallurgic_infusing", output: mekanism.enriched_iron })
    event.remove({ output: mekanism.steel_casing })

    let bannedItem = [
        mekanism.digital_miner,
        mekanism.jetpack,
        mekanism.jetpack_armored,
        mekanism.free_runners,
        mekanism.free_runners_armored,
        mekanism.mekasuit_bodyarmor,
        mekanism.mekasuit_boots,
        mekanism.mekasuit_helmet,
        mekanism.mekasuit_pants,
        mekanism.cardboard_box,
        mekanismgenerators.wind_generator,
        mekanismgenerators.gas_burning_generator,
        mekanismgenerators.solar_generator,
        mekanismgenerators.advanced_solar_generator,
        mekanismgenerators.bio_generator,
        mekanism.restrictive_transporter,
        mekanism.diversion_transporter
    ]

    Object.keys(mekanism).forEach(k => {
        if(k.startsWith("module_") && k.endsWith("_unit")) {
            bannedItem.push(mekanism[k])
        }
    })

    const ties = ["basic", "advanced", "elite", "ultimate"]
    const pipeTypes = ["universal_cable", "mechanical_pipe", "pressurized_tube", "logistical_transporter"]

    ties.forEach(tie => {
        pipeTypes.forEach(t => {
            let pipe = `${tie}_${t}`
            event.remove({ output: mekanism[pipe]})
        })
    })

    bannedItem.forEach(e => event.remove({ output: e}))

    event.recipes.create.mixing([Fluid.of("minecraft:water", 250), mekanism.ingot_steel], [botania.manasteel_ingot, Fluid.of("minecraft:milk", 500)])
    event.recipes.create.deploying([mekanism.steel_casing], [mekanism.block_steel, kubejs.mechanical_core])
    event.replaceInput({ output: mekanism.metallurgic_infuser }, mekanism.ingot_osmium, mekanism.steel_casing)
})