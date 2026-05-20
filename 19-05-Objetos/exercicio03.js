/*
let movie = {
    title: 'A volta dos que não foram',
    releaseYear: '2026',
    cast: ['Pikachu', 'Ragnar', 'Frodo Bolseiro'],
    watched: false,
    description: function () {
        console.log(`
-Title: ${this.title}
-ReleaseYear: ${this.releaseYear}
-cast:`)
        
        for (let actor of this.cast) {
            console.log(`- ${actor}`)
        }

        for(let name of this.namePerson){
            console.log(`- ${name}`)
        }

        if (this.watched) {
            console.log('-Já assisti')
        } else {
            console.log('-Não assisti')
        }
    }
}

movie.namePerson = ['Ryan Reynolds', 'Travis Fimmel', 'Elijah Wood']

movie.description()
*/

let movie = {
    title: 'A volta dos que não foram',
    releaseYear: '2026',
    cast: ['Pikachu', 'Ragnar', 'Frodo Bolseiro'],
    watched: false,

}

movie.namePerson = ['Ryan Reynolds', 'Travis Fimmel', 'Elijah Wood']

console.log(`
${movie.cast[0]} => ${movie.namePerson[0]}
${movie.cast[1]} => ${movie.namePerson[1]}
${movie.cast[2]} => ${movie.namePerson[2]}
`)

movie.cast[0] = 'xuxa'

console.log(`
${movie.cast[0]} => ${movie.namePerson[0]}
${movie.cast[1]} => ${movie.namePerson[1]}
${movie.cast[2]} => ${movie.namePerson[2]}
`)