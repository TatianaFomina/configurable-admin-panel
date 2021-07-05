/**
 * Represents description of button component.
 */
export interface ButtonComponent {

  /**
   * Type of the component. Value is 'button' for button component.
   */
  type: 'button'

  /**
   * Component parameters.
   */
  params: {

    /**
     * Text to be displayed inside of the button.
     */
    text: string

    /**
     * Button disabled state.
     */
    disabled?: boolean

    /**
     * Button link address if needed.
     */
    link?: string

    /**
     * Button click handler function.
     */
    handler?: () => void
  }
}
