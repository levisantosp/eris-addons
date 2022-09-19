module.exports = class SelectMenu {
    constructor() {
        this.type        = 3
        this.customID    = null
        this.placeholder = null
        this.options     = []
        this.min_values  = null
        this.max_values  = null
        this.disabled    = null
    }

    /**
     * Puts a placeholder in menu
     * @param {string} placeholder Select menu placeholder
     * @returns {SelectMenu}
     */
    setPlaceholder(placeholder) {
        this.placeholder = placeholder
        return this
    }

    /**
     * Adds a option in menu
     * @param {string} label Select menu text
     * @param {string} description Select menu description
     * @param {string} value Select menu value
     * @param {string} emoji Select menu emoji (ifthe emoji is customized, put the emoji id)
     * @returns {SelectMenu}
     */
    addOption(label, description, value, emoji) {
        if (isNaN(emoji)) this.options.push({ label, description, value, emoji: { name: emoji } })
        else this.options.push({ label, description, value, emoji: { id: emoji } })
        return this
    }

    /**
     * Sets the minimum values that will be selected
     * @param {number} number Minimum amount of selections the user can make
     * @returns {SelectMenu}
     */
    setMinValues(number = 1) {
        this.min_values = number
        return this
    }

    /**
     * Sets the maximum values that will be selected
     * @param {number} number Maximum amount of selections the user can make
     * @returns {SelectMenu}
     */
    setMaxValues(number = 1) {
        this.max_values = number
        return this
    }
    /**
     * Disables the menu
     * @returns {SelectMenu}
     */
    setDisabled() {
        this.disabled = true
        return this
    }

    /**
     * Sets a menu ID
     * @param {string} customID Select menu ID
     * @returns {SelectMenu}
     */
    setCustomID(customID) {
        this.custom_id = customID
        return this
    }

    /**
     * Build the menu
     * @param {string|object} content Message or embed that will be send with menu
     * @param {object} file File that will be send with menu
     */
    build(content = '', file) {
        switch (typeof content) {
            case 'string':
                if (file?.file && file?.name) {
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
                })
        }
    }
}