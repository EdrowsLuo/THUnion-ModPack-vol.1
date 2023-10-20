
StartupEvents.registry("item", event => {
    const special_cores = [
        "flight_core",
        "magic_core",
        "ore_core",
        "life_core",
        "mechanical_core",
        "craft_core",
        "distribution_core",
        "battle_core",
        "treasure_core",
    ]
    special_cores.forEach(core => {
        event.create(core).texture("kubejs:item/" + core)
            .tooltip(Component.translate(`item.kubejs.${core}.desc`))
            .glow(true)
    });
    event.create("uncompleted_distribution_core")
        .texture("kubejs:item/uncompleted_distribution_core")
        .tooltip(Component.translate(`item.kubejs.uncompleted_distribution_core.desc`))
        .glow(true)
        .unstackable()
})