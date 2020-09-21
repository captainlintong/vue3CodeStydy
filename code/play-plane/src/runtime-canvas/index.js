import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text } from 'pixi.js'
const renderer = createRenderer({
    createElement(type) {
        console.log(type)
        let element
        if (type === 'rect') {
            // console.log('323232')
            element = new Graphics()
            element.beginFill(0xFF0000)
            element.drawRect(0,0,500,500)
            element.endFill()
        } else if (type === 'circle ') {
            console.log('323232')
            element = new Graphics()
            element.beginFill(0xffff00)
            element.drawCircle(0,0,50)
            element.endFill()
        }
        return element
    },

    setElementText (node, text) {
        const cText = new Text(text)
        node.addChild(cText)
    },
    createText (text) {
        return new Text(text)
    },
    patchProp (el, key, prevValue, nextValue) {
        console.log(key)
        console.log(el)
        el[key] = nextValue
    },
    insert(el, parent) {
        console.log(el)
        console.log(parent)
        parent.addChild(el)
    }

})
export function createApp (rootComponent) {
    return renderer.createApp(rootComponent)
}