function verificar(){
    let data = new Date()
    let ano = data.getFullYear() // PEGA O ANO
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    let img = document.createElement('img') // CRIA A TAG IMG
    img.setAttribute('id', 'foto') // CRIOU UM ID PARA O IMG CHAMADO FOTO
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let gen = ''
        if(fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', './img/bebeMenino.jpg')
            } else if (idade < 21){
                // JOVEM
                img.setAttribute('src', './img/jovemMenino.jpg')

            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', './img/adultoHomem.jpg')

            } else {
                // Idoso
                img.setAttribute('src', './img/idosoHomem.jpg')
            }
        } else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >=0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', './img/bebeMenina.jpg')
            } else if (idade < 21){
                // JOVEM
                img.setAttribute('src', './img/jovemMulher.jpg')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', './img/adultoMulher.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', './img/idosaMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.<br>`
        res.appendChild(img) // ADICIONA ELEMENTE EMBAIXO DO ANTERIOR
    }
}