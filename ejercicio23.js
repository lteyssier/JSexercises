/* Dada una cadena de texto, poner en mayúscula la primera letra de cada palabra en la
cadena y luego devolver la cadena
 */


function enMayuscula(texto){
    let resultado = ""
    for(letra in texto){
        
        if(texto[letra-1]===" " || parseInt(letra) ===0){
            resultado += texto[letra].toUpperCase()
        }else{
            resultado += texto[letra]
        }
    }

    return resultado
}

console.log(enMayuscula("Viva la vida"))