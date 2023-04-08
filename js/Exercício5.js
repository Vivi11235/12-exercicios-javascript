/* 5 - Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"*/

document.write('Questão 5:</br></br>');

let nomeAluno = prompt("Digite o nome do aluno.");

let nota1 = Number.parseFloat(prompt("Digite a primeira nota."));

let nota2 = Number.parseFloat(prompt("Digite a segunda nota."));

let nota3 = Number.parseFloat(prompt("Digite a terceira nota."));

let media = (nota1+nota2+nota3)/3;

document.write(`O aluno ${nomeAluno} ficou com média ${media}.</br></br>`);

//lista = []; (para criar uma lista de itens)

