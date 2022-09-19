const ColorResolver = require('../util/ColorResolver.js')

module.exports = class Embed {
    constructor() {
        this.author = null
        this.title = null
        this.url = null
        this.description = null
        this.fields = []
        this.image = null
        this.thumbnail = null
        this.timestamp = null
        this.footer = null
        this.color = null
    }
    /**
     * Adds a author to your embed
     * @param {string} name Embed author
     * @param {string} iconURL Author's avatar of the embed
     * @param {string} url URL
     * @returns {Embed}
     */
    setAuthor(name, icon_url, url) {
        this.author = { name, icon_url, url }
        return this
    }
    /**
     * Adds a title to your embed
     * @param {string} title Embed title
     * @returns {Embed}
     */
    setTitle(title) {
        this.title = title
        return this
    }
    /**
     * Adds a description to your embed
     * @param {string} description Embed description
     * @returns {Embed}
     */
    setDescription(description) {
        this.description = description.toString().substring(0, 2048)
        return this
    }
    /**
     * Adds a color to your embed
     * @param {string} color Embed color
     * @returns {Embed}
     */
    setColor(color) {
        this.color = ColorResolver.resolve(color)
        return this
    }
    /**
     * Adds a field to your embed
     * @param {string} name Field name
     * @param {string} value Field value
     * @param {boolean} inline 
     * @returns {Embed}
     */
    addField(name, value, inline = false) {
        this.fields.push({
            name: name.toString().substring(0, 256),
            value: value.toString().substring(0, 1024),
            inline
        })
        return this
    }
    /**
     * Adds a thumbnail to your embed
     * @param {string} url Image URL
     * @returns {Embed}
     */
    setThumbnail(url) {
        this.thumbnail = { url }
        return this
    }
    /**
     * Adds a imagem to your embed
     * @param {string} url Image URL
     */
    setImage(url) {
        this.image = { url }
        return this
    }
    /**
     * Adds a URL to your embed
     * @param {string} url URL
     * @returns {Embed}
     */
    setURL(url) {
        this.url = url
        return this
    }
    /**
     * Adds a timestamp to your embed
     * @param {number} timestamp Embed timestamp
     * @returns {Embed}
     */
    setTimestamp(timestamp = new Date()) {
        this.timestamp = timestamp
        return this
    }
    /**
     * Adds a footer to your embed
     * @param {string} text Footer text
     * @param {string} iconURL Footer icon
     * @returns {Embed}
     */
    setFooter(text, iconURL) {
        this.footer = {
            text: text.toString().substring(0, 2048),
            icon_url: iconURL
        }
        return this
    }
    /**
     * Removes elements from an array
     * @param {number} start The zero-based location in the array from which to start removing elements.
     * @param {number} deleteCount The number of elements to remove
     */
    spliceFields(start, deleteCount) {
        this.fields.splice(start, deleteCount)
        return this
    }
    /**
     * Replaces a field for another field
     * @param {number} pos Array position to be replaced
     * @param {string} name New array name
     * @param {string} value New array value
     * @param {boolean} inline 
     */
    replaceField(pos, name, value, inline = false) {
        this.fields[pos] = { name, value, inline }
        return this
    }
    /**
     * Build embed
     * @param {string} content Message content
     * @returns {Embed}
     */
    build(content = '') {
        return { content, embeds: [this] }
    }
}