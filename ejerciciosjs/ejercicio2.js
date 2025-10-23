const readline = require('readline-sync');

let edadd = parseInt(readline.question("Escriba su edad: "));

if (edadd >= 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}