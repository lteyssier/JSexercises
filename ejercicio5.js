//¿Cuánto es el X por cierto de X número?
function tantoPorCiento(porc, cantidad){
    let porcentaje = cantidad *(porc/100)
    return `El ${porc} de ${cantidad} es : ${porcentaje}`
}

console.log(tantoPorCiento(20,100))
