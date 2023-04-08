/* 1 - Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável.*/

document.write('Questão 1:</br></br>');

let idade = prompt("Digite sua idade.");

document.write(`Minha idade é ${idade} anos.<br/><br/>`);

//As aspas evitam erros na quebra de linha.

//É possível usar const neste caso, pois se faria um refresh na página.