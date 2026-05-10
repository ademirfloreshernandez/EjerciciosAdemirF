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

const biblioteca = [];

biblioteca.push(new Libro("Cien Años de Soledad", "Ademir Flores Hernández", 471));
biblioteca.push(new Revista("National Geographic", "Varios", 202));
biblioteca.push(new Libro("El Principito", "Antoine de Saint-Exupéry", 96));

for (let material of biblioteca) {
    material.mostrarInfo();
    console.log("----------------------");
}

biblioteca[0].prestar();
biblioteca[0].mostrarInfo();
console.log("----------------------");

biblioteca[0].devolver();
biblioteca[0].mostrarInfo();
