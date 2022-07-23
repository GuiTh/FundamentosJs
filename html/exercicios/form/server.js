const express = require('express')
const app = express()
//pega o corpo da requisicao, faz um parse no corpo, e joga no request te dando acesso a todos os dados do corpo da requisicao, nesse caso os dados do formulario tipo post
const bodyParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser.urlencoded({extended:true}))

app.post('/usuarios', (req, res)=>{
    console.log(req.body)
    res.send('<h1>Parabens, usuario incluido</h1>')
})

app.post('/usuarios/:3', (req, res)=>{
    console.log(req.body)
    console.log(req.params.id)
    res.send('<h1>Parabens, usuario alterado</h1>')
})

app.listen(3003)