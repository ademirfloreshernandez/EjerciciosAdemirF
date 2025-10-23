const readline = require('readline-sync');

let numer = parseFloat(readline.question("Escriba un número: "));

if (numer === 0) {
  console.log("Su número tiene un valor de cero");
} else {
  if (numer > 0) {
    console.log("Su número es positivo");
  } else {
    console.log("Su número es negativo");
  }
}
