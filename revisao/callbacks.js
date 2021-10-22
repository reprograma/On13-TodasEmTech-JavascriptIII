function somar(a, b) {
    return a + b;
  }

  function subtrair(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  function dividir(a, b) {
    return a / b;
  }

  function calcular(a, b, callback) {
    return callback(a, b);
  }

  // com arrow function:

  // somar = (a, b) => a + b
  // subtrair = (a, b) => a - b
  // multiplicar = (a, b) => a * b
  // dividir = (a, b) => a / b
  // calcular = (a, b, callback) => callback(a, b)

  let num1 = 8
  let num2 = 4

  const somarDoisNumeros = calcular(num1, num2, somar)
  const subtrairDoisNumeros = calcular(num1, num2, subtrair)
  const multiplicarDoisNumeros = calcular(num1, num2, multiplicar)
  const dividirDoisNumeros = calcular(num1, num2, dividir)

  console.log(somarDoisNumeros); // 12
  console.log(subtrairDoisNumeros); // 4
  console.log(multiplicarDoisNumeros); // 32
  console.log(dividirDoisNumeros); // 2 