
const ask = require('readline-sync');
/*
let nome = ask.question("Qual eh o seu nome? ");
console.log("Olá", nome)

let nome2 = ask.question("Tudo bem? ");

console.log("que bom que", nome2);

let idade = ask.question("Qual a sua idade? ");

console.log("Nossa ta véio em..");
*/
/*
let nome = "leo"
let idade = 23
let frase = `meu nome é ${nome} e tenho ${idade} anos`

console.log(frase);
*/
/*
let name = ask.question("Qual eh o seu nome? ");
let color = ask.question("Qual sua cor favorita? ");

console.log(` meu nome é ${name} e minha cor favorita é ${color}` );
*/
/*
let name = "Leonardo Barbosa"
console.log(name.length)
*/
/*
let frase = "OieEeEee!";
let fraseMinuscula = frase.toLowerCase()

console.log(fraseMinuscula)
*/
/*
let frase = "OieEeEee!";
let fraseMinuscula = frase.toUpperCase()
console.log(fraseMinuscula)


let email = "      prof.lebc@gmail.com    "

console.log(email.trim())


let frase = "hoje comi cenoura";

let veri1 = frase.includes("cenoura")
let veri2 = frase.includes("batata")

console.log(`1. hoje comi cenoura? ${veri1} 2. hoje comi batata? ${veri2}`)
*/

let frase = "hoje eu comi churrasco e eu adoro churrasco"

let novaFrase = frase.replaceAll("churrasco", "Lasanha")

console.log(novaFrase)