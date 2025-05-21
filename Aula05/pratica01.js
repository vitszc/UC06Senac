const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Digite um número de 1 a 7:"));

switch(numero) {
    case 1:
        console.log("Este dia domingo!");
        break;
    case 2:
        console.log("Este dia é segunda-feira!");
        break;
    case 3:
        console.log("Este dia é terça-feira!");
        break;
    case 4:
        console.log("Este dia é quarta-feira!");
        break;
    case 5:
        console.log("Este dia é quinta-feira!");
        break;
    case 6:
        console.log("Este dia é sexta-feira!");
        break;
    case 7:
        console.log("Este dia é sábado!");
        break;
    default:
        console.log("Não há possibilidade de um dia existente");
}