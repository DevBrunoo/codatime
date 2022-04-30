

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    //definir a hora
    //var hora = 22
    msg.innerHTML = `Now it's ${hora} hours, this is the best time to create new things.`
    if (hora >= 0 && hora < 12) {
        //Morning
        img.src = 'img1.png'
        document.body.style.background = '#9ACD32'
    } else if (hora >= 12 && hora <= 18) {
        //Aftenion
        img.src = 'img2.png'
        document.body.style.background = '#F5DEB3'
    } else {
        //Nigh
        img.src = "imgnigh.png"
        document.body.style.background = '#8B0000'
    }
}