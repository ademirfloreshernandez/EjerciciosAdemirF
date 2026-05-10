const Material = require("./Material");

class Libro extends Material {

    constructor(titulo, autor, numeroPaginas) {
        super(titulo, autor);

        this.numeroPaginas = numeroPaginas;
    }

    mostrarInfo() {

        super.mostrarInfo();

        console.log("Número de páginas: " + this.numeroPaginas);
    }
}

module.exports = Libro;