function contar() {
    var c = 1
    var n
    var pen = 0, ult = 1 
    var soma = 0
    var res = document.getElementById("res")
    var rod = document.getElementById("rod")

    res.innerHTML = `Os números são </br> 0`

    for (c = 1; ult+pen < 50000; c ++ ) {
            if (c <= 2 ){
                n = c - 1
                soma += n
                res.innerHTML += `, ${n}`  
            } else if (c > 2){
                n = ult + pen
                pen = ult
                ult = n
                soma += ult
                res.innerHTML += `, ${n}`  
            } 

    }
    rod.innerHTML += `A soma de todos os termos é ${soma}`
}