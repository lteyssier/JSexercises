/*Dado un número, devolver su factorial */

function factorial(num){
    if(num===1 || num===0) return 1
    return num * factorial(num-1)
}

console.log(factorial(5))

//V2
function facto(nummero){
    let resultado = 1
    for(let i =1;i<=numero;i++){
        resultado *=i
    }
    return resultado
}