//novas palavras para declarar variaveis e constantes
//let tem escopo de bloco, ele vai ter o escopo de onde esta dentro
//var tem escopo global, sendo acessavel em quqalquer lugar
{
var a = 2
let b = 3
console.log(b)

}
console.log(a)

//template string
const produto = 'Ipad'
console.log(`${produto} é caro`)

//destructuring 

const [l,e,...tras] = 'oi lindao'
console.log(l,e,tras)

const[x, ,y] = [1,2,3]
console.log(x,y)

const{idade: i, nome} = {nome:'ana', idade: 9}
console.log(i,nome)