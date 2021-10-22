const hoje = new Date();

const dia = hoje.getDate();
const mes = hoje.getMonth(); // conta a partir do 0 - janeiro
const ano = hoje.getFullYear();

// console.log(`${dia}/${mes + 1}/${ano}`)

//toLocaleDateString

const dataFormatada = hoje.toLocaleDateString("pt-BR")
// console.log(dataFormatada)

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}

const dataLonga = hoje.toLocaleDateString("pt-BR", options)