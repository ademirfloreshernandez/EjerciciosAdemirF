// Ejercicio 7
let contadorPares = 0;
let n;

while (true) {
  n = parseInt(prompt("Ingresa un número par (impar para salir):"));
  if (n % 2 !== 0) {
    break;
  }
  contadorPares++;
}

alert(`Cantidad de números pares ingresados: ${contadorPares}`);
