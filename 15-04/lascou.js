// =========================================
// LISTA DE EXERCÍCIOS - JAVASCRIPT
// =========================================



// =========================================
// EXERCÍCIO 1
// Crie variáveis para armazenar:
// - seu nome
// - sua idade
// - se você gosta de programar
//
// Imprima tudo em uma única frase
// =========================================
/*
let nome = 'Dionatan Silva'
let idade = 33
let gosta = true

console.log(`Meu nome é ${nome} e tenho ${idade} anos e eu gosto de programar? ${gosta}`)
*/


// =========================================
// EXERCÍCIO 2
// Crie duas variáveis com números.
//
// Mostre no console:
// - soma
// - multiplicação
// - divisão
// - resto da divisão
// =========================================
/*
let soma = 10 + 5
let multiplicação = 10 * 5
let divisão = 146 / 5
let resto = 146 % 5
console.log(`10 + 5 = ${soma} 
10 * 5 = ${multiplicação}
10 / 5 = ${divisão}
Resto da divisão = ${resto}`)
*/



// =========================================
// EXERCÍCIO 3
// Crie duas variáveis com números.
//
// Mostre no console o resultado das comparações:
// - são iguais
// - são diferentes
// - o primeiro é maior
// - o segundo é menor ou igual
// =========================================
/*
let numero1 = 34
let numero2 = 29
let iguais = numero1 === numero2
let diferentes = numero1 !== numero2
let primeiroMaior = numero1 > numero2
let segundo = numero1 >= numero2

console.log(`O ${numero1} e o ${numero2} são iguais? ${iguais}
O ${numero1} e ${numero2} são diferentes? ${diferentes}
O ${numero1} é maior que o ${numero2}? ${primeiroMaior}
O ${numero2} é menor ou igual ao ${numero1}? ${segundo}`)
*/



// =========================================
// EXERCÍCIO 4
// Crie três variáveis booleanas:
// a = true
// b = false
// c = true
//
// Mostre no console o resultado das seguintes operações:
// - a e b
// - b e c
// - a e c
// - a ou b
// - b ou c
// - negação de a
// - negação de b
// =========================================
/*
let a = true
let b = false
let c = true

let primeiro = a && b
let segundo = b && c
let terceiro = a && c
let quarto = a || b
let quinto = b || c
let negaçãoA = !a
let negaçãoB = !b
console.log(`A e B = ${primeiro}
B e C = ${segundo}
A e C = ${terceiro}
A ou B = ${quarto}
B ou C = ${quinto}
A oposto: ${negaçãoA}
B oposto: ${negaçãoB}`);
*/

// =========================================
// EXERCÍCIO 5
// Peça ao usuário um número.
//
// Crie outra variável com esse mesmo valor,
// mas convertido para texto.
//
// Mostre:
// - valor e tipo da primeira
// - valor e tipo da segunda
// =========================================

const ask = require('readline-sync')
/*
let pergunta = Number(ask.question('Digite um numero: '));
let converter = pergunta.toString()
console.log(`Valor da primeira: ${pergunta} Tipo da primeira ${typeof pergunta}`)
console.log(`Valor da segunda: ${converter} Tipo da segunda ${typeof converter}`)
*/

// =========================================
// EXERCÍCIO 6
// Crie uma variável com o seguinte valor:
// "   Aprender Javascript é legal   "
//
// Faça as seguintes operações:
// - remover os espaços no início e no fim
// - transformar toda a frase em maiúsculo
//
// Mostre:
// - a frase original
// - a frase sem espaços
// - a frase em maiúsculo
// - o tamanho da frase original
// - o tamanho da frase sem espaços
// =========================================
/*
let frase = "   Aprender Javascript é legal   "
let frase2 = frase.trim()
let frase3 = frase.toUpperCase()

console.log(`Frase original: ${frase}
Sem espaço: ${frase2}
Frase maiúscula: ${frase3}
Tamanho da frase original ${frase.length}
Tamanho da frase sem espaço: ${frase2.length}`);
*/


