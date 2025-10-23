const readline = require('readline-sync');

let Numm = parseInt(readline.question("Ingrese un número: "));

if (Numm > 0) {
  if (Numm % 2 === 0) {
    console.log("El número es par y mayor que cero");
  } else {
    console.log("El número es impar y mayor que cero");
  }
} else {
  console.log("El número no es mayor que cero");
}
