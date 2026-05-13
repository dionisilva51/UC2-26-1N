let numeros = [11, 15, 18, 14, 12, 13];
let maiorNumero = numeros[0];


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log("O maior número é:", maiorNumero);