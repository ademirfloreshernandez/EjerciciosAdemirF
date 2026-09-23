// PARTE 1: Clase base Material
class Material {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true; // inicialmente true
    }

    mostrarInfo() {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Disponible: " + (this.disponible ? "Sí" : "No"));
        console.log("----------------------------");
    }

    prestar() {
        this.disponible = false;
        console.log("El material fue prestado");
    }

    devolver() {
        this.disponible = true;
        console.log("El material fue devuelto");
    }
}

// PARTE 2: Herencia

// Clase Libro que hereda de Material
class Libro extends Material {
    constructor(titulo, autor, numeroPaginas) {
        super(titulo, autor);
        this.numeroPaginas = numeroPaginas;
    }
}

// Clase Revista que hereda de Material
class Revista extends Material {
    constructor(titulo, autor, edicion) {
        super(titulo, autor);
        this.edicion = edicion;
    }
}

// PARTE 3: Array biblioteca
let biblioteca = [];

// Crear objetos
let libro1 = new Libro("Cálculo", "Stewart", 1200);
let libro2 = new Libro("Harry Potter", "J.K. Rowling", 350);

let revista1 = new Revista("National Geographic", "Varios", 202);
let revista2 = new Revista("Muy Interesante", "Varios", 55);

// Guardarlos en el array
biblioteca.push(libro1);
biblioteca.push(libro2);
biblioteca.push(revista1);
biblioteca.push(revista2);

// Mostrar todos los materiales
biblioteca.forEach(material => {
    material.mostrarInfo();
});

// Probar prestar y devolver
libro1.prestar();
libro1.mostrarInfo();

libro1.devolver();
libro1.mostrarInfo();
