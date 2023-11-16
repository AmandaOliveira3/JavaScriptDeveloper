
function verificaIdade(idade) {
    if (idade >= 18) return "maior de idade";
    return "menor de idade";
}

(function () {

    console.log(verificaIdade(29));

})();