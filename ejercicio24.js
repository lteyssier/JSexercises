/* Dado un array de enteros y un número, detectar si esa lista de números es una
permutación del 1 al número aportado
 */

function permutacion(arr, num){
    let arreglo = []
    if(arr.length < num){
       return false
    }
    else if(arr.length > num){
        return false
    } 
    for (i=1;i<=num;i++){
        arreglo.push(i)
    }
    if(arreglo.toString() == arr.toString()){
        return true
    }else{
        return false
    }
}

console.log(permutacion([1,2,3,4,5,6],6))

//V2

function permutacion2(secuencia, numero){
    for(let i=0; i<numero;i++){
        if(secuencia.indexOf(i+1)<0){
            return false
        }
    }
    return true
}

console.log(permutacion2([1,2,3,4],4))