
const precoGasolina = 5.43;
const precoEtanol = 5.13;
const tipoCombustivel = 'Etanol';
const distPorCombustivel = 8;
const distanciaKm = 150.0;

const litrosConsumidos = distanciaKm / distPorCombustivel;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
  } else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
  }

