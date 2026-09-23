class Producto {
constructor(nombre, precio, impuesto, descuento, envio){
this.nombre = nombre;
this.precio = precio;
this.impuesto = impuesto;
this.descuento = descuento;
this.envio = envio;
}

calcularTotal(){
let total = this.precio + this.impuesto + this.envio - this.descuento;
return total;
}

mostrarInfo(){
return `Producto: ${this.nombre} | Total: ${this.calcularTotal()}`;
}
}

class Electronico extends Producto{
constructor(nombre, precio, impuesto, descuento, envio, garantia){
super(nombre, precio, impuesto, descuento, envio);
this.garantia = garantia;
}

mostrarInfo(){
return `Electronico: ${this.nombre} | Garantia: ${this.garantia} | Total: ${this.calcularTotal()}`;
}
}

class Ropa extends Producto{
constructor(nombre, precio, impuesto, descuento, envio, costura){
super(nombre, precio, impuesto, descuento, envio);
this.costura = costura;
}

mostrarInfo(){
return `Ropa: ${this.nombre} | Costura personalizada: ${this.costura} | Total: ${this.calcularTotal()}`;
}
}

class Tienda{
constructor(){
this.productos = [];
}

agregarProducto(producto){
this.productos.push(producto);
}

mostrarProductos(){
this.productos.forEach(p=>{
console.log(p.mostrarInfo());
});
}
}

const tienda = new Tienda();

const tv = new Electronico("Televisor",8000,800,500,200,"2 años");
const camisa = new Ropa("Camisa",500,50,20,50,true);
const te = new Electronico("Telefono",9000,700,200,100,"1 años");
const fa = new Ropa("Falda",200,20,10,15,true);

tienda.agregarProducto(tv);
tienda.agregarProducto(camisa);
tienda.agregarProducto(te);
tienda.agregarProducto(fa);
tienda.mostrarProductos();