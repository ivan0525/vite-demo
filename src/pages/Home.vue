<template>
  <div class="msg">
    {{msg}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const msg = ref('Hello Wrold')

    return {msg}
  }
})
</script>

<style scoped>
.msg {
  font-size: 20px;
  font-weight: bold;
}
</style>
