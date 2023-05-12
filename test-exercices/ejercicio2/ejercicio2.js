//Dada una cadena de texto, comprobar si es un palindromo o no

function palindromo(str1){
    if(str1.length===1) return true
    if(str1.length===2) return str1[0]===str1[1]
    if(str1[0]===str1.slice(-1))return palindromo(str1.slice(1,-1))
    return false
}


function ispalindrome(text1){
    let reversed = text1.split('').reverse().join('')
    if(reversed === text1)return true
    else return false
}

module.exports = palindromo