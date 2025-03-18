let p_total = document.getElementById("contador_principal");
p_total.innerHTML = "Total"; //trocar para o createELement <p>

let botao_redefinir = document.createElement("button");
let botao_redefinir_texto = document.createTextNode("RESETAR/REDEFINIR");
botao_redefinir.appendChild(botao_redefinir_texto);
p_total.appendChild(botao_redefinir);

let p_numeroTotal = document.createElement("p");
let p_numeroTotal_texto = document.createTextNode("0...");
p_numeroTotal.appendChild(p_numeroTotal_texto);
p_total.appendChild(p_numeroTotal);

let img_homem = document.createElement("img");
img_homem.src = "../img/icone_homem.png";
p_total.appendChild(img_homem);

let img_mulher = document.createElement("img");
img_mulher.src = "../img/icone_mulher.png";
p_total.appendChild(img_mulher);

let botao_adicionar = document.createElement("button");
let botao_adicionar_texto = document.createTextNode("ADICIONAR");
botao_adicionar.appendChild(botao_adicionar_texto);
p_total.appendChild(botao_adicionar);

let botao_remover = document.createElement("button");
let botao_remover_texto = document.createTextNode("REMOVER");
botao_remover.appendChild(botao_remover_texto);
p_total.appendChild(botao_remover);

//IDs
img_homem.id = "homem";
img_mulher.id = "mulher";
botao_redefinir.id = "resetar";
p_numeroTotal.id = "valorDoTotal";
botao_adicionar.id = "adicionar";
botao_remover.id = "remover";