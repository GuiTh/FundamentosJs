/**Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada 
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os 
exemplos abaixo para um melhor entendimento */
const objeto ={
    nome:'gugaGostoso',
    idade:21,
    sexo:'selvagem',
}

function objetoParaArray(objeto){
    let resultado = []
    for(item in objeto)
        resultado.push([item,objeto[item]])

        return resultado
}
console.log(objetoParaArray(objeto))