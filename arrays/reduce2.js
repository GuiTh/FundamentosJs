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
//desafio 1: todos os alunos sao bolsistas?
//emplementar um metodo que pega apenas o valor de bolsista, um array com apenas booleans e emcima dele voce aplica a logica que diz se todos elementos sao true ou nao
const todosOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsistas))
//esse alunos.map que fiz serve para pegar apenas o atributo bolsista do array que fiz no começo do codigo

//desafio 2: algum aluno é bolsista?
// verifica se pelo menos um dos elementos é true
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
//esse alunos.map que fiz serve para pegar apenas o atributo bolsista do array que fiz no começo do codigo
