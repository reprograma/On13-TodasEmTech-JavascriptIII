const horario = 20 //espera entre 0 e 23

// if else

if(horario > 5 && horario < 18) {
  console.log("é dia")
} else {
  console.log("é noite")
}

// condicional ternário - operadores

horario > 5 && horario < 18 ? console.log("é dia") : console.log("é noite");

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
//   case true:
//     console.log("madrugada")
//     break
//   case false:
//     console.log("mentira")
//     break
  // case 0 < 21:
  //   console.log("madrugada")
  //   break
  // case horario >= 6 && horario < 12:
  //   console.log("manhã")
  //   break
  // case horario >= 12 && horario < 18:
  //   console.log("tarde")
  //   break
  // case horario >= 18 && horario < 24:
  //   console.log("noite")
  //   break
  // default:
  //   console.log("horário inválido");
// }

