const json = [
  {
    nome: "Letrux",
    foto: "../assets/letrux.jpg",
    generos: ["Indie", "MPB", "Pop"],
    discografia: [
      "Letrux em Noite de Climão",
      "Letrux em Noite de Pistinha",
      "Letrux Aos Prantos",
    ],
    spotify:
      "https://open.spotify.com/artist/4U1VRNe8VwcTAA6ShGyuke?si=-iKsoAOVRLWVGpPy4oVyMA",
  },
  {
    nome: "Maria Bethânia",
    foto: "../assets/maria.jpg",
    generos: ["MPB", "Bossa Nova", "Samba"],
    discografia: [
      "Maria Bethânia",
      "Mangueira: A menina dos meus olhos",
      "Noturno",
      "(...)",
    ],
    spotify:
      "https://open.spotify.com/artist/3f5VCwd57gZsqMad28jyLV?si=4HYF0xqwTly3SUCbdGSM6w",
  },
  {
    nome: "Luedji Luna",
    foto: "../assets/luedji.jpg",
    generos: ["R&B", "Jazz", "Blues", "MPB"],
    discografia: ["Um Corpo no Mundo", "Bom Mesmo É Estar Debaixo D'Água"],
    spotify:
      "https://open.spotify.com/artist/0sWTkzCrdEvuX7Du6MFLzc?si=DKn4gx4MQ5iXnsM2qQJgWA",
  },
];

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
const main = document.querySelector("main");
const header = document.querySelector("header");
const tituloPagina = document.createElement("h1");
tituloPagina.innerText = "Rainhas brasileiras";
header.appendChild(tituloPagina);
tituloPagina.classList.add("header-titulo");

const card = document.createElement("article");
const titulo = document.createElement("h1");
const foto = document.createElement("img");
const infos = document.createElement("div");
const generosTitulo = document.createElement("h2");
const generos = document.createElement("p");
const discografiaTitulo = document.createElement("h2");
const discografia = document.createElement("p");
const link = document.createElement("a");
const icone = document.createElement("i");

for (let i = 0; i < json.length; i++) {
  const card = document.createElement("article");
  const titulo = document.createElement("h1");
  const foto = document.createElement("img");
  const infos = document.createElement("div");
  const generosTitulo = document.createElement("h2");
  const generos = document.createElement("p");
  const discografiaTitulo = document.createElement("h2");
  const discografia = document.createElement("p");
  const link = document.createElement("a");
  const icone = document.createElement("i");

  titulo.innerText = json[i].nome;
  foto.setAttribute("src", json[i].foto);
  infos.appendChild(generosTitulo);
  infos.appendChild(generos);
  generosTitulo.innerText = "Gêneros";
  generos.innerText = json[i].generos.join(" | ");
  infos.appendChild(discografiaTitulo);
  infos.appendChild(discografia);
  discografiaTitulo.innerText = "Discografia";
  discografia.innerText = json[i].discografia.join(" | ");
  infos.appendChild(link);
  link.setAttribute("href", json[i].spotify);
  link.setAttribute("target", "_blank");
  link.appendChild(icone);

  card.classList.add("container");
  titulo.classList.add("titulo");
  foto.classList.add("foto");
  infos.classList.add("infos");
  generosTitulo.classList.add("subtitulos");
  discografiaTitulo.classList.add("subtitulos");
  generos.classList.add("p");
  discografia.classList.add("p");
  icone.classList.add("fab");
  icone.classList.add("fa-spotify");

  card.appendChild(titulo);
  card.appendChild(foto);
  card.appendChild(infos);

  main.appendChild(card);
}