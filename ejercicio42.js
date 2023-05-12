/* Dados dos números, sacar un número aleatorio entre ellas
 */

function aleatorio(num1,num2){
    return Math.round(Math.random()*(num2-num1) + num1)
}

console.log(aleatorio(10,50))