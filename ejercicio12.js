/* Dado un número mostrar todos los números desde ese al 0 de 8 en 8 en la lista
con guiones y cada número debe empezar con n°
 */

function menosocho(num){
    console.log(`Del número ${num} al 0`)
    for(i=num;num>0;i--){
        num-=8
        if(num<0)return
        console.log(`n° ${num}`)
    }
    return num
}

menosocho(100)

function hastaCero(numero){
    let resultado = `--- Del ${numero} al 0-- \n`

    while(numero >0){
        resultado += `- n°${numero} \n`
        numero-=8
    }
    
    if(numero <=0){
        resultado += "- n°0 \n"
    }

    resultado += "------FIN-----"

    return resultado
}

console.log(hastaCero(100))