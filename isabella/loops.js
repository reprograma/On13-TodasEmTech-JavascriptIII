const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];


//como acessar o valor do array/console.log(numeors[0])
//for
    // i = 0 - quer dizer que começa  partir do 0
/*for (let i = 0; i < numeros.length; i++) {
    const dobro = numeros[i] * 2
    console.log(dobro)
}*/

//pra retornar true or false
/*for (let i = 0; i < numeros.length; i++) {
    const igual = numeros[i] ==2
    console.log(igual)
}*/

//WHILE

let i = 0;

while (i < numeros.length) {
    const dobro = numeros[i] * 2
    console.log(dobro)
    i ++ 
}

//FOR ... OF

for (let numero of numeros) {
    const dobro = numero * 2
    console.log(dobro)
}
