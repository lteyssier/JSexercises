/* Dado un array de números, devolver el array sin elementos duplicados
 */

function duplicados(arr){
    arr  = arr.filter(elemento => {
        return typeof elemento === "number"
    })

    let set_sin_dup = new Set(arr)

    return Array.from(set_sin_dup)
}

console.log(duplicados([1,3,4,0,2,3,5,6,7,7,7,8,8]))