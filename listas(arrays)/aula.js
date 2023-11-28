const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos[0]);

alunos.push('Renan');

alunos[4] = 'Vinicius';



console.log(alunos.shift());


let notas = [];

notas.push(6);
notas.push(1);
notas.push(7);
notas.push(3);
notas.push(4.5);

const nome = 'Nome Sobrenome';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);

}

let soma = 0
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}

const media = soma / notas.length;

console.log(media)



