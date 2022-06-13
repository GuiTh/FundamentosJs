//callback para requisicao de json

const http = require('http')
const getTurma = (letra,callback) =>{
     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
     http.get(url,res =>{
         let resultado = ''
         
         res.on('data',dados=>{ //todos os dados que forem chegando serao concatenados nesse resultado
            resultado += dados
         })

         res.on('end',() =>{
            callback(JSON.parse(resultado))//depois que todos os dados forem passados essa funcao vai transformar ele em objeto
        })

     })
}
let nomes = []

getTurma('A',alunos=>{
    console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A:${a.nome}`))
    getTurma('B',alunos=>{
        nomes = nomes.concat(alunos.map(a =>`B: ${a.nome}`)
    )
    getTurma('C',alunos=>{
    nomes = nomes.concat(alunos.map(a =>`C: ${a.nome}`)
)})
    })
})
//dados convertidos


