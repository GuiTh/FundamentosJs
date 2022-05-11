/**Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são 
pares e que também tenham índices pares. */

let arrayPares =[2,4,3,5,6,8,9,10,12,13,14,16,15]
function retornaPares(array){
    let arrayNumerosPares = []

    for(let item in array)
        if(item % 2 == 0 && array[item] % 2 == 0){
            arrayNumerosPares.push(array[item])
        }
        return arrayNumerosPares
}
console.log(retornaPares(arrayPares))
