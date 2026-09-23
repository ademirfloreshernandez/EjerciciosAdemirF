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

module.exports = Cliente;