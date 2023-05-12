/* Dado un array de números, devolver el valor más bajo y el más alto
 */

function altoBajo(arreglo){
    let ordenados  = arreglo.sort((a,b)=> a-b)
    let min = ordenados[0]
    let mayor = ordenados[ordenados.length-1]
    return [min,mayor]
}

console.log(altoBajo([2,4,3,5,1]))