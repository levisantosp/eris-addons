module.exports = class Attachment {

    constructor(file,name){
         /**
     * Puts file of the Attachment
     * @param {Buffer,string} file Attachment name
     * @returns {Attachment}
     */
        this.file = file;
        /**
     * Puts name of the Attachment
     * @param {string} name Attachment name
     * @returns {Attachment}
     */

        this.name = name;
    }
      /**
     * Puts name of the Attachment
     * @param {string} name Attachment name
     * @returns {Attachment}
     */

    setName(name){
        this.name = name;
    }
     /**
     * Puts file of the Attachment
     * @param {Buffer,string} file Attachment name
     * @returns {Attachment}
     */
    
    setFile(file){
        this.file = file
    }

}   