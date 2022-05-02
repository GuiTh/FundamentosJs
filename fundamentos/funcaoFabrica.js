// function factory e uma funcao que retorna um novo objeto
//factory simples
function criarPessoa(){
    return { //funcao factory retorna um novo objeto
        nome: `ana`,
        sobrenome:`Silva`
    }    
}
console.log(criarPessoa())//sempre que chamada a funcao cria uma nova instancia do objeto pessoa


//EXERCICIO PASSADO NA AULA
function criarProduto(produto, preco){//os parametros dessa funcao factory sao os valores dos atributos 
    return{
        nome: produto,
        preco: preco,
    }
}
console.log(criarProduto(`ipe`,18,))

//SOLUCAO DO EXERCICIO

function CriaProdutos(produto,preco){
    return{
        produto,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto(`ipad`,1199.49))
console.log(CriaProdutos(`ipad`,1199.49))