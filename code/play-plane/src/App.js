import { defineComponent, h} from '@vue/runtime-core'
export default defineComponent({
    render () {
        const vnode = h('div')
        console.log(vnode)
        return vnode
    }
})