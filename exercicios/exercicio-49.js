/**Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(item, quantidade) {
    let resultado = [] // array vazio vai receber o valor do parametro item
    for (let i = 0; i < quantidade; i++)//for repetira enquanto for menor que o valor atribuido ao parametro quantidade
    resultado.push(item) //joga o item pro array resultado
    return resultado //retorna o valor do array resultado
    }
console.log(repetir(2,3))