
let usuario = JSON.parse(localStorage.getItem("obj-validado"));
console.log(`O usuário ${usuario.nome} realizou o login com email ${usuario.emailUsuario}.`);