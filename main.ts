namespace SpriteKind {
    export const Ammo = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Eagle = sprites.createProjectileFromSprite(assets.image`elgle`, Guy, -100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
    game.setGameOverMessage(false, "I WILL LICK YOU")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(1)
})
let Zombie: Sprite = null
let Eagle: Sprite = null
let Guy: Sprite = null
let Healthh = statusbars.create(20, 4, StatusBarKind.Health)
Guy = sprites.create(assets.image`Guy`, SpriteKind.Player)
controller.moveSprite(Guy)
info.setLife(5)
Guy.setPosition(131, 60)
scene.setBackgroundImage(assets.image`Background`)
forever(function () {
    if (info.score() == 150) {
        game.gameOver(true)
        game.setGameOverMessage(true, "LETS GO")
    }
})
game.onUpdateInterval(200, function () {
    Zombie = sprites.create(assets.image`snake`, SpriteKind.Enemy)
    Zombie.setPosition(randint(0, 95), 0)
    Zombie.setVelocity(0, randint(80, 90))
    Zombie.setFlag(SpriteFlag.AutoDestroy, true)
})
