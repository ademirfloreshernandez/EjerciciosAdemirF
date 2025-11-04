/*
Tipos de datos primitivos
Number
String
Boolean
Null
Undefined
Tipos de datos computacionales:
Object
Array
Function
*/

 function DatosArreglos(){
 let datos =[3,7,9,3,2];
 let suma = 0
 for(i=0;i<datos.length;i++)
    if(datos[i]%2===0){
 suma+=datos[i]
}

console.log(`la suma de los datos es ${suma}`);

}
DatosArreglos();