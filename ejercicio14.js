/*Dado un string y un número, repetir el string tantas veces 
como el número lo indique
 */

function repiteme(text,num){
    let resultado = ""
    for(let i = 0; i<num;i++){
        resultado += text
    }
    return resultado
}

console.log(repiteme('hallo', 3))

//prototipo 
String.prototype.repiteme1= function (num){
    let resultado = ""
    for(let i = 0; i<num;i++){
        resultado += this
    }
    return resultado
}

console.log("first".repiteme1(2))