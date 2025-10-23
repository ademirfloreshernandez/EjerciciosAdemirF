const readline = require('readline-sync');

let num1 = parseInt(readline.question("Ingrese el primer número: "));
let num2 = parseInt(readline.question("Ingrese el segundo número: "));

if (num1 > num2) {
  console.log("Suma: " + (num1 + num2));
} else if (num2 > num1) {
  console.log("Suma: " + (num2 + num1));
} else {
  console.log("Producto: " + (num1 * num2));
}
