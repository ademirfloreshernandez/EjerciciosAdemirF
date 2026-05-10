/*calcular el area y perimetro de un rectangulo utilizando las clases de js */
class rectangulo{
    constructor(base,altura){
    this.base=base 
    this.altura=altura
    }
   calculararea(){
   return this.base*this.altura

   }
   calcularper(){
    return (2*this.base)+(2*this.altura)

   }
   get obteneraria(){
    return this.calculararea()
   }
   get obtenerper(){
   return this.calcularper()
   }
}
let medida=new rectangulo(10,8)

console.log(medida.calculararea())
console.log(medida.calcularper())

