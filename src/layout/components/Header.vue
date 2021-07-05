<template>
  <div>
    <div class="header-container">
      <button @click="$emit('toggleMenu')">
        <Icon name="menu" />
      </button>
      <AvatarMenu />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import AvatarMenu from './AvatarMenu.vue'
import Icon from '@/components/icon/Icon.vue'

export default defineComponent({
  name: 'Header',
  components: {
    AvatarMenu,
    Icon
  },
  emits: ['toggleMenu']
})
</script>

<style scoped>
button {
  background: none;
  border: none;
  color: var(--gray-3);
  padding: 0 1rem;
}

.header-container {
  background: var(--gray-6);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-5);
}

</style>
