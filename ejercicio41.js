/* Dado un número, mostrar un triángulo de asteriscos con ese número de filas
 */

const resolveUrl = require("resolve-url")

function triangulo(numero){
    let mitad = Math.floor(numero-1)
    let resultado = ""

    //filas
    for(let fila=0;fila<numero;fila++){
        let nivel = ""

        //asteriscos y espacios
        for(let columna = 0; columna<(2*numero-1); columna++){
            if(mitad - fila <= columna && mitad + fila >= columna){
                nivel += "*"
            }else{
                nivel += " "
            }

        }
        resultado += nivel + "\n"

    }
    return resultado
}

console.log(triangulo(6))