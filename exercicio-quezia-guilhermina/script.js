const json = [
  {
    "nome": "Kemilly Santos",
    "foto": "../img/kemilly.jpg",
    "generos": ["MCC", "Gospel"],
    "discografia-1": ["Fica Tranquilo", "Vai Valer a Pena"], 
    "instagram": "https://www.instagram.com/kemillysantosoficial/"
  },
  {
    "nome": "Ludmila Feber",
    "foto": "../img/ludmila.jpg",
    "generos": ["MCC", "Gospel", "PopRock", "Canto Congregacional"],
    "discografia": ["Nunca Pare de Lutar", "Um Novo Começo", "Ouço Deus Me Chamar"], 
    "instagram": "https://www.instagram.com/pastoraludmilaferber/"
  },
  {
    "nome": "Negra Mary",
    "foto": "../img/mary.jpg",
    "generos": ["MPB", "Pop Rock", "Gospel"],
    "discografia": ["Lugar Seguro"], 
    "instagram": "https://www.instagram.com/negramaryoficial/"
  }
]

const fotoKemilly = document.getElementById('photography-kemilly')
const tituloKemilly = document.getElementById('titulo-Kemilly')
const generosKemilly = document.getElementById('gender-kemilly')
const discografiaKemilly = document.getElementById('discography-Kemilly')
const instagramKemilly = document.getElementById('instagram-Kemilly')

function dadosKemilly() {
  fotoKemilly.setAttribute('src', objetoJson[0].foto);
  tituloKemilly.innerText = objetoJson[0].nome;
  generosKemilly.innerText = objetoJson[0].genero.join(" - ")
  discografiaKemilly.innerText = objetoJson[0].discografia.join(" - ")
  instagram.setAttribute('href', objetoJson[0].instagram)
}
console.log(objetoJson[0].discografia)

dadosKemilly()


const fotoLudmila = document.getElementById('photography-Ludmila')
const tituloLudmila = document.getElementById('title_Ludmila')
const generosLudmila = document.getElementById('gender-ludmila')
const discografiaLudmila = document.getElementById('discography-Ludmila')
const instagramLudmila = document.getElementById('instagram-Ludmila')

function dadosLudmila() {
  fotoLudmila.setAttribute('src', objetoJson[1].foto);
  tituloLudmila.innerText = objetoJson[1].nome;
  generosLudmila.innerText = objetoJson[1].genero.join(" - ")
  discografiaLudmila.innerText = objetoJson[1].discografia.join(" - ")
  instagram.setAttribute('href', objetoJson[1].instagram)
}
/*console.log(objetoJson[0].discografia)*/

dadosLudmila()


const fotoNegraMary= document.getElementById('photography-Mary')
const tituloNegraMary = document.getElementById('title_Mary')
const generosNegraMary = document.getElementById('gender-Mary')
const discografiaNegraMary = document.getElementById('discography-Mary')
const instagramNegraMary = document.getElementById('instagram-Mary')

function dadosNegraMary() {
  fotoNegraMary.setAttribute('src', objetoJson[2].foto);
  tituloNegraMary.innerText = objetoJson[2].nome;
  generosNegraMary.innerText = objetoJson[2].genero.join(" - ")
  discografiaNegraMary.innerText = objetoJson[2].discografia.join(" - ")
  instagramNegraMary.setAttribute('href', objetoJson[2].instagram)
}
/*console.log(objetoJson[0].discografia)*/

dadosNegraMary()

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
