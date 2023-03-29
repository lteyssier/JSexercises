/* Dado un arraay, dividirlo en tantos sub-arrays como sea necesario
basándonos en un número que indique su tamaño
Dividirlo en arrays de X elementos
 */

function separa(arr, num){
    let arrs = []

    for(let elemento of arr){

        let ultimo = arrs[arrs.length-1]

        if(!ultimo || ultimo.length === num){
            arrs.push([elemento])
        }else{
            ultimo.push(elemento)
        }
    }
    return arrs
}

console.log(separa([5,4,3,21,1,0],2))