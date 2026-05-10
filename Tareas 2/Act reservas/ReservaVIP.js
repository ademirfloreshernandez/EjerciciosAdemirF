const Reserva = require("./Reserva");

class ReservaVIP extends Reserva {

    constructor(
        nombre,
        numPersonas,
        fecha,
        hora,
        beneficio
    ) {

        super(nombre, numPersonas, fecha, hora);

        this.tipo = "VIP";

        this.beneficio = beneficio;
    }

    mostrarInfo() {

        return `
${super.mostrarInfo()}
Tipo: ${this.tipo}
Beneficio: ${this.beneficio}
        `;
    }
}

module.exports = ReservaVIP;