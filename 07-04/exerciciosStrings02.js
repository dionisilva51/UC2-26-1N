const ask = require('readline-sync')
//Exercicio 1
/*
let name1 = ask.question("Digite seu nome completo:  ");
 console.log(name1)
 console.log(name1.length)
*/
/*
//Exercicio 2 
let name2 = ask.question("Digite uma frase: ")

 console.log(name2.toUpperCase())
 console.log(name2.toLowerCase())
 */

 //Exercicio 3
/*
 let frase = "  Socorram-me! Subi no onibus em Marrocos!      "

 console.log(frase)
 console.log(frase.trim())
 console.log("Antes: ",frase.length, "Depois:", (frase.trim()).length)
*/
 //Exercicio 4
/*
 let frutas = " morango, banana, bergamota, abacaxi, laranja"

 let pergunta = ask.question("Digite o nome de uma fruta: ")

 console.log(frutas.includes(pergunta))
*/

//Exercicio 5 
/*
let frase2 = ask.question("Digite uma frase: ")
let frase3 = ask.question("Digite uma palavra que deseja substituir: ")
let frase4 = ask.question("Qual a nova palavra: ")

console.log(frase2.replaceAll(frase3, frase4))
*/

//Exercicio 6
/*
let number1 = 40
let number2 = 37

console.log(number1 + number2);
console.log(`Ao somar ${number1} + ${number2} a gente obtem o resultado ${number1 + number2}`)
*/

//Exercicio 7
/*
let frase5 = ask.question("Digite qual quer valor: ")

console.log(` ${frase5}, é ${typeof frase5}`)
*/

//Exercicio 8 
/*
let palavra = ask.question("Digite uma palavra: ");
let palavra2 = ask.question("Digite outra palavra: ");

let exibir = `${palavra} ${palavra2}`

console.log(`${exibir}, Tamanho total da frase: ${exibir.length}`)
*/

//Exercicio 9

let frase6 = ask.question("Digite uma frase: ");
let letra = ask.question("Digite uma letra: ");
let letra2 = "*"

console.log((frase6.toUpperCase()).replaceAll(letra, letra2))

