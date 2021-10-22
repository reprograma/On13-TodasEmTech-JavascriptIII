/*const json = [
  {
    "nome": "Liniker",
    "foto": "../assets/liniker.webp",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  },
  {
    "nome": "Liniker",
    "foto": "../assets/liniker.webp",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  },
  {
    "nome": "Liniker",
    "foto": "../assets/liniker.webp",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  }
]
O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' 
acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página 
exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras 
brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

const json = [
  {
    "nome": "Liniker",
    "foto": "./fotoLiniker.jpg",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Zero","Intimidade", "Calmô"], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  },
  {
    "nome": "Iza",
    "foto": "./fotoIza.jpg",
    "generos": ["R&B", "reggae"],
    "discografia": ["Dona de mim","Brisa", "Pesadão"], 
    "instagram": "https://www.instagram.com/iza/"
  },
  {
    "nome": "Sandy",
    "foto": "./fotoSandy.jpg",
    "generos": ["Rock", "Alternative/Indie", "Pop"],
    "discografia": ["Quando você passa", "Me espera", "A lenda"], 
    "instagram": "https://www.instagram.com/sandyoficial/"
  }
]
const fotoLiniker = document.getElementById('photographyLiniker');
const tituloLiniker = document.getElementById('titleLiniker');
const generosLiniker = document.getElementById('genderLiniker');
const discografiaLiniker = document.getElementById('discographyLiniker');
const instagramLiniker = document.getElementById('instagramLiniker');

function dadosLiniker() {
  fotoLiniker.setAttribute('src', json[0].foto);
  tituloLiniker.innerText = json[0].nome;
  generosLiniker.innerText = json[0].generos.join(" - ")
  discografiaLiniker.innerText = json[0].discografia.join(" - ")
  instagramLiniker.setAttribute('href', json[0].instagram)
}

//console.log(json[0].discografia)

dadosLiniker()

const fotoIza = document.getElementById('photographyIza');
const tituloIza = document.getElementById('titleIza');
const generosIza = document.getElementById('genderIza');
const discografiaIza = document.getElementById('discographyIza');
const instagramIza = document.getElementById('instagramIza');

function dadosIza() {
  fotoIza.setAttribute('src', json[1].foto);
  tituloIza.innerText = json[1].nome;
  generosIza.innerText = json[1].generos.join(" - ")
  discografiaIza.innerText = json[1].discografia.join(" - ")
  instagramIza.setAttribute('href', json[1].instagram)
}

dadosIza()

const fotoSandy = document.getElementById('photographySandy');
const tituloSandy = document.getElementById('titleSandy');
const generosSandy = document.getElementById('genderSandy');
const discografiaSandy = document.getElementById('discographySandy');
const instagramSandy= document.getElementById('instagramSandy');


function dadosSandy() {
  fotoSandy.setAttribute('src', json[2].foto);
  tituloSandy.innerText = json[2].nome;
  generosSandy.innerText = json[2].generos.join(" - ")
  discografiaSandy.innerText = json[2].discografia.join(" - ")
  instagramSandy.setAttribute('href', json[2].instagram)
}

dadosSandy()