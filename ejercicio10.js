/*Dado un número, mostrar una escalera con escalones "[.]" usando el número
para los niveles de la escalera*/

function escalera(numero){
    let dibujo = ""

    for(let nivel =1; nivel <= numero;nivel++){
        let escalones=""
        for(let escalon=1;escalon<=nivel;escalon++){
            escalones+="[-]"
        } 
        dibujo += escalones +"\n"
    }
    return dibujo 
}

console.log(escalera(5))
