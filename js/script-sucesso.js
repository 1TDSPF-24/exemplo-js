const tokenUser = sessionStorage.getItem("token")

if(tokenUser){
let usuario = JSON.parse(localStorage.getItem("obj-validado"));
console.log(`O usuário ${usuario.nome} realizou o login com email ${usuario.emailUsuario}.`);

const tituloUsuario = document.querySelector("#user-titulo");
tituloUsuario.innerText = usuario.nome;

const linhaTabela = document.querySelector("tbody tr td");

linhaTabela[0].textContent = usuario.nome;
linhaTabela[1].textContent = usuario.emailUsuario;
linhaTabela[2].textContent = "X - D";


const botaoLogout = document.querySelector("#user-logout");
botaoLogout.addEventListener("click", () => {
    localStorage.removeItem("obj-validado");
    sessionStorage.removeItem("token");
    window.location.href = "../index.html";
});
} else {
    window.location.href = "../status/erro.html";
}