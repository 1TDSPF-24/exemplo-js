// console.log("Olá Mundo de verdade!");
//Comentário simples, não executa nada no código
/* Comentário  
Múltiplo, também não executa nada  
no código*/

//Captura de um elemento e atrelar a ele um evento click.
// const elementoH1 = document.getElementById("titulo");
// // elementoH1.addEventListener("evento","função anônima");
// elementoH1.addEventListener("click", function(){
//     console.log("Agora vitaminado!");
// });

//Declaradores em JavaScript
//Var
var nome = "João";
console.log(nome);
//Let
let sobrenome = "Sousa";
//Const
const idade = 25;
// idade = 30; //Erro! Não pode alterar o valor da variável

var pessoaJuridica = "eu";
//Interpolação
console.log(`A empresa ${pessoaJuridica} é Jurídica.`);

//Tipos de dados
//String
var frase = "Eu amo programação.";
console.log(frase);

frase = 1000;
console.log(frase);
//Números
var num1 = 4;
var num2 = 6;
console.log(num1 + num2);

console.log(num1 + num2 + frase);

//Boolean (Verdadeiro ou Falso)
var condicao = true;
if (condicao) {
  console.log("É Verdadeiro.");
  console.log(num1 + num2 + frase + condicao);
} else {
  console.log("É Falso.");
}

//Objetos
/* 
 Propriedades: Chaves, atributos 
 Métodos: Parênteses, funções 
 */
var carro = {
  marca: "Fiat",
  modelo: "Palio",
  ano: 2018,
  cor: "Branco",
};

console.log(carro["modelo"]);
console.log(carro.ano);

carro.marca = "volkswagen";
console.log(carro.marca);
console.log(carro["marca"]);