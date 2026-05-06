function testeAula(primeiro, segundo) {

    if (primeiro > segundo) {
        return `${primeiro} é maior que ${maior}`
    } else if (primeiro == segundo) {
        return `${primeiro} é igual ao segundo numero ${segundo}`
    } else if (primeiro < segundo) {
        return `${primeiro} é menor que ${segundo}`
    }

}

let num5 = 10
let num6 = 15

console.log(testeAula(num5, num6))