const getEmail = document.getElementById("email");
const getSenha = document.getElementById("senha");
const getConfirmacaoSenha = document.getElementById("confirmacaoSenha");
const getEndereco = document.getElementById("endereco");

function cadastrar() {
    var confirmacao = localStorage.getItem(getEmail.value);

    if (confirmacao != null) {
        alert("Usuário já existente");
    } 
    else if (getSenha.value !== getConfirmacaoSenha.value) {
        alert("As senhas não conferem, verifique e tente novamente!");
    } 
    else {
        localStorage.setItem(getEmail.value, window.btoa(getSenha.value));
        localStorage.setItem(getEmail.value + '_endereco', getEndereco.value);
        alert("Usuário cadastrado com sucesso!");
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

