/*  Dado un número, indicar si es un número capicua o no
 */

function capi(num){
    let numv = num.toString().split('').reverse().join('')
    if(numv === num.toString()){
        return true
    }else{
        return false
    }
}

console.log(capi(2012))