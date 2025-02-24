let frase = window.prompt("Digite algo para verificar se É ou NÃO É um palíndromo");
let fraseSplit = frase.split("");
let fraseInverter = fraseSplit.reverse();
let junta = fraseInverter.join("");

if (frase === junta){
    window.alert(frase+" é um palíndromo")
}
else{
    window.alert(frase+" não é um palíndromo")
}