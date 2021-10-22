const json = [{
        "nome": "Anitta",
        "foto": "../exercicio.carine/img/anitta.jpg",
        "generos": ["POP", "FUNK", "R&B"],
        "discografia": ["BANG", "GIRL FROM RIO", "VAI MALANDRA"],
        "instagram": "https://www.instagram.com/anitta/"
    },
    {
        "nome": "Pablo Vittar",
        "foto": "../exercicio.carine/img/pablloVittar.jpg",
        "generos": ["MPB", "POP", "R&B", "FUNK"],
        "discografia": ["VAI PASSAR MAL", "OPEN BAR", " KO"],
        "instagram": "https://www.instagram.com/pabllovittar/"
    },
    {
        "nome": "Rita Lee",
        "foto": "../exercicio.carine/img/RitaLee.jpg",
        "generos": ["MPB", "Soul", "R&B", "Blues"],
        "discografia": ["AMOR", "PERFUME LANÇA", "ERVA VENENOSA"],
        "instagram": "https://www.instagram.com/ritalee_oficial/"
    }
]

let nomes = document.getElementsByClassName("nome")
let fotos = document.getElementsByClassName("foto")
let generos = document.getElementsByClassName("genero")
let discografias = document.getElementsByClassName("discografia")
let instagram = document.getElementsByClassName("instagram")


for (let i = 0; i < json.length; i++) {
    nomes[i].innerText = json[i].nome
    generos[i].innerText = json[i].generos.join("-")
    discografias[i].innerText = json[i].discografia.join("-")
    fotos[i].setAttribute("src", json[i].foto)
    instagram[i].setAttribute("href", json[i].instagram)

    console.log(nomes);
}














/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/


/*nome.innerText = json.nome;
    foto.setAttribute('src', json.foto)
    generos.innerText = json.generos.join("-")
    discografia.innerText = json.join("-")
    instagram.setAttribute("href", json.instagram)*/

//json[0].nome[0];

/*function preencherDados() {
nome.innerText = json.nome;
foto.setAttribute('src', json.foto)
generos.innerText = json.generos.join("-")
discografia.innerText = json.join("-")
instagram.setAttribute("href", json.instagram)
}*/