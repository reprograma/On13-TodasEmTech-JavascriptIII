const json = [
  {
    "nome": "Daniela Mercury",
    "foto1": "../assets/daniela-mercury.jpg",
    "generos1": ["Axé", "Samba-reggae", "MPB"],
    "discografia1": ["O canto da cidade", "Swing da cor", "Ilê pérola negra"], 
    "instagram1": "https://www.instagram.com/danielamercury/?hl=pt-br"
  },
  {
    "nome": "Elba Ramalho",
    "foto2": "../assets/elba-ramalho.jpg",
    "generos": ["MPB", "Xote", "Baião", "Xaxado", "Maracatu", "Frevo", "Caboclinhos", "Forró"],
    "discografia": ["Leão do norte", "Flor da Paraíba", "Elba"], 
    "instagram": "https://www.instagram.com/elbaramalho/?hl=pt-br"
  },
  {
    "nome": "Alcione",
    "foto3": "../assets/alcione.jpg",
    "generos": ["MPB", "Samba", "Pagode", "Xote", "Forró", "Bolero", "samba-canção"],
    "discografia": ["A voz do samba", "Morte de um poeta", "Pra que chorar"], 
    "instagram": "https://www.instagram.com/alcioneamarrom/?hl=pt-br"
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
const fotoDaniela = document.getElementById('photography-Daniela')
const tituloDaniela = document.getElementById('title-Daniela')
const generosDaniela = document.getElementById('gender-Daniela')
const discografiaDaniela = document.getElementById('discography-Daniela')
const instagramDaniela = document.getElementById('instagram__Daniela')


function dadosDaniela() {
  fotoDaniela.setAttribute('src', json[0].foto1);
  tituloDaniela.innerText = json[0].nome;
  generosDaniela.innerText = json[0].generos1.join(" - ")
  discografiaDaniela.innerText = json[0].discografia1.join(" - ")
  instagramDaniela.setAttribute('href', json[0].instagram1)
}

dadosDaniela()

const fotoElba = document.getElementById('photography-elba')
const tituloElba = document.getElementById('title-elba')
const generosElba = document.getElementById('gender-elba')
const discografiaElba = document.getElementById('discography-elba')
const instagramElba = document.getElementById('instagram__elba')


function dadosElba() {
  fotoElba.setAttribute('src', json[1].foto2);
  tituloElba.innerText = json[1].nome;
  generosElba.innerText = json[1].generos.join(" - ")
  discografiaElba.innerText = json[1].discografia.join(" - ")
  instagramElba.setAttribute('href', json[1].instagram)
}

dadosElba()

const fotoAlcione = document.getElementById('photography-alcione')
const tituloAlcione = document.getElementById('title-alcione')
const generosAlcione = document.getElementById('gender-alcine')
const discografiaAlcione = document.getElementById('discography-alcione')
const instagramAlcione = document.getElementById('instagram__alcione')


function dadosAlcione() {
  fotoAlcione.setAttribute('src', json[2].foto3);
  tituloAlcione.innerText = json[2].nome;
  generosAlcione.innerText = json[2].generos.join(" - ")
  discografiaAlcione.innerText = json[2].discografia.join(" - ")
  instagramAlcione.setAttribute('href', json[2].instagram)
}

dadosAlcione()