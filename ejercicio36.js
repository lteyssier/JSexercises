/* Dado un texto, devolver cuantas consonanter y cuantas vocales tiene
 */

function cuentaLetras(texto){
     let consonantes=0, vocales=0, texto_limpio = ""
        texto_limpio = texto.split("").filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra)).join("")
    for(let letra of texto_limpio){
        if(/[áéíóúaeiou]/gi.test(letra)){
            vocales++
        }else{
            consonantes++
        }
    }
    return [`consonantes: ${consonantes}`, `vocales: ${vocales}`]
}

console.log(cuentaLetras("Viva la vida"))