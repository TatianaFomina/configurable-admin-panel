import { ViewComponent } from './view-component'

export interface ButtonComponent extends ViewComponent {
  type: 'button'
  params: {
    text: string
    link?: string
    handler?: () => void
  }
}
