 const a = {name: 'teste'} 
 const b = a
 b.name ='opa'
console.log(a)
let c = 10
let d = c
d++
console.log(d)
let valor // variavel nao inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

//console.log(valor.tostring()); // erro

const produto = {};
console.log(produto.preço);
console.log(produto)
produto.preço = undefined //EVITAR ATRIBUIR UNDEFINED
console.log(!!produto.preço)
//delete produto.preço
console.log(produto)
produto.preço = null // sem preço


