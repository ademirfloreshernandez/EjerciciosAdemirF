// Ejercicio 6
let suma = 0;
let num;

do {
  num = parseInt(prompt("Ingresa un número (0 para salir):"));
  suma += num;
} while (num !== 0);

alert(`La suma de los números es: ${suma}`);
