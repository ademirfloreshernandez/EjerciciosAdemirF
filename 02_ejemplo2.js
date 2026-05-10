class Persona{
constructor(nombre,edad,curp){
    this.nombre=nombre;
    this.edad=edad;
    this.curp=curp;
}
saludarpersona(){
   console.log(`soy ${this.nombre} y tengo ${this.edad} con curp ${this.curp}`);
}
}


let persona1=new Persona("isai",18,"afaaff34u")

let persona2=new Persona("ademir",18,"8233875285")

let persona3=new Persona("miguel",18,"823aggaf85")

persona1.saludarpersona();

persona2.saludarpersona();

persona3.saludarpersona();