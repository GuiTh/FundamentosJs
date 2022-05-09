/**Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por 
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */
const nomeDoMes = function(ano){
switch(ano){
    case 1:
        return "janeiro"
        break;
    case 2:
        return "fevereiro"
        break;
    case 3:
        return "março"
        break;
    case 4:
        return "abril"
        break;
    case 5:
        return "maio"
        break;
    case 6:
        return "junho"
        break;
    case 7:
        return "julho"
        break;
    case 8:
        return "agosto"
        break;
    case 9:
        return "setembro"
        break;
    case 10:
        return "outubro"
        break;
    case 11:
        return "novembro"
        break;
    case 12:
        return "dezembro"
        break;
    default:
        "numero invalido, por favor selecione um numero de 1 a 12"
        break;
}
}
console.log(nomeDoMes(1))
console.log(nomeDoMes(2))
console.log(nomeDoMes(3))
console.log(nomeDoMes(4))
console.log(nomeDoMes(5))
console.log(nomeDoMes(6))
console.log(nomeDoMes(7))
console.log(nomeDoMes(8))
console.log(nomeDoMes(9))
console.log(nomeDoMes(10))
console.log(nomeDoMes(11))
console.log(nomeDoMes(12))

//outra resolucao
function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
    }

    console.log(receberNomeDoMes(1,2,3,4,5,6,7,8,9,10,11,12))