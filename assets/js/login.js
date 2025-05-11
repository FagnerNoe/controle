import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHdlxtVrVbly3_Hy6ewhgUMwV45OxJE7g",
  authDomain: "equipamentos-e825a.firebaseapp.com",
  projectId: "equipamentos-e825a",
  storageBucket: "equipamentos-e825a.firebasestorage.app",
  messagingSenderId: "415306494134",
  appId: "1:415306494134:web:cad2d026744535f21d3617",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function fazerLogin() {
  const email = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      console.log("Login realizado com sucesso!", userCredential.user);
      alert("Login bem-sucedido!");
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error.message);
      alert("Erro ao autenticar. Verifique suas credenciais.");
    });
}
