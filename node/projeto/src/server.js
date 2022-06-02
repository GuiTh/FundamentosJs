//configurar o express
const porta = 3003 
const express = require('express')
const app = express()

app.get('/produtos',(req,res,next) =>{
    console.log('middleware 1...')
    next()
})

app.get('/produtos',(req,res,next)=>{
    res.send({nome:'Notebook', preco:123.45})
    //funcao send envia o objeto como RESPOSTA de uma requisicao convertendo o objeto para json automaticamente
})

app.listen(porta, ()=>{
    console.log(`servidor esta executando na porta ${porta}`)
})