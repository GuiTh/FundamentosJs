//.map serve para mapear o array

const nums = [1,2,3,4,5]
/**
 * map é um for com proposito, internamente ele tem um for que transforma cada elemento do array em outro array do mesmo tamanho
*/
let resultado = nums.map(function(e){
    return e * 2
})//pega cada elemento do array e duplica seu valor
console.log(resultado)
//map nao modifica o array atual, ele cria outro


const soma10 = e=> e + 10 //primeira funcao soma 10 ao elemento
const triplo = e=> e * 3 //segunda funcao pega o valor e multiplica por 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //recebe o elemento e converte ele pra real com 2 casas decimais colocando ponto e virgula

resultado =  nums.map(soma10).map(triplo).map(paraDinheiro) /**
nesse exemplo eu peguei o array, criei um adicionando 10 em cada elemento com a funcao Soma10
depois peguei esse array e tripliquei o valor de cada elemento com a funcao Triplo
depois disso eu formatei o valor em real com a funcao ParaDinheiro */
console.log(resultado)