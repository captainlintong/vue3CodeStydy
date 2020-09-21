import { defineComponent, h} from '@vue/runtime-core'
import Circle from './component/Circle.js'
export default defineComponent({
    render () {
        const vnode = h('rect', { x: 100, y: 100 }, [
            '我是一个矩形',
            h(Circle)
        ])
        console.log(vnode)
        return vnode
    }
})