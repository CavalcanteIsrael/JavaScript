var num1 = parseInt(prompt('Digite o 1º número'))
var num2 = parseInt(prompt('Digite o 2º número'))
var num3 = parseInt(prompt('Digite o 3º número'))
var res = document.getElementById('res')

window.alert("A média é "+ (num1+num2+num3)/3)

res.innerHTML = `Números inseridos: ${num1+', '+num2+' e '+num3}`
res.innerHTML += `</br>Média ${(num1+num2+num3)/3}`