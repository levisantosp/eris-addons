interface Options {
  label: string
  description?: string
  value: string
  emoji?: {
    name?: string
    id?: string
  }
}

export default class SelectMenu {
  public type: number
  public custom_id!: string
  public placeholder?: string
  public options!: Options[]
  public min_values?: number
  public max_values?: number
  public disabled?: boolean

  public constructor() {
    this.type = 3
  }

  /**
   * Sets the menu custom ID
   * @param id Custom ID
   * @returns 
   */
  public setCustomID(id: string) {
    this.custom_id = id
    return this
  }

  /**
   * Sets the menu placeholder
   * @param text Placeholder text
   * @returns 
   */
  public setPlaceholder(text: string) {
    this.placeholder = text
    return this    
  }

  /**
   * Sets the menu option
   * @param option Menu option
   * @returns 
   */
  public setOption(option: Options) {
    this.options = [option]
    return this
  }

  /**
   * Sets the menu options
   * @param options Menu options
   * @returns 
   */
  public setOptions(options: Options[]) {
    this.options = options
    return this
  }

  /**
   * Adds a new option for menu
   * @param option Menu option
   * @returns 
   */
  public addOption(option: Options) {
    this.options?.push(option)
    return this
  }

  /**
   * Adds a new options for menu
   * @param options Array of options
   * @returns 
   */
  public addOptions(options: Options[]) {
    this.options?.push(...options)
    return this
  }

  /**
   * Sets the minimum values that will be clickable
   * @param min_values Minimum values that will be clickable
   * @returns 
   */
  public setMinValues(min_values: number) {
    this.min_values = min_values
    return this
  }
  
  /**
   * Sets the maximum values that will be clickable
   * @param max_values Maximum values that will be clickable
   * @returns 
   */
  public setMaxValues(max_values: number) {
    this.max_values = max_values
    return this
  }

  /**
   * Builds the menu
   * @param content Message content
   * @returns 
   */
  public build(content?: string) {
    return {
      content,
      components: [{
        type: 1,
        components: [this]
      }]
    }
  }
}