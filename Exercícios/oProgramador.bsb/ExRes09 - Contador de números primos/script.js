function contar () {

//Declaração de variáveis
    var primosEncontrados = 0;
    var res = document.getElementById("res")

//Parte lógica
    for (dividendo = 2; primosEncontrados < 1001; dividendo++) {
        var ehPrimo = true;
        for (divisor = 2; dividendo > divisor ; divisor++) {
        if (dividendo % divisor == 0) {
            ehPrimo = false;
            break;
        };
        };
        if (Boolean(ehPrimo)) { 
        primosEncontrados++;
        }
    };

//Alteração na página    
    res.innerHTML = `o 1001º número primo é: </br><strong>${dividendo}</strong>`
}