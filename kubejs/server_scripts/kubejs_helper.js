

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("kubejshelper")
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('oprationType', Arguments.STRING.create(event))
                .executes(ctx => {
                    try {
                        let oprationType = Arguments.STRING.getResult(ctx, "oprationType")
                        switch (oprationType) {
                            case "test": return test(ctx)
                            case "dumpIds": return dumpIds(ctx)
                        }
                        return 0 // always return something
                    } catch (error) {
                        console.log(error)
                        return 0
                    }
                })

            )
    )
})

function test(ctx) {
    const f = new java("java.io.File")(".")
    console.log(f.getAbsolutePath())
    return 0
}

function dumpIds(ctx) {
    const lines = []
    let oldId = null
    Item.getTypeList().forEach(e => {
        const result = e.split(":")
        const mId = result[0]
        const id = result[1]

        if(oldId != mId) {
            if(oldId) {
                lines.push(`}\n\n`)
            }
            oldId = mId
            lines.push(`const ${mId} = {`)
        }
        id = id.replace(/[/]/g, "_")
        lines.push(`    ${id}: "${e}",`)
    })
    console.log(lines.join("\n"))
    return 0
}