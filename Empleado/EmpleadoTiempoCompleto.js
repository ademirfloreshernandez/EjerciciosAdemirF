import Empleado from './Empleado.js';

export default class EmpleadoTiempoCompleto extends Empleado {
    #bono;

    constructor(rfc, nombre, sueldoBase, pagoHoraExtra, horasExtra, bono) {
        super(rfc, nombre, sueldoBase, pagoHoraExtra, horasExtra);
        this.#bono = bono;
    }

    calcularSueldoBruto() {
        return super.calcularSueldoBruto() + this.#bono;
    }
}