const pai = {
    nome:"pedro",
    corCabelo: 'preto'
}
const filha1 = Object.create(pai)//cria um objeto novo ja tendo outro como prototipo
filha1.nome = 'ana'
console.log(filha1.corCabelo)
filha2 = Object.create(pai, {
    nome:{value:'bia', writable:false, enumerable:true}
})

console.log(filha2.nome)
filha2.nome = "carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1)) //atributos recebidos por herança nao sao enumerados no object.keys
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key)? // hasOwnProperty verifica se o atributo pertence ao objeto em questao ou se veio por herança
    console.log(key) : console.log(`Por herança: ${key}`) // if else que verifica se as chaves sao do proprio objeto ou se foram recebidas atraves de herança
}
