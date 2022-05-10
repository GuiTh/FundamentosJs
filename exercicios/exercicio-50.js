/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro
 */
const numeroPraString = function(numero){
    let resultado = ''
    for(let i = 1; i < numero;i++){
        resultado += '+'
    }
    return resultado
}
console.log(numeroPraString(14))