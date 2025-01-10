var agora = new Date() // PEGA O HORARIO ATUAL DO SISTEMA
var hora = agora.getHours() // PEGA SOMENTE A HORA
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia Princesa!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite')
}