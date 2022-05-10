export default class Alumno{
    constructor(username, dni){
        this.username = username;
        this.dni = dni;
    }

    saludar(){
        console.log(`Hola ${this.username}. Tu dni es: ${this.dni}`);
    }
}