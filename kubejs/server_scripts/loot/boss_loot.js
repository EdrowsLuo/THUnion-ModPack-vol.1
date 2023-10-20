
function buildTrophyNBT(entity, scale, offsetY, name) {
    return {
        TrophyType: "entity",
        RotX: 0,
        TrophyEntity: {
            entityType: entity
        },
        Scale: scale,
        OffsetY: offsetY,
        BaseBlock: supplementaries.checker_slab,
        Name: name
    }
}


LootJS.modifiers((event) => {
    Object.keys(bossList).forEach(bossId => {
        let bossData = bossList[bossId]
        let trophyData = bossData.trophy
        event.addEntityLootModifier(bossId)
            .addLoot(LootEntry.of(
                Item.withNBT(
                    trophymanager.trophy,
                    buildTrophyNBT(bossId, trophyData.scale, trophyData.offsetY, `${bossData.name}奖杯`)
                )
            ).when((c) => c.randomChance(trophyData.rate)))

        if (bossData.battle_core >= 1) {
            event.addEntityLootModifier(bossId)
                .addLoot(LootEntry.of(Item.of(kubejs.battle_core, bossData.battle_core)))
        } else {
            event.addEntityLootModifier(bossId)
                .addLoot(LootEntry.of(Item.of(kubejs.battle_core)).when((c) => c.randomChance(bossData.battle_core)))
        }
    })
})