//criando meu proprio .map
Array.prototype.map2 = function(callback){
    const newArray = [] // cria um array vazio q recebera os elementos do array que voce esta apontando
    for(let i = 0; i < this.length;i++){ //um for que percorre cada elemento do array apontado pega seu elemento e com .push joga para o array vazio
        newArray.push(callback(this[i], i, this))
    }
    return newArray //returno o array vazio que agora esta com os mesmos elementos do array apontado no callback
}
const carrinho = [
    '{"nome":"Borracha", "preco": 3.45 }',
    '{"nome":"Caderno", "preco": 13.90 }',
    '{"nome":"Kit de Lapis", "preco": 41.22 }',
    '{"Nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) //transforma o json em objeto, convertendo o preço para objeto
const apenasPreço = produto => produto.preco //pega o preço do objeto produto

const resultado = carrinho.map2(paraObjeto).map2(apenasPreço) // faz um array do json tranformado em objeto depois pega apenas o atributo preço do objeto
console.log(resultado)