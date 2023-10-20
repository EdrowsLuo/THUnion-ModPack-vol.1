StartupEvents.registry("item", event => {
	let inscriberTypes = ['logic_processor', 'engineering_processor', 'calculation_processor']
	inscriberTypes.forEach(e => {
		event.create('crafting_' + e, 'create:sequenced_assembly').texture("ae2:item/" + e).displayName('Uncomplete ' + e)
	})
})
