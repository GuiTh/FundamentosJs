//funcao que serve para FILTRAR um array com os parametros que voce quer
const produtos = [
    {nome:'notebook', preço: 2499, fragil: true},
    {nome:'iPad Pro', preço: 4199, fragil: true},
    {nome:'Copo de Vidro', preço: 12.49, fragil: true},
    {nome:'Copo de Vidro', preço: 18.99, fragil: false},



]
console.log(produtos.filter(function(p){//o P da funcao callback representa cada um dos elementos do objeto que voce ta passando pro filter
return false  //retorna o objeto chamado na funcao filter e a condicao dela (nesse caso só os objetos onde o atributo preço é maior que 2500)
}))

const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))