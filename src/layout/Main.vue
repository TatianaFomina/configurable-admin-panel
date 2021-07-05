<template>
  <Header class="header"
          @toggleMenu="menuExpanded = !menuExpanded"
  />
  <div class="relative-container">
    <div class="container">
      <Menu class="menu" />
      <ConfigurableView class="view" />
    </div>

    <transition name="expand-collapse">
      <Menu v-if="menuExpanded"
            class="menu-mobile"
            @select="menuExpanded = false"
      />
    </transition>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import ConfigurableView from '@/views/configurable-view/ConfigurableView.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Menu,
    Header,
    ConfigurableView
  },
  data() {
    return {
      menuExpanded: false
    }
  }
})
</script>

<style>

.relative-container {
  position: relative;
}

.menu-mobile {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--gray-6);
  box-shadow: 5px 5px 10px -5px black;
}

.container {
  background: var(--gray-6);
  height: 100vh;
  display: flex;
}

.view {
  flex: 1;
  overflow: hidden;
}

.menu {
  display: none;
}

@media (min-width: 768px) {
  .menu {
    display: block;
  }

  .header {
    display: none;
  }
}

.expand-collapse-enter-active,
.expand-collapse-leave-active {
  transition: all 0.1s ease-out;

  /* position: absolute;
  top: 0;
  bottom: 0;
  background: var(--gray-6);
  box-shadow: 5px 5px 10px -5px black; */
}

.expand-collapse-enter-from,
.expand-collapse-leave-to {
  transform: translateX(-100%);
}

</style>
