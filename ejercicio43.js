/* Dado un array de números, sacar la media de todos ellos
 */

function media(arr){
    const suminic = arr.reduce((accumlate, current)=> accumlate+current)
    const media = suminic/arr.length
    return media
}

console.log(media([1,2,3,4,5]))

