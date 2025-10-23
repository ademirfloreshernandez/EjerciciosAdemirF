// Ejercicio 3
let alumnos = parseInt(prompt("Ingresa el número de alumnos:"));
let costoPorAlumno;
let total;

if (alumnos >= 100) {
  costoPorAlumno = 65;
  total = alumnos * costoPorAlumno;
} else if (alumnos >= 50 && alumnos <= 99) {
  costoPorAlumno = 70;
  total = alumnos * costoPorAlumno;
} else if (alumnos >= 30 && alumnos <= 49) {
  costoPorAlumno = 95;
  total = alumnos * costoPorAlumno;
} else {
  total = 4000;
  costoPorAlumno = total / alumnos;
}

alert(`Pago total a la compañía: $${total}\nCada alumno debe pagar: $${costoPorAlumno.toFixed(2)}`);
