import { ViewComponent } from './view-component'

export interface ButtonComponent extends ViewComponent {
  type: 'button'
  params: {
    text: string
    disabled?: boolean
    link?: string
    handler?: () => void
  }
}
