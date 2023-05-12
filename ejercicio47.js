/* Dado un array de objetos, devolver cuales son las aficiones más de los usuarios
 */

const usuarios = [
    {nombre: "jorge", aficiones:["informatica","cine","videojuegos"]},
    {nombre: "paco", aficiones:["futbol","cine","videojuegos"]},
    {nombre: "pedro", aficiones:["informatica","futbol"]},
    {nombre: "lamar", aficiones:["cine","videojuegos"]},
    {nombre: "enrique", aficiones:["cine","futbol"]}
]

function masaficiones(usuarios){
    let grupoaficiones = {}
    for(objeto of usuarios){
        for(aficion of objeto.aficiones){
          if(!grupoaficiones[aficion]){
            grupoaficiones[aficion]=1
          }else{
            grupoaficiones[aficion]++
          }
        }
    }
    return grupoaficiones
}

console.log(masaficiones(usuarios))