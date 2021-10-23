const json = [
  {
    "nome": "Glória Groove",
    "foto": "./img/gloriagroove.jpg",
    "genre": ["Pop"],
    "favorite_song": ["A Caminhada"], 
    "youtube": "https://www.youtube.com/watch?v=cZ7f491O5yo"
  },
  {
    "nome": "Lizzo",
    "foto": "./img/lizzo.jpg",
    "genre": ["Pop"],
    "favorite_song": ["Truth Hurts"], 
    "youtube": "https://www.youtube.com/watch?v=DFiLdByWIDY"
  },
  {
    "nome": "Ludmilla",
    "foto": "./img/ludmila.jpg",
    "genre": ["Pop", "Funk", "Pagode"],
    "favorite_song": ["Rainha da Favela"], 
    "youtube": "https://www.youtube.com/watch?v=DWH349RfD7E"
  }
]

const fotoGG = document.getElementById('fotoGG')
const nomeGG = document.getElementById('nomeGG')
const genreGG = document.getElementById('genreGG')
const favorite_songGG = document.getElementById('favorite_songGG')
const youtubeGG = document.getElementById('youtubeGG')

function dadosGG() {
  fotoGG.setAttribute('src', json[0].foto);
  nomeGG.innerText = json[0].nome;
  genreGG.innerText = json[0].genre.join(" - ");
  favorite_songGG.innerText = json[0].favorite_song.join (" - ");
  youtubeGG.setAttribute('href', json[0].youtube)
}
dadosGG()

const fotoLi = document.getElementById('fotoLi')
const nomeLi = document.getElementById('nomeLi')
const genreLi = document.getElementById('genreLi')
const favorite_songLi = document.getElementById('favorite_songLi')
const youtubeLi = document.getElementById('youtubeLi')

function dadosLi() {
  fotoLi.setAttribute('src', json[1].foto);
  nomeLi.innerText = json[1].nome;
  genreLi.innerText = json[1].genre.join(" - ");
  favorite_songLi.innerText = json[1].favorite_song.join (" - ");
  youtubeLi.setAttribute('href', json[1].youtube)
}
dadosLi()

const fotoLu = document.getElementById('fotoLu')
const nomeLu = document.getElementById('nomeLu')
const generosLu = document.getElementById('genreLu')
const discografiaLu = document.getElementById('favorite_songLu')
const youtubeLu = document.getElementById('youtubeLu')


function dadosLu() {
  fotoLu.setAttribute('src', json[2].foto);
  nomeLu.innerText = json[2].nome;
  generosLu.innerText = json[2].genre.join(" - ");
  discografiaLu.innerText = json[2].favorite_song.join (" - ");
  youtubeLu.setAttribute('href', json[2].youtube)
}
dadosLu()

/* 
O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)
Importante:
1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;
*/