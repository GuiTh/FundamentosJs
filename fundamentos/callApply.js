function getPreco(imposto = 0, moeda ="R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+imposto)}` 
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {preco: 49990, desc:0.20} // pode chamar a funcao por um objeto

console.log(getPreco.call(carro, 0.17,'$')) //pode chamar atraves do call os parametros do contexto podem ser colocados diretamente no call
console.log(getPreco.apply(global, [0.17,'$'])) // tambem pode chamar pelo apply os parametros do contexto sao colocados dentro de um array
