var visor = document.getElementById("visor")
var res = document.getElementById("res")
var resultado, adicao, subtracao, total = 0
var veriSoma, veriSubt = 0 //variáveis de verificação
var a = 0

function but (a) {
    resultado = document.getElementById('visor').value += a
}

function zerar () {
    visor = document.getElementById("visor").value = 0
    total = 0
}

function soma () {
    adicao = parseFloat(document.getElementById('visor').value)
    total += adicao
    veriSoma = 1
    visor = document.getElementById('visor').value = 0
}

function subt () {
    subtracao = parseFloat(document.getElementById('visor').value)
    total -= subtracao
    veriSubt = 1
    visor = document.getElementById('visor').value = 0
}

function igual () {
    verificar ()
    res.innerHTML = ''
    res.innerHTML = `Resultado: ${total}`
    document.getElementById('visor').value = total
}

function verificar () {
    if (veriSoma === 1) {
        veriSoma = 0
        soma ()
    }else if (veriSubt === 1) {
        veriSubt = 0
        subt ()
    }
return null
}