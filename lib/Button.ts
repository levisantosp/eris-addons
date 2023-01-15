export default class Button {
  public type: number
  public style!: number
  public label?: string
  public custom_id!: string
  public emoji?: {
    name?: string
    id?: string
  }
  public url?: string
  public disabled?: boolean | null

  constructor() {
    this.type = 2
  }

  /**
   * Sets the button style
   * @param style Button style
   * @returns
   */
  public setStyle(style: 'PRIMARY'|'SECONDARY'|'SUCCESS'|'DANGER'|'LINK') {
    switch (style) {
      case 'PRIMARY': this.style = 1
      break
      case 'SECONDARY': this.style = 2
      break
      case 'SUCCESS': this.style = 3
      break
      case 'DANGER': this.style = 4
      break
      case 'LINK': this.style = 5
      break
      default: throw new Error('Invalid style! Please, choose between: \'PRIMARY\', \'SECONDARY\', \'SUCCESS\', \'DANGER\', \'LINK\'')
    }
    return this
  }

  /**
   * Sets the button text
   * @param text Button text
   * @returns
   */
  public setLabel(text: string) {
    this.label = text
    return this
  }

  /**
   * Sets the button custom ID
   * @param id Button custom ID
   * @returns
   */
  public setCustomID(id: string) {
    this.custom_id = id
    return this
  }

  /**
   * Sets the button emoji
   * @param emoji Button emoji
   * @returns
   */
  public setEmoji(emoji: object) {
    this.emoji = emoji
    return this
  }

  /**
   * Sets the button URL
   * @param url Button URL
   * @returns 
   */
  public setURL(url: string) {
    this.url = url
    return this
  }

  /**
   * Sets the button as disabled
   * @returns
   */
  public setDisabled() {
    this.disabled = true
    return this
  }

  
  public build(content?: '') {
    return {
      content,
      components: [{
        type: 1,
        components: [this]
      }]
    }
  }
}