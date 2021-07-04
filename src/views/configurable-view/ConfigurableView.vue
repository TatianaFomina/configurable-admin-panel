<script lang="ts">
import { defineComponent, h } from 'vue'
import { useConfig } from '@/config'
import { buildViewContent } from './view-builder'
import Heading from './Heading.vue'

export default defineComponent({
  name: 'ConfigurableView',
  components: {
    Heading
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
      [
        h(Heading),
        buildViewContent(this.view.components)]
    )
  }
})
</script>

<style scoped>
  .view-container {
    padding: 1.5rem 2.5rem;
  }

  .view-container > * {
    margin-bottom: 2rem;
  }
</style>
