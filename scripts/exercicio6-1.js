const calculadora = document.getElementById("calculadora_principal");

const bloco_da_calculadora = document.createElement("section");
bloco_da_calculadora.classList.add("calculadora");

const visor = document.createElement("input");
visor.type = "text";
visor.value = "0";
visor.disabled = true;
visor.classList.add("visor");

bloco_da_calculadora.appendChild(visor);

const botoes = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ",", "="
];

botoes.forEach(texto => {
    const botao = document.createElement("button");
    botao.textContent = texto;

    if (!isNaN(texto) || texto === ",") {
        botao.classList.add("numero");
    } else if (["AC", "+/-", "%"].includes(texto)) {
        botao.classList.add("funcao");
    } else {
        botao.classList.add("operacao");
    }

    if (texto === "0") {
        botao.classList.add("zero");
    }

    bloco_da_calculadora.appendChild(botao);

    //clicando...
    botao.addEventListener("click", function () {
        const currentValue = visor.value;
        let newValue;

        switch (texto) {
            case "AC":
                visor.value = "0";
                break;
            case "+/-":
                visor.value = currentValue.startsWith("-") ? currentValue.slice(1) : "-" + currentValue;
                break;
            case "%":
                visor.value = parseFloat(currentValue) / 100;
                break;
            case "=":
                try {
                    visor.value = eval(currentValue.replace("÷", "/").replace("×", "*"));
                } catch (e) {
                    visor.value = "Erro";
                }
                break;
            case "÷":
            case "×":
            case "-":
            case "+":
                visor.value = currentValue + " " + texto + " ";
                break;
            case ",":
                if (!currentValue.includes(",")) {
                    visor.value = currentValue + ",";
                }
                break;
            default:
                if (currentValue === "0") {
                    visor.value = texto;
                } else {
                    visor.value = currentValue + texto;
                }
                break;
        }
    });
});

calculadora.appendChild(bloco_da_calculadora);