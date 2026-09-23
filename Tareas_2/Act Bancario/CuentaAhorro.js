const Cuenta = require("./Cuenta");

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

module.exports = CuentaAhorro;