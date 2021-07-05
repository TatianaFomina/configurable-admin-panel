import { Config } from './models/config'

const config: Config = {
  dropdownMenuActions: [
    {
      label: 'Основные настройки',
      icon: 'settings',
      handler: () => {}
    },
    {
      label: 'Настроить меню',
      icon: 'menu',
      handler: () => {}
    },
    {
      label: 'Сообщить о проблеме',
      icon: 'alert-triangle',
      handler: () => {}
    }
  ],
  menu: [
    {
      items: [
        {
          label: 'Подписка на еженедельную рассылку',
          name: 'subscription'
        }
      ]
    },
    {
      label: 'Списки данных',
      items: [
        {
          label: 'Доступные города',
          name: 'available-cities'
        },
        {
          label: 'Заблокированные пользователи',
          name: 'blocked-users'
        },
        {
          label: 'Управление пользователями',
          name: 'managing-users'
        }
      ]
    }
  ],
  views: [
    {
      key: 'subscription',
      components: [
        {
          type: 'button',
          params: {
            text: 'Настроить рассылку',
            handler: () => { alert('Настроить рассылку') }
          }
        }
      ]
    },
    {
      key: 'blocked-users',
      components: [
        {
          type: 'button',
          params: {
            text: 'Перейти в управление пользователями',
            link: '/#managing-users'
          }
        }
      ]
    },
    {
      key: 'available-cities',
      components: [
        {
          type: 'table',
          params: {
            cols: [
              {
                label: { text: 'ID' },
                param: 'id'
              },
              {
                label: { text: 'Название' },
                param: 'name'
              }
            ],
            data: [
              { id: 1, name: 'Санкт-Петербург' },
              { id: 2, name: 'Москва' },
              { id: 3, name: 'Екатеринбург' },
              { id: 4, name: 'Сыктывкар' },
              { id: 5, name: 'Иркутск' },
              { id: 6, name: 'Улан-Удэ' },
              { id: 7, name: 'Владивосток' }
            ]
          }
        }
      ]
    },
    {
      key: 'managing-users',
      components: [
        {
          type: 'searchbar',
          params: {
            for: 'table0'
          }
        },
        {
          type: 'table',
          id: 'table0',
          params: {
            title: 'Список пользователей',
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
        },
        {
          type: 'button',
          params: {
            text: 'Добавить пользователя',
            handler: () => {}
          }
        }
      ]
    }
  ]
}

function getViewByKey(key: string) {
  return config.views.find(view => view.key === key)
}

function getViewHeadings(key: string) {
  let heading: any = { }

  config.menu.forEach(section => {
    const item = section.items.find(item => item.name === key)

    if (item) {
      heading = {
        section: section.label,
        title: item.label
      }
    }
  })

  return heading
}

export function useConfig() {
  return {
    menu: config.menu,
    dropdownMenu: config.dropdownMenuActions,
    views: config.views,
    getViewByKey,
    getViewHeadings
  }
}
