const objetoJson = [
  {
    "nome": "Cassiane",
    "foto": "https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/06/ddfad82-cassiane_louvores-1024x770.jpg",
    "generos": ["MPB", "Soul", "R&B", "Blues","Gospel"],
    "discografia": ["Com muito Louvor", "Faça a Diferença", ], 
    "instagram": "https://www.instagram.com/cassianecantora/?hl=pt-br"
  },
  
   {
     "nome": "Pitty",
     "foto": "https://portalpopline.com.br/wp-content/uploads/2020/08/pitty-anacronico-mini-1.jpg",
     "generos": ["MPB", "Soul", "R&B", "Blues"],
     "discografia": ["Matriz",  "Admiravel Chip Novo"], 
     "instagram": "https://www.instagram.com/pitty/?hl=pt-br"
   },
  
   {
     "nome":"Eyshila",
     "foto": "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/4/f/e/14fee894c507846bf24ee5cac1a596db.jpg",
     "generos": ["MPB", "Soul", "R&B", "Blues","Gospel"],
     "discografia": [ "Deus Proverá", "Até Tocar o Céu"], 
     "instagram": "https://www.instagram.com/eyshilasantos/?hl=pt-br"
   }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;*/



//Cassiane
const fotoCassiane = document.getElementById("foto-cassi");
const tituloCassiane = document.getElementById("titulo-cassi");
const generosCassiane = document.getElementById("genero-cassi");
const discografiaCassiane = document.getElementById("discografia-cassi");
const instagramCassiane = document.getElementById("instagram-cassi");
//Pitty
const fotoPitty = document.getElementById ("foto-pitty");
const tituloPitty= document.getElementById("titulo-pitty");
const generosPitty = document.getElementById("genero-pitty");
const discografiaPitty= document.getElementById("discografia-pitty");
const instagramPitty = document.getElementById("instagram-pitty");
//Eyshila
const fotoEyshila = document.getElementById ("foto-eyshila");
const tituloEyshila = document.getElementById("titulo-eyshila");
const generosEyshila = document.getElementById("genero-eyshila");
const discografiaEyshila = document.getElementById("discografia-eyshila");
const instagramEyshila = document.getElementById("instagram-eyshila");



function dadosCassiane() {
  fotoCassiane.setAttribute('src', objetoJson[0].foto);
  tituloCassiane.innerText = objetoJson[0].nome;
  generosCassiane.innerText = objetoJson[0].generos.join(" - ");
  discografiaCassiane.innerText = objetoJson[0].discografia.join(" - ");
  instagramCassiane.setAttribute('href',objetoJson[0].instagram);
}


dadosCassiane();


function dadosPitty() {
  fotoPitty.setAttribute('src', objetoJson[1].foto);
  tituloPitty.innerText =  objetoJson[1].nome;
  generosPitty.innerText = objetoJson[1].generos.join(" - ");
  discografiaPitty.innerText =  objetoJson[1].discografia.join(" - ");
  instagramPitty.setAttribute('href',objetoJson[1].instagram);
}

dadosPitty();





function dadosEyshila() {
  fotoEyshila.setAttribute('src', objetoJson[2].foto);
  tituloEyshila.innerText = objetoJson[2].nome;
  generosEyshila.innerText = objetoJson[2].generos.join(" - ");
  discografiaEyshila.innerText = objetoJson[2].discografia.join(" - ");
  instagramEyshila.setAttribute('href',objetoJson[2].instagram);
}
dadosEyshila();











