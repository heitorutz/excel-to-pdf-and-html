const fs = require('fs');
const util = require('util');

class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async read(filepath) {
        return await this.reader(filepath, 'utf-8');
    }
}

module.exports = Reader;