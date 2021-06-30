import { ViewComponent } from './view-component'

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
  disabled?: boolean
}

export interface TableComponent extends ViewComponent {
  type: 'table',
  params: {
    cols: Column[],
    actions?: Action[]
  }
}
