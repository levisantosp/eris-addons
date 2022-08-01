const ColorResolver = require('../util/ColorResolver.js');

module.exports = class Embed {
    constructor() {
        this.author      = null;
        this.title       = null;
        this.url         = null;
        this.description = null;
        this.fields      = [];
        this.image       = null;
        this.thumbnail   = null;
        this.timestamp   = null;
        this.footer      = null;
        this.color       = null;
    }
    /**
     * Adds a author to your embed
     * @param {string} name Embed author
     * @param {string} iconURL Author's avatar of the embed
     * @param {string} url URL
     * @returns {Embed}
     */
    setAuthor(name, icon_url, url) {
        return this.author = {name, icon_url, url}
    }
    /**
     * Adds a title to your embed
     * @param {string} title Embed title
     * @returns {Embed}
     */
    setTitle(title) {
        return this.title = title;
    }
    /**
     * Adds a description to your embed
     * @param {string} description Embed description
     * @returns {Embed}
     */
    setDescription(description) {
        return this.description = description.toString().substring(0, 2048);
    }
    /**
     * Adds a color to your embed
     * @param {string} color Embed color
     * @returns {Embed}
     */
    setColor(color) {
        return this.color = ColorResolver.resolve(color);
    }
    /**
     * Adds a field to your embed
     * @param {string} name Field name
     * @param {string} value Field value
     * @param {boolean} inline 
     * @returns {Embed}
     */
    addField(name, value, inline = false) {
        return this.fields.push({
            name: name.toString().substring(0, 256),
            value: value.toString().substring(0, 1024),
            inline: inline
        });
    }
    /**
     * Adds a thumbnail to your embed
     * @param {string} url Image URL
     * @returns {Embed}
     */
    setThumbnail(url) {
        return this.thumbnail = {url}
    }
    /**
     * Adds a imagem to your embed
     * @param {string} url Image URL
     */
    setImage(url) {
        return this.image = {url};
    }
    /**
     * Adds a URL to your embed
     * @param {string} url URL
     * @returns {Embed}
     */
    setURL(url) {
        return this.url = url;
    }
    /**
     * Adds a timestamp to your embed
     * @param {number} timestamp Embed timestamp
     * @returns {Embed}
     */
    setTimestamp(timestamp = new Date()) {
        return this.timestamp = timestamp;
    }
    /**
     * Adds a footer to your embed
     * @param {string} text Footer text
     * @param {string} iconURL Footer icon
     * @returns {Embed}
     */
    setFooter(text, iconURL) {
        return this.footer = {
            text: text.toString().substring(0, 2048),
            icon_url: iconURL
        }
    }
    /**
     * Removes elements from an array
     * @param {number} start The zero-based location in the array from which to start removing elements.
     * @param {number} deleteCount The number of elements to remove
     */
    spliceFields(start, deleteCount) {
        return this.fields.splice(start, deleteCount);
    }
    /**
     * Replaces a field for another field
     * @param {number} pos Array position to be replaced
     * @param {string} name New array name
     * @param {string} value New array value
     * @param {boolean} inline 
     */
    replaceField(pos, name, value, inline = false) {
        this.fields[pos] = {name, value, inline}
        return this;
    }
    /**
     * Build embed
     * @param {string} content Message content
     * @returns {Embed}
     */
    build(content = '') {
        return {content, embeds: [this]}
    }
}