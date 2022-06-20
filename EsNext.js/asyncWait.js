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


//dados convertidos

//como trabalhar com a funcao que retorna um promisse de forma mais assyncrona
//recurso do ES8 que serve pra simplificar o promisse
 let obterAlunos = async () =>{
    const ta = await getTurma('A') //em vez de chamar o then e, atraves dele, ter acesso a turma A, eu chamo o await e o resultado vai ser atribuido ao Ta
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)
 } //por ter async posso usar await dentro dela

 obterAlunos()
 .then(alunos => alunos.map(a =>a.nome))
 .then(nomes =>console.log(nomes))