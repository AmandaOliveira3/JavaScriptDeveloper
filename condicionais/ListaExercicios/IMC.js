let peso = 65.0;
let altura = 1.70;
let IMC = peso / Math.pow(altura, 2);

if (IMC < 18.5) {
    console.log('Abaixo do peso');
}
else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal');
}
else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso');
}
else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso');
}
else {
    console.log('Obesidade grave');
}