/* Dado un array de números, devolver un array nuevo con los números pares e impares separados
 */

function paresimpares(arr){
    let pares =[],
        impares=[]

    for(let numero of arr){
        if(numero %2 ===0){
            pares.push(numero)
        }else{
            impares.push(numero)
        }
    }
    return {
        pares, impares
    }
}

console.log(paresimpares([1,2,3,4,5,6,7,8,9,10]))

//V2

function pares(arr){
    return{
        pares: arr.filter(num=> num%2===0),
        impares: arr.filter(num=> num%2!==0)
    }
}

console.log(pares([1,2,3,4,5,6,7,8,9,10]))