/*Dada una cadena de texto y un número, recortar el string mostrando los X 
primeros caracteres
 */

function recortar(text,num){
    let recorte = text.slice(0,num)
    return recorte                  
}

console.log(recortar("hola como estas", 6))

//v2
function recortar2(texto,hasta){
        let resultado =''
        if(typeof texto ==='string' && typeof hasta ==='number'){
            resultado = texto.substring(0,hasta)
        }else{
            resultado = "Introduce bien los datos"
        }
        return resultado

}

console.log(recortar2("hola como estas", 6))