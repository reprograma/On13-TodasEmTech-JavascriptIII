const json = [
  {
    "nome": "Pitty",
    "foto": "./img/pitty.png",
    "generos": ["Rock Alternativo", "Pop Rock", "R&B"],
    "discografia": ["Admirável Chip Novo", "Anacrônico"], 
    "instagram": "https://www.instagram.com/pitty/"
  },
  {
    "nome": "Iza",
    "foto": "./img/iza.jpg",
    "generos": [ "R&B", "Pop", "Reggae Fusion"],
    "discografia": ["Dona de Mim"], 
    "instagram": "https://www.instagram.com/iza/"
  },
  {
    "nome": "Anitta",
    "foto":  "./img/anitta.jpg",
    "generos": [ "Pop", "Funk"],
    "discografia": ["Anitta", "Bang!", "Ritmo Perfeito"], 
    "instagram": "https://www.instagram.com/anitta/"
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

const photoPitty  = document.getElementById('photo__pitty')
const titlePitty = document.getElementById('title__pitty')
const genderPitty  = document.getElementById('gender__pitty')
const discographyPitty  = document.getElementById('discography__pitty')
const instagramPitty  = document.getElementById('instagram__pitty')

function fillDataPitty () {
  photoPitty.setAttribute('src', json[0].foto);
  titlePitty.innerText = json[0].nome;
  genderPitty.innerText = json[0].generos.join(' - ');
  discographyPitty.innerText = json[0].discografia.join(' - ');
  instagramPitty.setAttribute('href', json[0].instagram);
}

fillDataPitty()

const photoIza  = document.getElementById('photo__iza')
const titleIza = document.getElementById('title__iza')
const genderIza  = document.getElementById('gender__iza')
const discographyIza  = document.getElementById('discography__iza')
const instagramIza  = document.getElementById('instagram__iza')

function fillDataIza () {
  photoIza.setAttribute('src', json[1].foto);
  titleIza.innerText = json[1].nome;
  genderIza.innerText = json[1].generos.join(' - ');
  discographyIza.innerText = json[1].discografia;
  instagramIza.setAttribute('href', json[1].instagram);
}

fillDataIza()

const photoAnitta  = document.getElementById('photo__anitta')
const titleAnitta  = document.getElementById('title__anitta')
const genderAnitta   = document.getElementById('gender__anitta')
const discographyAnitta   = document.getElementById('discography__anitta')
const instagramAnitta   = document.getElementById('instagram__anitta')

function fillDataAnitta () {
  photoAnitta .setAttribute('src', json[2].foto);
  titleAnitta.innerText = json[2].nome;
  genderAnitta .innerText = json[2].generos.join(' - ');
  discographyAnitta.innerText = json[2].discografia.join(' - ');
  instagramAnitta.setAttribute('href', json[2].instagram);
}

fillDataAnitta()