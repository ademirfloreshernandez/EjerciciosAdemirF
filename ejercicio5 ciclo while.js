// Ejercicio 5
let numero = 0;

while (numero < 1 || numero > 5) {
  numero = parseInt(prompt("Ingresa un número entre 1 y 5:"));
}

alert(`Número válido ingresado: ${numero}`);
