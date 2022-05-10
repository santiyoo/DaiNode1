export default class alumno{
    constructor(username, dni){
        this.username = username;
        this.dni = dni;
    }

    saludar(username){
        console.log(`Hola ${username}. Tu dni es: ${dni}`);
    }
}