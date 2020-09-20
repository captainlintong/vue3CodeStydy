import * as PIXI from 'pixi.js'
const game = new PIXI.Application({
    width: 750,
    height:1080
})
console.log(game)
document.body.append(game.view)

export function getRootContainer () {
    return game.stage
}