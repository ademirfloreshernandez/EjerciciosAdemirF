class Persona {
    #sexo;
    #nombre;
    #edad
    constructor(nombre, sexo, edad){
        this.#nombre = nombre
        this.#edad = edad;
        this.#sexo = sexo;

        if(!nombre || nombre.lenght < 3){
            throw new Error("El nombre requiere al menos 3 caracteres");
        }
        if(!sexo){
            throw new Error("Se requiere al menos una letra referente al genero (M/F o H/M)")
        }
        if(!edad || edad < 0){
            throw new Error("La persona debe tener por lo menos 1 año")
        }
        
    }
}

//subclases de peronas
class Medico extends Persona {
    constructor(nombre, sexo, especialidad){
        super(nombre, sexo)
        this.especialidad = especialidad;

    }
}

class Psicologo extends Persona {
    constructor(nombre, sexo, especialidad){
        super(nombre, sexo)
        this.especialidad = especialidad;
        
    }
}

class Administrador extends Persona {
    constructor(nombre, sexo, especialidad){
        super(nombre, sexo)
        this.especialidad = especialidad;
        
    }
}

class Paciente extends Persona {
    constructor(nombre, sexo, edad){
        super(nombre, sexo, edad)
        
    }
}

//consultas -------------------------- consultas ----------------
class consulta {
    #fechaConsulta
    constructor(fechaConsulta, PacientE, Profesional){
        this.#fechaConsulta = fechaConsulta;
        this.PacientE = Paciente;
        this.Profesional = Medico || Psicologo;

        if (!fechaConsulta){
            throw new Error("Se requiere una fecha de consulta")
        }
        if (!Profesional || Profesional.length < 3){
            throw new Error("El nombre del profesional requiere 3 letras al menos")
        if (!PacientE || PacientE.length < 3){
            throw new Error("El nombre del paciente debe incluir al menos 3 letras")
        }
    }
}
}
class ConsultaMedica extends consulta {
    constructor(PacientE, Profesional, Diagnostico, Tratamiento, fechaConsulta){
        super(fechaConsulta, PacientE, Profesional)
        this.Diagnostico = Diagnostico;
        this.Tratamiento = Tratamiento
    }
}

class ErrorSistema extends Error {
    constructor(message){
        super(message);
        this.name = ErrorSistema;
        this.name = "Error"
    }
}
try {
    let Paciente1 = new Paciente("Miguel", "H", 18)
    let Consulta1 = new ConsultaMedica ("Miguel","","Tos", "Tentramitrozín 40mg", "lunes")
} catch (error) {
    console.log("Algo anda mal:", error.message)
} finally {
    console.log("bye")
}