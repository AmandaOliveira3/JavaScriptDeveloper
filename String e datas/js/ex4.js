const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const pacientes = []    // declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()              // evita envio do form

    const nomeUsuario = document.getElementById("inFuncionario").value

    const partes = nomeUsuario.split(" ")     
    const tam = nomeUsuario.split(" ").length   // obtém nº de itens do vetor partes
    let nomeEmail = ""

    for (let i = 0; i < tam; i++) {
        nomeEmail+= partes[i].charAt(0)
        
    }
    nomeEmail += partes[tam - 1] + "@empresa.com.br"

    resp.innerText = `E-mail: ${nomeEmail.toLowerCase()}\n`

    nomeUsuario = ""
    nomeUsuario.focus()
})