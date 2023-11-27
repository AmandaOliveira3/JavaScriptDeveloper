class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


/*
const vitor = {
    nome: "Vitor Sobrenome",
    idade: 21,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


console.log(Pessoa.nome);
console.log(Pessoa);

Pessoa.altura = 1.78;

delete Pessoa.altura;

Pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome} e somente isso`);
}
Pessoa.descrever();

console.log(Pessoa[`nome`]);
*/

const vitor = new Pessoa('Vitor J Guerra', 25);


const renan = new Pessoa('Renan Oliveira', 35);

vitor.descrever();
renan.descrever();

console.log(vitor);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }
    else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade `);
    }
}


compararPessoas(renan, vitor);
// um objeto no javascript é uma coleção dinamica de chave e valor
// uma função dentro de um objeto é um método
