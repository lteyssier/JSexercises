/* Dado un número, mostrar listado de los cuadrados de todos los números naturales hasta llegar al mismo
 */

function cuadrados(num){
    let numcuadrados =[]
    for(let i=1;i<=num; i++){
        numcuadrados.push(cuadrado(i))
    }
    return numcuadrados
}

function cuadrado(num){
    return num*num
}

console.log(cuadrados(5))