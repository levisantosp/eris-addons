const ColorResolver = require("../util/ColorResolver.js");

module.exports = class Embed {
    constructor() {
        this.author = null;
        this.title = null;
        this.url = null;
        this.description = null;
        this.fields = [];
        this.image = null;
        this.thumbnail = null;
        this.timestamp = null;
        this.footer = null;
        this.color = null;
    }
    /**
     * 
     * @param {string} name Embed author
     * @param {string} iconURL Author's avatar of the embed
     * @param {string} url URL
     * @returns {Embed}
     */
    setAuthor(name, icon_url, url) {
        return this.author = {name, icon_url, url}
    }
    /**
     * 
     * @param {string} title Embed title
     * @returns {Embed}
     */
    setTitle(title) {
        return this.title = title;
    }
    /**
     * 
     * @param {string} description Embed description
     * @returns {Embed}
     */
    setDescription(description) {
        return this.description = description.toString().substring(0, 2048);
    }
    /**
     * 
     * @param {string} color Embed color
     * @returns {Embed}
     */
    setColor(color) {
        return this.color = ColorResolver.resolve(color);
    }
    /**
     * 
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
     * 
     * @param {string} url URL
     * @returns {Embed}
     */
    setThumbnail(url) {
        return this.thumbnail = {url}
    }
    /**
     * 
     * @param {string} url URL
     * @returns {Embed}
     */
    setURL(url) {
        return this.url = url;
    }
    /**
     * 
     * @param {number} timestamp Embed timestamp
     * @returns {Embed}
     */
    setTimestamp(timestamp = new Date()) {
        return this.timestamp = timestamp;
    }
    /**
     * 
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
     * 
     * @param {string} content Content message
     * @returns {Embed}
     */
    build(content = "") {
        return {content, embeds: [this]}
    }
}