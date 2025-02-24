let dado = prompt("Digite algo: ");
let confirmar = window.confirm("Deseja verificar o tipo do dado informado?");
if (confirmar){
    let tipo;
    if (!isNaN(dado) && dado.trim() !== "") /* NaN é para ver se é Not a Number ("n é número?"), mas a gente vai negar (ent "é número?")*/
    {
        tipo = "number";
    }
    else if (dado.toLowerCase() === "true" || dado.toLowerCase() === "false")
    {
        tipo = "boolean";
    }
    else{
        tipo = "string";
    }
    document.body.innerHTML = `O tipo do dado é: ${tipo}`;
}
else
{
    document.body.innerHTML = `Obrigado por visitar esta página!`;
}
