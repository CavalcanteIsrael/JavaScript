function calcular() {
    var num = document.getElementById("txtnum")
    var sel = document.getElementById("sel")

    if (num.value.length == 0) {
        window.alert("Favor digitar um número")
    } else {
        var n = Number(num.value)
        var c = 1
        sel.innerHTML = ''
        while (c < 12) {
            var item = document.createElement('option')
            item.text = `${n} x ${c-1} = ${n*(c-1)}` 
            item.value = `tab ${c-1}`
            sel.appendChild(item)
            c++
        }
    }
      
}
