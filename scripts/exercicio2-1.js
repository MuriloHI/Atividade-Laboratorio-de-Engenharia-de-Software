let data = new Date();
let diaSemana = data.getDay();
if (diaSemana === 0){
    diaSemana = "Domingo";
}
else if (diaSemana === 1){
    diaSemana = "Segunda-feira"
}
else if (diaSemana === 2){
    diaSemana = "Terça-feira"
}
else if (diaSemana === 3){
    diaSemana = "Quarta-feira"
}
else if (diaSemana === 4){
    diaSemana = "Quinta-feira"
}
else if (diaSemana === 5){
    diaSemana = "Sexta-feira"
}
else {
    diaSemana = "Sábado"
}

let diaMes = data.getDate();
let mes = data.getMonth();

if (mes === 0){
    mes = "Janeiro"
}
else if (mes === 1){
    mes = "Fevereiro"
}
else if (mes === 2){
    mes = "Março"
}
else if (mes === 3){
    mes = "Abril"
}
else if (mes === 4){
    mes = "Maio"
}
else if (mes === 5){
    mes = "Junho"
}
else if (mes === 6){
    mes = "Julho"
}
else if (mes === 7){
    mes = "Agosto"
}
else if (mes === 8){
    mes = "Setembro"
}
else if (mes === 9){
    mes = "Outubro"
}
else if (mes === 10){
    mes = "Novembro"
}
else{
    mes = "Dezembro"
}

let ano = data.getFullYear();
document.write(diaSemana+", "+diaMes+" de "+mes+" de "+ano)
