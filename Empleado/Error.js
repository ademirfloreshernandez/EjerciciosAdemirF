export class ValidacionError extends Error{
    constructor(message){
        super(message);this.nombre=ValidacionError;
        this.codigo=404;
    }
}