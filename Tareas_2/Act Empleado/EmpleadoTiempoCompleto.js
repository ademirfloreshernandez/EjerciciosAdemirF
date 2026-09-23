const Empleado = require("./Empleado");

class EmpleadoTiempoCompleto extends Empleado {

    #bono;

    constructor(
        rfc,
        nombre,
        sueldoBase,
        pagoHoraExtra,
        horasExtra,
        bono
    ) {

        super(
            rfc,
            nombre,
            sueldoBase,
            pagoHoraExtra,
            horasExtra
        );

        this.#bono = bono;
    }

    calcularSueldoBruto() {

        return super.calcularSueldoBruto() + this.#bono;
    }
}

module.exports = EmpleadoTiempoCompleto;