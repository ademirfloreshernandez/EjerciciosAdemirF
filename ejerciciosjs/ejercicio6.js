const readline = require('readline-sync');

let edad = parseFloat(readline.question("Ingrese su edad: "));

let horas_dia = 8;
let anios = 365;
let horas_totales = horas_dia * anios * edad;

console.log("Horas dormidas en un año: " + horas_totales);
