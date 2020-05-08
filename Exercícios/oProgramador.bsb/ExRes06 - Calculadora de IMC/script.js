function calcular() {
    var altura = Number(document.getElementById("txtalt").value)
    var peso = Number(document.getElementById("txtpes").value)
    var pag = document.getElementById("pag")

    pag.innerHTML = `<table border="1">
    <tr><td>Resultado</td>	<td>Situação</td></tr>
    <tr><td>Abaixo de 17</td>	<td>Muito abaixo do peso</td></tr>
    <tr><td>Entre 17 e 18,49</td>	<td>Abaixo do peso</td></tr>
    <tr><td>Entre 18,5 e 24,99</td>	<td>Peso normal</td></tr>
    <tr><td>Entre 25 e 29,99</td>	<td>Acima do peso</td></tr>
    <tr><td>Entre 30 e 34,99</td>	<td>Obesidade I</td></tr>
    <tr><td>Entre 35 e 39,99</td>	<td>Obesidade II (severa)</td></tr>
    <tr><td>Acima de 40</td>	<td>Obesidade III (mórbida</td></tr>
        </table></br>`
    
    var media = peso/altura**2
    pag.innerHTML += `O resultado é ${media}`

    if (media < 17) {
        pag.innerHTML += `</br><strong>Cuidado! Muito abaixo do peso.</strong>`
    }else if (media >= 17 && media <= 18.49) {
        pag.innerHTML += `</br><strong>Cuidado! Abaixo do peso.</strong>`
    }else if (media >= 18.5 && media < 25) {
        pag.innerHTML += `</br><strong>Peso normal.</strong>`
    }else if (media >= 25 && media < 30) {
        pag.innerHTML += `</br><strong>Cuidado! Acima do peso.</strong>`
    }else if (media >= 30 && media < 35) {
        pag.innerHTML += `</br><strong>Cuidado! Obesidade I. Acima do peso.</strong>`
    }else if (media >= 35 && media < 40) {
        pag.innerHTML += `</br><strong>Cuidado! Obesidade II. Acima do peso.</strong>`
    }else {
        pag.innerHTML += `</br><strong>Cuidado! Obesidade III. Muito acima do peso. Procure um médico</strong>`
    }
  
}