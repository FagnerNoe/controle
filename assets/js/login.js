let user = document.getElementById("usuario");
let password = document.getElementById("senha");
const nomeUsuario = "F@gner02";
const senha = "LuM@0219@";
function fazerLogin() {
  if (user.value == nomeUsuario && password.value == senha) {
    console.log("Acesso Permitido!");
    window.location = "pages/cadastro.html";
  } else {
    window.alert("Você não está cadastrado !!");
  }
}
