const EmpleadoTiempoCompleto = require("./EmpleadoTiempoCompleto");

const EmpleadoPorHoras = require("./EmpleadoPorHoras");


// Crear empleados
const emp1 = new EmpleadoTiempoCompleto(
    "BAN4N423",
    "evelin jejeje",
    5000,
    100,
    5,
    1000
);

const emp2 = new EmpleadoPorHoras(
    "PAPOI283",
    "Ademir Flores",
    80,
    40,
    50,
    3
);


// Mostrar información
console.log("=== EMPLEADO TIEMPO COMPLETO ===");

emp1.mostrarAll();


console.log("\n=== EMPLEADO POR HORAS ===");

emp2.mostrarAll();