/**Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

function contagemDePalavras(string){
    const palabras = string.split(' ')
    return palabras.length
}
console.log(contagemDePalavras('boa noite rapaziada'))