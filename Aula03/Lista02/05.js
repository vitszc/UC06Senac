const prompt = require("prompt-sync")();
const nota = Number(prompt("Digite sua nota:"))
if(nota<5){
    console.log(`Você está reprovado!`);
}else if(nota>=7){
    console.log(`Você está aprovado!`);
}else{
    console.log(`Você está de recuperação!`);
}
