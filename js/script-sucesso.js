
let usuario = JSON.parse(localStorage.getItem("obj-validado"));
console.log(`O usuário ${usuario.nome} realizou o login com email ${usuario.emailUsuario}.`);

const tituloUsuario = document.querySelector("#user-titulo");
tituloUsuario.innerText = usuario.nome;

const botaoLogout = document.querySelector("#user-logout");
botaoLogout.addEventListener("click", () => {
    localStorage.removeItem("obj-validado");
    window.location.href = "../index.html";
});