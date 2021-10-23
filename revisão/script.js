const horario = 20 //espera entre 0 e 23


if (horario < 0 && horario > 23){
    console.log("Horário inválido");
}
else if (horario > 5 && horario < 18){
    console.log("é dia");
}
else{
    console.log("é noite");
}