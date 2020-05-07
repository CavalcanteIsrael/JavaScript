function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 12) {
                //criança
                img.setAttribute('src', 'https://images.pexels.com/photos/415223/pexels-photo-415223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 12 && idade < 18){
                //adolescente
                img.setAttribute('src', 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } else if (idade >= 18 && idade < 30) {
                //jovem
                img.setAttribute('src', 'https://images.pexels.com/photos/3911089/pexels-photo-3911089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 30 && idade < 65) {
                //homem
                img.setAttribute('src', 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 65 && idade < 100) {
                //idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/35539/people-homeless-male-person.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 99) {
                //centenário
                img.setAttribute('src', 'https://www.somostodosum.com.br/conteudo/imagem/12965.jpg')
            }
        
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade < 12) {
                //criança
                img.setAttribute('src', 'https://images.pexels.com/photos/3992390/pexels-photo-3992390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 12 && idade < 18){    
                //adolescente
                img.setAttribute('src', 'https://images.pexels.com/photos/756453/pexels-photo-756453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 18 && idade < 30) {
                //jovem
                img.setAttribute('src', 'https://images.pexels.com/photos/4219924/pexels-photo-4219924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } else if (idade >= 30 && idade < 65) {
                //mulher
                img.setAttribute('src', 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 65 && idade < 100) {
                //idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/40900/dependent-dementia-woman-old-40900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
            } else if (idade >= 99) {
                //centenário
                img.setAttribute('src', 'https://www.somostodosum.com.br/conteudo/imagem/12965.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}