const notas = [1,2,3,4,5,6,78,8]
for(let i in notas){
    console.log(i,notas[i])
}
const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}