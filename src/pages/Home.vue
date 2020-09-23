<template>
  <div class="msg">
    {{msg}}
  </div>
  <Demo :component="Test"></Demo>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Demo from '../components/Demo.vue'
import Test from '../demo/Test.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Demo,
    Test
  },
  setup () {
    const msg = ref('Hello Wrold')

    return {msg, Test}
  }
})
</script>

<style scoped>
.msg {
  font-size: 20px;
  font-weight: bold;
}
</style>
