let nomes =  ["Oi", "sumido", "tudo", "bem?", "Saudades", "kkkk"];
let fraseCompleta = ""  // variavel com uma string vazia

// nome vai ir pegando cada elemento de nomes até terminar o array
for (let nome of nomes){
    fraseCompleta = fraseCompleta + " " + nome;
// fraseCompleta esta recebendo ela mesmo mais um espaço para dar espaço entre as palavras da frase
// mais receber a palavra que esta armazenada na variavel nome e assim ele ira se repetir até terminar o array
}

console.log(fraseCompleta)