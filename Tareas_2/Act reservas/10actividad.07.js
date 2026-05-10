class Reserva {
    constructor(nombre, numPersonas, fecha, hora) {
        this.nombre = nombre;
        this.numPersonas = numPersonas;
        this.fecha = fecha;
        this.hora = hora;
    }

    mostrarInfo() {
        return `Cliente: ${this.nombre} | Personas: ${this.numPersonas} | Fecha: ${this.fecha} | Hora: ${this.hora}`;
    }
}

class ReservaNormal extends Reserva {
    constructor(nombre, numPersonas, fecha, hora) {
        super(nombre, numPersonas, fecha, hora);
        this.tipo = "Normal";
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Tipo: ${this.tipo}`;
    }
}

class ReservaVIP extends Reserva {
    constructor(nombre, numPersonas, fecha, hora, beneficio) {
        super(nombre, numPersonas, fecha, hora);
        this.tipo = "VIP";
        this.beneficio = beneficio;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Tipo: ${this.tipo} | Beneficio: ${this.beneficio}`;
    }
}

let reservas = [];

reservas.push(new ReservaNormal("Juan Pérez", 4, "15/03/2026", "20:00"));
reservas.push(new ReservaVIP("María García", 2, "15/03/2026", "21:30", "mesa preferencial"));
reservas.push(new ReservaNormal("Carlos López", 6, "16/03/2026", "19:00"));
reservas.push(new ReservaVIP("Ana Martínez", 8, "16/03/2026", "20:30", "postre cortesía"));

console.log("=== RESERVAS DEL RESTAURANTE ===");
reservas.map(reserva => console.log(reserva.mostrarInfo()));

class ReservaEvento extends Reserva {
    constructor(nombre, numPersonas, fecha, hora, tipoEvento, areaExclusiva) {
        super(nombre, numPersonas, fecha, hora);
        this.tipo = "Evento";
        this.tipoEvento = tipoEvento;
        this.areaExclusiva = areaExclusiva;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Tipo: ${this.tipo} | Evento: ${this.tipoEvento} | Área: ${this.areaExclusiva}`;
    }
}

reservas.push(new ReservaEvento("Evento Corporativo", 50, "20/03/2026", "18:00", "empresarial", "Salón Principal"));

console.log("\n=== RESERVA DE EVENTO GRANDE AGREGADA ===");
reservas.map(reserva => console.log(reserva.mostrarInfo()));