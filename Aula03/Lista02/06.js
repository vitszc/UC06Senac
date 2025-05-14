const prompt = require("prompt-sync")();
const num = Number(prompt("Digite um número"));
if(num%3===0){
    console.log(`Este número é múltiplo de 3!`);
}else{
    console.log(`Este número não é múltiplo de 3!`);
}