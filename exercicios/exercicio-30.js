  
/**
 * 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

maior = Math.max.apply(null, vetor)
menor = Math.min.apply(null, vetor)

let element = [maior, menor]

console.log(element)