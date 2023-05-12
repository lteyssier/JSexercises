/* Dado un texto, comprobar que sea un email válido
 */

function mailvalido(email){
    return /^\w+@\w+\.\w+$/gi.test(email)
}

console.log(mailvalido("correo@correo.com"))