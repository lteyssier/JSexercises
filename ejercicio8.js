//Dado un número entero, inviertelo y devuelve de nuevo el entero 

function invertnum(num){
   let texto = num.toString().split('').reverse().join('')
   let num2 = parseInt(texto)
   return num2
}

console.log(invertnum(56))
