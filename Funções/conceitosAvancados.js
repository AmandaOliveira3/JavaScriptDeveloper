function falarMeuNome(){
    console.log("Meu nome é NOME")
}

function falarMeuNomeCompleto (falarMeuNome){
    falarMeuNome()
    console.log("SOBRENOME ULTIMONOME")
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()


// Declaração Explicita e Arrow function

function funcao(){
    console.log(this)

}

const funcao2 = () =>{
    console.log(this)
}

const pessoa = {
    nome: 'NOME',
    funcao,
    funcao2
}

pessoa.funcao()
pessoa.funcao2()

//Closures e fechamentos

function soma(x){
    return function(y){
        return x + y
    }
}

function somaArrowFunction(x){
    return (y) => {
        return x + y
    }
}


const somaParcial = somaArrowFunction(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(50))
console.log(somaParcial(80))

// Invocação direta 

const treino = {
    nome: "Renan",
    idade: 30
}


function teste(prefixo) {
    console.log(prefixo)
}

teste('olá')

teste.apply(treino,['Oláaaa'])


//calbacks

function adicao(x,y) {
    return x + y
}

function multiplicacao(x,y) {
    return x * y
}

function calcular(x,operacao,y){
    console.log(x,operacao(x,y),y)
}

calcular(10,adicao,30)
calcular(10, multiplicacao, 20)

