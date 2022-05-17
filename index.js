import sumar,{PI, dividir, potencia} from './src/modules/matematica.js'
import Alumno from './src/modules/alumno.js'
import {cambiarAdentroDelArchivo} from './src/modules/fs.js'
import devolver, { validarUrl } from './src/modules/myUrl.js';
import { getCountry, getCurrency } from 'currency-map-country';
import {pais, cur} from './src/modules/moneda.js'

let nombre = "Santino";
let edad = 16;

console.log("--------------------Ejercicio 1--------------------")
console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
console.log("--------------------Ejercicio 2--------------------")
console.log(`La potencia de 2 es: ${sumar(10, 5)}`);
console.log(`El valor del numero PI es: ${PI}`);
console.log(`La potencia de 2 es: ${dividir(20, 2)}`);
console.log(`La potencia de 2 es: ${potencia(2)}`);

console.log("--------------------Ejercicio 3--------------------")
const alumno = new Alumno("Santino", 11111111);
alumno.saludar();

console.log("--------------------Ejercicio 4--------------------")
cambiarAdentroDelArchivo("Palitoooooooo", "./src/modules/data.txt");

console.log("--------------------Ejercicio 5--------------------")
const myURL = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
console.log(devolver(myURL));
console.log("--------------------Ejercicio 6--------------------")
console.log(validarUrl());

console.log("--------------------Ejercicio 7--------------------")
console.log(getCountry(pais));
console.log(getCurrency(cur));