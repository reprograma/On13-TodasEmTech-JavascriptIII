const json = [
  {
    nome: "Anahi",
    foto: "../assets/mia.png",
    generos: ["POP", "LATINO"],
    discografia: ["Rebelde", "Nuestro Amor", "Celestial"],
    instagram: "https://www.instagram.com",
  },
  {
    nome: "Dulce",
    foto: "../assets/roberta.png",
    generos: ["POP", "LATINO"],
    discografia: ["Rebelde", "Nuestro Amor", "Celestial"],
    instagram: "https://www.instagram.com",
  },
  {
    nome: "Maite",
    foto: "../assets/lup.png",
    generos: ["POP", "LATINO"],
    discografia: ["Rebelde", "Nuestro Amor", "Celestial"],
    instagram: "https://www.instagram.com",
  },
];

function Anahi() {
  const nomeCantora = document.querySelector(".nome-cantora--um");
  const generoCantora = document.querySelector(".discografia-cantora--um");
  const discoCantora = document.querySelector(".generos-cantora--um");
  const boxUm = document.querySelector(".box-um");
  json.map((cantora) => {
    if (cantora.nome == "Anahi") {
      nomeCantora.innerHTML = cantora.nome;
      const link = cantora.foto;
      const imagem = document.createElement("img");
      imagem.setAttribute("src", `${link}`);
      boxUm.appendChild(imagem);
      generoCantora.innerHTML = cantora.generos;
      for (let disco of json) {
        const discografia = disco.discografia;
        discoCantora.innerHTML = discografia;
      }
    }
  });
}
Anahi();

function Dulce() {
  const nomeCantora = document.querySelector(".nome-cantora--dois");
  const generoCantora = document.querySelector(".discografia-cantora--dois");
  const discoCantora = document.querySelector(".generos-cantora--dois");
  const boxUm = document.querySelector(".box-dois");
  json.map((cantora) => {
    if (cantora.nome == "Dulce") {
      nomeCantora.innerHTML = cantora.nome;
      const link = cantora.foto;
      const imagem = document.createElement("img");
      imagem.setAttribute("src", `${link}`);
      boxUm.appendChild(imagem);
      generoCantora.innerHTML = cantora.generos;
      for (let disco of json) {
        const discografia = disco.discografia;
        discoCantora.innerHTML = discografia;
      }
    }
  });
}
Dulce();

function Maite() {
  const nomeCantora = document.querySelector(".nome-cantora--tres");
  const generoCantora = document.querySelector(".discografia-cantora--tres");
  const discoCantora = document.querySelector(".generos-cantora--tres");
  const boxUm = document.querySelector(".box-tres");
  json.map((cantora) => {
    if (cantora.nome == "Maite") {
      nomeCantora.innerHTML = cantora.nome;
      const link = cantora.foto;
      const imagem = document.createElement("img");
      imagem.setAttribute("src", `${link}`);
      boxUm.appendChild(imagem);
      generoCantora.innerHTML = cantora.generos;
      for (let disco of json) {
        const discografia = disco.discografia;
        discoCantora.innerHTML = discografia;
      }
    }
  });
}
Maite();

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
