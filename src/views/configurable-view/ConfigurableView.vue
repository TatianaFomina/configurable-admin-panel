
<script lang="ts">
import { defineComponent, h } from 'vue'
import Table from '@/components/table/Table.vue'
import Button from '@/components/button/Button.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
import { useConfig } from '@/config'
import { buildViewContent } from './view-builder'

export default defineComponent({
  name: 'ConfigurableView',
  components: {
    Table,
    Button,
    SearchBar
  },
  data() {
    return {
    }
  },
  computed: {
    view() {
      const key = this.$route.hash?.substr(1)
      const { getViewByKey } = useConfig()

      return getViewByKey(key)
    }
  },
  watch: {
  },
  render() {
    if (!this.view) {
      return
    }
    return h(
      'div',
      {
        class: ['view-container']
      },
      buildViewContent(this.view.components)
    )
  }
})
</script>

<style scoped>
  .view-container {
    padding: 2.5rem;
  }

  .view-container > * {
    margin-bottom: 2rem
  }

  .space-bottom {
    margin-bottom: 1rem
  }
</style>
