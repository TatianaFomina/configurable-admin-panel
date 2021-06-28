<template>
  <div class="container">
    <Menu />
    <ConfigurableView class="view" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Menu from './components/Menu.vue'
import ConfigurableView from '@/views/configurable-view/ConfigurableView.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Menu,
    ConfigurableView
  }
})
</script>

<style>

.container {
  background: var(--gray-6);
  height: 100vh;
  display: flex;
}

.view {
  flex: 1
}

</style>
