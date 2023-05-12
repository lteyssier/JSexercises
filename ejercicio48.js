/* Dado un string, devolver cuales son las letras que aparecen solo una vez y cual es la primera
 */

function unapalabra(texto){
    let nuevotexto = texto.split(" ")

    let arreglo =[]
    let contadores = {}
    
    for(palabra of nuevotexto){
        arreglo.push(palabra)
    }
    for(elemento of arreglo){
        if(!contadores[elemento]){
            contadores[elemento] =1
        }else{
            contadores[elemento]++
        }
    }
    (arr => arr.filter(([key,value]) => value =1))
    return contadores
}

let texto = "hola hola forrest"

console.log(unapalabra(texto))


function solounavez(texto){
    let contadores ={},
        resultado =[]
        letras = texto.split('').filter(letra => letra.trim().length >=1)
    
    for(letra of letras){
        if(!contadores[letra]){
            contadores[letra] =1 
        }else{
            contadores[letra]++
        }
    }

    for(letra in contadores){
        if(contadores[letra]===1){  
            resultado.push(letra)
        }
    }

    return [resultado, resultado[0]]
}

console.log(solounavez(texto))