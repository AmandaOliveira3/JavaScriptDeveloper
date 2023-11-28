
let numeros = [];

for (let i = 1; i <= 10; i++) {
    numeros.push(i + 3);
}

for (let i = 1; i <= numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i]);
    }
}