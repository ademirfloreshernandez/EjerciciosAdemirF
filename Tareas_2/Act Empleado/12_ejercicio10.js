// Clase base
class Empleado {
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

class EmpleadoTiempoCompleto extends Empleado {
    #bono;

    constructor(rfc, nombre, sueldoBase, pagoHoraExtra, horasExtra, bono) {
        super(rfc, nombre, sueldoBase, pagoHoraExtra, horasExtra);
        this.#bono = bono;
    }

    calcularSueldoBruto() {
        return super.calcularSueldoBruto() + this.#bono;
    }
}

class EmpleadoPorHoras extends Empleado {
    #horasTrabajadas;
    #pagoPorHora;

    constructor(rfc, nombre, pagoPorHora, horasTrabajadas, pagoHoraExtra, horasExtra) {
        super(rfc, nombre, 0, pagoHoraExtra, horasExtra);
        this.#horasTrabajadas = horasTrabajadas;
        this.#pagoPorHora = pagoPorHora;
    }

    calcularSueldoBruto() {
        return (this.#horasTrabajadas * this.#pagoPorHora) + this.calcularHorasExtra();
    }
}

const emp1 = new EmpleadoTiempoCompleto(
    "BAN4N423", "evelin jejeje", 5000, 100, 5, 1000
);

const emp2 = new EmpleadoPorHoras(
    "PAPOI283", "Ademir Flores", 80, 40, 50, 3
);

console.log("=== EMPLEADO TIEMPO COMPLETO ===");
emp1.mostrarAll();

console.log("\n=== EMPLEADO POR HORAS ===");
emp2.mostrarAll();