function tabuada(){
    let num = document.getElementById('tnum')
    let n = Number(num.value)
    let tab = document.getElementById('tab')
    
    if(num.value.length==0){
        alert('Por favor, Digite um número')
        }
    else{
        for (c=1;c<=10; c++){
        let item = document.createElement ('option')
        item.text = `${n}x${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild (item)
}
}  
}