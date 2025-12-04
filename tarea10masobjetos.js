const prompt=require("prompt-sync")();

function IngresaDatos(){
    let tamano = parseInt(prompt("cuantas personas quieres agregar: "))

    while (isNaN(tamano) || tamano <= 0){
        tamano = parseInt(prompt('ingresa un numero valido por favor: '))
        }

        contador = 1
        let arregloObjetos = [];
        
        while (contador <= tamano){
            let persona = {
                nombre: String(prompt('ingresa el nombre de la persona:')),
                edad: parseInt(prompt('ingresa su edad:')),
                estatura: Number(prompt("cuanto mide?:"))
            }
            arregloObjetos.push(persona)
            contador++
        } 
console.log(`Las personas ingresadas son ${contador-1}`)
arregloObjetos.map(persona=>(
    console.log(`se llama ${persona.nombre}, tiene ${persona.edad} anos
        y su estatura es ${persona.estatura} metros
        `)
))
}
IngresaDatos()