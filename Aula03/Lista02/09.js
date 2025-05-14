const prompt = require("prompt-sync")();
const nota1 = Number(prompt("Digite sua nota 1:"));
const nota2 = Number(prompt("Digite sua nota 2:"));
const media = (nota1 + nota2)/2;
if(media>=6){
    console.log(`Sua média é ${media}! Você está aprovado.`);
}else{
    console.log(`Sua média é ${media}! Você está reprovado.`);
}