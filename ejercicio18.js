//Dado un número, mostrar todos sus divisores

function mostrarDivisores(num){
    for(let i=1;i<num+1;i++){
        if(num%i===0){
        console.log(i)}
    }
    return
}

mostrarDivisores(5)

//version 2

function divisor(num, posible_divisor){
    if(num%posible_divisor ===0){
        return posible_divisor
    }
    return 0
}

function mostrarDivisores2(num){
    for(let i=1; i<=num;i++){
        let esDivisor = divisor(num, i)

        if(esDivisor) console.log(esDivisor)
    }
}

mostrarDivisores2(10)