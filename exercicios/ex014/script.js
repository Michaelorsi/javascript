function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#d6e1e5'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#926357'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#101640'
    }
}