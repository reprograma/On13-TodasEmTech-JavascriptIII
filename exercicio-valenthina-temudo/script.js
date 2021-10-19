const json = [
  {
    "nome": "Anitta",
    "foto": "./imagens/anitta.jpg",
    "generos": ["Pop"],
    "discografia": ["Anitta", "Ritmo Perfeito", "Bang", "Kisses"], 
    "instagram": "https://www.instagram.com/anitta"
  },
  {
    "nome": "Marília Mendonça",
    "foto": "./imagens/marilia mendonça.jpg",
    "generos": ["Sertanejo"],
    "discografia": ["Marília Mendonça: Ao Vivo", "Realidade", "Todos os Cantos Vol.1, Vol.2 e Vol.3"], 
    "instagram": "https://www.instagram.com/mariliamendoncacantora"
  },
  {
    "nome": "Iza",
    "foto": "./imagens/iza.jpg",
    "generos": ["Pop", "R&B", "Soul", "Reggae Fusion"],
    "discografia": ["Dona de Mim", "Goela Abaixo", "Indigo Borboleta Azul"], 
    "instagram": "https://www.instagram.com/iza"
  }
]

const fotoAnitta = document.getElementById('fotoA')
const tituloAnitta = document.getElementById('tituloA')
const generosAnitta = document.getElementById('generoA')
const discografiaAnitta = document.getElementById('discografiaA')
const instagramAnitta = document.getElementById('instagramA')

function dadosAnitta() {
  fotoAnitta.setAttribute('src', json[0].foto);
  tituloAnitta.innerText = json[0].nome;
  generosAnitta.innerText = json[0].generos.join(" - ");
  discografiaAnitta.innerText = json[0].discografia.join (" - ");
  instagramAnitta.setAttribute('href', json[0].instagram)
}
dadosAnitta()

const fotoMarilia = document.getElementById('fotoM')
const tituloMarilia = document.getElementById('tituloM')
const generosMarilia = document.getElementById('generoM')
const discografiaMarilia = document.getElementById('discografiaM')
const instagramMarilia = document.getElementById('instagramM')

function dadosMarilia() {
  fotoMarilia.setAttribute('src', json[1].foto);
  tituloMarilia.innerText = json[1].nome;
  generosMarilia.innerText = json[1].generos.join(" - ");
  discografiaMarilia.innerText = json[1].discografia.join (" - ");
  instagramMarilia.setAttribute('href', json[1].instagram)
}
dadosMarilia()

const fotoIza = document.getElementById('fotoI')
const tituloIza = document.getElementById('tituloI')
const generosIza = document.getElementById('generoI')
const discografiaIza = document.getElementById('discografiaI')
const instagramIza = document.getElementById('instagramI')


function dadosIza() {
  fotoIza.setAttribute('src', json[2].foto);
  tituloIza.innerText = json[2].nome;
  generosIza.innerText = json[2].generos.join(" - ");
  discografiaIza.innerText = json[2].discografia.join (" - ");
  instagramIza.setAttribute('href', json[2].instagram)
}
dadosIza()

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
