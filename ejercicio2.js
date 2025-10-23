// Ejercicio 2 
let edad = parseInt(prompt("Ingresa la edad:"));
let nota = parseFloat(prompt("Ingresa la nota:"));
let sexo = prompt("Ingresa el sexo (M/F):").toUpperCase();

if (nota >= 5 && edad >= 18 && sexo === "M") {
  alert("Solicitud POSIBLE");
} else if (nota >= 5 && edad >= 18 && sexo === "F") {
  alert("Solicitud ACEPTADA");
} else {
  alert("Solicitud NO ACEPTADA");
}
