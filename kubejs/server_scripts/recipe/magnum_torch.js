ServerEvents.recipes(event => {
    event.replaceInput({ mod: "magnumtorch" }, minecraft.fire_charge, kubejs.life_core)
    event.replaceInput({ mod: "magnumtorch" }, minecraft.diamond, botania.mana_diamond)
})