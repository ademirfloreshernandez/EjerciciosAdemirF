const PersonalMedico = require("./PersonalMedico");

const Doctor = require("./Doctor");

const Enfermero = require("./Enfermero");


// Crear objetos
let doctor = new Doctor(
    "P1",
    "Ademir",
    "Cirugía",
    "CirujanoGUAPO"
);

let enfermero = new Enfermero(
    "Z1",
    "elalambrito",
    "Pediatría",
    "Matutino"
);


// Agregar al registro
PersonalMedico.agregarPersonal(doctor);

PersonalMedico.agregarPersonal(enfermero);


// Mostrar información
PersonalMedico.registro.forEach(personal => {

    personal.mostrar();

    console.log("----------------------");
});