/*Dado un texto y busqueda, censurar todas las coincidencias de la 
busqueda en el texto con [-Censurado-]
Si el texto o busqueda están vacío mostrar
"No puedes leer el texto y la búsqueda" en el caso de que ambos parámetros
no lleguen
 */

function censurado(texto=false,busqueda=false){
   
    let resultado = ""

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la búsqueda"
    }else if(!texto && busqueda){
        resultado = "No puedes leer el texto"
    }else if(texto && !busqueda){
        resultado = "No puedes hacer la busqueda"
    }else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda,'gi'), "[-CENSURADO-]")
    }
    return resultado
    
}