class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    valorPorPercurso(distanciaEmKm, precoCombustivel) {

        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const mobi = new Carro('fiat', 'preto', 1 / 7.5);

console.log(mobi.valorPorPercurso(70, 5.00).toFixed(2));