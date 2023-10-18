ServerEvents.recipes(event => {
    console.info('瓦尔基里天空&植物魔法联动')
    CraftEngine(event)
})

function CraftEngine(event){
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