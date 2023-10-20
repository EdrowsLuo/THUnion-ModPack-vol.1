ServerEvents.recipes(event => {
    event.replaceInput({ mod: "pipez", not: { output: pipez.improved_upgrade } }, minecraft.redstone, kubejs.distribution_core)
})