/**
 * Represents description of searchbar component.
 */
export interface SearchbarComponent {
  /**
   * Component type. Value is 'searchbar' for searchbar component.
   */
  type: 'searchbar'

  /**
   * Component parameters.
   */
  params: {

    /**
     * Reference to component that should be associated with the searchbar. Value should be equal to component's id.
     */
    for: string

    /**
     * Seachbar input placeholder.
     */
    placeholder?: string
  }
}
