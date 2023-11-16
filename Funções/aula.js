// funções que não devolvem nada são chamadas de procedimentos

function teste(name) {
    console.log("O meu nome é", name);
}

function quadrado(valor) {
    return valor * valor;
}

teste("João");
console.log(quadrado(10));


(function () {
    let peso = 65.0;
    let altura = 1.70;
    let IMC = peso / Math.pow(altura, 2);
    if (IMC < 18.5) {
        return "Abaixo do peso";
    }
    else if (IMC >= 18.5 && IMC < 25) {
        return "Peso normal";
    }
    else if (IMC >= 25 && IMC < 30) {
        return "Acima do peso";
    }
    else if (IMC >= 30 && IMC < 40) {
        return "Obeso";
    }
    else {
        return "Obesidade grave";
    }
})();


