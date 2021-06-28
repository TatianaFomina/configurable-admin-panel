<template>
  <div class="menu-container">
    <div class="profile">
      <div class="avatar-group">
        <div class="avatar" />
        {{ profile.name }}
      </div>
      <ChevronDownIcon class="icon" />
    </div>
    <template v-for="section in menu"
              :key="section"
    >
      <div class="menu-item section-label">
        {{ section.label }}
      </div>

      <div v-for="item of section.items"
           :key="item.name"
           class="menu-item section-item "
      >
        {{ item.label }}
      </div>
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Menu',
  components: {
    ChevronDownIcon
  },
  data() {
    return {
      profile: {
        name: 'Admin',
        avatarUrl: ''
      },
      menu: [
        {
          label: 'Списки данных',
          items: [
            {
              label: 'Доступные города',
              name: 'available-cities'
            },
            {
              label: 'Заблокированные пользователи',
              name: 'blocked-users'
            },
            {
              label: 'Черный список ссылок',
              name: 'links-blacklist'
            },
            {
              label: 'Управление пользователями',
              name: 'managing-users'
            }
          ]
        }
      ]
    }
  }
})
</script>

<style scoped>

.avatar-group {
  display: flex;
  align-items: center;
}

.profile {
  padding: 1rem 0.75rem 1rem 1.3rem;
  border-bottom: 1px solid var(--gray-6);
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile:hover {
  background: var(--gray-6);
}

.avatar {
  width: 1.5rem;
  height: 1.5rem;
  background: url('@/public/avatar.jpg');
  background-size: cover;
  border-radius: 15%;
  margin-right: 0.75rem;
}

.icon {
  width: 1.75rem;
  height: 1.75rem;
  color: var(--gray-2);
}

.menu-container {
  width: 18.75rem;
  border-right: 1px solid var(--gray-4);
}

.menu-item {
  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
}

.section-item {
  font-size: 15px;
  color: var(--gray-1);
}

.section-label {
  color: var(--gray-2);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
}

</style>
