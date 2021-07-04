<template>
  <div class="searchbar-container">
    <Icon name="search"
          size="14"
          tag="div"
          class="icon"
    />
    <input type="text"
           :placeholder="placeholder"
           @input="onInput"
    >
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Icon from '@/components/icon/Icon.vue'

export default defineComponent({
  name: 'SearchBar',
  components: {
    Icon
  },
  props: {
    modelValue: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Поиск'
    }
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(value: string) {
      this.$emit('update:modelValue', value)
    }
  }

})
</script>

<style scoped>
  .searchbar-container {
    display: flex;
    align-items: center;
    border: 1px solid var(--gray-3);
    padding: 0.125rem 0.5rem;
    border-radius: 1rem;
    transition: border 0.2s ease-out;
  }

  .searchbar-container:focus-within {
    border: 1px solid var(--gray-2);
  }

  input {
    background: var(--gray-6);
    border: none;
    color: var(--gray-1);
  }

  input::placeholder {
    color: var(--gray-2);
  }

  input:focus {
    outline: none;
  }

  .icon {
    transform: translateY(1px);
    color: var(--gray-2);
    margin-right: 0.25rem;
  }
</style>
