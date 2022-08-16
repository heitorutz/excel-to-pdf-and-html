const fs = require('fs');
const util = require('util');

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async write(filename, data) {
        return await this.writer(filename, data);
    }
}

module.exports = Writer;  