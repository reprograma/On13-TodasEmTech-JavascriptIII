const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

// find
const encontraPrimeiro = numeros.find((numero) => numero == 2)
// console.log(encontraPrimeiro) - retorno 2


// filter
const filtrarPor = numeros.filter((numero) => numero == 3)
// console.log(filtrarPor) - retorno [3, 3, 3]

// map
const executarEmTodos = numeros.map((numero) => numero * 2)
// console.log(executarEmTodos) - multiplica tudo por 2

// for each
const verTodos = numeros.forEach((numero) => {
    // console.log(numero * 4) // retorno undefined
})
// console.log(verTodos)

// reduce
const reduzirPara = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual + 5) // soma de todos os itens - retorno 27
// console.log(reduzirPara)

//concat
const arrayConcatenada = numeros.concat(1, [4, 5, 2, 3], 'café')
// console.log(arrayConcatenada)

// a partir daqui os métodos modificam a array original

// push
const adicionaNoFinal = numeros.push(2, 3) 
// console.log(adicionaNoFinal) - retorna 11

// pop
const removeUltimo = numeros.pop()
// console.log(removeUltimo) - retorna 3

//shift
const removePrimeiro = numeros.shift()
// console.log(removePrimeiro) - retorna 3

// unshift
const adicionaNoInicio = numeros.unshift(4, 1)
// console.log(adicionaNoInicio) - retorna 11

// slice
const copiaParte = numeros.slice(2, 5);
// console.log(copiaParte); - retorno [2, 4, 3]

// splice
const removeEAdiciona = numeros.splice(2, 3, "novo") // a partir do indice 2, remove 3 e depois adiciona "novo" 
// console.log(removeEAdiciona) - retorno - retira [2, 4, 3] e adiciona "novo"

// indexOf
const localizaElemento = numeros.indexOf('novo');
// console.log(localizaElemento); 

// includes
const verificaSeExiste = numeros.includes('novo');
// console.log(verificaSeExiste) - true

// join - não modifica a original
const transformaString = numeros.join(' - ')
// console.log(transformaString)

console.log(numeros)