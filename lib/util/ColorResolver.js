module.exports = class ColorResolver {
    /**
     * 
     * @param {string} color 
     * @returns 
     */
    static resolve(color) {
        if (typeof color !== "string") throw new Error("The color type must be a string");
        return parseInt(color.toUpperCase().replace("#", ""), 16);
    }
}