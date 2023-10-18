function getEntitiesByItemId(level, item_id) {
    return level.getEntities().getAll().filter(item => item.type == "minecraft:item" && item.item.id == item_id)
}

function distanceToSqr(entity, x, y, z) {
    const d = entity.x - x;
    const e = entity.y - y;
    const f = entity.z - z;
    return d * d + e * e + f * f;
}

