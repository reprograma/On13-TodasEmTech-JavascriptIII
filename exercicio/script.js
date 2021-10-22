const json = [
  {
    "id": "1",
    "nome": "Pitty",
    "foto": "../assets/pitty.jpeg",
    "generos": ["MPB", "Rock", "R&B", "Blues"],
    "discografia": ["Equalize", "Admirável chip novo", "Na sua estante"], 
    "instagram": "https://www.instagram.com/pitty/"
  },
  {
    "id": "2",
    "nome": "Pabllo Vittar",
    "foto": "../assets/pabllo-vitar-2.jpeg",
    "generos": ["POP", "Funk", "Brega", "MPB"],
    "discografia": ["K.O", "Amor de Kenga", "Open Bar"], 
    "instagram": "https://www.instagram.com/pablovittar/"
  },
  {
    "id": "3",
    "nome": "Glória Groove",
    "foto": "../assets/gloria.jpeg",
    "generos": ["POP", "Rap", "Funk", "MPB"],
    "discografia": ["Bumbum de Ouro", "Coisa Boa", "A bonekinha não sabe brincar"], 
    "instagram": "https://www.instagram.com/gloriagroove/"
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/


const singerName = document.querySelectorAll('.name');
const photo = document.querySelectorAll('.photo');
const gender = document.querySelectorAll('.gender');
const discografy = document.querySelectorAll('.discografy');
const instagram = document.querySelectorAll('.instagram');

function infosSinger () {

for (i = 0; i <= json.length; i++) {

  singerName[i].innerHTML = json[i].nome
  photo[i].setAttribute('src', json[i].foto)
  gender[i].innerHTML = json[i].generos.join(" - ")
  discografy[i].innerHTML = json[i].discografia.join(" - ")
  instagram[i].setAttribute('href', json[i].instagram)
  
  }
}
  infosSinger()




