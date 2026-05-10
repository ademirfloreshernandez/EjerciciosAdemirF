class personas {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    guardarDatos() {
        personas.clientes.push(this);
    }
    static obtenerDatos() {
        personas.clientes.forEach(cliente => {  console.log(`El cliente es ${cliente.nombre} y tiene ${cliente.edad} años`);
 });
    }
}
personas.clientes = [];
let p1 = new personas("ademir", 19);
let p2 = new personas("toño", 18);

p1.guardarDatos();
p2.guardarDatos();

personas.obtenerDatos();