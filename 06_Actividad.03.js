class Persona{
    constructor(nombre, apellido, curp){
        this.nombre = nombre;
        this.apellido = apellido;
        this.curp = curp;
    }

    mostrarInformacion(){
        return console.log(`
            nombre: ${this.nombre}, apellido: ${this.apellido}, curp: ${this.curp}`)
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellido, curp, matricula, carrera, semestre){
        super(nombre, apellido, curp)
        this.matricula = matricula;
        this.carrera = carrera;
        this. semestre = semestre;
    }

    infoEstudiante(){
        return console.log(`
            ======== datos =================
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Curp: ${this.curp}
            Matricula: ${this.matricula}
            Carrera: ${this.carrera}
            Semestre: ${this.semestre}
           =================================
            `);
    }
}

class Docente extends Persona{
    constructor(nombre, apellido, curp, matricula, academia){
        super(nombre, apellido, curp)
        this.matricula = matricula;
        this.academia = academia;
    }

    infoDocente(){
        return console.log(`
            ======== datos del docente======
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Curp: ${this.curp}
            Matricula: ${this.matricula}
            Academia: ${this.academia}
           =================================
            `);
    }
}

let estudiante1 = new Estudiante("Ademir","Flores","ASKNJOFSDU9IYH","25E20055","Sistemas",2)

let docente1 = new Docente("PEDRO","PICA","89UYW32ERF9UH","3R9F8YUEW","PAPU de Sistemas")

estudiante1.mostrarInformacion();
estudiante1.infoEstudiante();

docente1.mostrarInformacion();
docente1.infoDocente();