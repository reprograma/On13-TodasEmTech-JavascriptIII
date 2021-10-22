const cantoras = [
  {
    "nome": "Alcione",
    "foto": "./img/alcione.jpeg",
    "generos": ["MPB", "Samba", "Pagode", "Xote", "Forró"],
    "discografia": ["Tijolo por tijolo", "Duas faces", "Uma nova paixão"], 
    "instagram": "https://www.instagram.com/alcioneamarrom/?hl=pt-br"
  },
  {
    "nome": "Cláudia Leitte",
    "foto": "./img/claudia-leitte.jpg",
    "generos": ["Axé", "Pop", "Latino"],
    "discografia": ["As máscaras", "Nega loira", "Axemusic"], 
    "instagram": "https://www.instagram.com/claudialeitte/?hl=pt-br"
  },
  {
    "nome": "Ivete Sangalo",
    "foto": "./img/Ivete-Sangalo.jpg",
    "generos": ["Axé", "Samba-reggae", "pop-latino"],
    "discografia": ["Festa", "Clube carnavalesco", "As super novas"], 
    "instagram": "https://www.instagram.com/ivetesangalo/?hl=pt-br"
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

const fotoCantora1 = document.getElementById('photography1')
const titulo1 = document.getElementById('title1')
const generos1 = document.getElementById('gender1')
const discografia1 = document.getElementById('discography1')
const instagram1 = document.getElementById('instagram1')

const fotoCantora2 = document.getElementById('photography2')
const titulo2 = document.getElementById('title2')
const generos2 = document.getElementById('gender2')
const discografia2 = document.getElementById('discography2')
const instagram2 = document.getElementById('instagram2')

const fotoCantora3 = document.getElementById('photography3')
const titulo3 = document.getElementById('title3')
const generos3 = document.getElementById('gender3')
const discografia3 = document.getElementById('discography3')
const instagram3 = document.getElementById('instagram3')

function preencherDados() {
  fotoCantora1.setAttribute('src', cantoras[0].foto);
  titulo1.innerText = cantoras[0].nome;
  generos1.innerText = cantoras[0].generos.join(" - ")
  discografia1.innerText = cantoras[0].discografia.join(" - ")
  instagram1.setAttribute('href', cantoras[0].instagram)

  fotoCantora2.setAttribute('src', cantoras[1].foto);
  titulo2.innerText = cantoras[1].nome;
  generos2.innerText = cantoras[1].generos.join(" - ")
  discografia2.innerText = cantoras[1].discografia.join(" - ")
  instagram2.setAttribute('href', cantoras[1].instagram)

  fotoCantora3.setAttribute('src', cantoras[2].foto);
  titulo3.innerText = cantoras[2].nome;
  generos3.innerText = cantoras[2].generos.join(" - ")
  discografia3.innerText = cantoras[2].discografia.join(" - ")
  instagram3.setAttribute('href', cantoras[2].instagram)
}

preencherDados()