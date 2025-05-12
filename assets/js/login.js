function fazerLogin() {
  const nome = "Fagner02";
  const senha = "@fagner02";
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  if (user === nome && pass === senha) {
    window.location.href = "../../pages/cadastro.html";
  } else {
    alert("Você não tem permissão para acessar esta página.");
  }
}
