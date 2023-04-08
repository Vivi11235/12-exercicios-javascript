/*As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

document.write('Questão 9:</br></br>');

let appleQuantity = Number.parseInt(prompt("Digite a quantidade de maçãs compradas:"));

if(appleQuantity>=12){
    let totalPrice = appleQuantity*0.25;
    document.write(`O preço total é R$${totalPrice}.</br></br>`);
}else{
    let totalPrice = appleQuantity*0.3;
    document.write(`O preço total é R$${totalPrice}.</br></br>`);
}

/*const saovaloresiguais = numero == texto;
if(saovaloresiguais){
    alert('são valores iguais');
}*/

/*if(0) (0 é considerado é false) - tudo o que estiver entre parênteses 
tem que dar true para que entre no if*/