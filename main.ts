controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Eagle = sprites.createProjectileFromSprite(assets.image`elgle`, Guy, -100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(1)
})
let Zombie: Sprite = null
let Eagle: Sprite = null
let Ammo = ""
let Guy: Sprite = null
Guy = sprites.create(assets.image`Guy`, SpriteKind.Player)
Guy.setPosition(131, 60)
scene.setBackgroundImage(assets.image`Background`)
controller.moveSprite(Guy, 100, 100)
info.setLife(5)
let AmmoMenu = miniMenu.createMenu(
miniMenu.createMenuItem(Ammo)
)
game.showLongText("In 1942 (not real) SNAKES ruled the world", DialogLayout.Center)
game.showLongText("in war world II", DialogLayout.Center)
game.showLongText("Use your eagels to defeat the snakes ", DialogLayout.Center)
game.showLongText("Kill 150 snakes", DialogLayout.Center)
game.showLongText("Good luck", DialogLayout.Center)
forever(function () {
    if (info.score() == 150) {
        game.gameOver(true)
    }
})
game.onUpdateInterval(200, function () {
    Zombie = sprites.create(assets.image`snake`, SpriteKind.Enemy)
    Zombie.setPosition(randint(0, 95), 0)
    Zombie.setVelocity(0, randint(80, 90))
    Zombie.setFlag(SpriteFlag.AutoDestroy, true)
})
