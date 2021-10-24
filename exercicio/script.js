const tCantorasJson = [
  {
    "nome": "Jup do Bairro",
    "foto": "../img/jupdobairro.jpg",
    "generos": ["Hip-hop", "Rap", "Funk", "Pop"],
    "discografia": ["Corpo sem Juízo", "All you Need is Love", "Sinfonia do Corpo"], 
    "instagram": "https://www.instagram.com/jupdobairro/"
  },
  {
    "nome": "Ventura Profana",
    "foto": "../assets/venturaprofana.jpg",
    "generos": ["Gospel", "Soul", "Rap", "Cânticos"],
    "discografia": ["Resplandecente", "Eu não vou morrer", "Traquejos Pentecostais para Matar o Senhor"], 
    "instagram": "https://www.instagram.com/venturaprofana/"
  },
  {
    "nome": "Linn da Quebrada",
    "foto": "../assets/linndaquebrada.jpg",
    "generos": ["Dance", "Funk", "R&B", "Eletrónica"],
    "discografia": ["Pajubá", "Trava Línguas", "Pajubá Remix I & II"], 
    "instagram": "https://www.instagram.com/linndaquebrada/"
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

//Jup do Bairro

const fotoJup = document.getElementById('photography_jup');
const tituloJup = document.getElementById('title_jup');
const generosJup = document.getElementById('gender_jup');
const discografiaJup = document.getElementById('discography_jup');
const instagramJup = document.getElementById('instagram_jup');


function dadosJup () {
  foto.setAttribute('src', tCantorasJson[0].foto);
  titulo.innerText = tCantorasJson[0].nome;
  generos.innerText = tCantorasJson[0].generos.join(" - ");
  discografia.innerText = tCantorasJson[0].discografia.join(" - ");
  instagram.setAttribute('href', tCantorasJson[0].instagram);
}

dadosJup()

//Ventura Profana

const fotoJup = document.getElementById('photography_ventura');
const tituloJup = document.getElementById('title_ventura');
const generosJup = document.getElementById('gender_ventura');
const discografiaJup = document.getElementById('discography_ventura');
const instagramJup = document.getElementById('instagram_ventura');

function dadosVentura () {
  foto.setAttribute('src', tCantorasJson[1].foto);
  titulo.innerText = tCantorasJson[1].nome;
  generos.innerText = tCantorasJson[1].generos.join(" - ");
  discografia.innerText = tCantorasJson[1].discografia.join(" - ");
  instagram.setAttribute('href', tCantorasJson[1].instagram); 
  }

  dadosVentura()

  //Linn da Quebrada

  const fotoJup = document.getElementById('photography_ventura');
const tituloJup = document.getElementById('title_ventura');
const generosJup = document.getElementById('gender_ventura');
const discografiaJup = document.getElementById('discography_ventura');
const instagramJup = document.getElementById('instagram_ventura');

function dadosLinn () {
  foto.setAttribute('src', tCantorasJson[0].foto);
  titulo.innerText = tCantorasJson[0].nome;
  generos.innerText = tCantorasJson[0].generos.join(" - ");
  discografia.innerText = tCantorasJson[0].discografia.join(" - ");
  instagram.setAttribute('href', tCantorasJson[0].instagram); 