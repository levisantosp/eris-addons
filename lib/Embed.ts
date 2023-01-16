import { EmbedAuthorOptions, EmbedField, EmbedImageOptions, EmbedFooterOptions } from 'eris'

export default class Embed {
  public author?: EmbedAuthorOptions
  public title?: string
  public url?: string
  public description?: string
  public fields?: EmbedField[]
  public image?: EmbedImageOptions
  public thumbnail?: EmbedImageOptions
  public timestamp?: Date
  public footer?: EmbedFooterOptions
  public color?: number

  public constructor() {

  }

  /**
   * Sets the embed author
   * @param name Embed author's name
   * @param icon_url Embed author's icon URL
   * @param url Embed author's URL
   * @returns 
   */
  public setAuthor(name: string, icon_url?: string, url?: string) {
    this.author = { name, icon_url, url }
    return this
  }

  /**
   * Sets the embed title
   * @param title Embed title
   * @returns 
   */
  public setTitle(title: string) {
    this.title = title
    return this
  }

  /**
   * Sets the embed URL
   * @param url Embed URL
   * @returns 
   */
  public setURL(url: string) {
    this.url = url
    return this
  }

  /**
   * Sets the embed description
   * @param description Embed description
   * @returns 
   */
  public setDescription(description: string) {
    this.description = description
    return this
  }
  
  /**
   * Removes all fields and sets a new field
   * @param name Embed field name
   * @param value Embed field value
   * @param inline 
   * @returns 
   */
  public setField(name: string, value: string, inline?: boolean) {
    this.fields = [{ name, value, inline }]
    return this
  }

  /**
   * Removes all fields and sets a new fields
   * @param fields Embed fields
   * @returns 
   */
  public setFields(fields: EmbedField[]) {
    this.fields = fields
    return this
  }

  /**
   * Adds a new field
   * @param name Embed field name
   * @param value Embed field value
   * @param inline 
   * @returns 
   */
  public addField(name: string, value: string, inline?: boolean) {
    this.fields?.push({ name, value, inline })
    return this
  }
  
  /**
   * Adds a new fields
   * @param fields Embed fields
   * @returns 
   */
  public addFields(fields: EmbedField[]) {
    fields.forEach(field => {
      this.fields?.push(field)
    })
    return this
  }

  /**
   * Replaces a field for other
   * @param pos Field position that will be replaced
   * @param name Embed field name
   * @param value Embed field value
   * @param inline 
   * @returns 
   */
  public replaceField(pos: number, field: EmbedField) {
    this.fields![pos] = field
    return this
  }

  /**
   * Splices one or more fields
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove
   * @param fields New Fields
   * @returns 
   */
  public spliceFields(start: number, deleteCount: number, field: EmbedField) {
    this.fields?.splice(start, deleteCount, field)
    return this
  }

  /**
   * Sets the embed image
   * @param url Image URL
   * @returns 
   */
  public setImage(url: string) {
    this.image = { url }
    return this
  }

  /**
   * Sets the embed thumbnail
   * @param url Thumbnail URL
   * @returns 
   */
  public setThumbnail(url: string) {
    this.thumbnail = { url }
    return this
  }

  /**
   * Sets the embed color
   * @param color Hexadecimal color for embed
   * @returns 
   */
  public setColor(color: string) {
    this.color = parseInt(color.toUpperCase().replace('#', ''), 16)
    return this
  }

  /**
   * Sets the embed timestamp
   * @param timestamp The embed timestamp
   * @returns 
   */
  public setTimestamp(timestamp?: Date) {
    if (!timestamp) timestamp = new Date()
    this.timestamp = timestamp
    return this
  }

  /**
   * Sets the embed footer
   * @param text Footer text
   * @param icon_url Footer icon
   * @returns 
   */
  public setFooter(text: string, icon_url?: string) {
    this.footer = { text, icon_url }
    return this
  }

  /**
   * Builds the embed
   * @param content Message content
   * @returns 
   */
  public build(content?: string) {
    return {
      content,
      embed: this
    }
  }
}