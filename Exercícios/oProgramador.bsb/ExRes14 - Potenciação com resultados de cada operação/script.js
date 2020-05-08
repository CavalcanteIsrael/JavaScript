function clique () {
    res = document.getElementById("res")
    var base = 2 
    var expoente = 8

    res.innerHTML = `Exibindo resultados para cada operação com os números ${base +' e '+ expoente}: </br>`

    for (var c = 1; c <= expoente; c++) {
       var resultado = base ** c
       res.innerHTML += `</br>Base: 2 \t Expoente: ${c} = 2 <sup>${expoente}</sup> = ${resultado}`
    }

}