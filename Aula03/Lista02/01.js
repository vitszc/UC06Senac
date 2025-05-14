const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número"));
if(numero>=1){
    console.log(`Este número é positivo`);
}else{
    console.log(`Este número é negativo`);
}