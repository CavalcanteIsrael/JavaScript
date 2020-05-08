function verificar () {
    var idade = Number(document.getElementById('txtnum').value)
    var res = document.getElementById('res')
    var pag = document.getElementById('pag')

    if (idade <= 0){
        window.alert(`Idade inválida. Digite um número maior que zero.`)
    }else if (idade < 18) {
        window.alert(`Alerta! Você é menor de 18 anos. Você não pode acessar o conteúdo.`)
        pag.innerHTML = `Acesso negado`
        pag.style.fontFamily = 'Arial'
        pag.style.fontSize = '30px'
    }else if (idade >= 18) {
        pag.innerHTML = `Idade verificada <br>`
        pag.innerHTML += `Acesso permitido`
        pag.style.fontFamily = 'Arial'
        pag.style.fontSize = '30px'
    }

    //document.getElementById("corpo").onclick(location.reload())
}
