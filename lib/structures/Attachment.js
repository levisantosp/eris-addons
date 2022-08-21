const { Attachment } = require('eris-addons');
const { readFileSync } = require('fs')
module.exports = class Attachment {
  constructor(file, name) {
    /**
     * Puts file of the Attachment
     * @param {Buffer,string} file Attachment name
     * @returns {Attachment}
     */
    switch (Buffer.isBuffer(file)) {
      case true:
        this.file = file;
        console.log('true')
        break;
      case false:
        if (!file) return;
        this.file = readFileSync(file) ? readFileSync(file) : undefined;
        break;
    }
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
  setName(name) {
    this.name = name;
  }
  /**
   * Puts file of the Attachment
   * @param {Buffer,string} file Attachment name
   * @returns {Attachment}
   */
  setFile(file) {
    switch (Buffer.isBuffer(file)) {
      case true:
        this.file = file;
        console.log('true')
        break;
      case false:
        this.file = readFileSync(file) ? readFileSync(file) : undefined;
        break;
    }
  }
}