const artistas = [
  {
    id: '1',
    nome: 'Liniker',
    foto: './Images/Liniker.webp',
    generos: ['MPB', 'Soul', 'R&B', 'Blues'],
    discografia: ['Calmô', 'Intimidade', 'Tua'],
    instagram: 'https://www.instagram.com/linikeroficial/'
  },
  {
    id: '2',
    nome: 'Luedji Luna',
    foto: './Images/Luedji-Luna-red.jpg',
    generos: ['MPB', 'Soul', 'R&B', 'Blues'],
    discografia: ['Goteira', 'Asas', 'Acalanto'],
    instagram: 'https://www.instagram.com/luedjiluna/'
  },
  {
    id: '3',
    nome: 'Pitty',
    foto: './Images/pitty.jpg',
    generos: ['Rock Alternativo', 'Pop-Rock'],
    discografia: ['Me adora', 'Memórias', 'Roda'],
    instagram: 'https://www.instagram.com/pitty/'
  }
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/


artistas.forEach(artista => {
  const foto = document.getElementById(`photography${artista.id}`)
  const titulo = document.getElementById(`title${artista.id}`)
  const genero = document.getElementById(`gender${artista.id}`)
  const discografia = document.getElementById(`discography${artista.id}`)
  const instagram = document.getElementById(`instagram${artista.id}`)

  foto.setAttribute('src', artista.foto);
  titulo.innerText = artista.nome
  genero.innerText = artista.generos.join(" - ");
  discografia.innerText = artista.discografia.join(" - ")
  instagram.setAttribute('href', artista.instagram);
})

function preencherElementos() {

}
