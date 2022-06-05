const anonimo = process.argv.indexOf('-a') != -1 
// se -a tiver dentro da lista de argumentos ele retorna True senao Falso
console.log(anonimo)

if (anonimo){
    process.stdout.write('Fala Anonimo!\n') //verifica se anonimo e true, se for imprime a frase abaixo
    process.exit()
}else{
    process.stdout.write('informe o seu nome:')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n','')
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}