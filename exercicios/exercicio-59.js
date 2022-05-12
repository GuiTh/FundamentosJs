// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-
// se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada 
// de números e retorne a média simples desses números

let array = [0,10]

function calculaMedia(array){
    const quantidadeDeNumeros = array.length
    let resultado = 0

    for(numero of array){
        resultado += numero
    }
    return resultado / quantidadeDeNumeros
}
console.log(calculaMedia(array))