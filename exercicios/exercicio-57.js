/**Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */
function somarNumeros(numeros){
    let soma = 0
    numeros.forEach(numero => soma += numero);
    return soma
}
let array = [10,10,10]
console.log(somarNumeros(array))