const alunos = [
    {nome: 'Joao', nota:7.9},
    {nome: 'Maria', nota:9.2},

]//calcular media dos alunos

//abordagem imperativa
let total1 = 0
for(let i = 0; i<alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)
// imperativo pega cada passo e mostra COMO deve ser feito, nao oq deve ser feito deixando mais explicito o que esta sendo feito


//abordagem declarativa

const getNota = aluno => aluno.nota //pega o atributo nota do array aluno
const soma = (total,atual) => total + atual //agrega os valores a partir da soma
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
//declarativo pega cada passo e declara O QUE deve ser feito e nao como
