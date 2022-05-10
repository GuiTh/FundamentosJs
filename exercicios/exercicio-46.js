/**Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o 
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for 
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro 
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do 
tipo  */

const confirmaBooleanOuNumero = function(a){
    const tipo = typeof a
    if(tipo == 'boolean'){
        return !a
    }else if(tipo =='number'){
        return -a
    }else{
        return `booleano ou numero esperados, mas o parametro é do tipo ${tipo}`
    }
}
console.log(confirmaBooleanOuNumero(false))
console.log(confirmaBooleanOuNumero(true))
console.log(confirmaBooleanOuNumero(12))
console.log(confirmaBooleanOuNumero('ola'))


