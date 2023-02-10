function verificarLogin() {
    var usuario = document.getElementById ("username").value;
var senha = document.getElementById("password").value;

if (usuario == "admin" && senha == "admin") {
    window.location.href = "pagina-principal.html";
} else {
    alert("Usuário ou senha inválidos!");
}
}