const prompt = require("prompt-sync")();
let valor = Number(prompt("Digite o valor do produto para a analise de desconto:"));
const des = 10;
if(valor>100){
    valor = valor - (des/100*valor);
    console.log(`O novo valor com desconto é ${valor}.`);
}else{
    console.log(`O desconto não pode ser aplicado.`);
}