const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) // pega apenas as chaves do objeto, nao pega o valor dos atributos
console.log(Object.values(pessoa))// pega apenas o valor das chaves
console.log(Object.entries(pessoa)) // transforma cada chave e valor num array e coloca todos dentro de um array

Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}: ${e[1]}`)
})