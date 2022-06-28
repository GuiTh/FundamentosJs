function funcionarOuNao(valor,chanceDeErro){
    return new Promise((
        resolve, reject
    )=> {
        try{
            con.log('temp')
        if(Math.random() < chanceDeErro){
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
    }
}
    catch(e){
        reject(e)
} 
    }
    )
}
//essa funcao tem uma promisse que as vezes gera um erro as vezes nao

funcionarOuNao('testando...',0.5)
    .then(v => `valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro especifico: ${err}`)
        //posso passar uma funcao de tratamento de erro especifico para esse then ou para o then onde for declarado, cada then tem 2 parametros para tratamento de promise
        )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))