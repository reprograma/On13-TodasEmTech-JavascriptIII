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

const card = document.getElementById('card-singer')
const singerName = document.getElementById('name1');
const photo = document.getElementById('photo1');
const gender = document.getElementById('gender1');
const discografy = document.getElementById('discografy1');
const instagram = document.getElementById('instagram1');


// console.log(cardSinger, singerName, photo, gender, discografy, instagram);

const infosPitty = () => {

singerName.innerHTML = json[0].nome
photo.setAttribute('src', json[0].foto)
gender.innerHTML = json[0].generos.join(" - ")
discografy.innerHTML = json[0].discografia.join(" - ")
instagram.setAttribute('href', json[0].instagram)

}

infosPitty()

const card1 = document.getElementById('card-singer')
const singerName1 = document.getElementById('name2');
const photo1 = document.getElementById('photo2');
const gender1 = document.getElementById('gender2');
const discografy1 = document.getElementById('discografy2');
const instagram1 = document.getElementById('instagram2');

const infosPablo = () => {

  singerName1.innerHTML = json[1].nome
  photo1.setAttribute('src', json[1].foto)
  gender1.innerHTML = json[1].generos.join(" - ")
  discografy1.innerHTML = json[1].discografia.join(" - ")
  instagram1.setAttribute('href', json[1].instagram)
  
  }
  
  infosPablo()


const card2 = document.getElementById('card-singer')
const singerName2 = document.getElementById('name3');
const photo2 = document.getElementById('photo3');
const gender2 = document.getElementById('gender3');
const discografy2 = document.getElementById('discografy3');
const instagram2 = document.getElementById('instagram3');

const infosGloria = () => {

  singerName2.innerHTML = json[2].nome
  photo2.setAttribute('src', json[2].foto)
  gender2.innerHTML = json[2].generos.join(" - ")
  discografy2.innerHTML = json[2].discografia.join(" - ")
  instagram2.setAttribute('href', json[2].instagram)
  
  }
  
  infosGloria()