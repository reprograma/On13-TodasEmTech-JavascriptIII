const aluna = {
  nome: { primeiro: "Lilit", segundo: "Bandeira" },
  idade: 32,
  cidade: "Recife",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),
};

// notação de ponto
// console.log(aluna.saudacao()) // método
// console.log(aluna.interesses[1]) // array dentro de objeto
// console.log(aluna.nome.segundo) // objeto dentro de objeto

// notação de cochetes
// console.log(aluna["nome"]["segundo"])
// console.log(aluna["interesses"][1])

const { idade, saudacao } = aluna;

console.log(idade)
saudacao()
