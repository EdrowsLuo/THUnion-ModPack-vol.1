

LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.CHEST)
        .addLoot(LootEntry.of(kubejs.treasure_core).when((c) => c.randomChance(0.05)),);
    event.addEntityLootModifier("artifacts:mimic")
    .addLoot(LootEntry.of(kubejs.treasure_core).when((c) => c.randomChance(0.1)),);
});

