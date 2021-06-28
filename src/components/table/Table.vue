<template>
  <div class="view-container">
    <table>
      <tr>
        <th v-for="col of cols"
            :key="col.param"
        >
          {{ col.label?.text }}
        </th>
      </tr>
      <tr v-for="row of data"
          :key="row.id"
      >
        <td v-for="col of cols"
            :key="col.param"
            :set="item = row[col.param]"
        >
          <template v-if="col.type === 'link'">
            <span class="link-wrap">
              <a href="">{{ item }}</a>
            </span>
          </template>
          <template v-else>
            {{ item }}
          </template>
        </td>
      </tr>
    </table>
  </div>
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

<style scoped>
  table {
    width: 100%
  }

  td:not(:last-child) {
    border-right: 1px solid var(--gray-3);
  }

  th:not(:last-child) {
    border-right: 1px solid var(--gray-3);
  }

  td, th {
    padding: 0.3rem 0.5rem;
    font-size: 14px;
    border-top: 1px solid var(--gray-3);
  }

  tr:last-child td {
    border-bottom: 1px solid var(--gray-3);
  }

  th {
    text-align: left;
    font-weight: normal;
    color: var(--gray-2)
  }

  a {
    color: var(--blue-1);
    text-decoration: none;
  }

  .link-wrap {
    display: inline-block;
    padding-bottom: 1px;
    border-bottom: 1px dashed var(--blue-1);
    display: inline-block;
  }

  .view-container {
    padding: 2.5rem;
  }
</style>
