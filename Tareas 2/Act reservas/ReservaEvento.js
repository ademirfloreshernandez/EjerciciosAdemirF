const Reserva = require("./Reserva");

class ReservaEvento extends Reserva {

    constructor(
        nombre,
        numPersonas,
        fecha,
        hora,
        tipoEvento,
        areaExclusiva
    ) {

        super(nombre, numPersonas, fecha, hora);

        this.tipo = "Evento";

        this.tipoEvento = tipoEvento;

        this.areaExclusiva = areaExclusiva;
    }

    mostrarInfo() {

        return `
${super.mostrarInfo()}
Tipo: ${this.tipo}
Evento: ${this.tipoEvento}
Área: ${this.areaExclusiva}
        `;
    }
}

module.exports = ReservaEvento;