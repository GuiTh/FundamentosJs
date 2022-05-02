/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
*/

let vetor = [10, 20, 30, 40]

function calculaMedia(vetor) {
    let total = 0
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
    }

    return total/vetor.length
}

console.log(calculaMedia(vetor))