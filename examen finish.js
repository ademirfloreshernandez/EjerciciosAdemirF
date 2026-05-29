const prompt = require("prompt-sync")();

let mesas = parseInt(prompt("¿Cuántas mesas? "));

for (let i = 1; i <= mesas; i++) {

    let total = 0, op, cant;

    do {
        op = parseInt(prompt(
            "\nMesa " + i +
            "\n1.Sencilla $15" +
            "\n2.Queso $18" +
            "\n3.Especial $20" +
            "\n4.Papas $8" +
            "\n5.Refresco $5" +
            "\n6.Postre $6" +
            "\n0.Terminar\nOpción: "
        ));

        if (op != 0) {
            cant = parseInt(prompt("Cantidad: "));
            total += cant * [15,18,20,8,5,6][op-1];
        }

    } while (op != 0);

    console.log("Total Mesa " + i + ": $" + total);
}