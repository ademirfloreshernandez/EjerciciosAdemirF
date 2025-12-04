const prompt = require("prompt-sync")();

function agregarDatos() {
    let datos = [];
    let nombre = "";
    let edad = null;
    let peso = 0;
    let i = 0;
    let sueldo = 0;
    let totalSueldo = 0;
    let dimension = parseInt(prompt("Ingrese la dimensión de arreglo: "));

    while (i < dimension) {
        nombre = prompt("Ingrese el nombre: ");
        edad = parseInt(prompt("Ingrese la edad: "));
        peso = parseInt(prompt("Ingrese el peso: "));
        sueldo = parseInt(prompt("Ingrese el sueldo: "));
        
        persona = { nombre, edad, peso, sueldo };
        datos.push(persona);
        i++;
    }

    datos.map((persona) => {
        totalSueldo += persona.sueldo;
        console.log(`Se llama ${persona.nombre} y tiene ${persona.edad} años y su peso es de ${persona.peso} kg`);
        console.log(`Y su sueldo es de ${totalSueldo} pesos`);
    });
}

agregarDatos();