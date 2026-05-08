const ask = require('readline-sync');

let primeiroNumero = Number(ask.question('Digite o primeiro numero: '));
let segundoNumero = Number(ask.question('Digite o segundo numero: '));
let pergunta = ask.question('Digite a opcao de 1 a 5: \n 1 somar: \n 2 subtracao: \n 3 divisao: \n 4 multiplicacao: \n 5 porcentagem: ');

function somar(num1, num2){
    let somar2 = num1 + num2
    return somar2
}

function subtrair(num1, num2){
    let subtrair2 = num1 - num2
    return subtrair2
}

function multiplicar(num1, num2){
    let multiplicar2 = num1 * num2
    return multiplicar2
}

function divisao(num1, num2){
    let divisao2 = num1 / num2
    return divisao2
}
function porcentagem(num1, num2){
    let porcentagem2 = num1 % num2
    return porcentagem2
}


switch (pergunta) {
    case '1':
        console.log(`Resultado da soma: ${somar(primeiroNumero, segundoNumero)}`);

        break
    case '2':
        console.log(`Resultado da subtracao: ${subtrair(primeiroNumero, segundoNumero)}`);
        break
    case '3':
        console.log(`Resultado da divisao: ${divisao(primeiroNumero, segundoNumero)}`);
        break
    case '4':
        console.log(`Resultado da multiplicacao: ${multiplicar(primeiroNumero, segundoNumero)}`);
        break
    case '5':
        console.log(`Resultado da porcentagem: ${porcentagem(primeiroNumero, segundoNumero)}`);
        break
default:
    console.log('Opcao invalida!')

}