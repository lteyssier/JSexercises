/* Dado un número, indicar qué tipo de angulo es */

function angulo(num){
    if(num===90){
        return "Ángulo recto"
    }else if(num <90){
        return "Ángulo agudo"
    }else if(num>90 && num<180){
        return "Ángulo obtuso"
    }else if(num === 180){
        return "Ángulo llano"
    }else if(num > 180 && num<360){
        return "Ángulo concavo"
    }
}

console.log(angulo(145))
console.log(angulo(34))
console.log(angulo(90))