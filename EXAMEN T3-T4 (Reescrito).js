class ErrorSistema extends Error {
    constructor(message){
        super(message);
        this.name = "ErrorSistema";
    }
}

class Persona {
    static BaseDeDatosPersonas = []
    #sexo;
    #nombre;
    #edad
    
    constructor(nombre, sexo, edad, especialidad = null){
        if(!nombre || nombre.length < 3){
            throw new ErrorSistema("El nombre requiere al menos 3 caracteres");
        }
        if(!sexo){
            throw new ErrorSistema("Se requiere genero (M/F o H/M)")
        }
        if(edad < 0){
            throw new ErrorSistema("La edad debe ser mayor a 0")
        }
        
        this.#nombre = nombre
        this.#edad = edad;
        this.#sexo = sexo;
        this.especialidad = especialidad;
        
        let DatosPersonas = {
            nombre: this.#nombre,
            edad: this.#edad,
            sexo: this.#sexo,
            especialidad: this.especialidad
        }
        Persona.BaseDeDatosPersonas.push(DatosPersonas)
    }
    
    get leerN(){
        return this.#nombre
    }
    
    set modificarN(nuevoN){
        try{
            console.log("validando nombre ")
            if(!nuevoN || nuevoN.trim() === ""){
                throw new Error("error nombre vacío")
            }
            if(nuevoN.length < 3){
                throw new Error("error el nombre debe tener al menos 3 caracteres")
            }
            this.#nombre = nuevoN
            console.log(`nombre actualizado a: ${nuevoN}`)
        } catch(error){
            console.error(error.message)
        }
    }
}

class Medico extends Persona {
    constructor(nombre, sexo, edad, especialidad){
        super(nombre, sexo, edad, especialidad)
        if (!especialidad){
            throw new ErrorSistema("El médico debe tener especialidad")
        }
    }
}

class Psicologo extends Persona {
    constructor(nombre, sexo, edad, especialidad){
        super(nombre, sexo, edad, especialidad)
        if (!especialidad){
            throw new ErrorSistema("El psicólogo debe tener especialidad")
        }
    }
}

class Administrador extends Persona {
    constructor(nombre, sexo, edad, especialidad){
        super(nombre, sexo, edad, especialidad)
        if (!especialidad){
            throw new ErrorSistema("El administrador debe tener especialidad")
        }
    }
}

class Paciente extends Persona {
    constructor(nombre, sexo, edad){
        super(nombre, sexo, edad, null)
    }
}

class Consulta {
    static ConsultasDatos = []
    #fechaConsulta
    
    constructor(paciente, profesional, diagMotivo, tratObserv, fechaConsulta){
        this.#fechaConsulta = fechaConsulta;
        this.paciente = paciente;
        this.profesional = profesional;
        this.diagMotivo = diagMotivo;
        this.tratObserv = tratObserv;
        
        if (!fechaConsulta){
            throw new Error("Se requiere fecha de consulta")
        }
        if (!profesional){
            throw new Error("Se requiere profesional")
        }
        if (!paciente){
            throw new Error("Se requiere paciente")
        }
        
        let DatosDelaConsulta = {
            nombrePaciente: paciente,
            atendio: profesional,
            Motivos: diagMotivo,
            Resultados: tratObserv,
            fecha: fechaConsulta
        }
        Consulta.ConsultasDatos.push(DatosDelaConsulta)
    }
}

class ConsultaMedica extends Consulta {
    constructor(paciente, profesional, diagMotivo, tratObserv, fechaConsulta){
        super(paciente, profesional, diagMotivo, tratObserv, fechaConsulta)
        
        if (!diagMotivo){
            throw new Error("Ingrese el diagnostico")
        }
        if (!tratObserv){
            throw new Error("Ingrese el tratamiento")
        }
    }
}

class ConsultaPsicologica extends Consulta {
    constructor(paciente, profesional, diagMotivo, tratObserv, fechaConsulta){
        super(paciente, profesional, diagMotivo, tratObserv, fechaConsulta)
        
        if (!diagMotivo){
            throw new Error("Ingrese el diagnostico")
        }
        if (!tratObserv){
            throw new Error("Ingrese el tratamiento")
        }
    }
}

// ========== PRUEBA ==========
try {
    
    
    let Paciente1 = new Paciente("Miguel", "H", 18)
    let paciente2 = new Paciente("Ademir", "H", 19)
    let paciente3 = new Paciente("mari", "M", 18)
    
    // para usar get
    console.log(`nombre original del paciente 3: ${paciente3.leerN}`)
    console.log(`nombre original del paciente 1: ${Paciente1.leerN}`)
    
    // para usar set 
    Paciente1.modificarN = "santiago"
    paciente3.modificarN = "evelin"
    
    
    console.log(`nuevo nombre de mi paciente1: ${Paciente1.leerN}`)
    console.log(`nuevo nombre de mi paciente3: ${paciente3.leerN}`)
    
    
    let medico1 = new Medico("Enrique", "H", 45, "Medico general")
    let psicologa1 = new Psicologo("Anita", "F", 36, "Psicologa clinica")
    
    
    let Consulta1 = new ConsultaMedica("Miguel", "Enrique", "Gastritis", "Omeprazol", "Lunes")
    let Consulta2 = new ConsultaPsicologica("Ademir", "Anita", "Depresión", "Terapia cognitiva", "Martes")
    
    
    
} catch (error) {
    console.log("Algo anda mal:", error.message)
} finally {
    console.log("\nbye")
}

// Mostrar resultados
console.log("\n=== BASE DE DATOS DE PERSONAS ===")
console.log(Persona.BaseDeDatosPersonas)

console.log("\n=== CONSULTAS REALIZADAS ===")
console.log(Consulta.ConsultasDatos)


Consulta.ConsultasDatos.forEach((c) => { //recorrer el arreglo para mostrar el historial de consultas
    console.log(`El paciente ${c.nombrePaciente} acudió a una consulta con el profesional ${c.atendio}, con el motivo de ${c.Motivos}, obteniendo los resultados de: ${c.Resultados} con fecha al: ${c.fecha}`)
})