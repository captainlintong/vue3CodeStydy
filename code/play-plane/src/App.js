import { defineComponent, h} from '@vue/runtime-core'
export default defineComponent({
    render () {
        const vnode = h('rect')
        console.log(vnode)
        return vnode
    }
})