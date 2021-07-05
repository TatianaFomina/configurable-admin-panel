import { ButtonComponent } from '@/models/button'
import { SearchbarComponent } from '@/models/searchbar'
import { TableComponent } from '@/models/table'
import { ViewComponent } from '@/models/view-component'
import { defineAsyncComponent, h } from 'vue'

const Table = defineAsyncComponent(() => import('@/components/table/Table.vue'))
const Button = defineAsyncComponent(() => import('@/components/button/Button.vue'))
const Searchbar = defineAsyncComponent(() => import('@/components/searchbar/SearchBar.vue'))

/**
 * Maps component descriptions on appropriate virtual nodes.
 * @param components List of view components descriptions.
 * @returns List of component virtual nodes.
 */
export function buildViewContent(components: ViewComponent[]) {
  return components.map(component => {
    switch (component.type) {
      case 'table': return renderTable(component, components)
      case 'button': return renderButton(component)
      default: return null
    }
  })
}

/**
 * Builds table component virtual node.
 * @param component table component description.
 * @param components list of all the view's components (used to find references to current component in other components)
 * @returns Table component virtual node
 */
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

/**
 * Builds button component virtual node.
 * @param component button component description.
 * @returns button component virtual node.
 */
function renderButton(component: ButtonComponent) {
  const button = h(
    Button,
    {
      onClick: component.params.handler
    },
    () => component.params.text
  )

  if (component.params.link) {
    return h('a', {
      href: component.params.link
    }, button)
  }
  return button
}

/**
 * Builds searchbar component virtual node.
 * @param component searchbar component description.
 * @returns searchbar component virtual node.
 */
function renderSearchbar(component: SearchbarComponent) {
  return h(Searchbar, {
    placeholder: component.params.placeholder
  })
}
