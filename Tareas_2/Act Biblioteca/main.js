const Libro = require("./Libro");
const Revista = require("./Revista");


// Arreglo de biblioteca
const biblioteca = [];


// Agregar materiales
biblioteca.push(
    new Libro(
        "Cien Años de Soledad",
        "Ademir Flores Hernández",
        471
    )
);

biblioteca.push(
    new Revista(
        "National Geographic",
        "Varios",
        202
    )
);

biblioteca.push(
    new Libro(
        "El Principito",
        "Antoine de Saint-Exupéry",
        96
    )
);


// Mostrar información
for (let material of biblioteca) {

    material.mostrarInfo();

    console.log("----------------------");
}


// Prestar material
biblioteca[0].prestar();

biblioteca[0].mostrarInfo();

console.log("----------------------");


// Devolver material
biblioteca[0].devolver();

biblioteca[0].mostrarInfo();