// Ejercicio 1
let base = parseFloat(prompt("Ingresa la base:"));
let exponente = parseInt(prompt("Ingresa el exponente:"));
let resultado;

if (exponente > 0) {
  resultado = base ** exponente;
} else if (exponente === 0) {
  resultado = 1;
} else {
  resultado = 1 / (base ** Math.abs(exponente));
}

alert(`El resultado de ${base}^${exponente} es: ${resultado}`);
