//Dada una palabra, buscarla en una frase y devolver cuantas veces aparece.
//La frase y la palabra deben ser parametros de una función 


//V1
function coincidences(phrases, word){
    let phrases1 = phrases.toUpperCase().replace(/[,.?!]/gi,"")
    let word1 = word.toUpperCase()
    let arrayphrases = phrases1.split(' ')

    let contador=0
    for(i=0;i<arrayphrases.length;i++){
        if(word1 === arrayphrases[i]){
            contador += 1
        } 
    }

    return `En la frase: "${phrases}" la palabra "${word}" aparece ${contador} veces`
}

console.log(coincidences("No todo el dinero es el dinero, Dinero.","dinero"))

//v2
function coincidencias(frase, busqueda){
    let texto_limpio= frase.toLowerCase().replace(/[,.?!]/gi,"")
    let resultado=0

    if(texto_limpio.includes(busqueda)){
        let palabras = texto_limpio.split(" ")
        let mapa ={}

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++
            }else{
                mapa[palabra]=1
            }
        }
        resultado = mapa[busqueda]
    }else{
        resultado = 0
    }
    return resultado
}

console.log(coincidencias("No todo el dinero es el dinero, Dinero.","dinero"))