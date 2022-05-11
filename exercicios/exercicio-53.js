/** Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no 
array recebido como parâmetro*/
let array = ['javascript', 1,"3","web",20]
function filtraNumeros(array){
 let arrayVazio = []
 for(let item of array)
    if(typeof item ==='number')
    arrayVazio.push(item)

    return arrayVazio
}
console.log(filtraNumeros(array))