/*Dada una cadena de texto, darle la vueltaa e invertir el orden de sus 
caracteres, sin usar metodos propios del lenguaje, solo estructuras de control*/
//v1
function invertir(str){
    let cadena = str
    let invertido=[]
    for (i=cadena.length-1;i>=0;i--){
         invertido += cadena[i]
        }
        return invertido
    }

console.log(invertir("hola"))



//v2
function invertirlo(texto){
    let invertido=''
    for(let letra of texto){
        invertido = letra + invertido
    }
    return invertido
}

console.log(invertirlo("hola"))