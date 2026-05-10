const Reserva = require("./Reserva");

class ReservaNormal extends Reserva {

    constructor(nombre, numPersonas, fecha, hora) {

        super(nombre, numPersonas, fecha, hora);

        this.tipo = "Normal";
    }

    mostrarInfo() {

        return `
${super.mostrarInfo()}
Tipo: ${this.tipo}
        `;
    }
}

module.exports = ReservaNormal;