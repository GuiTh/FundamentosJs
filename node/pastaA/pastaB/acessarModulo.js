const moduloA = require('../../moduloA')//respeitar os maiusculos e minusculos e sempre manter o caminho relativo, o absoluto funciona mas nao é recomendado
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)



//modulos pré instalados junto com o node
// const http = require('http')
// http.createServer((req,res)=>{
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)

const c = require('./pastaC')
console.log(c.ola2)