let num=[5,8,7,2,3]
num.push(1)
num.sort()
console.log(`Nossos valores são ${num}`)
let pos = num.indexOf(7)
console.log(`O vetor tem ${num.length} elementos`)

if(pos==-1){
    console.log('O Valor não foi encontrado')
} else{
    console.log(`O valor esta na posição ${pos}`)
}