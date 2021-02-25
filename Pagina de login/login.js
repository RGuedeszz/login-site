var login;
var senha;
function dados() {
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;

    document.write("Login: " + login + "---. Senha: " + senha);
}

function confirmaEnter(tecla) {
    if (tecla.keyCode == 13) { // Enter
        login = document.getElementById("login").value;
        senha = document.getElementById("senha").value;

        document.write("Login: " + login + "---. Senha: " + senha);
    }
}

/*
function trocaVisibilidade() {
    let olho = document.getElementById("visibilidade");

    if (olho.value == "protegido") {
        olho.value = "mostrando";
        document.getElementById("senha").DOCUMENT_TYPE_NODE
    } else {
        olho.value = "protegido";
    }
    window.alert(olho.value);
}
*/

function confirmaCadastro() {
    let podeConfirmar = false;
    let cadastrado = true;
    let completo = false;
    let senhaIgual = false;
    let nomeCadastro = document.getElementById("nomeCad").value;
    let nascimentoCadastro = document.getElementById("dataCad").value;
    let emailCadastro = document.getElementById("emailCad").value;
    let senhaCadastro = document.getElementById("senhaCad").value;
    let confirmaSenhaCadastro = document.getElementById("confirmaSenhaCad").value;
    let confirmaTelefone = document.getElementById("telefoneCad").value;
    
    //////// Confirmação ////////
    if ((nomeCadastro && nascimentoCadastro && emailCadastro && senhaCadastro && confirmaSenhaCadastro && confirmaTelefone) != 0) {
        completo = true;
    } else {
        window.alert("Faltam dados");
    }
    if (senhaCadastro == confirmaSenhaCadastro) {
        senhaIgual = true;
    } else if (completo) {
        window.alert("As senhas nao batem");
    }

    if (senhaIgual && completo) {
        podeConfirmar = true;
    }

    if (podeConfirmar) {
        window.alert("Tudo certo");
        cadastrado = true;
    }
    
    //////// Banco usuarios ////////
    if (cadastrado) {
        document.write("Confirmado seu cadastro (sim, era pra você entrar nessa página, não é um bug): ");
        document.write("Nome: " + nomeCadastro);
        document.write("Nascimento: " + nascimentoCadastro);
        document.write("email: " + emailCadastro);
        document.write("Senha: " + senhaCadastro);
        document.write("Telefone: " + confirmaTelefone);
    }

}