/*Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

document.write('Questão 8:</br></br>');

let num1 = Number.parseFloat(prompt("Digite o primeiro valor."));

let num2 = Number.parseFloat(prompt("Digite o segundo valor."));

if(num1===num2){
    document.write("Números iguais.<br/><br/>");
}else if(num1>num2){
    document.write("Primeiro número é maior.<br/><br/>");
}else{
    document.write("Segundo número é maior.<br/><br/>");
}