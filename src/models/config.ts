import { ViewComponent } from './view-component'

/**
 * Represents single menu section.
 */
export interface MenuSection {

  /**
   * Section label.
   */
  label?: string

  /**
   * List of items within section.
   */
  items: {
    /**
     * Section item label.
     */
    label: string

    /**
     * Section item name. Should be equal to one of the views' keys
     */
    name: string
  }[]
}

/**
 * Represents single view.
 */
export interface View {
  /**
   * Key to reference view from menu.
   */
  key: string

  /**
   * List of view components.
   */
  components: ViewComponent[]
}

/**
 * Represents single dropdown menu action.
 */
export interface Action {

  /**
   * Action text.
   */
  label: string

  /**
   * Action click handler function
   */
  handler: (row: any) => void

  /**
   * Action disabled state.
   */
  disabled?: boolean

  /**
   * Icon to be displayed before text.
   */
  icon?: string
}

/**
 * Represents admin panel configuration.
 */
export interface Config {
  /**
   * Menu configuration. Contains list of menu sections.
   */
  menu: MenuSection[]

  /**
   * List of all the available views configurations.
   */
  views: View[]

  /**
   * Name of the view which should be displayed when route is empty.
   */
  defaultView: string

  /**
   * List of action available on profile click.
   */
  dropdownMenuActions?: Action[]
}
