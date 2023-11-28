
let listaNotas = [2, 7, 3, 15, 6, 8, 10, 4];


let maior = listaNotas[0];

for (let i = 0; i < listaNotas.length; i++) {
    if (listaNotas[i] > maior) {
        maior = listaNotas[i];
    }

}

console.log(maior);