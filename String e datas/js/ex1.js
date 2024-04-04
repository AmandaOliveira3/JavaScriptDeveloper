const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const btn = document.getElementById("inBtn");

let criptografia = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do formulário

    const mensagem = document.getElementById("inMensagem").value;
    
    for (let i = 1; i < mensagem.length; i = i+2) {
        criptografia+= mensagem[i] 
    }
    for (let i = 0; i < mensagem.length; i = i+2) {
        criptografia+= mensagem[i] 

    }

    resp.innerText = `${criptografia}`
    document.getElementById("inMensagem").value = ""
});

frm.btnDes.addEventListener("click", () => {

    let mensagemDes = ""

    for (let i = (criptografia.length/2), j =0 ; i < criptografia.length; j++, i++) {
        mensagemDes += criptografia[i] + criptografia[j]

    }


    resp.innerText = `${mensagemDes}`


});