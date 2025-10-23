const readline = require('readline-sync');

let cal = parseInt(readline.question("Escriba una calificación: "));

if (cal >= 90 && cal <= 100) {
  console.log("Excelente");
} else {
  if (cal >= 70 && cal <= 89) {
    console.log("Bien");
  } else {
    console.log("Reprobado");
  }
}
