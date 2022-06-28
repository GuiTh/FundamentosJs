//LER O CALLBACK 2
// NELE FOI PASSADO UMA FUNCAO CALLBACK QUE PEGA O CONTEUDO DE UM ARQUIVO
//NO DESAFIO PASSADO EU DEVO USAR UMA PROMISE PARA ENCAPSULAR A CHAMADA DE UM ARQUIVO
//O RESULTADO DA PROMESA É O CONTEUDO DO ARQUIVO CHAMADO
//QUANDO O USUARIO CHAMA O THEN O RESULTADO É O CONTEUDO DO ARQUIVO
//1- ENCAPSULAR DENTRO DE UMA PROMISE A FUNCAO READFILE QUE TRAGA O CONTEUDO DO ARQUIVO COMO REPOSTA DO THEN

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function leArquivo(caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('arquivo lido')
    })
} 
leArquivo(caminho)
.then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(','))
.then(conteudo => `o valor final é: ${conteudo}`)
.then(console.log)