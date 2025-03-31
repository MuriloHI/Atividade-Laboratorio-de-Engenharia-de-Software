let section = document.getElementById("contador_principal");

// h2 = total
let tituloTotal = document.createElement("h2");
tituloTotal.innerText = "Total";
section.appendChild(tituloTotal);

// <p> que vai mudar dinamicamente (ta 0)
let totalPessoas = document.createElement("p");
totalPessoas.id = "valorDoTotal";
totalPessoas.innerText = "0";
section.appendChild(totalPessoas);

// botão de redefinir, voltando tudo para zero
let botaoRedefinir = document.createElement("button");
botaoRedefinir.id = "resetar";
botaoRedefinir.innerHTML = "🔄";
section.appendChild(botaoRedefinir);

// section que fica ABAIXO dos de cima, é o blocão que pega homem e mulher junto
let sectionHomemMulher = document.createElement("section");
sectionHomemMulher.classList.add("section-Homem-Mulher");

// HOMENS
let sectionHomens = document.createElement("section");
sectionHomens.classList.add("container");

let imgHomem = document.createElement("img");
imgHomem.src = "../img/icone_homem.png";
imgHomem.classList.add("icone");
sectionHomens.appendChild(imgHomem);

let textoHomens = document.createElement("p");
textoHomens.innerText = "Homens";
sectionHomens.appendChild(textoHomens);

let numeroHomens = document.createElement("p");
numeroHomens.id = "contadorHomens";
numeroHomens.innerText = "0";
sectionHomens.appendChild(numeroHomens);

// HOMENS - MAS A SECTION DE BOTÕES DELE
let botoesHomens = document.createElement("section");
botoesHomens.classList.add("botoes");

let botaoAdicionarHomem = document.createElement("button");
botaoAdicionarHomem.innerText = "+";
botaoAdicionarHomem.classList.add("adicionar");
botoesHomens.appendChild(botaoAdicionarHomem);

let botaoRemoverHomem = document.createElement("button");
botaoRemoverHomem.innerText = "-";
botaoRemoverHomem.classList.add("remover");
botoesHomens.appendChild(botaoRemoverHomem);

sectionHomens.appendChild(botoesHomens);
sectionHomemMulher.appendChild(sectionHomens);

// MULHERES
let sectionMulheres = document.createElement("section");
sectionMulheres.classList.add("container");

let imgMulher = document.createElement("img");
imgMulher.src = "../img/icone_mulher.png";
imgMulher.classList.add("icone");
sectionMulheres.appendChild(imgMulher);

let textoMulheres = document.createElement("p");
textoMulheres.innerText = "Mulheres";
sectionMulheres.appendChild(textoMulheres);

let numeroMulheres = document.createElement("p");
numeroMulheres.id = "contadorMulheres";
numeroMulheres.innerText = "0";
sectionMulheres.appendChild(numeroMulheres);

// MULHERES - MAS A SECTION DE BOTÕES DELA
let botoesMulheres = document.createElement("section");
botoesMulheres.classList.add("botoes");

let botaoAdicionarMulher = document.createElement("button");
botaoAdicionarMulher.innerText = "+";
botaoAdicionarMulher.classList.add("adicionar");
botoesMulheres.appendChild(botaoAdicionarMulher);

let botaoRemoverMulher = document.createElement("button");
botaoRemoverMulher.innerText = "-";
botaoRemoverMulher.classList.add("remover");
botoesMulheres.appendChild(botaoRemoverMulher);

sectionMulheres.appendChild(botoesMulheres);
sectionHomemMulher.appendChild(sectionMulheres);

// adicionando tudo ao contador principal já que -> linha 1 desse arquivo
section.appendChild(sectionHomemMulher);

//contadores pra cada um
let contadorHomens = 0;
let contadorMulheres = 0;

function atualizarTotal() {
    let total = contadorHomens + contadorMulheres;
    totalPessoas.innerText = total;
    numeroHomens.innerText = contadorHomens;
    numeroMulheres.innerText = contadorMulheres;
}

//ao clicar nos botões....
botaoAdicionarHomem.addEventListener("click", function () {
    contadorHomens++;
    atualizarTotal();
});

botaoRemoverHomem.addEventListener("click", function () {
    if (contadorHomens > 0) {
        contadorHomens--;
        atualizarTotal();
    }
});

botaoAdicionarMulher.addEventListener("click", function () {
    contadorMulheres++;
    atualizarTotal();
});

botaoRemoverMulher.addEventListener("click", function () {
    if (contadorMulheres > 0) {
        contadorMulheres--;
        atualizarTotal();
    }
});

botaoRedefinir.addEventListener("click", function () {
    contadorHomens = 0;
    contadorMulheres = 0;
    atualizarTotal();
});
