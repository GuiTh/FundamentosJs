const fs = require('fs')


const caminho = __dirname + '/arquivo.json'
//como ler arquivos em forma sincrona, lendo cada arquivo completamente um por vez

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//como ler arquivos de forma asincrona

fs.readFile(caminho,'utf-8', (err,conteudo)=>{
    const config = JSON.parse(conteudo) //agora sim é um objeto
    console.log(`${config.db.host}:${config.db.port}`) //nao é um objeto
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err,arquivos)=>{ //dirname representa a pasta atual onde o arquivo se encontra
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})