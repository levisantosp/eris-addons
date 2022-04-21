const {Constants} = require("eris");

module.exports = class Button {
    constructor() {
        this.type = Constants.ComponentTypes.ACTION_ROW
        this.components = [{
            type: Constants.ComponentTypes.BUTTON,
            style: null,
            custom_id: null,
            emoji: null,
            url: null,
            disabled: null,
        }];
    }

    /**
     * @param {"BLUE"|"GRAY"|"GREEN"|"RED"|"LINK"} style Component style
     * @returns {Button}
     */
    setStyle(style) {
        switch(style.toUpperCase()) {
            case "BLUE": return this.components[0].style = Constants.ButtonStyles.PRIMARY;
            case "GRAY": return this.components[0].style = Constants.ButtonStyles.SECONDARY;
            case "GREEN": return this.components[0].style = Constants.ButtonStyles.SUCCESS;
            case "RED": return this.components[0].style = Constants.ButtonStyles.DANGER;
            case "LINK": return this.components[0].style = Constants.ButtonStyles.LINK;
            default: throw new Error("Invalid style! Please, choose: \"BLUE\", \"GRAY\", \"GREEN\", \"RED\", \"LINK\"");
        }
    }

    /**
     * @param {string} label Button text
     * @returns {Button}
     */
    setLabel(label) {
        return this.components[0].label = label;
    }

    /**
     * @param {string} customID Button ID
     * @returns {Button}
     */
    setCustomID(customID) {
        return this.components[0].custom_id = customID;
    }
    
    /**
     * @param {string} emoji Button emoji
     * @returns {Button}
     */
    setEmoji(emoji) {
        return this.components[0].emoji = emoji;
    }

    /**
     * @param {string} url Button URL
     * @returns {Button}
     */

    setURL(url) {
        if (this.components[0].style !== 5) throw new Error(`The button style must be "LINK"`);
        else return this.components[0].url = url;
    }

    /**
     * @param {boolean} disabled
     * @returns {Button}
     */
    setDisabled(disabled = true) {
        if (typeof disabled !== "boolean") throw new Error("This field must be a boolean");
        else return this.components[0].disabled = disabled;
    }
}