const readline = require('readline-sync');

let indice = parseFloat(readline.question("Ingrese el índice de contaminación: "));

if (indice === 37) {
  console.log("El índice de contaminación es aceptable");
} else if (indice >= 38 && indice <= 54) {
  console.log("El índice de contaminación es desagradable");
} else if (indice >= 55) {
  console.log("El índice de contaminación es peligroso");
}
