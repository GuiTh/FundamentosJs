const carrinho = [
    '{"nome":"Borracha", "preco": 3.45 }',
    '{"nome":"Caderno", "preco": 13.90 }',
    '{"nome":"Kit de Lapis", "preco": 41.22 }',
    '{"Nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) //transforma o json em objeto, convertendo o preço para objeto
const apenasPreço = produto => produto.preco //pega o preço do objeto produto

const resultado = carrinho.map(paraObjeto).map(apenasPreço) // faz um array do json tranformado em objeto depois pega apenas o atributo preço do objeto
console.log(resultado)