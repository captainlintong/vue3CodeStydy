import { createRenderer } from '@vue/runtime-core'
const renderer = createRenderer({
    createElement(type) {
        console.log(type)
    }
})
export function createApp (rootComponent) {
    return renderer.createApp(rootComponent)
}