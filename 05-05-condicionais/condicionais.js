const ask = require('readline-sync');
/*
function comparacao(num1, num2){
   

    if (num1 == num2){
        console.log('Sucessooooo');
    } else{
        console.log('Falhaaaaa')
    }
}

let primeiroNumero = 30
let segundoNumero = 30

comparacao(primeiroNumero, segundoNumero)

*/
/*
function isEqual(num1, num2){
    let condicao = num1 === num2
    if (condicao) {
        return `${num1} e ${num2} são iguaisssss`
    } else {
        return `${num1} e ${num2} são diferentessssss`
    }
}

let primeiroNumero = 43
let segundoNumero = 45

console.log(isEqual(primeiroNumero, segundoNumero))
*/

function isEqual(num1, num2){
    let condicao = num1 === num2
    if (condicao) {
        return `${num1} e ${num2} são iguaisssss e você venceu na vida`
    } else {
        return `${num1} e ${num2} são diferentessssss e você falhou na sua vida animal`
    }
}

let primeiroNumero = ask.question('Digite um numero: ')
let segundoNumero = ask.question('Digite um numero: ');

console.log(isEqual(primeiroNumero, segundoNumero))