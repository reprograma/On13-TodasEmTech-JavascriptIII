// criando arrays

const tipos = ["String", "Números", "Booleanos"];

const todosOsTipos = [...tipos, "Array"]

const cidades = new Array("Recife", "São Paulo", "Manaus");

const cursos = "frontend backend".split(" ");
// console.log(cursos)
const tecnologias = Array.of("HTML", "CSS", "JS");

// acessando elementos de array diretamente

// console.log(cursos[0])
// console.log(cursos[1])

// desestruturando arrays

const [ primeiro, segundo ] = tipos
console.log(primeiro)

