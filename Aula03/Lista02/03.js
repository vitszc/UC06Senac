const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número"));
const numero02 = Number(prompt("Digite um número"));
if (numero>numero02){
    console.log(`${numero} é maior`);
}else{
    console.log(`${numero02} é maior`)
}