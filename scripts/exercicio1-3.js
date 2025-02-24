let numero = prompt("Digite um número INTEIRO e POSITIVO:");

numero = parseInt(numero); /* 4 */
let contador = numero - 1; /* contador = 3 */
let fatorial = numero; /*  4 */
do {
    fatorial = fatorial * contador; /* 4*3 = 12 */ /* 4*2=8 */ /* 4*1=4 */
    contador--; /* 3-1=2 */ /* 2-1 = 1  */ /* 1-1 = 0 */
} while (contador != 0)


window.alert(`O fatorial de ${numero} é: ${fatorial}`)
