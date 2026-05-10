import EmpleadoTiempoCompleto from './EmpleadoTiempoCompleto.js';
import EmpleadoPorHoras from './EmpleadoPorHoras.js';

const emp1 = new EmpleadoTiempoCompleto(
    "ABC123", "Juan Perez", 5000, 100, 5, 1000
);

const emp2 = new EmpleadoPorHoras(
    "XYZ789", "Ana Lopez", 80, 40, 50, 3
);

console.log("=== EMPLEADO TIEMPO COMPLETO ===");
emp1.mostrarAll();

console.log("\n=== EMPLEADO POR HORAS ===");
emp2.mostrarAll();