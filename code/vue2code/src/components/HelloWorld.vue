<template>
  <div>hello</div>
  <div>word</div>
</template>

<script>
import { onMounted } from 'vue'
function test () {
  onMounted(() => {
    console.log('mounted')
  })
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    test()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
