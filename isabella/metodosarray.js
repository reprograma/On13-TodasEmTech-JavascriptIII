const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

const encontraPrimeiro = numeros.find((numero) => 
numero == 2) //retorno 2

const filtrarPor = numeros.filter((numero) => numero == 3) // retorno [3, 3, 3]

const executarEmTodos = numeros.map((numero) => numero * 4)

const verTodos = numeros.forEach((numero) => numero * 4) //nao retorna nada (undefined), só executa/ faz o mesmo que o map mas so executa


//console.log(verTodos)
//console.log(executarEmTodos)
//console.log(filtrarPor)
//console.log(encontraPrimeiro)
//REDUCE

const ReduzirPara = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual + 5) //retorno = soma de todos os tiens
/*console.log(ReduzirPara)
console.log(numeros)
*/
//ARRAY CONTATENADA

const arrayConcatenada = numeros.concat(1, [4, 5, 2, 3], "café")

//A PARTIR DAQUI OS MÉTODOS MODIFICAM A ARRAY ORIGINAL

const adicionaNoFinal = numeros.push(2)


const removeUltimo = numeros.pop()//retorno 3

const removePrimeiro = numeros.shift()// retorno 3

const adicionaNoInicio = numeros.unshift(4, 1)

const copiaParte = numeros.slice(2, 5)

const removeEAdiciona = numeros.splice(2, 3, "novo")

const verificaSeExiste = numeros.includes('novo')

const tranformaString = numeros.join(' - ') //não modifica original

//console.log(tranformaString)
//console.log(verificaSeExiste)
//console.log(removeEAdiciona)
//console.log(copiaParte)
//console.log(adicionaNoInicio)
//console.log(removePrimeiro)
//console.log(removeUltimo)
//console.log(adicionaNoFinal)


