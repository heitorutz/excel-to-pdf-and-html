class Table {

    constructor(array) {
        this.header = array[0];
        array.shift(); // deleta o primeiro elemento do array
        this.rows = array;
    }

    get rowCount() { // transforma esse método em um atributo
        return this.rows.length;
    }

    get columnCount() {
        return this.header.length;
    }
}

module.exports = Table;