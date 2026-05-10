const Cuenta = require("./Cuenta");

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

module.exports = CuentaCorriente;