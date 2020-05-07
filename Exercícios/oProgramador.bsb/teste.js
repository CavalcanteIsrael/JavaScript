var c = 1
var soma = 0
var n = ''

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

while (c <= 5) {
   
    readline.question(`Insira um número`, (numero) => {
        console.log(`Número inserido ${numero}`)
        var n = Number(numero.value)
        soma += n
        c++
    })
}

readline.close()
console.log(`Soma ${soma}`)