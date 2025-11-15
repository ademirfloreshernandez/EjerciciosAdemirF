//Manipulación de Arreglos

/* function Arreglos(){
    let frutas=["Manzana","Platano",];
    frutas.push("Uva");
    console.log(frutas);
}
Arreglos();

 */
/* const prompt=require("prompt-sync")();
function Arreglos(){
    let frutas=[];
    let i=0;
    let dimension;
    dimension=parseInt(prompt("Ingrese la cantidad de datos: "));
    while(i<dimension){
        let frutitas=prompt("Ingresa la fruta: ");
        frutas.push(frutitas);
        i++;
    }

}
for(let frut of frutas){
    console.log(frut);
    
}
Arreglos(); */

const prompt = require("prompt-sync")();

function Arreglos() {
    let frutas = [];
    let i = 0;
    let dimension = parseInt(prompt("Ingrese la cantidad de datos: "));

    while (i < dimension) {
        let frutitas = prompt("Ingresa la fruta: ");
        frutas.push(frutitas);
        i++;
    }

    // Mostrar frutas aquí
    for (let frut of frutas) {
        console.log(frut);
    }
}

Arreglos();
