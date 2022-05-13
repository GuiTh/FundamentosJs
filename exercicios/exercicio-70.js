/**Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num 
array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com 
Resoluções - Exercícios - Curso Fundamentos de Programação15os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */

const estudantes = {
    aluno1: {
        nome:'ferdinando',
        notas:[8, 7.6, 8.9, 6]
    },
    aluno2:{
        nome:'franz',
        notas:[9, 6.6, 7.9, 8]
    },
    aluno3:{
        nome:'Carla',
        notas:[7, 7, 8, 9]
    }
}
const soma = array => array.reduce((acumulador,atual)=>acumulador + atual,0)
const media = array => soma(array) /array.length

function receberMelhorEstudante(estudante){
    const estudantesComMedias = Object.entries(estudantes).map(estudante =>{
        const chave = 0,
                valor = 1
                return{nome:estudante[chave], media: media(estudante[valor])
            }
    })
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB)=>estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante
}

console.log(receberMelhorEstudante(estudantes))