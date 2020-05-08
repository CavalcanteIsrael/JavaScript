function clique () {
    var n1 = prompt("Digite a base: ")
    var n2 = prompt("Digite o expoente: ")
    var res = document.getElementById("res")

    res.innerHTML = (`A equação fica assim: </br>`)
    res.innerHTML += `Expoente: ${n2}</br>`
    res.innerHTML += `Logo: ${n1}^${n2} =  ${n1 ** n2}`
}