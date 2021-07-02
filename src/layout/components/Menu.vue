<template>
  <div class="menu-container">
    <Popover v-if="dropdownMenu && dropdownMenu.length">
      <template #trigger>
        <div class="profile">
          <div class="avatar-group">
            <div class="avatar" />
            {{ profile.name }}
          </div>
          <ChevronDownIcon class="icon" />
        </div>
      </template>
      <PopoverItem v-for="action of dropdownMenu"
                   :key="action"
      >
        <div class="avatar-menu-item">
          <Icon :name="action.icon"
                size="15"
                tag="i"
                class="avatar-menu-item-icon"
          />
          <div>
            {{ action.label }}
          </div>
        </div>
      </PopoverItem>
    </Popover>
    <template v-for="section in menu"
              :key="section"
    >
      <div class="menu-item section-label">
        {{ section.label }}
      </div>

      <RouterLink v-for="item of section.items"
                  :key="item.name"
                  :to="'#' + item.name"
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
import { ChevronDownIcon } from '@heroicons/vue/solid'
import Popover from '@/components/popover/Popover.vue'
import PopoverItem from '@/components/popover/PopoverItem.vue'
import Icon from '@/components/icon/Icon.vue'
import { useConfig } from '@/config'

export default defineComponent({
  name: 'Menu',
  components: {
    ChevronDownIcon,
    Popover,
    PopoverItem,
    Icon
  },
  setup() {
    const { menu, dropdownMenu } = useConfig()

    return { menu, dropdownMenu }
  },
  data() {
    return {
      profile: {
        name: 'Admin',
        avatarUrl: '@/public/avatar.jpg'
      }
    }
  },
  computed: {
    currentHash() {
      return this.$route.hash?.substr(1)
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
  border-bottom: 1px solid var(--gray-5);
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16.95rem;
}

.profile:hover {
  background: var(--gray-5);
}

.avatar {
  width: 1.5rem;
  height: 1.5rem;
  background: url('@/public/avatar.jpg');
  background-size: cover;
  border-radius: 15%;
  margin-right: 0.75rem;
}

.avatar-menu-item {
  display: flex;
  align-items: center;
}

.avatar-menu-item-icon {
  transform: translateY(0.125rem);
  margin-right: 1rem;
}

.icon {
  width: 1.75rem;
  height: 1.75rem;
  color: var(--gray-2);
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
  background: var(--gray-4)
}

.section-item:not(.active):hover {
  background: var(--gray-5)
}

.section-label {
  color: var(--gray-2);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
}

</style>
