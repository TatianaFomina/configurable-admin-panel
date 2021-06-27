<template>
  <div class="container">
    <Menu />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Menu from './components/Menu.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Menu
  }
})
</script>

<style>

.container {
  background: var(--gray-5);
  height: 100vh;
  display: flex
}

</style>
