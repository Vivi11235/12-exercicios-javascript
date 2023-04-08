/* 2 - Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras variáveis. 
Apresente valor da soma no documento html junto da frase "O resultado da 
soma de x e y é z", sendo x o valor armazenado na primeira variável, y o 
valor armazenado segunda variável e z o valor armazenado na terceira 
variável*/

document.write('Questão 2:</br></br>');

const x = prompt("Digite o primeiro valor.");

const y = prompt("Digite o segundo valor.");

const z = Number(x) + Number(y);

document.write(`O resultado da soma de ${x} e ${y} é ${z}.<br/><br/>`);

//O Number converte a string em número.