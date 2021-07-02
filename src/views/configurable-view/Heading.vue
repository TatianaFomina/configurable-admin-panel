<template>
  <h2>{{ heading.section }}</h2>
  <h1>{{ heading.title }}</h1>
</template>

<script lang='ts'>
import { useConfig } from '@/config'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Heading',
  computed: {
    heading() {
      const key = this.$route.hash?.substr(1)
      const { getViewHeadings } = useConfig()

      return getViewHeadings(key)
    }

  }
})
</script>

<style scoped>
  h1 {
    font-size: 1.4rem;
    color: var(--gray-0);
    margin-bottom: 2rem;
    margin-top: 0.5rem
  }

  h2 {
    font-size: 15px;
    font-weight: normal;
    margin: 0.5rem 0;
  }
</style>
