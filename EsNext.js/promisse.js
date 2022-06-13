function falarDepoisDe(segundos,frase){ //a funcao retorna uma promisse
    return new Promise((resolve,reject)=>{ //a promisse recebe uma funcao anonima do tipo arrow 
        setTimeout(()=> //e o parametro recebe resolve, uma funcao chamada quando a promessa é atendida
        //outro parametro seria reject quando a promessa flaha
        resolve(frase)
        ),segundos*1000
    })
}

falarDepoisDe(3,"Que legal!")
    .then(frase=> frase.concat("?!?"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e=>console.log(e))