import sumar,{PI, dividir, potencia} from './src/modules/matematica.js'
import Alumno from './src/modules/alumno.js'
import {cambiarAdentroDelArchivo} from './src/modules/fs.js'
import x from 'countries-list'
import devolver from './src/modules/myUrl.js';

const myURL = new URL(' http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');

console.log(devolver(myURL));

let nombre = "Santino";
let edad = 16;

console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);

console.log(`La potencia de 2 es: ${sumar(10, 5)}`);
console.log(`El valor del numero PI es: ${PI}`);
console.log(`La potencia de 2 es: ${dividir(20, 2)}`);
console.log(`La potencia de 2 es: ${potencia(2)}`);

const alumno = new Alumno("Santino", 11111111);
alumno.saludar();

cambiarAdentroDelArchivo("Palitoooooooo", "./src/modules/data.txt");

console.log(x.getEmojiFlag('BR'));