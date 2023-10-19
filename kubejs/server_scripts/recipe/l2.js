ServerEvents.recipes(event => {
    event.remove({ id: "l2complements:enchantments/projectile_reject" })
    event.remove({ id: "l2complements:enchantments/fire_reject" })
    event.remove({ id: "l2complements:enchantments/environment_reject" })
    event.remove({ id: "l2complements:enchantments/explosion_reject" })
    event.remove({ id: "l2complements:enchantments/magic_reject" })
    event.remove({ id: "l2complements:enchantments/invincible" })
})