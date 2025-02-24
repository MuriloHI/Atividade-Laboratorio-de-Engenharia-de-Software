function relogio(){
    let horario = new Date();
    let segundos = horario.getSeconds();
    let minutos = horario.getMinutes();
    let horas = horario.getHours();

    document.getElementById("relogioAqui").innerHTML = `${horas}:${minutos}:${segundos}`;

    setTimeout(relogio, 1000); 
}

relogio();