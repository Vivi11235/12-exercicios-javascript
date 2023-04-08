/* Questão 12 - Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a 
pessoa nasceu).*/

document.write('Questão 12:</br></br>Resposta no terminal.');

let anoAtual = Number.parseInt(prompt('Digite o ano atual, com quatro dígitos:'));

let anoNascimento = Number.parseInt(prompt('Digite seu ano de nascimento, com quatro dígitos:'));

if(anoAtual<2000){
   anoAtual = Number.parseInt(prompt('Digite o ano atual, com quatro dígitos:'));
}

if(anoNascimento<1900){
    anoNascimento = Number.parseInt(prompt('Digite seu ano de nascimento, com quatro dígitos:'));
}

let calculoIdade = anoAtual-anoNascimento;

if(calculoIdade>=16){
    console.log('Você é maior de 16 e poderá votar este ano.');
}else{
    console.log('Você tem menos de 16 anos, portanto não poderá votar este ano.');
}

