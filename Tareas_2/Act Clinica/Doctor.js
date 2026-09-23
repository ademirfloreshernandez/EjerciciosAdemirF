const PersonalMedico = require("./PersonalMedico");

class Doctor extends PersonalMedico {

    constructor(id, nombre, departamento, especialidad) {
        super(id, nombre, departamento);

        this.especialidad = especialidad;
    }

    mostrar() {

        console.log(`ID: ${this.id}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Departamento: ${this.departamento}`);
        console.log(`Especialidad: ${this.especialidad}`);
    }
}

module.exports = Doctor;