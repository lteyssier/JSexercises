//Ejecuta una función que devuelva la tabla de multiplicar completa

function tablaMultiplicar(n){
    console.log(`# Tabla del ${n}:`)
    for(i=1; i<=10; i++){
        console.log(`${i} x ${n} = ${i*n}`)
    }
    return
}

console.log(tablaMultiplicar(5))
