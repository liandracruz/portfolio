//Para ingradientes secos RETIRAR o ML das opções de medidas

// Açúcar -> 1 xícara = 200 gramas ou 14 colheres de sopa | 1 colher de sopa = 14 gramas | 1 colher de chá = 4 gramas

// Amido de milho -> 1 xícara = 150 gramas | 1 colher de sopa = 9 gramas | 1 colher de chá = 3 gramas

// Aveia -> 1 xícara = 80 gramas | 1 colher de sopa = 5 gramas | 1 colher de chá = 1,5 gramas

// Chocolate em pó -> 1 xícara = 100 gramas | 1 colher de sopa = 6 gramas

// Farinha -> 1 xícara = 165 gramas ou 13 colheres de sopa | 1 colher de sopa = 13 gramas | 1 colher de chá = 2 gramas

// Leite e óleo -> 1 xícara = 250ml |1 colher de sopa = 15ml | 1 colher de chá = 5ml

// Manteiga ou Margarina -> 1 xícara = 200 gramas | 1 colher de sopa = 12 gramas | 1 colher de chá = 4 gramas

// Polvilho -> 1 xícara = 150 gramas | 1 colher de sopa = 9 gramas | 1 colher de chá = 3 gramas

/*
Pesos x Medidas
1 litro = 4 xícaras
1 copo de vinho = 6 colheres de sopa
1 cálice = 3 colheres de sopa
1 colher de sopa = 15 colheres de café
1 colher de sobremesa = 10 colheres de café
1 colher de chá = 3 colheres de café
1 colher de café = 1/2 colher de chá
*/

/*
Produtos – Equivalência para líquidos
1 copo americano = 200 ml
1/2 copo = 100 ml
1 xícara = 250 ml
1/2 xícara = 125 ml
3/4 de xícara = 180 ml
1/4 de xícara = 62,5 ml
1 copo (requeijão) = 250 ml
1/2 copo = 125 ml
1 colher de sopa = 15 ml
1 colher de sobremesa = 10 ml
1 colher de chá = 5 ml
1 colher de café = 2,5 ml
1 cálice = 9 colheres de sopa
*/

/* 
PLANEJAMENTO
1. Quando ingredientes secos (incluindo manteiga/margarina) são selecionados no input de ingredientes o ml devem sumir dos inputs de medida.

2. Quando ingredientes liquidos foram selecionados no input de ingredientes os gramas devem sumir dos inputs de medida.

3. Assim que o botão "calcular" for clicado a conversão deve ser feita com base nos dados adicionados nos inputs pelo usuário.

4. Mostrar o resultado da conversão na div resultado.
*/

const ingredientes = document.querySelector('#ingredientes-opcoes');
const uniInicial = document.querySelector('#unidade-inicial');
const quantidade = document.querySelector('.quantidade');
const uniDesejada = document.querySelector('#unidade-desejada');

ingredientes.addEventListener('change', function() {
    const ingSelecionado = ingredientes.value;
});

uniInicial.addEventListener('change', function() {
    const uniInSelecionada = uniInicial.value;
    
})



