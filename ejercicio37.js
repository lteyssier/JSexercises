/* Dado un array o un texto, devolver el elemento o palabras que más aparece
 */

function masAparece(datos){
    let mapeo = {}
    let masfrecuente = ""
    let valormasfecuente = 0

    if(typeof datos === "string"){
        datos = datos.split(" ")
    }
    for(let elemento of datos){
        if(mapeo[elemento]){
            mapeo[elemento]++
        }else{
            mapeo[elemento] =1
        }
    }
    for(let elemento in mapeo){
        if(mapeo[elemento]> valormasfecuente){
            valormasfecuente = mapeo[elemento]
            masfrecuente = elemento
        }
    }
    return console.log(valormasfecuente, masfrecuente)
}

masAparece("Paco Paco Pedro de la mar")