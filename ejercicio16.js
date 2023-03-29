/*Dada una cadena de texto, devolver cuantas vocales tiene
 */

function contadorVocales(text){
    let vocales = {}

    for(letra of text){
        if(!vocales[letra]){
            vocales[letra]=1
        }else{
            vocales[letra]++
        }
    }
    return `Las vocales que se repiten son: a: ${vocales.a ? vocales.a :0}, e: ${vocales.e ? vocales.e :0},i: ${vocales.i ? vocales.i :0},o: ${vocales.o ? vocales.o :0},u: ${vocales.u ? vocales.u :0},`
}

console.log(contadorVocales("el murcielago es bruce wayne"))
console.log(contadorVocales("mi nombre es Forrest Gump"))


function vocales(texto){
    let coincidencias = texto.match(/[aeiou]/gi)
    return coincidencias ? coincidencias.length :0
}

console.log(vocales("mi nombre es Forrest Gump"))