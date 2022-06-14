//com promisse

const http = require('http')
const getTurma = letra =>{
     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{ //na hora de instanciar o promise voce passa duas funcoes, o resolve e o reject
        http.get(url,res =>{
            let resultado = ''
            
            res.on('data',dados=>{ //todos os dados que forem chegando serao concatenados nesse resultado
               resultado += dados
            })
   
            res.on('end',() =>{
               try{
                resolve(JSON.parse(resultado))
               } catch(e){
                reject(e)
               }
           })
   
        })
    }) 
}
//refatorar esse callback de informações para promise
let nomes = []

getTurma('A').then(alunos=>{
        nomes = nomes.concat(alunos.map(a => `A:${a.nome}`))
        getTurma('B').then(alunos=>{
            nomes = nomes.concat(alunos.map(a =>`B: ${a.nome}`))
            getTurma('C').then(alunos=>{
                 nomes = nomes.concat(alunos.map(a =>`C: ${a.nome}`))   
                 console.log(nomes)
            })
        })
    })

    Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(x => console.log(x)) //com essa funcao eu posso passar varias promises de uma vez e quando todas forem resolvidas ai sim ele chama a cadeia dos methodos then
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes)) 
    .catch(e=> console.log(e.message))

getTurma('D').catch(e=> console.log(e.message))
//dados convertidos