// =========================================
// EXERCÍCIO 7
// Peça ao usuário uma frase sobre javascript.
//
// Faça as seguintes operações:
// - verifique se a frase contém a palavra "javascript"
// - substitua todas as ocorrências de "javascript" por "JS"
//
// Mostre:
// - a frase original
// - o resultado da verificação (true ou false)
// - a frase modificada
// =========================================
/*
let frase = ask.question('Digite uma frase sobre javascript: ');
let trocar = frase.replaceAll('javascript', 'JS');

console.log(`Frase original: ${frase}
Contem a palavra? ${frase.includes('javascript')}
Frase modificada: ${trocar}`)
*/



// =========================================
// EXERCÍCIO 8
// Crie um array com pelo menos 5 elementos.
//
// Mostre:
// - o tamanho do array
// - o primeiro elemento
// - o último elemento
// =========================================
/*
let elementos = ['fogo', 'agua', 'terra', 'ar', 'lava'];
let primeiroElemento = elementos[0]
let ultimoElemento = elementos[4]

console.log(`Tamanho do array: ${elementos.length}
Primeiro elemento: ${primeiroElemento}
Ultimo elemento: ${ultimoElemento}`)
*/

// =========================================
// EXERCÍCIO 9
// Crie um array com os números: 10, 20, 30, 40 e 50.
//
// Faça as seguintes alterações no array:
// - adicione os números 60 e 70 ao final
// - remova o primeiro elemento do array
// - remova o número que agora está na posição 2
//
// Mostre:
// - o array final
// - o tamanho do array antes e depois das alterações
// =========================================
/*
let numeros = [10, 20, 30, 40, 50];
console.log(`Array no inicio: ${numeros.length}`);
numeros.push(60, 70);
numeros.splice(0, 1);
numeros.splice(2, 1);

console.log(`Array final: ${numeros}
Tamanho do array no final: ${numeros.length}`);
*/


// =========================================
// EXERCÍCIO 10
// Crie um array com nomes.
//
// Peça ao usuário um nome.
//
// Mostre:
// - se o nome informado existe no array
// =========================================
/*
let nomes = ['duda', 'jequinha', 'dionatan', 'rosane'];
let pergunta4 = ask.question('Digite um nome: ');

console.log(nomes.includes(pergunta4.toLowerCase()))
*/


// =========================================
// EXERCÍCIO 11
// Peça ao usuário um nome (pode estar em qualquer formato).
//
// Crie outra variável com esse nome:
// - sem espaços no início e no fim
// - todo em minúsculas
// - com apenas a primeira letra em maiúscula
//
// Mostre:
// - o nome original
// - o nome formatado
// - o tamanho dos dois
// =========================================
let pergunta = ask.question('Digite um nome: ');
let nome = (pergunta.trim()).toLowerCase()
let maiusuculo = nome.charAt(0).toUpperCase() + nome.slice(1)
console.log(`Nome Original: ${pergunta} - Tamanho: ${pergunta.length}`);
console.log(`Nome formatado: ${maiusuculo} - Tamanho: ${maiusuculo.length}`)


// =========================================
// EXERCÍCIO 12
// Peça ao usuário uma frase.
//
// Crie outra variável baseada nessa frase com as seguintes alterações:
// - todas as letras em minúsculo
// - remover espaços no início e no fim
// - substituir todas as vogais "a" por "i"
//
// Mostre:
// - a frase original
// - a frase modificada
// - o tamanho das duas frases
// =========================================





// =========================================
// EXERCÍCIO 13
// Crie um array com 10 números.
//
// Remova o terceiro, o quarto e o sétimo elemento do array.
// Adicione um elemento entre o novo terceiro e o novo quarto elemento.
//
// Mostre o resultado
// =========================================





// =========================================
// EXERCÍCIO 14
// Crie uma variável sem valor.
//
// Mostre o tipo dela.
//
// Depois atribua um valor e mostre o tipo novamente.
// =========================================





// =========================================
// EXERCÍCIO 15
// Peça ao usuário:
// - nome
// - idade
//
// Crie uma frase que combine tudo usando texto e variáveis.
// =========================================