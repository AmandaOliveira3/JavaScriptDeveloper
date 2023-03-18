const precoCombustivel = 5.79;
const distanciaPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / distanciaPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));