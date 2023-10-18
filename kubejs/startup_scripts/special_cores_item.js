
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
        event.create(core).texture("kubejs:item/" + core).glow(true)
    });
    event.create("uncompleted_distribution_core").texture("kubejs:item/uncompleted_distribution_core").glow(true).unstackable()

    console.log("======ids=======")
    Item.getTypeList().forEach(e => console.log(e))
})