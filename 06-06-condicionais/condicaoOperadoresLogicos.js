let ensinoMedioConcluido = true
let idade = 18
let cursandoOutraFaculdade = true


function faculdade(ensinoMedioConcluido2, idade2, cursandoOutraFaculdade2) {

    if (ensinoMedioConcluido2 && !cursandoOutraFaculdade2 && (idade2 >= 18)) {
        console.log('Pode estudar na faculdade!')
    } else {
        console.log('não pode estudar nesta faculdade seu animal')
    }
}

faculdade(ensinoMedioConcluido, idade, cursandoOutraFaculdade);


