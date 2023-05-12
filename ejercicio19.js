/* Dado un array de objetos de peliculas (titulo, director, vista)
mostrar todas las películas indicando cual has visto y cual no
 */

let peliculas=[
    {"titulo":"spiderman",
     "director":"Wes Anderson",
     "visto":true
    },
    {"titulo":"he man",
     "director":"Scorsesse",
     "visto":false
    },
    {"titulo":"batman",
     "director":"Tarantino",
     "visto":true
    },
    {"titulo":"Ultraman",
     "director":"Tom Cruise",
     "visto":false
    }
]

function misPeliculas(arr){
    arr.map(element => {
      if(element.visto){
        console.log(`Ya has visto: "${element.titulo}"`)
      }else{
        console.log(`Te falta por ver: "${element.titulo}"`)
      }
    })
}

misPeliculas(peliculas)

//V2

function misPeliculas2(peliculas){
    for(pelicula of peliculas){
        let mostrar = `${pelicula.titulo} de ${pelicula.director}`
        if(pelicula.visto){
            console.log("Ya has visto", mostrar)
        }else{
            console.log("Te falta por ver", mostrar)
        }
    }
    return peliculas
}

misPeliculas2(peliculas)