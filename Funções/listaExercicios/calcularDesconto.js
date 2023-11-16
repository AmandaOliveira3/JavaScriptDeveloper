let preco = 100;
let formaPagamento = 2;

function aplicarDesconto(valor, formaPagamento) {
    if (formaPagamento === 1) {
        return (preco * 0.9);
    }
    else if (formaPagamento === 2) {
        return (preco * 0.85);
    }
    else if (formaPagamento === 3) {
        return (preco);
    }
    else {
        return (preco * 1.10);
    }
}


console.log("O valor a ser cobrado é: " + aplicarDesconto(preco, formaPagamento))
