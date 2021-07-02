import { ButtonComponent } from '@/models/button'
import { SearchbarComponent } from '@/models/searchbar'
import { TableComponent } from '@/models/table'
import { ViewComponent } from '@/models/view-component'
import { defineAsyncComponent, h } from 'vue'

const Table = defineAsyncComponent(() => import('@/components/table/Table.vue'))
const Button = defineAsyncComponent(() => import('@/components/button/Button.vue'))
const Searchbar = defineAsyncComponent(() => import('@/components/searchbar/SearchBar.vue'))

export function buildViewContent(components: ViewComponent[]) {
  return components.map(component => {
    switch (component.type) {
      case 'table': return renderTable(component, components)
      case 'button': return renderButton(component)
      default: return null
    }
  })
}

function renderTable(component: TableComponent, components: ViewComponent[]) {
  const slots:any = {}
  const searchBarComponent = components.find(c => c.type === 'searchbar' && c.params.for === component.id)

  if (searchBarComponent) {
    slots.top = () => renderSearchbar(searchBarComponent as SearchbarComponent)
  }

  return h(
    Table,
    {
      cols: component.params.cols,
      actions: component.params.actions,
      data: component.params.data,
      title: component.params.title
    },
    slots
  )
}

function renderButton(component: ButtonComponent) {
  return h(
    Button,
    {},
    () => component.params.text
  )
}

function renderSearchbar(component: SearchbarComponent) {
  return h(Searchbar, {
    placeholder: component.params.placeholder
  })
}
