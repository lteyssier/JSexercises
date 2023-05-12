/* Dado un array de strings, devolver otro con los valores que esten formados por más de dos palabras
 */

function dospalabra(arr){
    let arreglonuevo=[]
    for(let palabra of arr){
        if(palabra.includes(" ")){ // if(palabra.split(' ').length >=2)
            arreglonuevo.push(palabra)
        }
    }
    return arreglonuevo
}

console.log(dospalabra(["jaja ja","jojo","hola hola"]))