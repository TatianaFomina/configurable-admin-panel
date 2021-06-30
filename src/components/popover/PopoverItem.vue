<template>
  <div class="popover-item-container"
       :class="[disabled && 'disabled']"
  >
    <slot />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PopoverItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
  .popover-item-container {
    background: var(--gray-6);
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 10rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .popover-item-container:not(.disabled):hover {
    background: var(--gray-4)
  }

  .disabled {
    cursor: not-allowed;
    color: var(--gray-3)
  }
</style>
