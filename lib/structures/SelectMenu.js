const {Constants} = require("eris");

module.exports = class SelectMenu {
    constructor() {
        this.type = Constants.ComponentTypes.ACTION_ROW;
        this.components = [{
            type: Constants.ComponentTypes.SELECT_MENU,
            custom_id: null,
            placeholder: null,
            options: [],
            min_values: null,
            max_values: null,
            disabled: null
        }];
    }

    /**
     * @param {string} placeholder Select menu placeholder
     * @returns {SelectMenu}
     */
    setPlaceholder(placeholder) {
        return this.components[0].placeholder = placeholder;
    }

    /**
     * @param {string} label Select menu text
     * @param {string} description Select menu description
     * @param {string} value Select menu value
     * @param {string} emoji Select menu emoji (if the emoji is customized, put the emoji id)
     * @returns {SelectMenu}
     */
    addOption(label, description, value, emoji) {
        if (isNaN(emoji)) return this.components[0].options.push({label, description, value, emoji: {name: emoji}});
        else return this.components[0].options.push({label, description, value, emoji: {id: emoji}});
    }
    
    /**
     * @param {number} number Minimum amount of selections the user can make
     * @returns {SelectMenu}
     */
    setMinValues(number = 1) {
        return this.components[0].min_values = number
    }

    /**
     * @param {number} number Maximum amount of selections the user can make
     * @returns {SelectMenu}
     */
    setMaxValues(number = 1) {
        return this.components[0].max_values = number;
    }
    /**
     * 
     * @param {boolean} disabled 
     * @returns {SelectMenu}
     */
    setDisabled(disabled = true) {
        return this.components[0].disabled = disabled;
    }

    /**
     * @param {string} customID Select menu ID
     * @returns {SelectMenu}
     */
    setCustomID(customID) {
        return this.components[0].custom_id = customID;
    }
}