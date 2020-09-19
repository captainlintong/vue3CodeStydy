// console.log('3232')
import { createApp } from './src/runtime-canvas'
import App from './src/App'
import * as PIXI from 'pixi.js'
console.log(PIXI)

const game = new PIXI.Application({
    width: 750,
    height:1080
})
document.body.append(game.view)
// createApp(App).mount()