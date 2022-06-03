//configurar o express
const porta = 3003 
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')


app.get('/produtos',(req,res,next) =>{ //estou setando a url /produtos para ela enviar o objeto produtos criado
    res.send(bancoDeDados.getProdutos())
    next()
})
app.get('/produtos/:id',(req,res,next)=>{ //setando a url /produtos/id para ela enviar os parametros Id como resposta da requisicao
    res.send(bancoDeDados.getProduto(req.params.id)) // para receber o parametro ele vem da requisicao pois o usuario esta requisitando as informacoes dela 
    //funcao send envia o objeto como RESPOSTA de uma requisicao convertendo o objeto para json automaticamente
})

app.post('/produtos',(req,res,next)=>{ //submete os dados e salva o novo produto
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name, //ta pasasndo como parametro da funcao um objeto com o nome sendo o valor que veio a partir da requisicao
        preco:req.body.name //o preço que veio no corpo da requisicao
    })//e o resultado dessa requisicao esta armazenando na const produto e ela é retornada com o res.send
    res.send(produto) //o objeto produto é convertido pra json e enviado pra web
})

app.listen(porta, ()=>{
    console.log(`servidor esta executando na porta ${porta}`)
})