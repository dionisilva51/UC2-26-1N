const movie = {
    name: 'A vonta dos que não foram',
    ano: 2026,
    elenco: ['Pikachu', 'Hagnar', 'Frodo Bolceiro'],
    assistiu: 'Nunca',
}

console.log(`
Qual o nome do filme? ${movie.name}
Em qual ano foi feito? ${movie['ano']}
Qual o elenco do filme: ${movie.elenco[0, 1, 2]}
Você já assistiu o filme: ${movie['assistiu']}
`);