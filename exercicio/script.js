const json = [
  {
    "nome": "Liniker",
    "foto": "../assets/lini.jpg",
    "generos": ["MPB", "Soul", "R&B", "Blues"],
    "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
    "instagram": "https://www.instagram.com/linikeroficial/"
  },
  {
    "nome": "Doralyce",
    "foto": "../assets/dora.jpg",
    "generos": ["Pop"],
    "discografia": ["Festa Boa", "Miss Beleza Universal", "Para de apontar o dedo"], 
    "instagram": "https://www.instagram.com/missbelezauniversal/"
  },
  {
    "nome": "Maria Bethânia",
    "foto": "../assets/maria.jpg",
    "generos": ["MPB", "Blues"],
    "discografia": ["Carta de amor", "Fera Ferida", "Onde estará o meu amor?"], 
    "instagram": "https://www.instagram.com/mariabethaniaoficial/"
  }
];


const fotoLiniker = document.getElementById("foto");
const tituloLiniker = document.getElementById("titulo-1");
const generosLiniker = document.getElementById("genero");
const discografiaLiniker = document.getElementById("discografia");
const instagramLiniker = document.getElementById("instagram");

function fichaLiniker() {
  fotoLiniker.setAttribute('src', json[0].foto);
  tituloLiniker.innerText = json[0].nome;
  generosLiniker.innerText = json[0].generos.join(" - ");
  discografiaLiniker.innerText = json[0].discografia.join(" - ");
  instagramLiniker.setAttribute('href', json[0].instagram);
}
console.log(json[0].discografia);

fichaLiniker();

const fotoDoralyce = document.getElementById("foto-2");
const tituloDoralyce = document.getElementById("titulo-2");
const generosDoralyce = document.getElementById("genero-2");
const discografiaDoralyce = document.getElementById("discografia-2");
const instagramDoralyce = document.getElementById("instagram-2");

function fichaDolaryce() {
  fotoDoralyce.setAttribute('src', json[1].foto);
  tituloDoralyce.innerText = json[1].nome;
  generosDoralyce.innerText = json[1].generos.join(" - ");
  discografiaDoralyce.innerText = json[1].discografia.join(" - ");
  instagramDoralyce.setAttribute('href', json[1].instagram);
}
console.log(json[1].discografia);

fichaDolaryce();

const fotoMaria = document.getElementById("foto-3");
const tituloMaria = document.getElementById("titulo-3");
const generosMaria = document.getElementById("genero-3");
const discografiaMaria = document.getElementById("discografia-3");
const instagramMaria = document.getElementById("instagram-3");

function fichaMaria() {
  fotoMaria.setAttribute('src', json[2].foto);
  tituloMaria.innerText = json[2].nome;
  generosMaria.innerText = json[2].generos.join(" - ");
  discografiaMaria.innerText = json[2].discografia.join(" - ");
  instagramMaria.setAttribute('href', json[2].instagram);
}
console.log(json[2].discografia);

fichaMaria();




/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
