let numero = prompt("Digite um número INTEIRO e POSITIVO:");
    
numero = parseInt(numero);

if (numero > 0) {
    if (numero % 2 === 0) {
        window.alert(`O número ${numero} é PAR.`);
    } else {
        window.alert(`O número ${numero} é ÍMPAR.`);
    }
} else {
    window.alert("Número INVÁLIDO.");
}