var usuario = [
    {
        "email": "12345678@gmail.com",
        "senha": "MTIzNDU2Nzg=",
        "confirmacaoSenha": "MTIzNDU2Nzg=",
        "endereco": "Rua A n. 1"
    },
    {
        "email": "G4121212@gmail.com",
        "senha": "RzQxMjEyMTI=",
        "confirmacaoSenha": "RzQxMjEyMTI=",
        "endereco": "Rua B n. 2"
    }
]

const getEmail = document.getElementById("email");
const getSenha = document.getElementById("senha");
const getnewConfirmacaoSenha = document.getElementById("confirmacaoSenha");
const getnewEndereco = document.getElementById("endereco");

function cadastrar() {

    var index = usuario.findIndex(function (usuario, i) {
        return usuario.email === getUsuario.value;
    })

    if (index === -1) {
        alert("Usuário já cadastrado!")
    }
    else if (usuario[index].email === getUsuario.value && usuario[index].senha === window.btoa(getSenha.value)) {
        alert("Usuário cadastrado com sucesso!")
    }
    else {
        alert("Tente novamente!")
    }
}

function olharSenha() {
    var typePassword = document.getElementById("senha");
    var verificar = typePassword.getAttribute("type");

    if (verificar == "password") {
        typePassword.setAttribute('type', 'text');
    } else if (verificar == 'text') {
        typePassword.setAttribute('type', 'password');
    }
}

function olharConfirmacaoSenha() {
    var typePassword = document.getElementById("confirmacaoSenha");
    var verificar = typePassword.getAttribute("type");

    if (verificar == "password") {
        typePassword.setAttribute('type', 'text');
    } else if (verificar == 'text') {
        typePassword.setAttribute('type', 'password');
    }
}

