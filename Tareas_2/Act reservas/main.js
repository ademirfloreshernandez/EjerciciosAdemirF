const ReservaNormal = require("./ReservaNormal");

const ReservaVIP = require("./ReservaVIP");

const ReservaEvento = require("./ReservaEvento");


// Arreglo de reservas
let reservas = [];


// Reservas normales
reservas.push(
    new ReservaNormal(
        "Juan Pérez",
        4,
        "15/03/2026",
        "20:00"
    )
);

reservas.push(
    new ReservaNormal(
        "Carlos López",
        6,
        "16/03/2026",
        "19:00"
    )
);


// Reservas VIP
reservas.push(
    new ReservaVIP(
        "María García",
        2,
        "15/03/2026",
        "21:30",
        "mesa preferencial"
    )
);

reservas.push(
    new ReservaVIP(
        "Ana Martínez",
        8,
        "16/03/2026",
        "20:30",
        "postre cortesía"
    )
);


// Reserva de evento
reservas.push(
    new ReservaEvento(
        "Evento Corporativo",
        50,
        "20/03/2026",
        "18:00",
        "empresarial",
        "Salón Principal"
    )
);


// Mostrar reservas
console.log("=== RESERVAS DEL RESTAURANTE ===");

reservas.map(reserva => {

    console.log(reserva.mostrarInfo());

    console.log("----------------------");
});