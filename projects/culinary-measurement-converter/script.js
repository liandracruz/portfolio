//Armazenar o ingrediente em uma variável
const ingrediente = document.getElementById('ingredientes-opcoes');
let ingredienteSelecionado = '';
ingrediente.addEventListener('change', function(event) {
    ingredienteSelecionado = event.target.value;
    console.log(ingredienteSelecionado);
}); //O que tem de errado?

//Armazenar a unidade inicial em uma variável
const unidadeInicial = document.getElementById('unidade-inicial');

//Armazenar a quantiade inicial em uma variável
const quantidade = document.querySelector('.quantidade');

//Armazenar a unidade desejada em uma variável
const unidadeDesejada = document.getElementById('unidade-desejada');

console.log(ingrediente, unidadeInicial, quantidade, unidadeDesejada);


//Ajustar as unidades de medida para serem compatíveis com o tipo de ingrediente: deixar ml apenas para ingredientes liquidos

//Criar um evento: quando o botão "calcular" é clicado a conversão é feita.

//Exibir o resultado da conversão na div "resultado"