var visor = document.getElementById("visor")
var res = document.getElementById("res")
var resultado, adicao, subtracao, multiplicacao, divisao, total, temp = 0
var veriSoma, veriSubt, veriMult, veriDiv = 0 //variáveis de verificação
var a = 0

total = document.getElementById('visor').value

// Números
function but (a) {
    resultado = document.getElementById('visor').value += a
    total = a
}

// Operações
function soma () {
    veriSoma = 2
    verificar ()
    visor = document.getElementById('visor').value = 0
}

function subt () {  
    veriSubt = 2
    verificar ()
    visor = document.getElementById('visor').value = 0
}

function mult () {
    veriMult = 2
    verificar ()
    visor = document.getElementById('visor').value = 0
}

function div () {
    veriDiv = 2
    verificar ()
    visor = document.getElementById('visor').value = 0
}

//Outras funções
function igual () {
    verificar ()
    res.innerHTML = ''
    document.getElementById('visor').value = total
}

function zerar () {
    visor = document.getElementById("visor").value = 0
    total = 0
}

//Verificação
function verificar () {
    if (veriSoma > 0) {
        adicao = parseFloat(document.getElementById('visor').value)
        if (veriSoma === 2) {
            temp = adicao
        }
            total = temp + adicao
            veriSoma -= 1

    }else if (veriSubt > 0) {
        subtracao = parseFloat(document.getElementById('visor').value)
        if (veriSubt === 2) {
            temp = subtracao
        }
        total = temp - subtracao
        veriSubt -= 1

    }else if (veriMult > 0) {
        multiplicacao = parseFloat(document.getElementById('visor').value)
        if (veriMult === 2) {
            temp = multiplicacao
        }
        total = temp * multiplicacao
        veriMult -= 1
    }else if (veriDiv > 0) {
        divisao = parseFloat(document.getElementById('visor').value)
        if (veriDiv === 2) {
            temp = divisao
        }
        total = temp / divisao
        veriDiv -= 1
    }
 
}
res.innerHTML = `Valor na memória: ${parseFloat(total)}`