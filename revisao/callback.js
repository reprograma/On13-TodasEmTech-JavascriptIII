somar = (a,b) => {return a + b}

subtrair = (a,b) => {return a - b}

multiplicar = (a,b) => {return a * b}

dividir = (a,b) => {return a / b}

calcular = (a, b, callback) => {return callback(a,b)}

let num1 = 8
let num2 = 4

const somarDoisNumeros = calcular(num1, num2, somar)
const subtrairDoisNumeros = calcular(num1, num2, subtrair)
const multiplicarDoisNumeros = calcular(num1, num2, multiplicar)
const dividirDoisNumeros = calcular(num1, num2, dividir)

console.log(somarDoisNumeros) // 12
console.log(subtrairDoisNumeros) // 4
console.log(multiplicarDoisNumeros) // 32
console.log(dividirDoisNumeros) // 2

console.log(somar(5))