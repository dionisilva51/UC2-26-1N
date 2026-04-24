/*
function imprimirOlaMundo(){
    console.log("Olá mundo")
}

imprimirOlaMundo()
imprimirOlaMundo()




function calculaArea(altura, largura){
    const area = altura * largura
    console.log(area)
}

calculaArea(2, 3)

calculaArea(5, 7)
*/
/*
function digaUmNome(nome){ //dentro do parenteses a gente coloca o 
    //parametro que queremos que seja pego dentro da função
    console.log(`Olá ${nome}`)
}

digaUmNome("Dionatan")
digaUmNome("Eduarda")
digaUmNome("Jessica")
*/
/*
function testeVariavel(){
    let numero = 5
    console.log(numero)
}
//o que esta dentro da função não pode ser acessado fora da função
testeVariavel()
*/
/*
function calculaArea(altura, largura){
    const area = altura * largura
    return area
}

console.log(calculaArea(5, 8))

console.log(calculaArea(7, 12) > 100)



function calculaArea(altura, largura){
    const area = altura * largura
    return area
}
// assim conseguimos somar valores
console.log(calculaArea(5, 4) + calculaArea(13, 3) + calculaArea(8, 9))
*/
/*
function doisNumeros(numero1, numero2){
    let somar = numero1 + numero2
    return somar
}
let resposta = doisNumeros(5, 8)
console.log(resposta);
*/
let array1 = [2, 3, 5, 8, 10, 13]

function array(array){
    let array2 = []
    array2.push((array[array.length - 1])/2)
    array2.push((array[0])/2)
    return array2
}

console.log(array(array1))