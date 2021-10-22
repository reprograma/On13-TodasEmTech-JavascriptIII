const tipos = ["String", "Numero", "Booleanos"]

const cidades =  new Array("Recife", "São Paulo", "Manaus")

const cursos = "frontend backend".split("n")

const tecnologias = Array.of("HTML", "CSS", "JS")

//ACESSANDO VALORES DE ARRAYS
/*console.log(cursos[0])
console.log(cursos[1])*/

//
const pessoa = {
    nome: "Isa",
    idade: 21,
}

const { nome, idade } = pessoa
//console.log(idade, nome)

//DESESTRUTURANDO ITENS DA ARRAY

const [primeiro, mouse] = tipos

console.log(mouse)