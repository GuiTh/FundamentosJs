/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/
let vetor = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i<vetor.length;i++){
    if(vetor[i] % 2 == 0){
        console.log(vetor[i])
    }
}