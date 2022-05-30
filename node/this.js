console.log(this === global) //this aponta para module.exports nao para global
console.log(this === module) //this é um objeto referencia de module.exports
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('dentro de uma funcao')
    console.log(this === exports) //this nao aponta para exports dentro de uma funcao
    console.log(this === module.exports) 
    console.log(this === global) //this dntro de uma funcao aponta para global

}
logThis()