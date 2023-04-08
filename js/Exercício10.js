/*Escreva um algoritmo que tenha como valores de entradas o nome e idade do 
usuário e imprima no terminal o nome, a idade e o ano de nascimento do 
usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu em 2000”.
OBS: Pegue o ano atual como base*/

document.write('Questão 10:</br></br>Resposta no terminal.</br></br>');

let nomeUsuario = prompt('Digite o seu nome:');

let idadeUsuario = Number.parseInt(prompt('Digite sua idade:'));

let anoCorrente = Number.parseInt(prompt('Digite o ano atual:'));

let aniversario = confirm('Clique "ok" se você já fez aniversário este ano, e cancelar caso a resposta seja negativa.');

let anoNasc = anoCorrente-idadeUsuario-1;

if(aniversario){
    anoNasc = anoCorrente-idadeUsuario;
}

console.log(`Nome: ${nomeUsuario}, Idade: ${idadeUsuario}, nasceu em ${anoNasc}.`);

