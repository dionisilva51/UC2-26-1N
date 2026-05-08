const ask = require('readline-sync');

let pokemon = ask.question('Digite o nome de um pokemon: ').toLowerCase()
function descobrir(pokemon) {
    switch (pokemon) {
        case 'bulbasauro':
            console.log('Planta e Veneno')
            break
        case 'charmander':
            console.log('Fogo')
            break
        case 'squirtle':
            console.log('Água')
            break
        default:
            console.log('Pokemon não encontrado!')
            break
    }
    
}

descobrir(pokemon);