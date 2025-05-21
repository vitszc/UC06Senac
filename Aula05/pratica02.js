const prompt = require('prompt-sync')();
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite um segundo número:"));
const num3 = Number(prompt("Digite um terceiro número:"));

if(num1>=0 && num1 <=10 && num2>=0 && num2<=10 && num3>=0 && num3<=10) {

const opcao = parseInt(prompt("Digite 1 para: Média Aritmética; Digite 2 para: Média Geométrica; Digite 3 para: Média Ponderada"));
let resultado = 0;
switch(opcao){

case 1:
    resultado = (num1+num2+num3)/3
    console.log(`Sua média aritmética é: ${resultado.toFixed(2)}.`);
    break;

case 2:
    resultado = Math.cbrt(num1*num2*num3);
    console.log(`Sua média geométrica é: ${resultado.toFixed(2)}.`);
    break;

case 3:
    resultado = (num1*2)*(num2*2)*(num3*2)/(num1+num2+num3);
    console.log(`Sua média ponderada é: ${resultado.toFixed(2)}.`);
    break;
    
default:
    console.log("Repita, os números não são válidos!")

}

    }else{
    
    console.log("O número não é positivo!");
   

}





