/*Dado un array, crear otro con el primer y el último elemento del original */

function primult(arr){
    let arrnuevo = []
    let primero= arrnuevo.push(arr[0])
    let ultimo = arrnuevo.push(arr[arr.length-1])
    return arrnuevo
}

console.log(primult([1,2,3,4,5]))