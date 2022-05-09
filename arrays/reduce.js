//reduce tranforma um array em um unico elemento, transformando ele em umarray, uma string ouy outro numero
//reduce recebe 2 parametros, o primeiro recebe o indice de começo e o indice de fim

const alunos = [
    {nome:"joao", nota:7.3, bolsista: false},
    {nome:"maria", nota:9.2, bolsista: true},
    {nome:"pedro", nota:9.8, bolsista: false},
    {nome:"ana", nota:8.7, bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual) //como nao foi passado um valor inicial pro reduce ele pegou os 2 primeiros elementos do array, o parametro ACUMULADOR ficou com o indice 0 e o parametro ATUAL ficou com o indice 1
    return acumulador + atual //pegou o indice 0 e adicionou o valor do indice 1, com o resultado desse valor adicionou o valor de indice 2 e ai por diante
}, +10)//posso passar outro valor para adicionar ao resultado final do reduce
console.log(resultado)