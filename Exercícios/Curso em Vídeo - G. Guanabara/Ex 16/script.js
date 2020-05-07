function verificar() {
    
    //Declaração de variáveis

    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')

    //Parte lógica//

    if (ini == 0 || fim == 0 || pas == 0) {
        window.alert("Impossível calcular")
    } else {
        res.innerHTML = "Contando... <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        if (p == 0) {
            window.alert("Erro! Passo ZERO. Considerando passo igual a 1")
            p = 1
        }
        
        //Contagem Progressiva
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} >` 
        }

        //Contagem Regressiva
        for (var c = i; c >= f; c-= p) {
            res.innerHTML += ` ${c} >`
        }

        res.innerHTML += " Fim!"
    }
}   
