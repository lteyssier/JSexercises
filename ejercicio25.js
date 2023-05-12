/* Dado un string, ponerlo completo en mayusculas o minusculas dependiendo de si hay 
mas mayusculaas o minusculas por defecto en el string
 */


function infoMay(letra){
    if(letra === letra.toLowerCase()){
        return "minus"
    }else if(letra === letra.toUpperCase()){
        return "mayus"
    }
}
function mayusMinus(texto){
    let arreglo = []
    let mapeo= {}
    for(let letra of texto){
        arreglo.push(infoMay(letra))
    }
    for(let letra of arreglo){
        if(!mapeo[letra]){
         mapeo[letra] = 1
        }else{
         mapeo[letra]++
        }
     }
     if(mapeo.minus<mapeo.mayus){
        return texto.toUpperCase()
     }else if(mapeo.mayus<mapeo.minus){
        return texto.toLowerCase()
     }else{
        return "Son partes iguales"
     }

}

console.log(mayusMinus("HolAguian"))

//V2
function mayusMinus2(texto){
    let mayusculas = 0
    let minusculas = 0
    let resultado=''

    for(let letra of texto){
        if(/[A-Z]/.test(letra)){
            mayusculas++
        }else{
            minusculas++
        } 
    }
    console.log(mayusculas)
    console.log(minusculas)
    if(mayusculas>minusculas){
        resultado = texto.toUpperCase()
    }else{
        resultado = texto.toLowerCase()
    }
    
    return resultado

}

console.log(mayusMinus2("MuRCIElAgo"))