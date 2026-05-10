class Tienda {
constructor(Descuento, Envio, Impuestos, Garantia){
this.Descuento = Descuento;
this.Envio = Envio;
this.Impuestos = Impuestos;
this.Garantia = Garantia;
}

mostrarTienda(){
return `${this.Descuento} Electronico- ${this.Envio} Descuento - ${this.Impuestos} - ${this.Garantia}`;
}
}

class Electronico extends Tienda{
constructor(Descuento, Envio, Impuestos, Garantia){
super(Descuento, Envio, Impuestos, Garantia);
}
}

class Ropa extends Tienda{
constructor(Descuento, Envio, Impuestos, Costura, beneficio){
super(Descuento, Envio, Impuestos, Costura);
this.beneficio = beneficio;
}

mostrarTienda(){
return `${this.Descuento} - Ropa - ${this.Envio} Descuento - ${this.Impuestos} - ${this.Garantia} - ${this.Costura} - Beneficio: ${this.beneficio}`;
}
}

const productos = [];

productos.push(new Electronico("Television",4,"Descuento","7:00 PM"));
productos.push(new Ropa("Camisa",2,"Descuento","8:00 PM","Postre gratis"));
productos.push(new Electronico("Computadoras",6,"Descuento","6:00 PM"));
productos.push(new Electronico("Tablets",4,"Descuento","7:00 PM"));
productos.push(new Ropa("Pantalon",2,"Descuento","8:00 PM","Postre gratis"));
productos.push(new Ropa("Falda","40%","Descuento","8:00 PM","Postre gratis"));




productos.map(Tienda=>{
console.log(Tienda.mostrarTienda());
});