/* Dado un array de alumnos (nombre y nota), mostrar cuantos alumnos estan reprobados y aprobados
 */

function reprobados(lista){
    let aprobados = 0
    let reprobados=0
    for(persona of lista){
        if(persona[1]>5){
         aprobados++
        }else{
            reprobados++
        }
    }
    return {"Aprobados": aprobados,"Reprobados": reprobados}
}

let lista = [
    ["juan",4],
    ["pedro",6],
    ["ernesto",8],
    ["ernestina",3],
    ["Juana",7],
    ["petra",9]
]

console.log(reprobados(lista))