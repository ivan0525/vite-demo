<template>
  <article class="markdown-body" v-html="html"></article>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    path: String,
  },
  setup(props, ctx) {
    const content = ref('')
    console.log(props.path)
    import(props.path).then((res) => {
      content.value = res.default
    }).catch((err) => {
      console.log(err)
    })
    const html = computed(() => {
      return Prism.highlight(content, Prism.languages.html, 'html')
    })
    console.log(content)
    return {html}
  },
});
</script>
