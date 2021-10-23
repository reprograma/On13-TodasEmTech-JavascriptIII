const json = [
  {
    "nome": "Liniker",
    "foto": "./img/liniker-img.jpg",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Remonta", "Goela Abaixo"], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  },
  {
    "nome": "Gloria Groove",
    "foto": "https://www.estrelando.com.br/uploads/2021/06/17/gloria-site-1623947207.jpg",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Remonta", "Goela Abaixo", ], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  },
  {
    "nome": "Pabllo Vittar",
    "foto": "https://ath2.unileverservices.com/wp-content/uploads/sites/2/2017/07/pabllo-vitar-2.jpg",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Remonta", "Goela Abaixo"], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

const photoLiniker  = document.getElementById('photo-liniker')
const titleLiniker = document.getElementById('title-liniker')
const genderLiniker  = document.getElementById('gender-liniker')
const discographyLiniker  = document.getElementById('discography-liniker')
const instagramLiniker  = document.getElementById('instagram-liniker')



function fillDataLiniker () {
  photoLiniker.setAttribute('src', json[0].foto);
  titleLiniker.innerText = json[0].nome;
  genderLiniker.innerText = json[0].generos.join(' - ');
  discographyLiniker.innerText = json[0].discografia.join(' - ');
  instagramLiniker.setAttribute('href', json[0].instagram);
}

fillDataLiniker();

const photoGloria  = document.getElementById('photo-gloria')
const titleGloria = document.getElementById('title-gloria')
const genderGloria  = document.getElementById('gender-gloria')
const discographyGloria  = document.getElementById('discography-gloria')
const instagramGloria  = document.getElementById('instagram-gloria')

function fillDataGloria () {
  photoGloria.setAttribute('src', json[1].foto);
  titleGloria.innerText = json[1].nome;
  genderGloria.innerText = json[1].generos.join(' - ');
  discographyGloria.innerText = json[1].discografia.join(' - ');
  instagramGloria.setAttribute('href', json[1].instagram);
}

fillDataGloria();

const photoPabllo  = document.getElementById('photo-pabllo')
const titlePabllo = document.getElementById('title-pabllo')
const genderPabllo = document.getElementById('gender-pabllo')
const discographyPabllo  = document.getElementById('discography-pabllo')
const instagramPabllo  = document.getElementById('instagram-pabllo')

function fillDataPabllo () {
  photoPabllo.setAttribute('src', json[2].foto);
  titlePabllo.innerText = json[2].nome;
  genderPabllo.innerText = json[2].generos.join(' - ');
  discographyPabllo.innerText = json[2].discografia.join(' - ');
  instagramPabllo.setAttribute('href', json[2].instagram);
}

fillDataPabllo();

