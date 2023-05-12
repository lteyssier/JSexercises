/* Dado un número, mostrar cuantos años, meses y días equivalen*/

function calcularDias(dias){
    let anios = Math.floor(dias/365)
    let dias_restantes = dias%365
    let meses = Math.floor(dias_restantes/30)
    let dias_restantes2 = meses%30
    return `Años: ${anios}, Meses: ${meses}, Días: ${dias_restantes2}`
}

console.log(calcularDias(1000))