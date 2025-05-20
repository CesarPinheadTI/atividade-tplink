var loginButton = document.getElementById("button-submit");
function login () {
    var inputUser = document.getElementById("usuario").value;
    var inputPassword = document.getElementById("senha").value;
    var inputCode = document.getElementById("codigo").value;
    if (inputUser == "admin" && inputPassword == "1234" && inputCode =="tplink2025") {
        window.location.replace ("painel.html");
    } else {
        alert("Usuário, senha ou código errado!");
    }
}
    loginButton.addEventListener("click", login);