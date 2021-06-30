<template>
  <div v-click-away="close"
       class="container"
  >
    <button @click="toggle">
      <slot name="trigger" />
    </button>
    <transition name="slide-fade">
      <div v-if="isOpen"
           class="expanded-area"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Popover',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
      }
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  }
})
</script>

<style scoped>
  button {
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer
  }
  .expanded-area {
    position: absolute;
    z-index: 50;
    box-shadow: 5px 5px 10px -5px black;
    background: var(--gray-6);
    border: 1px solid var(--gray-4);
    border-radius: 0.125rem;
    text-align: initial;
    right: 0;
    top: calc(100% + 0.25rem);
  }

  .container {
    position: relative;
    height: auto;
    width: max-content;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.1s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-1rem);
    opacity: 0;
  }
</style>
