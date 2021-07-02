<template>
  <div class="view-container">
    <Table :cols="table.cols"
           :actions="table.actions"
           :data="table.data"
           :title="table.title"
    >
      <template #top>
        <SearchBar />
      </template>
    </Table>
    <Button>{{ button.text }}</Button>
  </div>
</template>

<script lang="view">
import { defineComponent } from 'vue'
import Table from '@/components/table/Table.vue'
import Button from '@/components/button/Button.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
import { useConfig } from '@/config'

export default defineComponent({
  name: 'ConfigurableView',
  components: {
    Table,
    Button,
    SearchBar
  },
  setup() {
    const { views } = useConfig()

    return { views }
  },
  data() {
    return {
    }
  },
  computed: {
    table() {
      return this.views[0].components[2].params
    },
    button() {
      return this.views[0].components[0].params
    }
  }
})
</script>

<style scoped>
  .view-container {
    padding: 2.5rem;

  }
  .margin-bottom {
    margin-bottom: 1rem
  }
</style>
