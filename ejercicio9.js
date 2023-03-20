//Dados dos arrays, devolver un array con solo los elementos comunes entre ambos

function common(arr1,arr2){
    const filtrado = arr1.filter(elemento => {
       return arr2.includes(elemento)})
    return filtrado
}

console.log(common([1,2,3,4],[3,4,5,6]))