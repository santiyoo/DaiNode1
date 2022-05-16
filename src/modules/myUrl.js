import {isUri} from 'valid-url';

let validUrl='hola.com';

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

export function validarUrl(){
    if (isUri(validUrl)){
        console.log('Es una URL');
    } 
    else {
        console.log('Error, no es una URL');
    }
}




