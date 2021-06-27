<template>
  <div>
    Hello world!!
  </div>
  <RouterView />
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'App'
})
</script>

<style scoped>
div {
  background: green;
}
</style>
