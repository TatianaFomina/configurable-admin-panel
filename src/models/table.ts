import { Action } from './config'

export interface Column {
  param: string
  label: {
    text: string
    icon?: string
  },
  type?: 'link' | 'text'
}

export interface TableComponent {
  type: 'table'
  id?: string
  params: {
    cols: Column[]
    actions?: Action[]
    data?: any[]
    title?: string
  }
}
