document.addEventListener("DOMContentLoaded", function () {
    let section = document.getElementById("contador_principal");

    //h2 = total
    let tituloTotal = document.createElement("h2");
    tituloTotal.innerText = "Total";
    section.appendChild(tituloTotal);

    //<p> que vai mudar dinamicamente (ta 0)
    let totalPessoas = document.createElement("p");
    totalPessoas.id = "valorDoTotal";
    totalPessoas.innerText = "0";
    section.appendChild(totalPessoas);

    //botão de redefinir, voltando tudo para zero
    let botaoRedefinir = document.createElement("button");
    botaoRedefinir.id = "resetar";
    botaoRedefinir.innerHTML = "🔄";
    section.appendChild(botaoRedefinir);

    //div que fica abaixo dos de cima, é o blocão que pega homem e mulher junto
    let containerPrincipal = document.createElement("div");
    containerPrincipal.classList.add("container-principal");

    //HOMENS
    let containerHomens = document.createElement("div");
    containerHomens.classList.add("container");

    let imgHomem = document.createElement("img");
    imgHomem.src = "../img/icone_homem.png";
    imgHomem.classList.add("icone");
    containerHomens.appendChild(imgHomem);

    let textoHomens = document.createElement("p");
    textoHomens.innerText = "Homens";
    containerHomens.appendChild(textoHomens);

    let numeroHomens = document.createElement("p");
    numeroHomens.id = "contadorHomens";
    numeroHomens.innerText = "0";
    containerHomens.appendChild(numeroHomens);

    //HOMENS - MAS A DIV DE BOTÕES DELE
    let botoesHomens = document.createElement("div");
    botoesHomens.classList.add("botoes");

    let botaoAdicionarHomem = document.createElement("button");
    botaoAdicionarHomem.innerText = "+";
    botaoAdicionarHomem.classList.add("adicionar");
    botoesHomens.appendChild(botaoAdicionarHomem);

    let botaoRemoverHomem = document.createElement("button");
    botaoRemoverHomem.innerText = "-";
    botaoRemoverHomem.classList.add("remover");
    botoesHomens.appendChild(botaoRemoverHomem);

    containerHomens.appendChild(botoesHomens);
    containerPrincipal.appendChild(containerHomens);

    //MULHERES
    let containerMulheres = document.createElement("div");
    containerMulheres.classList.add("container");

    let imgMulher = document.createElement("img");
    imgMulher.src = "../img/icone_mulher.png";
    imgMulher.classList.add("icone");
    containerMulheres.appendChild(imgMulher);

    let textoMulheres = document.createElement("p");
    textoMulheres.innerText = "Mulheres";
    containerMulheres.appendChild(textoMulheres);

    let numeroMulheres = document.createElement("p");
    numeroMulheres.id = "contadorMulheres";
    numeroMulheres.innerText = "0";
    containerMulheres.appendChild(numeroMulheres);

    //MULHERES - MAS A DIV DE BOTÕES DELA
    let botoesMulheres = document.createElement("div");
    botoesMulheres.classList.add("botoes");

    let botaoAdicionarMulher = document.createElement("button");
    botaoAdicionarMulher.innerText = "+";
    botaoAdicionarMulher.classList.add("adicionar");
    botoesMulheres.appendChild(botaoAdicionarMulher);

    let botaoRemoverMulher = document.createElement("button");
    botaoRemoverMulher.innerText = "-";
    botaoRemoverMulher.classList.add("remover");
    botoesMulheres.appendChild(botaoRemoverMulher);

    containerMulheres.appendChild(botoesMulheres);
    containerPrincipal.appendChild(containerMulheres);

    // Adicionando tudo ao contador principal
    section.appendChild(containerPrincipal);

    // Criando contadores
    let contadorHomens = 0;
    let contadorMulheres = 0;

    function atualizarTotal() {
        let total = contadorHomens + contadorMulheres;
        totalPessoas.innerText = total;
        numeroHomens.innerText = contadorHomens;
        numeroMulheres.innerText = contadorMulheres;
    }

    // Eventos dos botões
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
});
