//Dados dos números, devolver cuántos números impares hay entre ellos

function impares(num1,num2){
    let contador=0
    
    while(num1<=num2){
        if ((num1%2)!==0) {
            contador++
        }
        num1++
    }
    return contador
}

console.log(impares(1,10))
