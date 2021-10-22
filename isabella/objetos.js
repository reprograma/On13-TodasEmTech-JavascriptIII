const alunas = {
    nome: { primeiro: "isa", segundo: "bella"},
    idade: 32,
    cidade: "Sp",
    interesses: ["musica", "animais"],
    saudacao:() => console.log("Olá"),
};

//notação de ponto
console.log(alunas.saudacao())//metodo
console.log(alunas.interesses[1])//array dentro do onjeto
//console.log(alunas.interesses[teste])//array dentro do objeto

//notacao de cochetes
console.log(alunas["nome"]["segundo"])
console.log(alunas["interesses"[1]])

const {idade, saudacao} = alunas;
console.log(idade)
saudacao()
