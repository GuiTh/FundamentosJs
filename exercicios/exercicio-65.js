/**A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para 
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array 
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

const arrayString = ['ola','eaw','suave']

function palavrasChave(palavra,array){
    const resultado = []
    for(let item of array){
        if(palavra.includes(palavra)){
            resultado.push(array)
        }
    }
    return resultado
}

console.log(palavrasChave('a', arrayString))