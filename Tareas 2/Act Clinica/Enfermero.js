const PersonalMedico = require("./PersonalMedico");

class Enfermero extends PersonalMedico {

    constructor(id, nombre, departamento, turno) {
        super(id, nombre, departamento);

        this.turno = turno;
    }

    mostrar() {

        console.log(`ID: ${this.id}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Departamento: ${this.departamento}`);
        console.log(`Turno: ${this.turno}`);
    }
}

module.exports = Enfermero;