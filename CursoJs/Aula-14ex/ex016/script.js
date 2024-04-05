function calcular() {

var inicio = document.getElementById ('tinicio')
var fim = document.getElementById('tfim')
var passo = document.getElementById('tpasso')
var res = document.querySelector('div#res')
var fini = Number(inicio.value)

if (inicio.value.length == 0 || fim.value.length ==0 || passo.value.length ==0 ){
    res.innerHTML = "Impossivel contar."
} else {
    res.innerHTML = `Contando...<br>`

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p= Number(passo.value)
    if(p==0){
        alert (`Passo inválido, ultilizando PASSO 1`)
        p=1
    }
    if(i<f){
        for (let c = i; c<=f; c+= p){
            res.innerHTML += ` \u{1F449} ${c} `
        }
        
} else {
    for(c=i; c>=f; c-=p){
        res.innerHTML += `\u{1F449} ${c}`
    }
}
res.innerHTML += `\u{1f3c1}`
}


}
