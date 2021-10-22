const json = [
  {
    "nome": "Anavitória",
    "foto": "https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2016/08/anavitoria-1.jpg",
    "generos": ["MPB", "FOLK", "POP"],
    "discografia": ["Anavitória", "O tempo é agora", "N", "Cor"],
    "instagram": "https://www.instagram.com/anavitoria/?hl=pt-br",
    "youtube": "https://www.youtube.com/channel/UChz6hFYw9Qu6iwbEChRfNyA",
    "twitter": "https://twitter.com/oanavitoria?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    "spotify": "https://open.spotify.com/artist/1sPg5EHuQXTMElpZ4iUgXe?autoplay=true"
  },
  {
    "nome": "Maria Gadú",
    "foto": "https://static1.purepeople.com.br/articles/6/28/80/16/@/3266740-maria-gadu-esta-solteira-apos-separacao-624x600-2.jpg",
    "generos": ["MPB", "POP", "SAMBA", "BLUES", "BOSSA NOVA", "ROCK"],
    "discografia": ["Suspiro", "O bloco", "Ela", "Bela Flor", "Paracuti"],
    "instagram": "https://www.instagram.com/mariagadu/?hl=pt-br",
    "youtube": "https://www.youtube.com/channel/UCO7bAk61tlykeauwnOgQUoA",
    "twitter": "https://twitter.com/mariagadu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    "spotify": "https://open.spotify.com/artist/3uCu2WgyG0Iw50ylOYDSpH?autoplay=true"
  },
  {
    "nome": "Ivete Sangalo",
    "foto": "https://yt3.ggpht.com/EDsEgA_f88aLTHhQlPKzo3t7q9G-LMV2mNk5pLQLNQA3BmSMji2rgrL_6Qzp1_Qq-MNrSDyl=s900-c-k-c0x00ffffff-no-rj",
    "generos": ["AXÉ", "SAMBA-REGGAE", "POP-LATINO"],
    "discografia": ["As Super Novas","Pode Entrar", "Real Fantasia"],
    "instagram": "https://www.instagram.com/ivetesangalo/?hl=pt-br",
    "youtube": "https://www.youtube.com/channel/UC4FK6Ki675LB-rkbD8O7ayg",
    "twitter": "https://twitter.com/ivetesangalo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    "spotify": "https://open.spotify.com/artist/7dzq55YG3wjViqexDwiycQ?autoplay=true"
  },
]

/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
const card = document.querySelectorAll(".card")
const image = document.querySelectorAll(".image");
const title = document.querySelectorAll(".title-singer");
const genres = document.querySelectorAll(".genres");
const discography = document.querySelectorAll(".discography");
const instagram = document.querySelectorAll('#instagram')
const youtube = document.querySelectorAll('#youtube')
const twitter = document.querySelectorAll('#twitter')
const spotify = document.querySelectorAll('#spotify')



function dates() {

  for (let i = 0; i <= card.length; i++) {
    image[i].setAttribute('src', json[i].foto);

    title[i].innerText = json[i].nome;

    genres[i].innerText = json[i].generos.join("-");

    discography[i].innerText = json[i].discografia.join("-");

    instagram[i].setAttribute('href', json[i].instagram);
    youtube[i].setAttribute('href', json[i].youtube);
    twitter[i].setAttribute('href', json[i].twitter);
    spotify[i].setAttribute('href', json[i].spotify);

  }
}


dates()

