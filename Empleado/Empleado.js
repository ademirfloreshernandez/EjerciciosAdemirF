export default class Empleado {
    #rfc;
    #nombre;
    #sueldoBase;
    #pagoHoraExtra;
    #horasExtra;

    constructor(rfc, nombre, sueldoBase, pagoHoraExtra, horasExtra) {
        this.#rfc = rfc;
        this.#nombre = nombre;
        this.setSueldoBase(sueldoBase);
        this.setPagoHoraExtra(pagoHoraExtra);
        this.setHorasExtra(horasExtra);
    }

    getRfc() { return this.#rfc; }
    getNombre() { return this.#nombre; }
    getSueldoBase() { return this.#sueldoBase; }
    getPagoHoraExtra() { return this.#pagoHoraExtra; }
    getHorasExtra() { return this.#horasExtra; }

    setSueldoBase(valor) {
        try {
            if (valor < 0) throw new Error("Sueldo inválido");
            this.#sueldoBase = valor;
        } catch (e) {
            console.log(e.message);
        }
    }

    setPagoHoraExtra(valor) {
        try {
            if (valor < 0) throw new Error("Pago inválido");
            this.#pagoHoraExtra = valor;
        } catch (e) {
            console.log(e.message);
        }
    }

    setHorasExtra(valor) {
        try {
            if (valor < 0) throw new Error("Horas inválidas");
            this.#horasExtra = valor;
        } catch (e) {
            console.log(e.message);
        }
    }

    calcularHorasExtra() {
        return this.#horasExtra * this.#pagoHoraExtra;
    }

    calcularSueldoBruto() {
        return this.#sueldoBase + this.calcularHorasExtra();
    }

    mostrar() {
        console.log("RFC:", this.#rfc);
        console.log("Nombre:", this.#nombre);
    }

    mostrarAll() {
        this.mostrar();
        console.log("Sueldo Base:", this.#sueldoBase);
        console.log("Horas Extra:", this.#horasExtra);
        console.log("Pago Horas Extra:", this.calcularHorasExtra());
        console.log("Sueldo Bruto:", this.calcularSueldoBruto());
    }
}