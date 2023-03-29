/*Dada una cadena de texto, devolver el caracter más usado
 */

function masUsado(text){
    let mapeo = {}
    let maximo = 0
    let letraRepetida = ''
    
    for(let letra of text){
       if(!mapeo[letra]){
        mapeo[letra] = 1
       }else{
        mapeo[letra]++
       }
    }
   for (let letra in mapeo){
        if(mapeo[letra].trim().length === 1 && mapeo[letra]> maximo){
            maximo = mapeo[letra]
            letraRepetida = letra
        }
   }
   return letraRepetida
}

console.log(masUsado('hola a todos los monos'))