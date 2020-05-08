function calcular () {
    
    //Declaração de variáveis
    var a = Number(document.getElementById("txta").value)
    var b = Number(document.getElementById("txtb").value)
    var c = Number(document.getElementById("txtc").value)
    var res = document.getElementById("res")

    //Parte lógica
    res.innerHTML = `Fórmula: Δ = b² – 4ac</br>`
    res.innerHTML += `</br>A resolução do exercício é esta: </br>`
    res.innerHTML += `</br>Δ = ${a}² - 4 . ${b} . ${c}</br>`
    res.innerHTML += `Δ = ${b*b} + (${-4*a*c})</br>`
    res.innerHTML += `Δ = ${b*b-4*a*c}</br>`
    res.innerHTML += `O valor de Delta é ${b*b-4*a*c}`           
