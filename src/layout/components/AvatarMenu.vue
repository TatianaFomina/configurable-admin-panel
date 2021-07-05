<template>
  <Popover v-if="dropdownMenu && dropdownMenu.length">
    <template #trigger>
      <div class="profile">
        <div class="avatar-group">
          <div class="avatar" />
          {{ profile.name }}
        </div>
        <Icon class="icon"
              name="chevron-down"
        />
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
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Popover from '@/components/popover/Popover.vue'
import PopoverItem from '@/components/popover/PopoverItem.vue'
import Icon from '@/components/icon/Icon.vue'
import { useConfig } from '@/config'

export default defineComponent({
  name: 'AvatarMenu',
  components: {
    Popover,
    PopoverItem,
    Icon
  },
  setup() {
    const { dropdownMenu } = useConfig()

    return { dropdownMenu }
  },
  data() {
    return {
      profile: {
        name: 'Admin',
        avatarUrl: '@/public/avatar.jpg'
      }
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

  /* border-bottom: 1px solid var(--gray-5); */
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8rem;
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

@media (min-width: 768px) {
  .profile {
    width: 16.95rem;
  }
}
</style>
