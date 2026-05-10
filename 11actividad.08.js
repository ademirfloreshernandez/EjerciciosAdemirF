class ErrorLibroNoDisponible extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorLibroNoDisponible";
    }
}

class ErrorValidacion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorValidacion";
    }
}

class Material {
    constructor(titulo, autor) {
        if (!titulo || titulo.trim() === "") {
            throw new ErrorValidacion("El título no puede estar vacío");
        }

        if (!autor || autor.trim().length < 3) {
            throw new ErrorValidacion("El autor debe tener al menos 3 caracteres");
        }

        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    mostrarInfo() {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Disponible: " + (this.disponible ? "Sí" : "No"));
        console.log("----------------------------");
    }

    prestar() {
        if (!this.disponible) {
            throw new ErrorLibroNoDisponible("El libro ya está prestado");
        }
        this.disponible = false;
        console.log("El material fue prestado");
    }

    devolver() {
        this.disponible = true;
        console.log("El material fue devuelto");
    }
}

class Libro extends Material {
    constructor(titulo, autor, numeroPaginas) {
        super(titulo, autor);
        this.numeroPaginas = numeroPaginas;
    }
}

class Revista extends Material {
    constructor(titulo, autor, edicion) {
        super(titulo, autor);
        this.edicion = edicion;
    }
}

try {
    let biblioteca = [];

    let libro1 = new Libro("Cálculo", "St2", 1200);
    let libro2 = new Libro("HP", "JK1", 350);

    let revista1 = new Revista("National Geographic", "Varios", 202);

    biblioteca.push(libro1);
    biblioteca.push(libro2);
    biblioteca.push(revista1);

    biblioteca.forEach(material => {
        material.mostrarInfo();
    });

    libro1.prestar();
    libro1.prestar();

} catch (error) {
    if (error instanceof ErrorLibroNoDisponible) {
        console.error("Error de disponibilidad:", error.message);
    } else if (error instanceof ErrorValidacion) {
        console.error("Error de validación:", error.message);
    } else {
        console.error("Error inesperado:", error.message);
    }
}