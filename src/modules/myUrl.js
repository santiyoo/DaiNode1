import url from 'url'

export default function devolver(a){
    const host = a.host;
    const pathname = a.pathname;
    const searchParams = a.searchParams;
    const datos = {
        "host": host,
        "pathname": pathname,
        "parametros": searchParams
    }
    return datos;
}





