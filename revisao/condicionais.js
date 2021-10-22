const horario = 20 //espera que seja entre 0 e 23

// if (horario < 0 && horario > 23) {
//     console.log('horário inválido')
// } else if

// if (horario > 5 && horario < 18) {
//     console.log('é dia')
// } else {
//     console.log('é noite')
// }

// condicional ternário - operadores

// horario > 5 && horario < 18 ? console.log('é dia') : console.log('é noite')
// // a "?" pergunta se é verdadeiro, se for, dá o primeiro console, senão vem ":" representando o "else" e da o outro console

// if else
if (horario >= 0 && horario < 6) {
    console.log("madrugada");
} else if (horario >= 6 && horario < 12) {
    console.log("manhã");
} else if (horario >= 12 && horario < 18) {
    console.log("tarde");
} else if (horario >= 18 && horario < 24) {
    console.log("noite");
} else {
    console.log("horário inválido");
}

    // switch (horario) {
    //     case horario >= 0 && horario < 6:
    //         console.log("madrugada")
    //         break
    //     case horario >= 6 && horario < 12:
    //         console.log("manhã")
    //         break
    //     case horario >= 12 && horario < 18:
    //         console.log("tarde")
    //         break
    //     case horario >= 18 && horario < 24:
    //         console.log("noite")
    //         break
    //     default:
    //         console.log("horário inválido")
    // }