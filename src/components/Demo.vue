<template>
  <div class="demo">
    <pre class="language-html" v-html="html"></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
const Prism = (window as any).Prism

export default defineComponent({
  name: 'Demo',
  props:{
    component: Object
  },
  setup (props) {
    // const html = Prism.highlight(props.component.)
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })

    return {html}
  }
})
</script>

<style scoped>

</style>