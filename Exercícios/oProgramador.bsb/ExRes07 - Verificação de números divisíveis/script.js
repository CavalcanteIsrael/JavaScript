function mult3 () {
    //Declaração de variáveis
    var n = 3
    var c = 1
    var r = 0
    var sum = 0
    var res = document.getElementById("res")

    //Modificação de página
    res.innerHTML = `Somatório dos números divisíveis por ${n} de 0 a 1000 é</br>`

    //Parte lógica
    for (c = 1; c <= 1000; c++){
        if (c % n == 0) {
            var r = c
            sum += c
        }
    }
    res.innerHTML += ` ${sum}`
}
function mult5 () {
    //Declaração de variáveis
    var n = 5
    var c = 1
    var r = 0
    var sum = 0
    var res = document.getElementById("res")

    //Modificação de página
    res.innerHTML = `Somatório dos números divisíveis por ${n} de 0 a 1000 é</br>`

    //Parte lógica
    for (c = 1; c <= 1000; c++){
        if (c % n == 0) {
            var r = c
            sum += c
        }
    }
    res.innerHTML += ` ${sum}`
}