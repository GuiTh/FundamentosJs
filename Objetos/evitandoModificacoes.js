//object.preventExtensions
//nao permite que o objeto seja extendido, bloqueando a adicao de atributos

const produto = Object.preventExtensions({
    nome:'qualquer',preço: 1.99, tag:'promocao'
})
console.log('extensivel', Object.isExtensible(produto)) //isExtensible verifica se o objeto é extensivo ou nao, se pode adicionar valor ou nao

produto.nome = "borracha" //altera o atributo nome
produto.descricao = "produto braboi" //adiciona o atributo descricao (nao vai dar certo por que o objeto produto nao é extensivo)
delete produto.tag //apaga o atributo tag
console.log(produto)

//objetct.seal
// sela o objeto, nao permite que voce delete nem adicione um atributo novo, apenas altera o valor dos ja existentes
const pessoa = {nome:'juliana', idade:35}
Object.seal(pessoa)
console.log("selado", Object.isSealed(pessoa))

pessoa.sobrenome = 'silva' //nao adiciona por causa do sealed
delete pessoa.nome //nao remove
pessoa.idade = 29 //consegue trocar o valor
console.log(pessoa)

//object.freeze
// uma junçao do object.sealed + valores constantes
// nao permite excluir, adicionar nem alterar valor dos existentes
const congelado = {nome:'karol', gostosa:true}
Object.freeze(congelado)
console.log('congelado', Object.isFrozen(congelado))

delete congelado.nome
congelado.tamanhoDaTeta = 29
congelado.nome = "guilherme"
console.log(congelado)