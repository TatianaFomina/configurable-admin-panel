import { ViewComponent } from './view-component'

export interface MenuSection {
  label?: string
  items: {
    label: string
    name: string
  }[]
}

export interface View {
  key: string
  components: ViewComponent[]
}

export interface Action {
  label: string
  handler: (row: any) => void
  disabled?: boolean
  icon?: string
}

export interface Config {
  menu: MenuSection[]
  views: View[]
  dropdownMenuActions?: Action[]
}
