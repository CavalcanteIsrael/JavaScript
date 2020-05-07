var valores = [] 
var txtnum = document.getElementById("txtnum")
foco ()

function adicionar () {
    var menu = document.getElementById("menu")
    var txtnum = document.getElementById("txtnum").value

    if (valores.indexOf(txtnum) >= 0 || txtnum == 0 || txtnum > 100 || txtnum.length == '0') {
        alert("Valor inválido ou já existente")
        document.getElementById("txtnum").value = ''
    }else {
        valores.push(txtnum)
        var option = new Option (txtnum)
        option.text = `Valore adicionado: ${txtnum}` //Não tinha conseguido unir texto ao número. Linha adicionada posteriormente
        menu.add(option)
        document.getElementById("txtnum").value = ''
    }
    res.innerHTML = ''
    foco ()
}

//item.focus() não estava funcionando, então criei um função pra tentar resolver o problema
function foco () {
    return txtnum.focus()
}

function finalizar () {
    var res = document.getElementById("res")
    valores.sort()

    if (valores.length == 0){
        alert("ERRO! Nenhum valor foi inserido para o cálculo")
    }else{
        res.innerHTML = `A quantidade de itens digitados foi: ${valores.length}</br>`
        res.innerHTML += `O menor item digitado foi: ${valores[0]}</br>`
        res.innerHTML += `O maior item digitado foi: ${valores[valores.length - 1]}</br>`
        res.innerHTML += `A soma de todos os itens é: ${arraySum()}</br>`
        res.innerHTML += `A média de todos os itens é: ${arraySum()/valores.length}`
    }
}
function arraySum () {
    var soma = 0
    for (let i in valores) {
        soma += parseInt(valores[i])
    }
return soma
}
