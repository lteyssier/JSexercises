//Dibujar en cuadrado  hueco con asteriscos

function cuadrado(numero){
    //lado arriba
    let dibujo = ladoa(numero)+"\n"
    let contenido =""
    //filas
    for (let i = 0; i < numero-2; i++) {
       contenido ="*"
       //contenido hueco
       for(let x=0; x<numero-2;x++){
         contenido += " "
       }
       contenido += "*"
       //añadir filas
        dibujo += contenido + "\n"
    }
    //lado abajo
    dibujo += ladoa(numero)

    return dibujo
}

function ladoa(numero){
    let arriba =""
    for(i=0;i<numero;i++){
        arriba += "*"
    }
    return arriba
}





console.log(ladoa(4))

console.log("++++"+"\n"+"+  +"+"\n"+"+  +"+"\n"+"++++")
console.log(cuadrado(4))