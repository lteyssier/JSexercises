/* Dado un número, mostrar los números de 1 hasta el número
Pero para múltiplos de tres imprimir "buzz" en lugar del número y para los 
múltiplos de cinco imprimir "Lightyear", y para los múltiplos de tres y cinco
"buzzlightyear"
 */

function buzz(num){
    for (let i = 0; i < num+1; i++) {

        if(i%5==0 && i%3==0){
            console.log("BuzzLightyear")
        }else if(i%3==0){
            console.log("Buzz")
        }else if(i%5==0){
            console.log("Lightyear")
        }else{
            console.log(i)
        }
    }
    return
}

buzz(30)

//V2

function lightyear(numero){
    let resultado=''
    if(numero%5==0 && numero%3==0){
        resultado="BuzzLightyear"
    }else if(numero%3==0){
        resultado="Buzz"
    }else if(numero%5==0){
       resultado="Lightyear"
    }else{
        return numero
    }
    return resultado
}

function imprimir(numero){
    for (let i = 0; i < numero; i++) {
        console.log(lightyear(i))
    }
}

imprimir(20)