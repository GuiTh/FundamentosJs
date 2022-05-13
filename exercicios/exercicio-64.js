/**
 * Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes 
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de 
minúsculas.
 */

const oi = "a sorte favorece os arrombados"
function caractereRepete(string,frase){
    let contador = 0
    for(let i = 0; i<frase.length; i++){
        if(frase.charAt(i) === string){
            contador++
        }
    }return contador
}

console.log(caractereRepete("r",oi))