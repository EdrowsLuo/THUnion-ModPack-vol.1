LootJS.modifiers((event) => {
    event.addLootTableModifier(/.*/).removeLoot(ars_nouveau.ritual_flight);
    event.addLootTableModifier(/.*/).removeLoot(ars_nouveau.warp_scroll);
});