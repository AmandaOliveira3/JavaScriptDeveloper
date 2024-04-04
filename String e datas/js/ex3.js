const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do formulário

    const senha = document.getElementById("inSenha").value;
    const itens = document.querySelectorAll("li"); // Seleciona todos os itens da lista
    let erros = false
    // Verificações
    if (senha.length < 8 || senha.length > 15) {
        itens[0].style.color = "red"; // Altera a cor do item referente ao comprimento da senha
        erros = true
    }
    else{
        itens[0].style.color = "black";
    }
    if (!senha.match(/[0-9]/g)) {
        itens[1].style.color = "red"; // Altera a cor do item referente aos números
        erros = true
    }
    if (!senha.match(/[a-z]/g)) {
        itens[2].style.color = "red"; // Altera a cor do item referente às letras minúsculas
        erros = true
    }
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 2) {
        itens[3].style.color = "red"; // Altera a cor do item referente às letras maiúsculas
        erros = true
    }
    if (!senha.match(/[\W|_]/g)) {
        itens[4].style.color = "red"; // Altera a cor do item referente aos caracteres especiais
        
        erros = true
    }
    if(erros == false){
        // Se todas as verificações passaram
        resp.innerText = "Ok! Senha Válida";
    }

    
    document.getElementById("inSenha").value = "";
    document.getElementById("inSenha").focus();
});
