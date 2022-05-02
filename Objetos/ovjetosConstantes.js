//a constante pessoa esta apontando para 123 que esta apontando para o objeto, o objeto pode ser alterado, a constante pessoa nao
//pessoa -> 123 -> {...}
const pessoa = {nome:'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)
//pessoa recebe 456 que referencia para o Novo Objeto
// a constante pessoa ja esta definida, esse valor nao pode ser mudado
//pessoa = {nome:'ana'}

Object.freeze(pessoa)

pessoa.nome = 'vasco da gama'
pessoa.end = 'Rua Abc'
delete pessoa.nome