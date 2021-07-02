export interface ButtonComponent {
  type: 'button'
  params: {
    text: string
    disabled?: boolean
    link?: string
    handler?: () => void
  }
}
