<template>
  <div>
    {{ msg }}
    <div>{{ state.doubleCounter }}</div>
    <div>{{ state.counter }}</div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const state = reactive({
      counter: 1,
      doubleCounter: computed(() => state.counter *2)
    })
    const cunt = ref('d')
    let timer
    onMounted (() => {
      setInterval(() => {
        timer = state.counter++
      }, 1000)
    })
    onUnmounted(() => {
      clearInterval(timer)
    })
    return { state, cunt }
  }
}
</script>
