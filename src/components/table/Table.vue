<template>
  table
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export interface Column {
  param: string
  label: {
    text: string
    icon?: string
  },
  type?: 'link' | 'text'
}

export class Action {
  label: string
  handler: (row: any) => void
}

export default defineComponent({
  name: 'Table',
  props: {
    cols: {
      type: Array as PropType<Column[]>,
      required: true
    },
    actions: {
      type: Array as PropType<Action[]>,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
})
</script>

<style>

</style>
