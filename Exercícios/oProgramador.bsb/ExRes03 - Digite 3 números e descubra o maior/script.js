function calcular () {

    //Declaração de variáveis
    var num1 = Number(document.getElementById('txtn1').value)
    var num2 = Number(document.getElementById('txtn2').value)
    var num3 = Number(document.getElementById('txtn3').value)
    var res = document.getElementById('res')

    //Manutenção do texto da Section
    res.innerHTML = ``
    res.innerHTML = `O maior número é: `

    //Parte lógica
    if (num1 > num2 && num1 > num3) {
        res.innerHTML += `${num1}`
    }else if (num2 > num1 && num2 > num3) {
        res.innerHTML += `${num3}`
    }else if (num3 > num1 && num3 > num2){
        res.innerHTML += `${num3}`
    }
    
}