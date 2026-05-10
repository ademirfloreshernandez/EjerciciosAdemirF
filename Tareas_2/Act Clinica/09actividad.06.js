class PersonalMedico {
  static registro = [];
  
  constructor(id, nombre, departamento) {
    this.id = id;
    this.nombre = nombre;
    this.departamento = departamento;
  }

  static agregarPersonal(personal) { 
    PersonalMedico.registro.push(personal); 
  }

  mostrar() { 
    console.log(`ID: ${this.id}\nNombre: ${this.nombre}\nDepartamento: ${this.departamento}`); 
  }
}

class Doctor extends PersonalMedico {
  constructor(id, nombre, departamento, especialidad) {
    super(id, nombre, departamento);
    this.especialidad = especialidad;
  }

  mostrar() { 
    console.log(`ID: ${this.id}\nNombre: ${this.nombre}\nDepartamento: ${this.departamento}\nEspecialidad: ${this.especialidad}`); 
  }
}

class Enfermero extends PersonalMedico {
  constructor(id, nombre, departamento, turno) {
    super(id, nombre, departamento);
    this.turno = turno;
  }

  mostrar() { 
    console.log(`ID: ${this.id}\nNombre: ${this.nombre}\nDepartamento: ${this.departamento}\nTurno: ${this.turno}`); 
  }
}

let doctor = new Doctor("P1", "Ademir", "Cirugía", "CirujanoGUAPO");
let enfermero = new Enfermero("Z1", "elalambrito", "Pediatría", "Matutino");

PersonalMedico.agregarPersonal(doctor);
PersonalMedico.agregarPersonal(enfermero);

PersonalMedico.registro.forEach(personal => personal.mostrar());