module.exports = class Button {
    constructor() {
        this.type      = 2;
        this.style     = null;
        this.custom_id = null;
        this.emoji     = null;
        this.url       = null;
        this.disabled  = null;
    }

    /**
     * Puts style in the button
     * @param {'PRIMARY'|'SECONDARY'|'SUCCESS'|'DANGER'|'LINK'} style Button style
     * @returns {Button}
     */
    setStyle(style) {
        switch(style.toUpperCase()) {
            case 'PRIMARY': return this.style = 1;
            case 'SECONDARY': return this.style = 2;
            case 'SUCCESS': return this.style = 3;
            case 'DANGER': return this.style = 4;
            case 'LINK': return this.style = 5;
            default: throw new Error('Invalid style! Please, choose: \'PRIMARY\', \'SECONDARY\', \'SUCCESS\', \'DANGER\', \'LINK\'');
        }
    }

    /**
     * Puts a text in the button
     * @param {string} label Button text
     * @returns {Button}
     */
    setLabel(label) {
        return this.label = label;
    }

    /**
     * Sets a button ID
     * @param {string} customID Button ID
     * @returns {Button}
     */
    setCustomID(customID) {
        return this.custom_id = customID;
    }
    
    /**
     * Puts a emoji in the button
     * @param {string} emoji Button emoji
     * @returns {Button}
     */
    setEmoji(emoji) {
        return this.emoji = emoji;
    }

    /**
     * Sets the button URL (if button style be 'LINK')
     * @param {string} url Button URL
     * @returns {Button}
     */

    setURL(url) {
        if(this.style !== 5) throw new Error(`The button style must be 'LINK'`);
        else return this.url = url;
    }

    /**
     * Disables the button
     * @param {boolean} disabled
     * @returns {Button}
     */
    setDisabled() {
        return this.disabled = true;
    }
    /**
     * Build the button
     * @param {string|object} content Message or embed that will be send with button
     * @param {object} file File that will be send with button
     */
    build(content = '', file) {
        switch(typeof content) {
            case 'string':
                if(file?.file && file?.name) {
                    return {
                        content,
                        components: [
                            {
                                type: 1,
                                components: [this]
                            }
                        ]
                    }, {
                        file: file.file,
                        name: file.name
                    }
                }
                else return {
                    content,
                    components: [
                        {
                            type: 1,
                            components: [this]
                        }
                    ]
                }
            case 'object':
                return Object.assign(content, {
                    components: [
                        {
                            type: 1,
                            components: [this]
                        }
                    ]
                });
        }
    }
}