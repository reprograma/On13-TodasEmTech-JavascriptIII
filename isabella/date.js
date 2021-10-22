const hoje = new Date();

const dia = hoje.getDate();

const mes = hoje.getMonth();

const ano = hoje.getFullYear();

/*console.log(ano)
console.log(mes)
console.log(hoje)
console.log(`${dia}/${mes + 1}/${ano}`)
console.log(dia)*/

//totalLocaleDateString

const dataFormatada = hoje.toLocaleDateString("pt-BR")
//console.log(dataFormatada)


let options = {
    weekday: "long",
    year:"numeric",
    month: "long",
    day: "numeric"
}
const dataLonga = hoje.toLocaleDateString("pt-BR", options)

console.log(dataLonga)