ServerEvents.recipes(event => {
    console.info('瓦尔基里天空&植物魔法联动')
    Craftengine(event)
    Craftballon(event)
    Washballon(event)
})
function Craftengine(event){
    event.remove({ output:"vs_eureka:engine" })
    event.shaped(Item.of('vs_eureka:engine',1),[
        'AAA',
        'XYZ',
        'BBB'
    ],
    {
        A: 'botania:livingrock',
        B: 'botania:mana_quartz',
        X: 'botania:manasteel_ingot',
        Y: 'mekanism:boiler_casing',
        Z: 'botania:lens_normal',
    }
    )
}
function Craftballon(event){
    event.remove({output:"vs_eureka:balloon"})
    event.shaped(Item.of('vs_eureka:balloon',64),[
        ' A ',
        'ABA',
        ' A '

    ],
    {
        A:'minecraft:leather',
        B:'kubejs:flight_core'
    })

    event.shaped(Item.of('vs_eureka:balloon',64),[
        ' A ',
        'ABA',
        ' A '

    ],
    {
        A:'minecraft:white_wool',
        B:'kubejs:flight_core'
    })

    event.shaped(Item.of('vs_eureka:balloon',64),[
        ' A ',
        'ABA',
        ' A '

    ],
    {
        A:'minecraft:phantom_membrane',
        B:'kubejs:flight_core'
    })

    event.shaped(Item.of('vs_eureka:balloon',16),[
        ' A ',
        'ABA',
        ' A '

    ],
    {
        A:'minecraft:string',
        B:'kubejs:flight_core'
    })

    event.shaped(Item.of('vs_eureka:balloon',32),[
        ' A ',
        'ABA',
        ' A '

    ],
    {
        A:'minecraft:paper',
        B:'kubejs:flight_core'
    })
}
