

function subtrair(a, b) {
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

function dividir (a, b) {
    return a / b
}

function calcular(a, b, callback) {
    return callback(a, b);
}

/*const num1 = 8 
const num2 = 4

const somarDoisNumeros = calcular(num1, num2, somar)
const subtrairDoisNumeros = calcular(num1, num2, subtrair)
const multiplicarDoisNumeros = calcular(num1, num2, multiplicar)*/

//console.log(somarDoisNumeros)


//ARROW FUNCTION
somar = (a, b) =>  a + b
subtrair = (a, b) => a -b
multiplicar = (a, b) => a * b
dividir = (a, b) => a / b
calcular = (a, b, callback) => callback(a, b)
console.log(somar(3, 2))


multiplicar = (a, b) => a * b

console.log(multiplicar(23, 444))