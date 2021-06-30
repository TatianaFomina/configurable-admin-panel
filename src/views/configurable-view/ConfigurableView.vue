<template>
  <Table :cols="table.cols"
         :actions="table.actions"
         :data="table.data"
  />
</template>

<script lang="view">
import { defineComponent } from 'vue'
import Table from '@/components/table/table.vue'

export default defineComponent({
  name: 'ConfigurableView',
  components: {
    Table
  },
  data() {
    return {
      views: [
        {
          key: 'managing-users',
          title: 'Управление пользователями',
          supertitle: 'Списки данных',
          components: [
            {
              type: 'button',
              params: {
                text: 'Добавить пользователя',
                handler: () => {}
              }
            },
            {
              type: 'table',
              params: {
                cols: [
                  {
                    param: 'id',
                    label: {
                      text: 'ID',
                      icon: 'list'
                    },
                    type: 'link'
                  },
                  {
                    param: 'name',
                    label: {
                      text: 'Имя',
                      icon: 'user'
                    }
                  },
                  {
                    param: 'email',
                    label: {
                      text: 'Email',
                      icon: 'at-sign'
                    }
                  },
                  {
                    param: 'status',
                    label: {
                      text: 'Статус',
                      icon: 'clock'
                    }
                  }
                ],
                actions: [
                  {
                    label: 'Удалить :name',
                    disabled: false,
                    handler: (row) => { alert(row.name) }
                  },
                  {
                    label: 'Редактировать',
                    disabled: false,
                    handler: () => {}
                  },
                  {
                    label: 'Забанить',
                    disabled: false,
                    handler: () => {}
                  }
                ],
                data: [
                  {
                    id: 56723,
                    name: 'Alex Stone',
                    email: 'alexstone@greatsoul@gmail.com',
                    status: '✅Активен'
                  },
                  {
                    id: 56723,
                    name: 'Alex Stone',
                    email: 'alexstone@greatsoul@gmail.com',
                    status: '✅Активен'
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  },
  computed: {
    table() {
      return this.views[0].components[1].params
    }
  }
})
</script>

<style>

</style>
