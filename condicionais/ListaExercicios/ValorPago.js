let preco = 100;
let formaPagamento = 1;

if (formaPagamento === 1) {
    console.log(preco*0.9);
}
else if (formaPagamento === 2) {
    console.log(preco*0.85);
}
else if (formaPagamento === 3) {
    console.log(preco);
}
else {
    console.log(preco*1.10);
}