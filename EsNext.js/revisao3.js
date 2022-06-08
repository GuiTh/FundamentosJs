//es8: Object.Values / Object.entries
const obj = {a:1, b:2,c:3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
//formas de extrair o valor e as chaves de um objeto

//Melhorias na Notacao Literal
const nome = 'carla'

//objetos
const pessoa = {
    nome, // o objeto ja cria um atributo com o valor de uma constante declarada antes dele
    ola(){ // a nova forma de declarar funcoes dentro de um objeto tira a necessidade de escrever a palavra chave "function", os (()) ja sao o suficiente
        return 'oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

 
//classe
class animal {}
class cachorro extends animal{
    falar(){
        return 'au au'
    }
}
console.log(new cachorro().falar())