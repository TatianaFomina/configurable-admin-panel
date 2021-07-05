<template>
  <div class="menu-container">
    <AvatarMenu class="avatar-menu" />
    <template v-for="section in menu"
              :key="section"
    >
      <div class="menu-item section-label">
        {{ section.label }}
      </div>

      <RouterLink v-for="item of section.items"
                  :key="item.name"
                  :to="'#' + item.name"
                  @click="$emit('select')"
      >
        <div
          class="menu-item section-item"
          :class="[currentHash === item.name && 'active']"
        >
          {{ item.label }}
        </div>
      </RouterLink>
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import AvatarMenu from './AvatarMenu.vue'
import { useConfig } from '@/config'

export default defineComponent({
  name: 'Menu',
  components: {
    AvatarMenu
  },
  setup() {
    const { menu } = useConfig()

    return { menu }
  },
  computed: {
    currentHash() {
      return this.$route.hash?.substr(1)
    }
  }
})
</script>

<style scoped>

.avatar-menu {
  border-bottom: 1px solid var(--gray-5);
  display: none;
}

.menu-container {
  width: 19rem;
  border-right: 1px solid var(--gray-5);
}

.menu-item {
  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
}

a {
  text-decoration: none;
}

.section-item {
  font-size: 15px;
  color: var(--gray-1);
}

.section-item.active {
  background: var(--gray-4);
}

.section-item:not(.active):hover {
  background: var(--gray-5);
}

.section-label {
  color: var(--gray-2);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .avatar-menu {
    display: initial;
  }
}

</style>
