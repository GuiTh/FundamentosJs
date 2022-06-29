//FUNCAO FEITA COM PROMISE
function esperarPor (tempo = 2000){
    return new Promise(function(resolve){
       setTimeout(() => resolve(),tempo)
    })
}

// esperarPor(2000)
// .then(() => console.log('executando promise 1'))
// .then(esperarPor)
// .then(() => console.log('executando promise 2'))
// .then(esperarPor)
// .then(() => console.log('executando promise 3'))

//AGORA IREI FAZER A MESMA FUNCAO POREM COM ASYNC AWAIT

//promesa que deolve o valor 10 no resolve depois de 5 segundos
function retornaValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 5000)
    })
}
//posso simplificar a funcao fazendo ela asyncrona em vez de retornar a promise explicitamente
//desse modo posso chamar essa funcao asincrona dentro de outra
//para retornar o valor dessa funcao em outra, eu nao preciso colocar await aqui, mas na funcao que estou referenciando o valor dessa funcao
async function retornaValorRapido(){
    return 20
}



async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()

//por ser uma funcao asincrona ela devolve uma promise
async function executar(){
   let valor = await retornaValorRapido()  
   await esperarPor(1200)
  console.log(`async await  ${valor}`)
   await esperarPor(1200)  
  console.log(`async await  ${valor + 1}`)
   await esperarPor(1200)  
  console.log(`async await  ${valor + 2}`)

  return valor + 3
}
executar().then(console.log)