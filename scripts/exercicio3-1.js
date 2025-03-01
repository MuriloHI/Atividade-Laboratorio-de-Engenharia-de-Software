let valores = []

document.getElementById("meuBt").addEventListener("click", exibirOrdemAlfaEmListaOrde);

function exibirOrdemAlfaEmListaOrde() {
    let input = document.querySelector("input");
    let nome = input.value;

    if (nome != "")
    {
        valores.push(nome);
        valores.sort();
        atualizarLista();
    }
    input.value = ""; /* limpa o campo do input, se eu tirar e digitar "Nome 1" e clicar em adicionar, o "Nome 1" ainda vai estar la digitado*/
}

function atualizarLista(){
    let listaOrdenada = document.getElementById("listaOrdenada");
    listaOrdenada.innerHTML = ""; 


    valores.forEach
    (
        function(valor)
        { 
            let item = document.createElement("li"); /*criando um li na lista ordenada, um item, mas ainda nao criei o TEXTO dentro do li*/
            let texto = document.createTextNode(valor); /* criando um nó de texto, ele ainda n esta em <li> */

            item.appendChild(texto); /* agr sim, o let texto (algum nome) está no let item (que é um <li>) */
            
            listaOrdenada.appendChild(item); /* agr falta adicionar o <li> dentro do <ol>, que temos o id como #id="listaOrdenada" */
        }
    );
}