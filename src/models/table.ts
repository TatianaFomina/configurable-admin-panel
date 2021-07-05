import { Action } from './config'

/**
 * Represent single table column description.
 */
export interface Column {
  /**
   * Name of data property that contains value that should be displayed in the cell.
   */
  param: string

  /**
   * Table column label parameters.
   */
  label: {

    /**
     * Label text.
     */
    text: string

    /**
     * Icon to be desplayed before label text.
     */
    icon?: string
  },

  /**
   * Column content type.
   */
  type?: 'link' | 'text'
}

/**
 * Represents configuration for table component.
 */
export interface TableComponent {
  /**
   * Component type. Value is 'table' for table component.
   */
  type: 'table'

  /**
   * Component id. Used to reference component with 'for' property of another component.
   */
  id?: string

  /**
   * Component parameters.
   */
  params: {
    /**
     * Table columns description objects.
     */
    cols: Column[]

    /**
     * Description of available actions for each row of table. Adds additional column if value is non-empty array.
     */
    actions?: Action[]

    /**
     * Data to be displayed in table rows.
     */
    data?: any[]

    /**
     * Table title.
     */
    title?: string
  }
}
