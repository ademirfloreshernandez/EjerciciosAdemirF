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

            console.log(`Retiro realizado. Saldo actual: $${this.saldo}`);

        } else {
            console.log("Fondos insuficientes.");
        }
    }
}

module.exports = Cuenta;