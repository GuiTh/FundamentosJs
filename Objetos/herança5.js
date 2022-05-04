console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// array string e object todos tem function.prototype
String.prototype.reverse = function(){
    return this.split('').reverse().join() //split gera um array, reverse REVERTE o valor do array, e join gera uma nova string(nesse caso a string gerada vem com os valores revertidos)
    //split pega cada letra da string e transforma em array (ate espaços em branco)
} //reverte string

console.log('escola Cod3r'.reverse()) // adicionado no prototipo de string
//literal do tipo string

Array.prototype.first = function (){
    return this[0]
}//acessando o array a partir do this pegando o primeiro valor dele

console.log([1,2,3,4,5,6,7].first())
console.log(['a','b','c'].first())
//nao faz isso que pode gerar conflito

String.prototype.toString = function(){ // dentro da string.prototype ja tem uma funcao chamada tostring, nesse caso eu to sobrescrevendo o valor de tostring
    return 'lascou tudo'
}

console.log('escola coder'.reverse())
//toma cuidado adicionando comportamento e NAO SOBSCREVE O VALOR DE UM COMPORTAMENTO