function criarUsuario(nome, idade, cidade, hobbies) {
    return [nome, idade, cidade, hobbies]
}



function formatarHobbies(hobbies) {
    let string = hobbies.join(',')
    return string
}


function gerarDescricao(user) {
    return `${user[0]} tem ${user[1]} , mora em ${user[2]} e gosta de ${user[3]}`
}


function adicionarUsuario(usuarios, user) {
    usuarios.push(user)
    let final = usuarios
    return final
}

function gerarRelatorio(usuario) {
    let contar = usuario.length
    return contar
}

//------------------------------------------------------------------

let usuarios = []

let user1 = criarUsuario('Dionatan', '33 anos', 'São Leopoldo', ['Pedalar', "jogar", "Voley"])
let hobbiesFormatados = formatarHobbies(user1[3])
let gerarADescricao = gerarDescricao(user1)
usuarios = adicionarUsuario(usuarios, user1)
let contar = gerarRelatorio(usuarios)

console.log(user1)
console.log(hobbiesFormatados)
console.log(gerarADescricao)
console.log(usuarios)
console.log(contar)