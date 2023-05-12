/* Dados dos números, devolver los resultados de las operaciones básicas entre ellos
(suma,resta,producto,división)
 */

function calculadora(num1,num2){
    let resultado = `
    La suma es:${num1+num2}
    La resta es:${num1-num2}
    La multiplicación es:${num1*num2}
    La división es:${num1/num2}`
    return resultado
}

console.log(calculadora(5,4))