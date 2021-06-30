<template>
  <button :disabled="disabled">
    <slot />
  </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
  button {
    background: var(--blue-1);
    border: 0;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  button:disabled {
    background: var(--gray-2);
    cursor: not-allowed;
    color: var(--gray-1)
  }

  button:not(:disabled):hover {
    background: var(--blue-0)
  }
</style>
