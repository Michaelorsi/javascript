function contar() { 
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c+= p) {
                res.innerHTML += `${c}`
            }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}`
            }
        }
    }
}
   