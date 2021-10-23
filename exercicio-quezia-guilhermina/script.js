const json = [
  {
    "nome": "Kemilly Santos",
    "foto": "../img/kemilly.jpg",
    "genero-1": ["MCC", "Gospel"],
    "discografia-1": ["Fica Tranquilo", "Vai Valer a Pena"], 
    "instagram-1": "https://www.instagram.com/kemillysantosoficial/"
  },
  {
    "nome": "Ludmila Feber",
    "foto-2": "../img/ludmila.jpg",
    "genero-2": ["MCC", "Gospel", "PopRock", "Canto Congregacional"],
    "discografia-2": ["Nunca Pare de Lutar", "Um Novo Começo", "Ouço Deus Me Chamar"], 
    "instagram-2": "https://www.instagram.com/pastoraludmilaferber/"
  },
  {
    "nome": "Negra Mary",
    "foto-3": "../img/mary.jpg",
    "genero-3": ["MPB", "Pop Rock", "Gospel"],
    "discografia-3": ["Lugar Seguro"], 
    "instagram": "https://www.instagram.com/negramaryoficial/"
  }
]

const foto = document.getElementById('foto-1')
const titulo = document.getElementById('titulo-1')
const generos = document.getElementById('generoK')
const discografia = document.getElementById('discography')
const instagram = document.getElementById('instagramK')

function dadosKemilly() {
  foto.setAttribute('src', objetoJson.foto-1);
  titulo.innerText = objetoJson.nome;
  generos.innerText = objetoJson.genero.join(" - ")
  discografia.innerText = objetoJson.discografia.join(" - ")
  instagram.setAttribute('href', objetoJson.instagram)
}

dadosKemilly()
/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
