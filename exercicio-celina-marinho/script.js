const jsonCantorasPe = [
  {
    "nome": "Isaar",
    "foto": "./imagens/isaar.jpg",
    "generos": ["MPB", "Afoxé", "Coco", "Frevo"],
    "discografia": ["Azul Claro", "Leve", "Copo de Espuma", "Todo Calor"], 
    "instagram": "https://www.instagram.com/isaar_insta/"
  },
  {
    "nome": "Lia de Itamaracá",
    "foto": "./imagens/lia.jpg",
    "generos": ["MPB", "Ciranda"],
    "discografia": ["A rainha da ciranda", "Eu sou Lia", "Ciranda de ritmos", "Ciranda sem fim"], 
    "instagram": "https://www.instagram.com/liadeitamaracaoficial/"
  },
  {
    "nome": "Gabi da Pele Preta",
    "foto": "./imagens/gabi_gabi.jpg",
    "generos": ["MPB", "Afrobrasileira"],
    "discografia": ["Revolução"], 
    "instagram": "https://www.instagram.com/gabidapelepreta/"
  }
]
  //infos da Isaar

const fotoIsaar = document.getElementById('fotografia_isaar');
const tituloIsaar = document.getElementById('title_isaar');
const generosIsaar = document.getElementById('gender_isaar');
const discografiaIsaar = document.getElementById('discography_isaar');
const instagramIsaar = document.getElementById('instagram_isaar');

function cardIsaar() {
  fotoIsaar.setAttribute('src', jsonCantorasPe[0].foto);
  tituloIsaar.innerText = jsonCantorasPe[0].nome;
  generosIsaar.innerText = jsonCantorasPe[0].generos.join(' - ');
  discografiaIsaar.innerText = jsonCantorasPe[0].discografia.join(' - ');
  instagramIsaar.setAttribute('href', jsonCantorasPe[0].instagram )
}

cardIsaar()

const fotoLia = document.getElementById('fotografia_lia');
const tituloLia = document.getElementById('title_lia');
const generosLia = document.getElementById('gender_lia');
const discografiaLia = document.getElementById('discography_lia');
const instagramLia = document.getElementById('instagram_lia');

function cardLia() {
  fotoLia.setAttribute('src', jsonCantorasPe[1].foto);
  tituloLia.innerText = jsonCantorasPe[1].nome;
  generosLia.innerText = jsonCantorasPe[1].generos.join(' - ');
  discografiaLia.innerText = jsonCantorasPe[1].discografia.join(' - ');
  instagramLia.setAttribute('href', jsonCantorasPe[1].instagram);
}
cardLia()


const fotoGabi = document.getElementById('fotografia_gabi');
const tituloGabi = document.getElementById('title_gabi');
const generosGabi = document.getElementById('gender_gabi');
const discografiaGabi = document.getElementById('discography_gabi');
const instagramGabi = document.getElementById('instagram_gabi');

function cardGabi() {
  fotoGabi.setAttribute('src', jsonCantorasPe[2].foto);
  tituloGabi.innerText = jsonCantorasPe[2].nome;
  generosGabi.innerText = jsonCantorasPe[2].generos.join(' - ');
  discografiaGabi.innerText = jsonCantorasPe[2].discografia.join(' - ');
  instagramGabi.setAttribute('href', jsonCantorasPe[2].instagram);
}
cardGabi()




/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/






