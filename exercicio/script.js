const json = [
  {
    "nome": "Maria Bethânia",
    "foto": "../assets/maria_bethania.jpeg",
    "generos": ["MPB", "Pop"],
    "discografia": ["lançou cerca de 60 discos (entre álbuns solos e projetos com outros artistas)"], 
    "instagram": "https://www.instagram.com/mariabethaniaoficial/"
  },
  {
    "nome": "Mariana Aydar",
    "foto": "../assets/Mariana_Aydar.jpeg",
    "generos": ["MPB", "Forró"],
    "discografia": ["Brasil, Sons e Sabores", "Kavita 1", "Peixes Pássaros Pessoas", "Veia Nordestina", "Outros"], 
    "instagram": "https://www.instagram.com/marianaaydar/"
  },
  {
    "nome": "Pabllo Vittar",
    "foto": "../assets/Pabllo Vittar.png",
    "generos": ["MPB", "Pop", "tecnomelody", "arrocha", "forró"],
    "discografia": ["Vai Passar Mal", "Não Para Não", "111", "Batidão Tropical"], 
    "instagram": "https://www.instagram.com/pabllovittar/"
  }
]

const fotoMaria = document.getElementById('photography-Maria');
const tituloMaria = document.getElementById('title_Maria');
const generosMaria = document.getElementById('gender-Maria');
const discografiaMaria = document.getElementById('discography-Maria');
const instagramMaria = document.getElementById('instagram-Maria');


function dadosMaria() {
  fotoMaria.setAttribute('src', json[0].foto);
  tituloMaria.innerText = json[0].nome;
  generosMaria.innerText = json[0].generos.join(" - ")
  discografiaMaria.innerText = json[0].discografia.join(" - ")
  instagramMaria.setAttribute('href', json[0].instagram)
}
console.log(json[0].discografia)

dadosMaria()

const fotoMariana = document.getElementById('photography-Mariana');
const tituloMariana = document.getElementById('title_Mariana');
const generosMariana = document.getElementById('gender-Mariana');
const discografiaMariana = document.getElementById('discography_Mariana');
const instagramMariana = document.getElementById('instagram-Mariana');


function dadosMariana() {
  fotoMariana.setAttribute('src', json[1].foto);
  tituloMariana.innerText = json[1].nome;
  generosMariana.innerText = json[1].generos.join(" - ")
  discografiaMariana.innerText = json[1].discografia.join(" - ")
  instagramMariana.setAttribute('href', json[1].instagram)
}

dadosMariana()

const fotoPabllo = document.getElementById('photography-Pabllo');
const tituloPabllo = document.getElementById('title_Pabllo');
const generosPabllo = document.getElementById('gender-Pabllo');
const discografiaPabllo = document.getElementById('discography-Pabllo');
const instagramPabllo = document.getElementById('instagram-Pabllo');


function dadosPabllo() {
  fotoPabllo.setAttribute('src', json[2].foto);
  tituloPabllo.innerText = json[2].nome;
  generosPabllo.innerText = json[2].generos.join(" - ")
  discografiaPabllo.innerText = json[2].discografia.join(" - ")
  instagramPabllo.setAttribute('href', json[2].instagram)
}

dadosPabllo()





/*O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)
const foto = document.getElementById('photography')
const titulo = document.getElementById('title')
const generos = document.getElementById('gender')
const discografia = document.getElementById('discography')
const instagram = document.getElementById('instagram')

function preencherDados() {
  foto.setAttribute('src', Json.foto);
  titulo.innerText = Json.nome;
  generos.innerText = Json.generos.join(" - ")
  discografia.innerText = Json.discografia.join(" - ")
  instagram.setAttribute('href', Json.instagram)
} 

preencherDados()

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;*/
