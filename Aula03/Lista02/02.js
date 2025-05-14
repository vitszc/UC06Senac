const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número"));
if(numero%2===0){
    console.log(`Este número é par`);
}else{
    console.log(`Este número é ímpar`);
}