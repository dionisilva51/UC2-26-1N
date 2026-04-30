const ask = require('readline-sync');
let dados = []
function criarUsuario(nome, idade, cidade, hobbies){
    
   dados.push(ask.question("Qual o seu nome? "))
   dados.push(ask.question("Qual a sua idade? "))
   dados.push(ask.question("Qual a sua cidade? "))
   dados.push(ask.question("Qual o seu hobbie? "))
   return dados
}

criarUsuario()

let respostas = dados
console.log(respostas)


function formatarHobbies(hobbies){
    hobbies = []
}

console.log(criarUsuario(ask.question('Digite seu nome: ')))
console.log(criarUsuario(Number(ask.question('QUal a sua idade? '))))
console.log(criarUsuario(ask.question('Digite a cidade: ')))
console.log(criarUsuario(ask.question('Qual seu hobbie? ')))

console.log(criarUsuario('Dionatan', 33, 'São Leopoldo', ['Pedalar', "jogar play", "Beach tennis"]));