/*Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

document.write('Questão 7:</br></br>');

let eleitores = Number.parseInt(prompt("Escreva o número total de eleitores: "));

let votosBrancos = Number.parseInt(prompt("Escreva o número total de votos brancos: "));

let votosNulos = Number.parseInt(prompt("Escreva o número total de votos nulos: "));

let votosValidos = Number.parseInt(prompt("Escreva o número total de votos válidos: "));

let percentualBrancos = (votosBrancos*100)/eleitores;

let percentualNulos = (votosNulos*100)/eleitores;

let percentualValidos = (votosValidos*100)/eleitores;

document.write(`Os votos brancos são ${percentualBrancos}% do total.<br/><br/>`);

document.write(`Os votos nulos são ${percentualNulos}% do total.<br/><br/>`);

document.write(`Os votos válidos são ${percentualValidos}% do total.<br/><br/>`);





