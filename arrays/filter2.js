Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}//criando meu proprio .filter
//funcao que serve para FILTRAR um array com os parametros que voce quer
const produtos = [
    {nome:'notebook', preço: 2499, fragil: false},
    {nome:'iPad Pro', preço: 4199, fragil: true},
    {nome:'Copo de Vidro', preço: 12.49, fragil: true},
    {nome:'Copo de Vidro', preço: 18.99, fragil: false},



]
const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))