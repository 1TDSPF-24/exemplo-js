
//console.log("Olá Mundo de verdade!");
//Comentário simples, não executa nada no código
/* Comentário  
Múltiplo, também não executa nada  
no código*/

//CAptura de um elemento e atrelar a ele um evento click.
const elementoH1 = document.getElementById("titulo");
//elementoH1.addEventListener("evento","função anônima");
elementoH1.addEventListener("click", function(){
    console.log("Agora vitaminado!");
});