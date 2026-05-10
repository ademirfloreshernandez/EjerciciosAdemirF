const CuentaAhorro = require("./CuentaAhorro");
const CuentaCorriente = require("./CuentaCorriente");
const Cliente = require("./Cliente");


// Crear cuentas
let ahorro = new CuentaAhorro("A123", 10000, 0.05);

let corriente = new CuentaCorriente("C456", 5000, 300);


// Crear clientes
let cliente1 = new Cliente("Wazita", "001", ahorro);

let cliente2 = new Cliente("Ademir", "002", corriente);


// Arreglo de clientes
let clientes = [cliente1, cliente2];


// Mostrar información
clientes.map(cliente => cliente.mostrarInfo());


// Operaciones
ahorro.depositar(500);

ahorro.aplicarInteres();

ahorro.retirar(200);


corriente.retirar(700);

corriente.retirar(200);