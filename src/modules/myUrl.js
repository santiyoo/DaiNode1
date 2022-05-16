import {isUri} from 'valid-url';

let validUrl='http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

export default function devolver(a){
    const host = a.host;
    const pathname = a.pathname;
    const searchParams = a.searchParams;
    const datos = {
        "host": host,
        "pathname": pathname,
        "parametros": searchParams
    }
    return datos
}

export function validarUrl(a){
    if (isUri(a)){
        console.log('Es una URL');
    } 
    else {
        console.log('Error, no es una URL');
    }
}




