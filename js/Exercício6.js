/*Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.*/

document.write('Questão 6:</br></br>');

let a = 10;

let b = 20;

let aux = a;

a = b;

b = aux;

document.write(`A variável A contém: ${a}. E a variável B contém: ${b}.</br></br>`);



