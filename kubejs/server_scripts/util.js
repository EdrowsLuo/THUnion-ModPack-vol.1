function getEntitiesByItemId(level, item_id) {
    return level.getEntities().getAll().filter(item => item.type == "minecraft:item" && item.item.id == item_id)
}

function distanceToSqr(entity, x, y, z) {
    const d = entity.x - x;
    const e = entity.y - y;
    const f = entity.z - z;
    return d * d + e * e + f * f;
}

function moveHalfBlock(entity) {
    entity.x += 0.5
    entity.z += 0.5
}

function removeTradeWithOutput(event, prof, targetLevel, itemStack) {
    event.forEachTrades((listing, level, pro) => {
        if (pro.name() == prof) {
            if (level == targetLevel) {
                let toRemove = []
                listing.forEach(trade => {
                    if (trade.getOffer(null, null).result.id == itemStack) {
                        console.log(`trade ${prof} lv${level} ${itemStack} removed: ${trade}`)
                        toRemove.push(trade)
                    }
                })
                toRemove.forEach(t => listing.remove(t))
            }
        }
    })
}

function ban(event, items) {
    items.forEach(i => event.remove({ output: i }))
}