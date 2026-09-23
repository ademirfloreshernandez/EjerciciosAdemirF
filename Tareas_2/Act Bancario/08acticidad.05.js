class Cuenta {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
        console.log(`Depósito realizado. Saldo actual: $${this.saldo}`);
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro realizado jejeje. Saldo actual noob: $${this.saldo}`);
        } else {
            console.log("Fondos insuficientes.");
        }
    }
}

class CuentaAhorro extends Cuenta {
    constructor(numeroCuenta, saldo, tasaInteres) {
        super(numeroCuenta, saldo);
        this.tasaInteres = tasaInteres;
    }

    
    aplicarInteres() {
        let interes = this.saldo * this.tasaInteres;
        this.saldo += interes;
        console.log(`Interés aplicado. Saldo actual: $${this.saldo}`);
    }
}

class CuentaCorriente extends Cuenta {
    constructor(numeroCuenta, saldo, limiteSobregiro) {
        super(numeroCuenta, saldo);
        this.limiteSobregiro = limiteSobregiro;
    }

    
    retirar(monto) {
        if (this.saldo - monto >= -this.limiteSobregiro) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Saldo actual: $${this.saldo}`);
        } else {
            console.log("Límite de sobregiro excedido.");
        }
    }
}


class Cliente {
    constructor(nombre, id, cuenta) {
        this.nombre = nombre;
        this.id = id;
        this.cuenta = cuenta;
    }

    mostrarInfo() {
        console.log(`Cliente: ${this.nombre}`);
        console.log(`ID: ${this.id}`);
        console.log(`Cuenta: ${this.cuenta.numeroCuenta}`);
        console.log(`Saldo: $${this.cuenta.saldo}`);
    }
}

let ahorro = new CuentaAhorro("A123", 10000, 0.05);
let corriente = new CuentaCorriente("C456", 5000, 300);

let cliente1 = new Cliente("Wazita", "001", ahorro);
let cliente2 = new Cliente("Ademir", "002", corriente);

let clientes = [cliente1, cliente2];

clientes.map(c => c.mostrarInfo());

ahorro.depositar(500);
ahorro.aplicarInteres();
ahorro.retirar(200);

corriente.retirar(700);
corriente.retirar(200);