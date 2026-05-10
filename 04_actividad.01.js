const prompt = require("prompt-sync")();

class Estudiante  {
    constructor(nombre, matricula, promedio)
{
 this.nombre = nombre;
 this.matricula = matricula;
 this.promedio = promedio;

}

mostrarInformacion() {
console.log("Nombre:", this.nombre);
console.log("Matricula:", this.matricula);
console.log("Promedio", this.promedio);

}

mensajeAprobado() {
if (this.promedio >= 70){
console.log("Aprobado");

} else {
    console.log("Reprobado");
}

}

}

let nombre = prompt("Nombre:  ");
let matricula = prompt("Matricula:  ");
let promedio = parseFloat(prompt("Promedio:  "));

let alumno = new Estudiante(nombre,matricula, promedio);
alumno.mensajeAprobado();
