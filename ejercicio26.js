/* Dado un número, mostrar sus serie de fibonacci. La serie de fibonacci es un orden 
de números donde cada número es la suma de los dos anteriores
 */

function fib(num){
    let serie = [0,1]
    for(let i=2; i<=num;i++){
        serie.push(serie[i-1]+serie[i-2])
    }
    return [serie, serie[num]]
}

console.log(fib(10))