function Carro(marca, modelo, ano, kilometragem, valor_fipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.kilometragem = kilometragem;
    this.valor_fipe = valor_fipe;

    /* método: calcular quantos anos de utilização o carro tem */
    this.anosUtilizacao = function()
    {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }

    /* método: calcular o valor de mercado do carro (com as regras do exercício) */
    this.valorMercado = function()
    {
        let kmPorAno = this.kilometragem/this.anosUtilizacao();
        if (kmPorAno <= 30000){
            return this.valor_fipe * 1.1;
        }
        else if (kmPorAno <= 50000){
            return this.valor_fipe;
        }
        else {
            return this.valor_fipe * 0.9;
        }
    }
}


document.getElementById("meuBt").addEventListener("click", function() {
    /* pegando os inputs lá do html */
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = parseInt(document.getElementById("ano").value);
    let kilometragem = parseInt(document.getElementById("kilometragem").value);
    let valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

    /* criando o objeto carro da classe Carro */
    let carro = new Carro(marca, modelo, ano, kilometragem, valor_fipe);

    alert(`O carro tem ${carro.anosUtilizacao()} anos de utilização e o valor de mercado é R$ ${carro.valorMercado().toFixed(2)}.`);
});
