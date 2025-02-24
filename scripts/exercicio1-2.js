let numero = prompt("Digite um número INTEIRO e POSITIVO:");
numero = parseInt(numero);
let contador = 0;
    if (numero > 0) {
        for (let i=1; i<=numero; i++) {
            if (numero % i === 0){
                contador = contador + 1
            }
            }

        if (contador === 2){
            window.alert(`O número ${numero} é primo`)
        }
        else {
            window.alert(`O número ${numero} não é primo`)
        }
    
    } else {
        window.alert("Número INVÁLIDO.");
    }