/**Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. */

const arrayDeNumeros = [1,2,3,4,5]

function segundoMaiorNumero(array){
    let indiceDoMaior = 0
    let segundoMaior
    array.forEach((numero, indice) => {
        if(numero > array[indiceDoMaior])
        indiceDoMaior = indice        
    });
    array.splice(indiceDoMaior,1)
    segundoMaior = array[0]
    array.forEach(numero =>{
        if(numero > segundoMaior){
            segundoMaior = numero
        }
    })
    return segundoMaior
}

console.log(segundoMaiorNumero(arrayDeNumeros))