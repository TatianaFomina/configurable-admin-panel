import { ViewComponent } from './view-component'

export interface MenuSection {
  label?: string
  items: {
    label: string
    name: string
  }[]
}

export interface View {
  key: string,
  components: ViewComponent[]
}

export interface Config {
  menu: MenuSection[],
  views: View[]
}
