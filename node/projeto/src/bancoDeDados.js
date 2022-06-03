const sequence = {
    _id: 1,
    get id(){ return this._id++}
}
const produtos = {}

function salvarProduto(produto){ //essa funcao seta o Id
    if(!produto.id) produto.id = sequence.id //se o id do produt nao estiver setado o codigo vai atribuir o id do objeto sequence no objeto produto
    produtos[produto.id] = produto //o objeto produtos recebe o valor de produto se nao tiver setado, se tiver setado em produtos ele atualiza o valor
    return produto 
}

function getProduto(id){ //essa funcao retorna o id dos produtos 
    return produtos[id] || {} //se encontrar o id setado retorna ele senao retorna um objeto vazio
}

function getProdutos(){ //essa funcao vai retornar apenas os valores dentro do objeto Produtos
    return Object.values(produtos)
}