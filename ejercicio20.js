/*Dados dos cadenas de texto, crear un algoritmo que compruebe si son
anagramas entre si
 */

const { fromKebab } = require("postgres")

function anagrama(text1,text2){
    let mapeo1 ={}
    let mapeo2 ={}
    if(text1.length !== text2.length) return false
    for(let letra of text1){
        if(!mapeo1[letra]){
         mapeo1[letra] = 1
        }else{
         mapeo1[letra]++
        }
     }
     for(let letra of text2){
        if(!mapeo2[letra]){
         mapeo2[letra] = 1
        }else{
         mapeo2[letra]++
        }
     }
     for(let char in mapeo1){
        if(mapeo1[char]!== mapeo2[char]){
            return false
        }
     }
     return true
   
}

console.log(anagrama("hola","hali"))

//V2
function limpiarTexto(texto){
    return texto    
                .replace(/[^\w]/gi,'')
                .toLowerCase()
                .split('')
                .sort()
                .join('')
}

function anagrama2(texto1,texto2){
    return limpiarTexto(texto1) === limpiarTexto(texto2)
}

console.log(anagrama2("hola","halo"))
