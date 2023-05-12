const palindromo = require("./ejercicio2")

test("Comprobar si la función palíndromo está definida", ( )=>{
    expect(palindromo).toBeDefined()
})

test("palindomo correcto",()=>{
    expect(palindromo("otto")).toEqual(true)
})

test("no es un palindromo",()=>{
    expect(palindromo("george")).toEqual(false)
})

