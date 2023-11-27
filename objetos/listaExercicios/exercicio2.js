class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return('Abaixo do Peso');

        }
        else if(imc >= 18.5 && imc < 25){
            return('Peso normal');
        }
        else if(imc >= 25 && imc < 30){
            return('Acima do Peso');

        }
        else if( imc >= 30 && imc < 40){
            return('Obeso');
        }
        else{
            return('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose.calcularIMC().toFixed(2));
console.log(jose.classificarIMC());

const renan = new Pessoa('Renan', 63, 1.85);

console.log(renan.calcularIMC().toFixed(2));
console.log(renan.classificarIMC());