/**Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número 
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que 
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

const arrayNumeros = [1,22,333,4444,55555,666666,7777777]
function contaDigitos(array,digitos){
    let resultado = []
    for(numero of array){
        const quantidadeDeDigitos = String(numero).length
        
        if(quantidadeDeDigitos === digitos){
            resultado.push(numero)
        }
    }
    return resultado
}
console.log(contaDigitos(arrayNumeros,1))
console.log(contaDigitos(arrayNumeros,2))
console.log(contaDigitos(arrayNumeros,3))
console.log(contaDigitos(arrayNumeros,4))
console.log(contaDigitos(arrayNumeros,5))
console.log(contaDigitos(arrayNumeros,6))
console.log(contaDigitos(arrayNumeros,7))


