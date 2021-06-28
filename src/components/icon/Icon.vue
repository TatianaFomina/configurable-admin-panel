
<script lang='ts'>
import { defineComponent, h } from 'vue'
import * as feather from 'feather-icons'

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
      validator(name: string) {
        if (!feather) {
          throw new Error('The Feather icons is required.')
        }
        if (!feather.icons[name]) {
          throw new Error(`"${name}" is not an available icon type.`)
        }
        return true
      }
    },
    size: {
      type: Number,
      default: 24
    },
    strokeWidth: {
      type: [Number, String],
      default: 2
    },
    tag: {
      type: String,
      default: 'i'
    }
  },
  render() {
    const {
      size,
      name
    } = this
    const icon = feather.icons[name]

    return h(
      this.tag,
      {
        ...this.$attrs,
        'data-name': name,
        'data-tags': icon.tags,
        'data-type': name
      },
      [
        h(
          'svg',
          {
            ...icon.attrs,
            height: size,
            'stroke-width': this.strokeWidth,
            width: size,
            class: [icon.attrs.class],
            innerHTML: icon.contents
          }
        )
      ]
    )
  }
})
</script>
