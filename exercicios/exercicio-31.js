/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/
let vetor = [-25,2,-8,2,-6, 4, -7,-5,-4]
function numeroNegativo(vetor){
let vetorNegativo = 0
for(let i = 0; i<vetor.length;i++){
    if(vetor[i] < 0){
        vetorNegativo++
            }
        }
    return` numeros negativos encontrados ${vetorNegativo}`
}
console.log(numeroNegativo(vetor))
