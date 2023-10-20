ServerEvents.recipes(event => {
    event.remove({ id: "bigreactors:reactor/basic/casing"})
    event.remove({ id: "bigreactors:reactor/reinforced/casing" })

    event.recipes.create.deploying([Item.of(bigreactors.basic_reactorcasing, 4)], [mekanism.steel_casing, bigreactors.graphite_block])
})