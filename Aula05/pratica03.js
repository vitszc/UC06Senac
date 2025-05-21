const prompt = require('prompt-sync')();
const num1 = Number(prompt("Digite um número:"));
const opr = prompt("Digite a operação:");
const num2 = Number(prompt("Digite um outro número:"));

if(typeof num1 === 'number' && typeof num2 === 'number'){

let resultado = 0
switch(opr) {

case "+":
    resultado = num1 + num2
    console.log(`A soma de ${num1} + ${num2} é igual a ${resultado}.`);
    break;

case "-":
    resultado = num1 - num2
    console.log(`A subtração de ${num1} - ${num2} é igual a ${resultado}.`);
    break;

case "x":
    resultado = num1 * num2
    console.log(`A múltiplicação de ${num1} x ${num2} é igual a ${resultado}.`);
    break;

case "/":
    if(num2 ==! 0) {
    resultado = num1 / num2
    console.log(`A divisão de ${num1} / ${num2} é igual a ${resultado.toFixed(2)}.`);
    }else{
        console.log("Não é possível a divisão com 0!")
    }
    break;

default:
    console.log("A operação não é possível! Tente novamente.");

}

}else{
    console.log("Dados inválidos!")
}

