const Material = require("./Material");

class Revista extends Material {

    constructor(titulo, autor, edicion) {
        super(titulo, autor);

        this.edicion = edicion;
    }

    mostrarInfo() {

        super.mostrarInfo();

        console.log("Edición: " + this.edicion);
    }
}

module.exports = Revista;