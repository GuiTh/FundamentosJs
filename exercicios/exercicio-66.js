/**Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, 
ou seja, sem as vogais */

function consoanteNaFrase(frase){
    let vogais = ['a','A','e','E','i','I','o','O','u','U']
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}
console.log(consoanteNaFrase('salve salve familia prior tudo certo quebrada'))