// Função do olho (visualizar a senha)

function olharSenha() {
    var typePassword = document.getElementById("senha");
    var verificar = typePassword.getAttribute("type");

    if (verificar == "password") {
        typePassword.setAttribute('type', 'text');
    } else if (verificar == 'text') {
        typePassword.setAttribute('type', 'password');
    }
}

//Logar Local Storage

const getUsuario = document.getElementById("user");
const getSenha = document.getElementById("senha");

function loginLocalStorage() {
    var confirmacao = localStorage.getItem(getUsuario.value);

    if (confirmacao != null) {
        if (confirmacao === window.btoa(getSenha.value)) {
            alert("Logado")
        }
    }
    else if (confirmacao === null) {
        alert("Usuário não encontrado")
    }
    else {
        alert("Senha incorreta")
    }
}

const getNewP1 = document.getElementById("newPs1")
const getNewP2 = document.getElementById("newPs2")

//Redefinir senha

function changePassword() {
    var confirmacao = localStorage.getItem(getUsuario.value);

    if (confirmacao != null && getNewP1.value === getNewP2.value) {
        localStorage.setItem(getUsuario.value, window.btoa(getNewP2.value))
        alert("Senha alterada");
    }
    else if (confirmacao === null) {
        alert("Usuário não encontrado")
    }
    else if (getNewP1.value != getNewP2.value) {
        alert("Senhas são diferentes")
    }
}








