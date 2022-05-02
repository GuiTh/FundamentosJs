const pessoa = {
    nome: "rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //essa funcao pega apenas as chaves/atributos do objeto
console.log(Object.values(pessoa)) // essa funcao pega apenas os valores do objeto
console.log(Object.entries(pessoa)) // essa funcao pega a chave e o valor e transforma em um array 

Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave}: ${valor}`)
})
Object.defineProperty(pessoa,'dataNascimento',{ //define uma nova chave para um objeto
    enumerable: true, //define se ela vai ser enumerada no objeto
    writable: false, // define se o valor dela pode ser alterado depois
    value:'01/01/2019' // define o valor da chave
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(pessoa)

//Object.assign (ECMAscript 2015)

const dest = {a: 1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2) // junta os objetos passados como parametro em um só
console.log(dest)// o primeiro parametro é o destino e os outros a seguir sao os objetos que serao jogados dentro de um unico objeto

Object.freeze(obj) //trava o valor do atributo nao pertimitindo alguem alterar esse valor depois da declaraão do .freeze
