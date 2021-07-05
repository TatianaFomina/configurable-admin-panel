<template>
  <div>
    <div class="heading">
      <label class="table-title">{{ title }}</label>
      <slot name="top" />
    </div>
    <div class="table-container">
      <table>
        <tr>
          <th v-for="col of cols"
              :key="col.param"
          >
            <Icon v-if="col.label.icon"
                  :name="col.label.icon"
                  size="15"
                  tag="i"
                  class="icon"
            />
            <span>
              {{ col.label.text }}
            </span>
          </th>
          <th v-if="actions.length">
            <Icon name="target"
                  size="15"
                  tag="i"
                  class="icon"
            />
            <span>
              Действия
            </span>
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
          <td v-if="actions.length"
              class="actions-cell"
          >
            <Popover>
              <template #trigger>
                <Icon name="more-horizontal"
                      size="24"
                      tag="i"
                      stroke="2"
                      class="icon"
                />
              </template>
              <PopoverItem v-for="action of actions"
                           :key="action"
                           :disabled="action.disabled"
                           @click="!action.disabled && action.handler && action.handler(row)"
              >
                {{ action.label?.split(' ').map(word => word.startsWith(':') ? row[word.substr(1)]: word).join(' ') }}
              </PopoverItem>
            </Popover>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import Icon from '@/components/icon/Icon.vue'
import Popover from '@/components/popover/Popover.vue'
import PopoverItem from '@/components/popover/PopoverItem.vue'
import { Column } from '@/models/table'
import { Action } from '@/models/config'

export default defineComponent({
  name: 'Table',
  components: {
    Icon,
    Popover,
    PopoverItem
  },
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
    },
    title: {
      type: String,
      default: null
    }
  }
})
</script>

<style scoped>

.table-container {
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td:not(:last-child) {
  border-right: 1px solid var(--gray-3);
}

th:not(:last-child) {
  border-right: 1px solid var(--gray-3);
}

td,
th {
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
  color: var(--gray-2);
  white-space: nowrap;
}

th > div {
  display: flex;
  align-items: center;
}

td.actions-cell > * {
  margin: auto
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

.icon {
  display: inline-block;
  transform: translateY(2px);
  margin-right: 0.3rem;
}

.table-title {
  font-weight: 600;
  font-size: 15px;
}

.heading {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
