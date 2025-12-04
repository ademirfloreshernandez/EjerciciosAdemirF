// los elementos son los atributos que le corresponden a un objeto - El objeto es un conjunto de atributos //

//let arreglo=[{nombre:"Dany",edad:29,peso:85,altura:1.70},{nombre:"Emiliano",edad:18,peso:90,altura:1.75}];

/*let persona1={nombre:"Dany",edad:29,peso:85,altura:1.70}
let persona2={nombre:"Emiliano",edad:18,peso:90,altura:1.75}*/


/*arreglo.map(personas=>{
    console.log(`El nombre es: ${personas.nombre} y la edad es ${personas.edad}`);
 })

//console.log(persona.nombre);*/

const propmt =require ("prompt-sync")();

function AgregarDatos(){

let datos=[];
let nombre="";
let edad=null;

    nombre=propmt("Ingresa tu nombre: ");
    edad=parseInt(propmt("Ingresa tu edad: "));

    let persona={nombre,edad};
    
    datos.push(persona);
    console.log(datos);
}
AgregarDatos();


//especificar el tamaño del arreglo