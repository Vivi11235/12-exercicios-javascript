/* 3 - Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"  */

document.write('Questão 3:</br></br>');

let totalCompra = prompt("Digite o valor total da compra.");

let quantidadeParcelas = prompt("Digite a quantidade de parcelas.");

let valorParcela = totalCompra/quantidadeParcelas;

document.write(`O valor total da compra foi R$ ${totalCompra}.<br/>
Forma de pagamento: ${quantidadeParcelas}x de R$${valorParcela}.<br/><br/>`);

