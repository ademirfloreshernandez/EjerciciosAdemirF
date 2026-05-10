class Material {

    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    mostrarInfo() {

        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Disponible: " + this.disponible);
    }

    prestar() {

        if (this.disponible) {

            this.disponible = false;

            console.log("Material prestado correctamente.");

        } else {
            console.log("El material no está disponible.");
        }
    }

    devolver() {

        if (!this.disponible) {

            this.disponible = true;

            console.log("Material devuelto correctamente.");

        } else {
            console.log("El material ya estaba disponible.");
        }
    }
}

module.exports = Material;