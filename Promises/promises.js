/*
const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})

console.log('texto texto')

promessa
    .then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Finalizando')
    })

*/

//manipulando arquivos 

const fs = require('fs')
// const { fileURLToPath } = require('url')

// const promessaDaLeituraArquivo = fs.promises.readFile('tarefas.csv')

// promessaDaLeituraArquivo
//     .then((arquivo) => {
//         console.log(arquivo.toString('utf-8'))
//     })
//     .catch((erro) => {
//         console.log('Deu ruim', erro)
//     })


// Async e await 

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile('tarefas.csv')
        const textoDoArquivo = arquivo.toString('utf-8')
        console.log(textoDoArquivo)
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log('Finalizou')
    }
}

buscarArquivo()