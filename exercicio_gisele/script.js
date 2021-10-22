const json = [
  {
    "nome": "Iza",
    "foto": "./imagens/iza.jpg",
    "generos": ["R&B", "Reggae fusion", "Pop"],
    "discografia": ["Dona de mim"], 
    "instagram": "https://www.instagram.com/iza/?hl=pt-br"
  },
  {
    "nome": "Pitty",
    "foto": "./imagens/pitty.jpg",
    "generos": ["Rock"],
    "discografia": ["Admirável chip novo", "Anacrônico", "Chiaroscuro"], 
    "instagram": "https://www.instagram.com/pitty/?hl=pt-br"
  },  
  {
    "nome": "Gloria Groove",
    "foto": "./imagens/gloria.jpg",
    "generos": ["Pop", "R&B", "Hip hop"],
    "discografia": ["O proceder", "Lady leste"], 
    "instagram": "https://www.instagram.com/gloriagroove/?hl=pt-br"
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
//Dados da Iza

const fotoIza = document.getElementById('img_iza');
const tituloIza = document.getElementById('titulo_iza');
const generoIza = document.getElementById('genero_iza');
const discoIza = document.getElementById('disco_iza');
const instaIza = document.getElementById('insta_iza');

function iza () {
  fotoIza.setAttribute('src', json[0].foto);
  tituloIza.innerText = json[0].nome;
  generoIza.innerText = json[0].generos.join(" - ");
  discoIza.innerText = json[0].discografia.join(" - ");
  instaIza.setAttribute('href', json[0].instagram);
}
iza()

//Dados da Pitty

const fotoPitty = document.getElementById('img_pitty');
const tituloPitty = document.getElementById('titulo_pitty');
const generoPitty = document.getElementById('genero_pitty');
const discoPitty = document.getElementById('disco_pitty');
const instaPitty = document.getElementById('insta_pitty');

function pitty () {
  fotoPitty.setAttribute('src', json[1].foto);
  tituloPitty.innerText = json[1].nome;
  generoPitty.innerText = json[1].generos.join(" - ");
  discoPitty.innerText = json[1].discografia.join(" - ");
  instaPitty.setAttribute('href', json[1].instagram);
}
pitty()

//Dados da Gloria Groove

const fotoGloria = document.getElementById('img_gloria');
const tituloGloria = document.getElementById('titulo_gloria');
const generoGloria = document.getElementById('genero_gloria');
const discoGloria = document.getElementById('disco_gloria');
const instaGloria = document.getElementById('insta_gloria');

function gloria () {
  fotoGloria.setAttribute('src', json[2].foto);
  tituloGloria.innerText = json[2].nome;
  generoGloria.innerText = json[2].generos.join(" - ");
  discoGloria.innerText = json[2].discografia.join(" - ");
  instaGloria.setAttribute('href', json[2].instagram);
}
gloria()