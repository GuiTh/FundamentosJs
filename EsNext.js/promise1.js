 
 let p = new Promise(function(resolve){
    resolve(['ana','bia','carlos','daniel'])
 })

//  p.then(function(valor){
//      console.log(valor)
//  })
function primeiroElemento(array){
    return array[0]
}
function primeiraLetra(string){
    return string[0]
}
const letraMaiuscula = letra => letra.toUpperCase()

//estou fazendo com funcoes o mesmo que tinha feito direto na linha
//then sempre recebe um unico parametro e o retorno do primeiro then é puxado para o proximo num efeito cascata
//compondo varias funcoes para um resultado 
p.then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMaiuscula)
    .then(console.log)

// p.then(valor => valor[0])//retornando o valor da promise com arrow function, consigo pegar apenas o primeiro valor do array passando o indice
//     .then(primeiro => primeiro[0])
//     .then(letra => letra.toUpperCase())
//     .then(letraMinuscula => console.log(letraMinuscula))
    