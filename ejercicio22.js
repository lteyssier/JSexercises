/* Dados dos números, indicar cual es mayor y cual es menor
 */

function mayorMenor(num1, num2){
    if(num1 === num2){
        return "Los números son iguales"
    }else if(num1<num2){
        return (`El número menor es: ${num2} \nEl número mayor es: ${num1}`)
    }else{
        return (`El número mayor es: ${num1} \nEl número menor es: ${num2}`)
    }
}

console.log(mayorMenor(2,4))