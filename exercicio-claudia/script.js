/* 

O exercício consiste em usar javascript para popular com os dados do JSON armazenado na 'varável json' acima o mesmo site de informações sobre cantoras brasileiras que trabalhamos em aula, desta vez a página exibe 3 cantoras, em 3 cards diferentes em uma só página (preencha o JSON com dados das suas cantoras brasileiras preferidas)

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
const json = [{
        "nome": "Ana Carolina",
        "foto": "../img/ana carolina.jpg",
        "generos": ["MPB", "pop"],
        "discografia": ["Pefil", "N9ve", "Estampado"],
        "instagram": "https://www.instagram.com/sigaanacarolina/?hl=pt-br/"
    },
    {
        "nome": "Vanessa da Mata",
        "foto": "../img/vanessa da mata.jpg",
        "generos": ["MPB", "R&B", "pop", "Samba", "Frevo", "reggae"],
        "discografia": ["Quando Deixamos Nossos Beijos Na Esquina", "Caixinha de Música ", "Essa Boneca Tem Manual"],
        "instagram": "https://www.instagram.com/vanessadamata/?hl=pt-br"
    },
    {
        "nome": "Simone e Simaria",
        "foto": "../img/simone e simaria.jpg",
        "generos": ["Sertanejo universitário", "forró eletrônico"],
        "discografia": ["Duetos", "Bar das Coleguinhas ", "Live"],
        "instagram": "https://www.instagram.com/simoneesimaria/?hl=pt-br"
    }
]


const fotoAnaCarolina = document.getElementById('foto__ac')
const tituloAnaCarolina = document.getElementById('titulo__anaCarolina')
const generosAnaCarolina = document.getElementById('genero__ac')
const discografiaAnaCarolina = document.getElementById('discografia__ac')
const instagramAnaCarolina = document.getElementById('instagram__ac')


function preencherDadosAna() {
    fotoAnaCarolina.setAttribute('src', json[0].foto);
    tituloAnaCarolina.innerText = json[0].nome;
    generosAnaCarolina.innerText = json[0].generos.join(' -');
    discografiaAnaCarolina.innerText = json[0].discografia.join(' -');
    instagramAnaCarolina.setAttribute('href', json[0].instagram);
}
preencherDadosAna()





const fotoVanessaDaMata = document.getElementById('foto__vm')
const tituloVanessaDaMata = document.getElementById('titulo__vanessaMata')
const generosVanessaDaMata = document.getElementById('genero__vm')
const discografiaVanessaDaMata = document.getElementById('discografia__vm')
const instagramVanessaDaMata = document.getElementById('instagram__vm')

function preencherDadosVanessa() {
    fotoVanessaDaMata.setAttribute('src', json[1].foto);
    tituloVanessaDaMata.innerText = json[1].nome;
    generosVanessaDaMata.innerText = json[1].generos.join(' -');
    discografiaVanessaDaMata.innerText = json[1].discografia.join(' -');
    instagramVanessaDaMata.setAttribute('href', json[1].instagram);
}
preencherDadosVanessa()

const fotoSimoneSimaria = document.getElementById('foto__ss')
const tituloSimoneSimaria = document.getElementById('titulo__simoneSimaria')
const generosSimoneSimaria = document.getElementById('genero__ss')
const discografiaVSimoneSimaria = document.getElementById('discografia__ss')
const instagramSimoneSimaria = document.getElementById('instagram__ss')

function preencherDadosSioneSimaria() {
    fotoSimoneSimaria.setAttribute('src', json[2].foto);
    tituloSimoneSimaria.innerText = json[2].nome;
    generosSimoneSimaria.innerText = json[2].generos.join(' -');
    discografiaVSimoneSimaria.innerText = json[2].discografia.join(' -');
    instagramSimoneSimaria.setAttribute('href', json[2].instagram);
}
preencherDadosSioneSimaria()