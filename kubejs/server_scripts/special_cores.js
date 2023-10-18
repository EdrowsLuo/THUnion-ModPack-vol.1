// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const distribution_core_time_limit = 20 * 3
const distribution_core_distance_sqr = 30**2
const flight_core_hight = 100

ServerEvents.recipes(event => {
    MakeTeleportationCore(event)
    MakeOreCore(event)
    MakeMagicCore(event)
    MakeCraftCore(event)
    MakeDistributionCore(event)
})


EntityEvents.spawned("minecraft:item", event => {
    if(event.entity.item.id == kubejs.uncompleted_distribution_core) {
        event.server.tell("check spawned nbt: " + event.entity.item.nbt)
        let item = event.entity.item
        if(item.nbt && item.nbt["Time"]) {
            let currentTime = event.level.getTime()
            if(currentTime - item.nbt.Time < distribution_core_time_limit) {
                event.server.tell(distanceToSqr(event.entity, item.nbt.X, item.nbt.Y, item.nbt.Z))
                if(distanceToSqr(event.entity, item.nbt.X, item.nbt.Y, item.nbt.Z) > distribution_core_distance_sqr) {
                    event.entity.item = Item.of(kubejs.distribution_core, 4)
                    return
                }
            }
        }
        item.nbt = {Time:event.level.getTime(), X:event.entity.x, Y:event.entity.y, Z:event.entity.z}
        event.entity.pickUpDelay = distribution_core_time_limit
    }
})


EntityEvents.death(event => {
    if (event.source == "DamageSource (create.crush)" && event.entity.block.offset(0, 1, 0).id == "create:crushing_wheel_controller") {
        if (event.entity.type == minecraft("player")) {
            let controller = event.entity.block.offset(0, 1, 0)
            let itemEntity = controller.createEntity("item")
            itemEntity.y -= 0.5
            itemEntity.x += 0.5
            itemEntity.z += 0.5
            itemEntity.item = "kubejs:life_core"
            itemEntity.spawn()
            event.server.tell(`${event.entity.name}的生命被浓缩成了精华`)
        }
    }
})

global._flight_core_cooldown = 0;
LevelEvents.tick(event => {
    if (global._flight_core_cooldown != 0) { global._flight_core_cooldown-- }
    else {
        global._flight_core_cooldown = 20;

        getEntitiesByItemId(event.level, minecraft.phantom_membrane).forEach(phantom_membrane => {
            if (phantom_membrane.y >= flight_core_hight) {
                phantom_membrane.noGravity = true
                phantom_membrane.motionY = 0.08
                phantom_membrane.item = Item.of("kubejs:flight_core", phantom_membrane.item.count)
            }
        })
    }
})

function MakeTeleportationCore(event) {
    event.remove({ output: mekanism.teleportation_core})
    event.custom({
        "type":"lychee:item_inside",
        "item_in": { "item": "kubejs:distribution_core" },
        "block_in": { "blocks": ["minecraft:nether_portal"] },
        "post":  {  "type": "drop_item",  "item": mekanism.teleportation_core}
    })
}

function MakeOreCore(event) {
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [
            {
                "tag": "forge:ores/copper"
            },
            {
                "tag": "forge:ores/iron"
            },
            {
                "tag": "forge:ores/gold"
            },
            {
                "tag": "forge:ores/diamond"
            }
        ],
        "post": [
            {
                "type": "drop_item",
                "item": "kubejs:ore_core",
                "count": 1
            }
        ]
    })
}

function MakeMagicCore(event) {
    event.custom({
        type: "ars_nouveau:crush",
        input: { tag: 'forge:ingots/terrasteel' },
        output: [{ chance: 1.0, count: 1, item: 'kubejs:magic_core' }],
    }).id("kubejs:ars/crush/magic_core")
}

function MakeMechanicalCore(event) {
    event.recipes.create.crushing(
        Item.of("kubejs:mechanical_core", 16),
        create.mechanical_arm
    )
}

function MakeCraftCore(event) {
    event.recipes.create.mechanical_crafting('kubejs:craft_core', 
    [
        'D'
    ], 
    {
        D: create.mechanical_crafter
    })
}

function MakeDistributionCore(event) {
    event.shaped(
        Item.of("kubejs:uncompleted_distribution_core", 1),
        [" H ",
         "H H",
         " H "],
        {
            H: "minecraft:hopper"
        })
}
