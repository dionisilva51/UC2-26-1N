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

        if (this.watched) {
            console.log('-Já assisti')
        } else {
            console.log('-Não assisti')
        }
    }
}

movie.description()