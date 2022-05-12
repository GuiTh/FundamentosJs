/*
Criar uma função que receba um array de números e retorne o menor número desse array.* */

let array = [2,3,4,5,6,1,7,8]

function menorNumeroDoArray(array){
    let menor = array[0]

    for(let i in array){
        if(array[i]< menor){
            menor = array[1]
        }
    }
    return menor
}
console.log(menorNumeroDoArray(array))