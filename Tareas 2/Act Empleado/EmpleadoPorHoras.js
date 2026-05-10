const Empleado = require("./Empleado");

class EmpleadoPorHoras extends Empleado {

    #horasTrabajadas;

    #pagoPorHora;

    constructor(
        rfc,
        nombre,
        pagoPorHora,
        horasTrabajadas,
        pagoHoraExtra,
        horasExtra
    ) {

        super(
            rfc,
            nombre,
            0,
            pagoHoraExtra,
            horasExtra
        );

        this.#horasTrabajadas = horasTrabajadas;

        this.#pagoPorHora = pagoPorHora;
    }

    calcularSueldoBruto() {

        return (
            (this.#horasTrabajadas * this.#pagoPorHora)
            + this.calcularHorasExtra()
        );
    }
}

module.exports = EmpleadoPorHoras;