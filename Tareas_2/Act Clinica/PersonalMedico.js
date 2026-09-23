class PersonalMedico {

    static registro = [];

    constructor(id, nombre, departamento) {
        this.id = id;
        this.nombre = nombre;
        this.departamento = departamento;
    }

    // Método estático para agregar personal
    static agregarPersonal(personal) {

        PersonalMedico.registro.push(personal);
    }

    // Método para mostrar información
    mostrar() {

        console.log(`ID: ${this.id}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Departamento: ${this.departamento}`);
    }
}

module.exports = PersonalMedico;