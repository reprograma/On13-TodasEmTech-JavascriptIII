const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

const encontraPrimeiro = numeros.find((numero) => numero == 2) 
//retorno 2

const filtrarPor = numeros.filter((numero) => numero == 1) 
//retorno [3, 3, 3]

const executarEmTodos = numeros.map((numero) => numero * 2) 
//retorno [6, 4 , 8, ... ]

const verTodos = numeros.forEach((numero) => {
  // console.log(numero * 4)
}) //retorno undefined

const ReduzirPara = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual + 5)  //retorno 27

const arrayConcatenada = numeros.concat(1, [4, 5, 2, 3], "café")

//a partir daqui os métodos modificam a array original

const adicionaNoFinal = numeros.push(2, 3) //retorno 11

const removeUltimo = numeros.pop() //retorno 3

const removePrimeiro = numeros.shift() // retorno 3

const adicionaNoInicio = numeros.unshift(4, 1) // retorno 11
const copiaParte = numeros.slice(2, 5) //retorno [2, 4, 3] - não modifica a array original

const removeEAdicioa = numeros.splice(2, 2, "novo") //retorno 

/* 
[
  4, 1, 'novo',
  3, 5, 1,
  3, 4, 2,
  2
]
*/
const localizaElemento = numeros.indexOf(6) //retorno 2

const verificaSeExiste = numeros.includes('novo') //retorno true

const transformaString = numeros.join(" - ") // não modifica original

console.log(localizaElemento)
// console.log(numeros)

