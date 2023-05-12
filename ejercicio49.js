/* Dado un objeto, comprobar si existe una propiedad en concreto
 */

function existePropiedad(objeto, propiedad){
    return typeof objeto === 'object' && typeof propiedad === "string" &&  objeto.hasOwnProperty(propiedad)
}

let usuario ={
    nombre:"Bruce",
    apellido:"Wayne"
}

console.log(existePropiedad(usuario, "nombre"))