const horario = 20 // espera entre 0 e 23

//IF ELSE
 /*if (horario > 5 && horario < 18) {
    console.log("é dia")
} else {
    console.log("é noite")
}*/

//CONDICIONAL TERNÁRIO - OPERADORES - ESCREVENDO EM UMA LINHA SÓ
//o "?" funciona como else e o "&&" como if.
/*horario > 5 && horario < 18 ? console.log("é dia") : console.log("é noite");

if(horario >= 0 && horario < 6){
    console.log("madrugada");
} else if ( horario >= 6 && horario < 12) {
    console.log("manhã");

}*/

//SWITCH CASE

switch(horario) {
    case(horario >= 0 && horario < 6):
        console.log("madrugada")
        break
    case (horario >= 6 && horario < 12):
        console.log("manhã");
        break
    case (horario >= 12 && horario <18):
        console.log("tarde");
        break
    case (horario >= 18 && horario <24):
        console.log("noite");
        break
    default:
        console.log("horário inválido");
}