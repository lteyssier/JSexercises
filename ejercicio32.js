/*Dado un array de números, devolver el array con sus números elevados al cuadrado
 */
function alcuadrado(arr){
    arr  = arr.filter(elemento => {
        return typeof elemento === "number"
    }).map(num => Math.pow(num,2))
    return arr
}

console.log(alcuadrado([1,2,3]))